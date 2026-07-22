# Styleguide — Warm Technical Editorial (V2)

Quick reference for designing graphics in the same style. For deeper specs see `design-system.md` and `memory/*.md`.

---

## 1. Identity in one line

**Advanced infrastructure, built by a human with taste.**

Technical · analytical · system-oriented · warm · editorial.
70% technical / 30% warm editorial.

**Not:** cold cyberpunk · gamer RGB · crypto-bro dashboard · generic AI-robot imagery · Canva template · LinkedIn hype.

---

## 2. Color palette

### Backgrounds (dark, warm-leaning)

| Token | Hex | Use |
|---|---|---|
| Deep Ink | `#0E1116` | Composition background (Remotion `<AbsoluteFill>`) |
| Warm Graphite | `#151A22` | Post canvas |
| Midnight Slate | `#1A202B` | Cards |
| Soft Panel | `#202735` | Inner panels |

### Text

| Token | Hex | Use |
|---|---|---|
| Warm White | `#F4F1EA` | Primary text — headlines, body |
| Muted Stone | `#B8B2A7` | Secondary text — captions, deltas |
| Cool Taupe | `#8D93A1` | Tertiary — labels, metadata only |

### Accents (semantic — use one role each)

| Role | Token | Hex | Meaning |
|---|---|---|---|
| **Primary** | System Cyan | `#59D8E6` | system signal · data flow · active path · primary mechanism |
| **Warm contrast** | Insight Amber | `#E7A95A` | insight · emphasis · strategic warmth · key takeaway |
| **Warm contrast (alt)** | Friction Orange | `#D9864D` | friction · bottleneck · risk · caution |
| **Differentiator** | Strategic Violet | `#8E7CC3` | abstraction · alternative path · reasoning layer |
| **Differentiator (alt)** | Success Mint | `#6ED3A3` | success · completion · positive state |

### Glows (low-opacity, for accent emphasis only)

| Color | Value |
|---|---|
| Cyan | `rgba(89,216,230,0.14)` |
| Amber | `rgba(231,169,90,0.16)` |
| Violet | `rgba(142,124,195,0.14)` |
| Mint | `rgba(110,211,163,0.12)` |
| Orange | `rgba(217,134,77,0.14)` |

### Distribution rule (per graphic)

- **70–80%** dark neutral structure
- **8–12%** primary accent
- **5–8%** warm contrast
- **3–6%** differentiator

**Use one dominant + one supporting + ≤1 state color. Never light up all five.**

Every accent must have a stated semantic meaning ("cyan = the active workflow path"). Never "I picked cyan because it looks cool."

---

## 3. Typography

| Role | Family |
|---|---|
| Display (headlines) | Space Grotesk · Sora |
| Body | Inter · Manrope |
| Mono (labels, terminal) | JetBrains Mono |
| Editorial accent (rare) | Plus Jakarta Sans · IBM Plex Sans |

### Source-pixel sizes (for 1080×1350 portrait → ~2.77× downscale on phone)

| Role | Source size | Rendered on phone |
|---|---|---|
| Headline | **54–80px** semibold (target 68) | 20–29px |
| Eyebrow | **24–28px** mono uppercase | 9–10px |
| Body text | **28px+** | 10px+ |
| Final takeaway | **38px+** | 14px+ |
| Labels / annotations | **22px+** mono uppercase | 8px+ |
| Metric value | **64px+** display semibold | 23px+ |
| Chart end-value | **40px+** display semibold | 14px+ |
| Micro labels (non-essential only) | 18px | 6.5px |

**Mobile-first floors are binding** — if a text element is important, it must clear the floor. Never shrink to fit; remove content instead.

### Letter spacing

- Mono uppercase labels: **0.18–0.24em**
- Display headlines: **-0.01 to -0.02em**
- Display body: **0**

### Line height

- Headlines: **1.05–1.08** (tight)
- Body / labels: **1.2–1.3**

---

## 4. Layout

### Formats

| Format | Size | Use |
|---|---|---|
| **Portrait** (default) | 1080×1350 | LinkedIn, Reddit, mobile feeds |
| Square | 1080×1080 | Diagrams (rare) |
| Landscape | 1920×1080 | Video |

### Portrait zones (1080×1350)

| Zone | Y range | Purpose |
|---|---|---|
| Top | 64–300 | Eyebrow + headline |
| Middle | 320–1030 | Main visualization (chart / diagram / matrix / list) |
| Bottom | 1050–1280 | Metric strip / takeaway / signal |
| Reserve | 1280–1350 | Platform UI competes — no essential content |

### Safe margins

- **Minimum outer:** 64px every side
- **Preferred outer:** 72–96px
- **Bottom reserve:** 80px (no important content)

### Spacing minimums

| Between | Minimum |
|---|---|
| Small labels | 24px |
| Cards | 32px |
| Text ↔ visual | 40px |
| Headline ↔ visual | 48px |
| Visual ↔ takeaway | 56px |

