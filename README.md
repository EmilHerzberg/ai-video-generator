# AI Video Generator — engine

Turn a one-line brief into a short, on-brand marketing video. This is the **generation engine**: a
self-correcting Remotion agent plus a deterministic visualization library, extracted from a larger
BYOK product ([ai-videos.herzberg-dynamics.de](https://ai-videos.herzberg-dynamics.de)) — without the
web app, accounts, or hosting. Just the code.

## How it works

You give it one idea (a stat, a comparison, a trend, a process). The system classifies the content,
picks a fitting visualization from a library of ~19 primitives (bar, funnel, taxonomy, timeline,
scatter, …), lays it out under a hard *no-overlap / mobile-readability* contract, animates it, and
renders an MP4 at any of three aspect ratios (4:5, 1:1, 9:16).

Two engines, one design system:

- **Path A** — the model emits a validated JSON spec against a schema; a fixed renderer (`src/posts/
  PostRenderer.tsx`) draws it. No model-authored code executes — deterministic and safe.
- **Path B** — an agent (`tools/agent.mjs`) *writes* React/Remotion TSX, then renders, inspects, and
  self-corrects it in a loop against structural QA gates until it passes. The inspector is a headless
  Playwright pass checking element collisions, safe margins, source-pixel mobile floors, and clipping —
  the same gates also run as deterministic visual-regression tests.

## Layout

- `src/components/` — the visualization primitives + the layout frame (`PostFrame`).
- `src/lib/` — the geometry/layout logic per primitive (packing, fitting, fill-scaling).
- `src/tokens/` — the design system (colors, type, motion, brand).
- `src/remotion/` — Remotion composition + MP4 render.
- `src/posts/` — Path A renderer + sample posts.
- `src/preview/` — the dev canvas the QA inspector and agent render against.
- `tools/` — the CLI generators (`generate.mjs` Path A, `agent.mjs` Path B), the QA inspector, and the
  triage / content-safety / injection guards.
- `schemas/`, `context/`, `prompts/` — the generation contract + brand briefing bundle.

## Run it

```bash
npm install
cp .env.example .env         # set a provider key (DeepSeek / OpenAI / Anthropic / Gemini)
npm run dev                  # dev canvas — open http://localhost:5173/?id=<post> (the error lists ids)

# Path A (JSON spec → renderer):
npm run generate -- --provider deepseek --brief "Reliability compounds: 99% per step is 81.8% over 20 steps."
# Path B (agent writes TSX, self-corrects; needs `npm run dev` running for the inspector):
npm run agent -- --provider deepseek --brief "The conversion funnel: 10k plans → 1.4k shipped."
# render a generated post to MP4:
npm run remotion:render:gen
```

Provider-agnostic via the Vercel AI SDK — `--provider deepseek|openai|anthropic|gemini`.

## Stack

React · Tailwind · Framer Motion · Remotion · Playwright (QA inspector) · Vercel AI SDK · Zod.

## License

All rights reserved unless a LICENSE file states otherwise.
