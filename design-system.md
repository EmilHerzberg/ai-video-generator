# LinkedIn Visual Design System — V2

> Status: **canonical**. V1 archived in `design-system-v1.md`.

## Positioning

We preserve the technical, intelligent, systems-oriented aesthetic from V1, but introduce more warmth, depth, and editorial sophistication.

The visual language should no longer feel purely cold, cyber, or machine-like. It should feel like:

- technical intelligence
- calm authority
- modern systems thinking
- strategic depth
- premium editorial design
- warm computational aesthetics

**Mood:** *"advanced infrastructure, but built by a human with taste."*

**Not:** cold cyberpunk · gamer RGB · sci-fi neon overload · crypto bro dashboard · generic AI robot visual language.

**Reference points:** high-end operating system · editorial technology magazine · premium SaaS dashboard · research intelligence platform · warm futuristic strategy interface.

---

## 1. Core aesthetic

Dark-mode first · layered · modern · premium · technical · analytical · structured · slightly futuristic · warmer in contrast · more human and editorial · less harshly cyber.

Still computational, but with more visual warmth and atmospheric depth.

**Balance:** 70% technical / 30% warm editorial.

## 2. Color philosophy

Dark technical base, warmth introduced through:
- warmer dark neutrals
- softer text contrast
- muted amber/copper highlights
- dusty violet warmth
- restrained cyan used only for signal/data emphasis

Palette must feel premium, restrained, intelligent, subtly warm, not neon-heavy.

## 3. Color system

**Backgrounds**
- Deep Ink: `#0E1116`
- Warm Graphite: `#151A22`
- Midnight Slate: `#1A202B`
- Soft Panel: `#202735`

**Text**
- Primary (Warm White): `#F4F1EA`
- Secondary (Muted Stone): `#B8B2A7`
- Tertiary (Cool Taupe Gray): `#8D93A1`

**Accents**
- Soft Cyan (primary): `#59D8E6`
- Warm Amber (secondary): `#E7A95A`
- Dusty Violet (supporting): `#8E7CC3`
- Muted Mint (positive): `#6ED3A3`
- Burnt Orange (alert): `#D9864D`

**Optional subtle glow**
- Copper Glow: `rgba(231,169,90,0.16)`
- Cyan Glow: `rgba(89,216,230,0.14)`

## 4. Color usage rules

Distribution target: **70% dark neutral / 20% typography & panels / 10% accent.**

Accent semantics:
- **Cyan** — system signal, data, active flow
- **Amber** — highlight, insight, emphasis, premium warmth
- **Violet** — strategic, conceptual, abstract relationships
- **Mint** — positive state, success, completed flow
- **Burnt Orange** — caution, friction, bottleneck

Avoid heavy use of all accents in one frame. Prefer one dominant accent + one supporting + (optionally) one state color.

Example: warm dark UI → cyan for chart data → amber for the key insight metric.

## 5. Background treatment

No more flat-black ultra-cyber. Use:
- dark layered surfaces
- soft panel contrast
- subtle warm gradients
- low-opacity texture
- gentle vignetting
- subtle grid overlays
- minimal atmospheric glow

Optional gradients: charcoal → midnight slate · deep ink → muted plum-gray · graphite with a soft amber corner glow.

Backgrounds should feel **alive but quiet** — never loud.

## 6. Typography

Headlines: Space Grotesk · Sora.
Body: Inter · Manrope.
Optional editorial accent (rare emphasis): IBM Plex Sans · Plus Jakarta Sans.

Rules: bold compact headlines · short high-signal phrasing · minimal paragraphs · strong hierarchy · generous readability · not sterile.

Headlines should read as **strategic insight**, not marketing slogan.

## 7. Shape language

V2 softens slightly vs V1: rounded corners (12–20px), layered cards, subtle depth, gentle shadowing, restrained glow, cleaner module separation. Still premium and structured — never playful.

## 8. Visual elements

Each visual includes ≥3 of: workflow pipelines · system diagrams · metric cards · architecture maps · stock-style charts · signal lines · node graphs · timeline flows · heatmaps · annotation labels · terminal snippets · structured comparison tables.

Treatment shifts from "terminal-only" → "designed intelligence layer".

## 9. Chart style

Clean, sparse, high-contrast, elegant, finance/systems inspired.