---

## 5. Shape language

- **Corner radius:** 12–20px on cards and panels. Never sharp + neon.
- **Borders:** 1px white at 6–10% opacity.
- **Shadows:** subtle dark drop-shadow + 1px inset highlight.
- **Glows:** sparingly, only on active/important elements; color matches semantic meaning.
- **Surfaces:** layered, premium, never flat.

---

## 6. Background treatment

Three layers, stacked:

1. **Base color:** Warm Graphite `#151A22` (not flat black — avoid pure black)
2. **Grid overlay:** very faint, `rgba(184,178,167,0.04)` lines on a 40px grid, 1px width
3. **Warm vignette:** radial amber gradient in top-right corner + soft black at bottom

CSS reference (Tailwind):
```css
.warm-vignette {
  background:
    radial-gradient(ellipse 80% 60% at 85% 0%, rgba(231,169,90,0.10), transparent 60%),
    radial-gradient(ellipse 100% 100% at 50% 110%, rgba(0,0,0,0.45), transparent 60%);
}
.grid-faint {
  background-image:
    linear-gradient(rgba(184,178,167,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(184,178,167,0.04) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

Optional: 2–5% opacity noise texture for atmospheric depth.

### Panel chrome

- Background: Soft Panel `#202735` at 60–85% opacity
- Border: 1px `rgba(244,241,234,0.06)`
- Inner shadow + drop-shadow combined:
  ```
  box-shadow:
    0 1px 0 0 rgba(255,255,255,0.04) inset,
    0 0 0 1px rgba(184,178,167,0.06),
    0 18px 40px -28px rgba(0,0,0,0.7);
  ```
- Optional panel-sheen overlay: linear gradient white-to-transparent at 2.5%, top 40% of panel

---

## 7. Visual elements (what makes it recognizable)

The look reads as Bloomberg-terminal × premium SaaS dashboard × editorial magazine:

- **Workflow pipelines** with signal dots traveling end-to-end
- **Metric cards** with big numbers (64px+) + tiny mono uppercase labels (22px)
- **Stock-style line charts** with subtle drop-shadow glow on lines
- **Node graphs** with rounded-square nodes + glowing connectors
- **2×2 matrices** with cell highlight + accent glow on the punchline cell
- **Range bars** on shared date axes (Gantt-style for comparisons)
- **Claim lists** (vertical cards) with date + source header + italic claim + × reality marker
- **Annotation labels** at signal endpoints, mono uppercase
- **Subtle dashed reference lines** in violet (e.g., median/consensus markers)
- **Faint grid backgrounds**, layered depth

**Density caps per frame:**
- Major cards: 3–5
- Workflow nodes: 5–7
- Annotation labels: 3–5
- Active animated elements: 1–3

Never 10+ labeled nodes at once on a mobile frame.

---

## 8. Iconography

**Prefer `lucide-react` icons over emojis.**

Recommended set (semantic, not decorative):
`Workflow · Bot · BrainCircuit · Network · Activity · TrendingUp · TrendingDown · Search · Database · Layers · GitBranch · Gauge · ShieldAlert · Timer · Zap · Cpu · Route · Radar · Boxes · ChartNoAxesCombined · CircleDot · Orbit · Waypoints`

- Stroke width: **1.5–1.75**
- Color: matches accent meaning (cyan = data, amber = insight, etc.)

### Emojis

- Max **1–3 per graphic**
- Only when semantic (replaces a longer label or supports a metaphor)
- Never in the headline unless the topic is intentionally light
- **Forbidden:** 🚀 🔥 💯 ✨ 🙌 💸 🤯 — they collapse the brand into LinkedIn hype

---

## 9. Creator signature

Required on every graphic.

- **Placement:** bottom-right (default), bottom-left if conflict
- **Variant:** `compact` (default) — EH monogram + name + subtitle
- **Content:**
  ```
  EH    Emil Herzberg
        AI Systems · Automation · Design
  ```
- **Monogram:** "EH" in a 44×44 rounded-square (radius 14), Soft Panel background, 1px cyan border at 28% opacity, optional subtle inner glow
- **Subtitle styling:** mono uppercase, 20px, Muted Stone color, tracking 0.16em
- **Opacity:** 0.85–0.95 idle, 1.0 on final frame (with subtle amber pulse in motion)

---

## 10. Motion (for video)

### Beat structure (10–15s default)

| Beat | Time | Job |
|---|---|---|
| Hook | 0–1.2s | Headline visible by 1s |
| Orientation | 1.2–3.0s | System / problem space appears |
| Mechanism | 3.0–8.0s | Main transformation animates |
| Insight | 8.0–11.5s | Result / takeaway resolves |
| Memory Anchor | 11.5–14.0s | Final state holds ≥2.5–3s |

### Easings (semantic, not random)

