// Staggered reveal helpers driven by a single global progress `t` (0..1).
// Used by motion posts so animation is pure opacity/transform (layout reserved for
// all t) — never mount/unmount. At t=1 everything is settled = the final frame.

/** Opacity-style 0..1 for an element whose reveal window starts at `start` and lasts `dur` (in t-units). */
export function appear(t: number, start: number, dur = 0.14): number {
  if (dur <= 0) return t >= start ? 1 : 0;
  return Math.max(0, Math.min(1, (t - start) / dur));
}

/** Vertical rise offset (px) that eases to 0 as the element reveals. */
export function rise(t: number, start: number, dur = 0.14, px = 12): number {
  return (1 - appear(t, start, dur)) * px;
}

/** Convenience: inline style for a standard rise+fade reveal. */
export function revealStyle(t: number, start: number, dur = 0.14, px = 12) {
  const a = appear(t, start, dur);
  return { opacity: a, transform: `translateY(${(1 - a) * px}px)` };
}

// ── Eased variants (settle curve) — the linear versions above stay byte-identical (posts depend on
// them). Route landing reveals through these so entries feel deliberate/premium instead of mechanical.
// All clamp to exactly 1 at t >= start+dur, so t=1 rasterizes identically to a static frame.

/** Ease-out cubic. Decelerating settle — never overshoots (calm authority, no bounce). */
export function easeOutCubic(x: number): number {
  const c = x < 0 ? 0 : x > 1 ? 1 : x;
  return 1 - Math.pow(1 - c, 3);
}

/** Eased opacity 0..1 for a reveal window starting at `start`, lasting `dur`. */
export function appearE(t: number, start: number, dur = 0.14): number {
  return easeOutCubic(appear(t, start, dur));
}

/** Eased vertical rise offset (px) → 0 as the element reveals. */
export function riseE(t: number, start: number, dur = 0.14, px = 12): number {
  return (1 - appearE(t, start, dur)) * px;
}

/** Eased drop-in for revealStyle — the standard landing reveal. Adds a gentle focus-pull (blur → 0) so
 * entries read silky/premium; the blur is exactly 0 at settle, so t=1 rasterizes crisp (stable final frame). */
export function revealStyleE(t: number, start: number, dur = 0.14, px = 12) {
  const a = appearE(t, start, dur);
  const soft = (1 - a) * 3;
  return { opacity: a, transform: `translateY(${(1 - a) * px}px)`, filter: soft > 0.02 ? `blur(${soft}px)` : undefined };
}

/** Local 0..1 progress across an arbitrary sub-window [start, end] (for scroll-scrubbed effects). */
export function band(t: number, start: number, end: number): number {
  return appear(t, start, Math.max(1e-6, end - start));
}

/** Ease-in-out cubic — symmetric accelerate/decelerate. For structural draws/wipes that should glide. */
export function easeInOutCubic(x: number): number {
  const c = x < 0 ? 0 : x > 1 ? 1 : x;
  return c < 0.5 ? 4 * c * c * c : 1 - Math.pow(-2 * c + 2, 3) / 2;
}

/** Eased sub-window progress — like band(), but glides in and out. Use for the connector/clip-wipe draws. */
export function bandE(t: number, start: number, end: number): number {
  return easeInOutCubic(band(t, start, end));
}