- **Line:** cyan primary line · amber secondary/marker · muted grid · soft labels · dark plot surface.
- **Bar:** muted warm neutrals + one accent highlight.
- **Flow:** neutral nodes with one or two accent states. Avoid excessive line glow.
- **Tables:** subtle separators · highlighted insight cells in amber or cyan.

## 10. Layout

12-column grid. Composition:
- **Top 20%** — headline / insight / framing.
- **Middle 60%** — system visualization / chart / diagram / architecture.
- **Bottom 20%** — takeaway / conclusion / metric / signal / signature.

Target: **disciplined information density** — never clutter, never empty lifestyle-minimalism.

## 10b. Mobile-first sizing (binding rule)

LinkedIn is consumed on phones. The 1080×1350 source renders at roughly 390–430px wide in the feed — a **~2.77× downscale**. Every type and stroke decision must clear legibility *after* that downscale.

**Source-pixel minimums** (so the rendered pixel passes the mobile bar):

| Role | Source size | Rendered on phone | Notes |
|---|---|---|---|
| Headline | 68–80px, semibold | 24–29px | Two-line max. Tight leading (~1.05). |
| Eyebrow / topic frame | 24–28px, mono uppercase | 9–10px | Letter-spacing 0.22em. |
| Metric value (the payoff) | 64–80px, display semibold | 23–29px | This must read at a glance. |
| Metric label | 22–26px, mono uppercase | 8–9px | Floor. |
| Metric delta | 22–24px | 8–9px | |
| Chart end-value label (chart's punchline) | 40–48px, display semibold | 14–17px | These ARE the takeaway — size them like it. |
| Chart axis / tick labels | 22–26px, mono | 8–9px | Floor. |
| Panel label / signal callout | 22–26px, mono uppercase | 8–9px | |
| Signature mark | 18–22px, mono | 6–8px | Intentionally subtle, but not invisible. |

**Stroke / line weights:**
- Chart lines: **5–6px** source stroke (≈ 2px rendered). 2.5px source is invisible on phone.
- Grid lines: 1.5px source @ ~6% opacity — present but quiet.
- Borders / separators: ≥1px source @ ≥6% opacity (the prior 4% is invisible at scale).

**Below the floor → cut it.** If an element can't survive the downscale, it's decoration, not communication. Either upscale it past the floor or remove it.

## 11. Brand feel

Conveys competence, depth, trust, intelligence, design maturity, advanced systems thinking. Reader reaction: *"this person understands complex systems, but also knows how to present them clearly."* Less machine fetish, more strategic clarity.

## 12. Motion — Directed System Motion + Attention Choreography

Full operator-facing specs: `memory/motion_quality_v2.md` (Directed System Motion) and `memory/motion_timing_sequence_v2.md` (Attention Choreography). Code tokens: `src/tokens/motion.ts`.

**Beat map BEFORE code.** Every motion graphic begins with a 3-beat (≤8s) or 5-beat (10–15s) attention sequence: **Hook → Orientation → Mechanism → Insight → Memory Anchor**. Each beat declares `visualState · primaryFocus · animationPurpose · animatedElements · easing · holdTime · mobileReadabilityNote · finalFrameContribution`.

**One main motion event per video.** Everything else supports it. Define an explicit eye path (per-beat focus + what stays still). At least one focus lock moment (700–1500ms) where one element dominates and others dim ~70%. Density curve ends cleaner than the middle. Final frame must work as a standalone LinkedIn graphic + mobile thumbnail.

**Principle:** motion does not decorate, it explains the idea. Every animation states a one-sentence narrative purpose. If you can't, cut it.

**Story patterns** (pick one): Problem→System→Result · Input→Agent→Decision→Action · Before→Bottleneck→After · Signal vs Noise · Layers of Leverage.

**Duration:** 8–15s default, 20s max. Hook in the first second. Final takeaway holds ≥2.5–3s. Important labels ≥2s.

**Easing — semantic only** (constants in `src/tokens/motion.ts`):
- card/label/panel reveal → `easeOutCubic`
- node activation → `easeOutQuart`
- chart growth / signal travel / metric count-up → `easeInOutCubic`
- camera drift / parallax → `easeInOutSine`
- final insight / resolution → `easeOutExpo`
- key callout / warning marker → `easeOutBackSubtle` (overshoot minimal)
- bottleneck / cost buildup → `easeInCubic` / `easeInQuad`

**Effects — restrained:**
- Glow only on active signals / key chart points / final markers. Color = meaning.
- Blur only for depth separation. Never on text.
- Pulse max 1–2 per element, slow + subtle.
- Scan line: one pass, analysis/processing only.
- Particles follow paths, never random floating.
- Glitch forbidden on normal AI content (only for corruption / before-after).
- Noise texture 2–5% opacity.

**Camera:** still or 1.00→1.03 subtle zoom (premium 1.06, never beyond 1.10). Pan ≤40px. No rotation, no spinning, no shake.

**Parallax:** background 1–3px · midground 3–8px · foreground 8–16px.

**Forbidden feel:** TikTok cuts · glitch overload · constant bouncing · template animation · aggressive zooms · text that moves while it should be read.

## 12b. Visual arsenal (format selection)

Full operator-facing spec: `memory/visual_content_arsenal_v1.md`.

**Classify content type before choosing a visual format.** Twenty content types each map to a recommended set of visual formats: workflow → pipeline/swimlane/loop · architecture → stack/hub-and-spoke · decision → tree/matrix/gate · bottleneck → blocked pipeline/heatmap · agents → agent loop/HITL gate · data → source-transform-store-use · strategy → operating model/leverage layers · etc.

**Line charts are not the default.** A chart is allowed only when the post is genuinely about change-over-time / trend / market movement / performance evolution / signal emergence / before-after metric movement. Otherwise pick a non-chart format and the spec records `formatSelectionReason`.

**Anti-repetition.** Same primary format never >2 in a row. ≥4 distinct formats per week. Charts ≤20–30% of weekly visuals (unless a data/trend week).

## 13. Emojis + icons

Prefer **lucide-react icons** for premium visual language. Recommended set: `Workflow · Bot · BrainCircuit · Network · Activity · TrendingUp/Down · Search · Database · Layers · GitBranch · Gauge · ShieldAlert · Timer · Zap · Cpu · Route · Radar · Boxes · ChartNoAxesCombined · CircleDot · Orbit · Waypoints`. Stroke 1.5–1.75. Color = accent meaning.

Emojis allowed only when **semantic, not decorative.** Max 1–3 per graphic. Never in the main headline unless the topic is intentionally light. Never mix many emojis with many premium icons — pick one symbolic layer.

Good emoji uses (when they replace a longer label): 🧠 reasoning · ⚙️ workflow · 📈/📉 trend · 🔍 research · 🧩 modular · 🧱 infrastructure · 🚦 gating · 🧪 testing · 🧭 strategy.

Avoid: 🚀 🔥 💸 🤯 💯 ✨ 🙌 excessive ✅/❌ 👀 🤑 — these collapse the brand into a hype LinkedIn voice.

## 14. Quality checklist

Full version in `prompts/quality_check.md`. Run before every ship. Categorical items:

1. Every animation has a stated narrative purpose.
2. First second is visually interesting and topic-clear.
3. Idea understandable without the caption.
4. Final takeaway holds ≥2.5–3s.
5. Accents restrained (one dominant + one supporting + ≤1 state).
6. Glow only on active/important elements.
7. Motion calm + premium.
8. Emojis/icons only when they clarify meaning.
9. Mobile-readable (see floors in § 10b and `memory/mobile_first_readability.md`).
10. Matches Design System V2.
11. No hype copy.
12. Feels like a system coming online.
13. Warm enough — not flat-black ultra-cyber.
14. Disciplined information density.
15. Illustrative metrics labeled.
16–23. **Mobile-first hard floors** — readability on phone, source-pixel minimums, chart simplification, diagram splitting (not shrinking), safe margins, motion not blocking reading, core idea in <3s, complexity solved by simplification.

If any item fails: revise. If density is the cause: simplify or split — never shrink.

## 13. V1 → V2 comparison

| | V1 | V2 |
|---|---|---|
| Temperature | colder | warmer |
| Edge | harder | premium |
| Tone | cyber | editorial |
| Mood | neon-data | strategic |
| Corners | sharp | softened (12–20px) |

System feel preserved. Cold-machine feel reduced.

## 14. Style references

Linear · Stripe · Vercel · Notion AI editorial graphics · Bloomberg interfaces · premium strategy dashboards · modern research presentations — with added warmth, editorial elegance, and emotional sophistication.

## 15. Output standard

Every output: *"a premium technical intelligence graphic with human warmth."*

Recognizable · consistent · dark and structured · visually intelligent · warm in atmosphere · restrained in accent use · highly LinkedIn-appropriate.

Avoid: too cold · too cyber · too gamer · too loud · too startup cliché · too corporate Canva.