| Use | Easing |
|---|---|
| Card / label / panel reveal | `easeOutCubic` (default) |
| Node / system module activation | `easeOutQuart` |
| Chart growth, signal travel, metric count-up | `easeInOutCubic` |
| Camera drift, parallax | `easeInOutSine` |
| Final insight / resolution | `easeOutExpo` |
| Key callout (rare) | `easeOutBackSubtle` (overshoot minimal — never bouncy) |
| Bottleneck / cost buildup | `easeInCubic` / `easeInQuad` |

### Other rules

- **One main motion event** per video. Everything else supports.
- **1–2 P1 elements** animate simultaneously max.
- **Reading sequence:** headline → context → mechanism → insight → takeaway. Signature continuous.
- **Layout stability:** animations drive opacity / transform only. Never mount/unmount sibling content mid-video (causes layout shift).
- **Loop-aware ending:** final frame is thumbnail-suitable; never end mid-transition.

---

## 11. Forbidden

- Cold cyberpunk neon overload
- All-cyan-on-dark monochrome
- Bouncing / spinning / TikTok cuts / aggressive zooms
- Generic AI-robot or humanoid imagery
- Canva template aesthetic (clip-art, 3D bevels, gradient buttons)
- Crypto-bro / gamer-RGB styling
- Diagonal stamp watermarks
- Hype copy, engagement bait, "comment X to get Y"
- More than 2 accents at equal weight
- Important text below the mobile floor
- Solving overcrowding by shrinking — split / simplify / remove instead
- Default line chart on every post (chart only when content is genuinely time/trend-driven)

---

## 12. Quick checklist for any new graphic

1. **Content type** — workflow · architecture · decision · myth-vs-reality · etc.
2. **Visual format** — picked from the per-content-type set; not always a line chart
3. **Color role plan** — 3 semantic accents (primary + warm contrast + differentiator)
4. **Layout zones + safe margins** — 64px floor, 80px bottom reserve
5. **Mobile floors** — every important text ≥ floor for its role
6. **Creator signature** — bottom-right, compact variant
7. **One main visual idea** — not several competing
8. **Warm graphite background** — not flat black
9. **Accent distribution** — 70–80 neutral / 8–12 primary / 5–8 warm / 3–6 differentiator
10. **Final frame works as standalone** — readable, thumbnail-suitable

---

## 13. Code reference (this project's tokens)

For developers using the existing codebase:

### Tailwind color classes
```
bg-bg-deep-ink · bg-bg-warm-graphite · bg-bg-midnight-slate · bg-bg-soft-panel
text-text-primary · text-text-secondary · text-text-tertiary
text-accent-cyan · text-accent-amber · text-accent-violet · text-accent-mint · text-accent-burnt
text-system-cyan · text-insight-amber · text-strategic-violet · text-success-mint · text-friction-orange
shadow-panel · shadow-card · shadow-glow-cyan · shadow-glow-amber · shadow-glow-violet · shadow-glow-mint · shadow-glow-orange
rounded-panel (1rem) · rounded-card (0.875rem)
bg-grid-faint bg-grid · bg-warm-vignette · bg-panel-sheen
font-display · font-body · font-mono · font-editorial
```

### Token modules
- `src/tokens/design.ts` → `colors`, `fonts`, `formats`, `layout`, `text` (typographic scale), `stroke`, `spacing`, `zones`, `maxLines`, `density`, `brand`, `semanticAccent`, `colorRole`, `colorMeaning`
- `src/tokens/motion.ts` → `easings`, `motionRole`, `duration`, `beat`, `shortBeat`, `durationMs`, `staggerMs`, `pauseMs`, `parallax`, `camera`, `storyPattern`

### Reusable primitives
- `PostFrame` (layout + creator signature)
- `Panel` (labeled surface)
- `MetricCard` (label + big value + delta + accent)
- `LineChart` (SVG, animatable line series)
- `Pipeline` (horizontal workflow with signal travel)
- `RangeBars` (two-lane Gantt-style comparison)
- `ComparisonMatrix` (2×2 with row/col headers)
- `ClaimList` (vertical "graveyard" of claim cards)
- `CreatorSignature` (the brand mark)
- `TextBox` (line-clamped text with mobile-floor warnings)

---

## 14. Deeper docs

If you need more than this one-pager:

| Doc | What's in it |
|---|---|
| `design-system.md` | Full V2 spec (canonical) |
| `memory/visual_identity_v2.md` | Operator-facing identity reference |
| `memory/motion_quality_v2.md` | Motion philosophy + effect discipline |
| `memory/motion_timing_sequence_v2.md` | Beat map + attention choreography + sequential reveal |
| `memory/mobile_first_readability.md` | The mobile floors in detail |
| `memory/visual_content_arsenal_v1.md` | 20 content types → recommended visual formats |
| `memory/layout_collision_protection_v1.md` | No-overlap system + safety map |
| `memory/creator_identity_mark_v1.md` | Signature spec |
| `prompts/quality_check.md` | 111-item pre-ship checklist |
