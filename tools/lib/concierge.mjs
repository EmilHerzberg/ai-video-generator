// Concierge (Studio Step-0) system-prompt assembler. Compiles the curated briefing
// (context/concierge/briefing.md) into the system prompt, injecting the LIVE triage limits and the brand
// identity so it can never drift from what the Verifier actually enforces. Product-only.
// See planning/concierge/{concept,implementation-plan,briefing-spec}.md.
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { generateObject } from "ai";
import { z } from "zod";
import { TRIAGE_LIMITS } from "./triage.mjs";
import { loadBrand, loadBrandPurpose } from "./context.mjs";
import { resolveModel, llmCallSignal } from "./model.mjs";

/** Build the Concierge system prompt: briefing + live triage constants + brand voice. */
export async function buildConciergeSystem(root = process.cwd()) {
  let briefing = await readFile(join(root, "context", "concierge", "briefing.md"), "utf8");

  // loadBrand returns a { "{{KEY}}": value } placeholder map; add the live triage limits alongside it.
  const brandMap = await loadBrand(root).catch(() => ({}));
  const subs = {
    ...brandMap,
    "{{THIN_WORDS}}": String(TRIAGE_LIMITS.thinWords),
    "{{MAX_CHARS}}": String(TRIAGE_LIMITS.maxChars),
  };
  for (const [k, v] of Object.entries(subs)) briefing = briefing.split(k).join(v);

  const purpose = await loadBrandPurpose(root).catch(() => "");
  return purpose
    ? `${briefing}\n\n## Brand context (this describes the VIDEO's identity + your general register — NOT the formatting of your chat replies, which stay plain prose)\n\n${purpose.trim()}\n`
    : briefing;
}

// One conversational turn's structured output. All fields required (provider-friendly); use "" / [] for
// "nothing yet". `reply` is the prose the user sees; the rest is the behind-the-scenes draft-brief state.
export const ConciergeTurn = z.object({
  reply: z.string(),
  draft: z.object({
    topic: z.string(),
    angle: z.string(),
    keyData: z.object({
      status: z.enum(["empty", "real", "recalled", "illustrative", "not-needed", "missing"]),
      value: z.string(),
    }),
    suggestedFormat: z.string(),
    suggestedAspect: z.enum(["", "portrait", "square", "vertical"]),
    brief: z.string(),
  }),
  readiness: z.enum(["empty", "thin", "ok", "strong"]),
  ideas: z.array(z.object({ title: z.string(), brief: z.string(), why: z.string() })).max(4),
});

const OUTPUT_CONTRACT =
  "\n\n## Your output (structured — the user only sees `reply`)\n" +
  "Return a JSON object:\n" +
  "- `reply`: your chat message — plain prose in your Concierge voice.\n" +
  "- `draft`: your running read of their video brief, filled in as it emerges — `topic`, `angle` (the one " +
  "sharp claim), `keyData` {status: empty (none discussed yet) | real (their own/verified figure) | recalled " +
  "(from YOUR training data — state its recency + your confidence in `reply`; do NOT label it illustrative) | " +
  "illustrative (plausible placeholder, a last resort) | not-needed | missing, value}, `suggestedFormat` (the " +
  "visual FORM you'd use — chart/comparison/stat…), `suggestedAspect` (the OUTPUT aspect ratio you'd " +
  "recommend for their platform: portrait (4:5, LinkedIn/feed — the default) | square (1:1) | vertical " +
  "(9:16, Stories/Reels/TikTok/Shorts); \"\" until a platform is mentioned or it's clearly worth suggesting), " +
  "`brief` (the single finished brief line — empty until it's actually clear).\n" +
  "- `readiness`: empty (nothing yet) | thin (an idea, not enough) | ok (a usable brief) | strong (sharp, " +
  "ready to generate).\n" +
  "- `ideas`: when you pitch options, list them (title, one-line brief, why it works); otherwise [].\n" +
  "Leave anything you don't have yet as \"\" or []. Keep `reply` natural — the structure is invisible to the user.";

/**
 * One Concierge chat turn on the USER's key (BYOK). `messages` is the running transcript
 * [{ role: 'user'|'assistant', content }]. Returns the validated ConciergeTurn object. Never logs the key.
 * The transcript is DATA — the system prompt already instructs the model to hold role under override attempts.
 */
export async function conciergeTurn({ messages, provider, model: modelId, apiKey, root = process.cwd() }) {
  const system = (await buildConciergeSystem(root)) + OUTPUT_CONTRACT;
  const { model } = resolveModel(provider, { modelOverride: modelId, apiKey });
  const { object } = await generateObject({ model, schema: ConciergeTurn, system, messages, maxRetries: 2, abortSignal: llmCallSignal() });
  return object;
}
