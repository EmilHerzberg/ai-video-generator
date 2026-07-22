// Renders a single post at its exact source size (1080×1350 portrait / 1080×1080 square) at the
// top-left of the viewport so a headless browser can screenshot/measure it with screen px == source px.
import type { ComponentType } from "react";
import { registry } from "./registry";
import { formats, resolveFormat } from "@/tokens/design";
import { FormatContext } from "@/components/layout/formatContext";

export function Preview() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "";
  const entry = registry[id];
  // Single source of truth: the post's own format. Path A carries it on the spec (via the registry); Path B
  // (a spec-less TSX) is told via a ?format= param (the QA loop appends it). Resolve through the shared
  // helper so the canvas is sized to EXACTLY the format the post renders at — same value PostFrame + Remotion
  // resolve — and PROVIDE it so a Path B PostFrame (which passes no format prop) picks it up from context.
  const fmtKey = resolveFormat(entry?.format ?? params.get("format"));
  const { width, height } = formats[fmtKey];

  // ?t=<0..1> renders a motion post at a specific progress point (for multi-frame QA).
  const tParam = params.get("t");
  const t = tParam == null ? undefined : Math.max(0, Math.min(1, parseFloat(tParam)));
  const Comp = entry?.Component as ComponentType<{ t?: number }> | undefined;

  return (
    <div style={{ position: "absolute", top: 0, left: 0, background: "#000" }}>
      {/* force whatever the post's root element is to fill the canvas, so the
          post components' `h-full`/`w-full` resolve against a definite size */}
      <style>{`#post-canvas > * { width: 100%; height: 100%; }`}</style>
      <div id="post-canvas" data-post-id={id} style={{ width, height, display: "grid" }}>
        <FormatContext.Provider value={fmtKey}>
          {Comp ? (
            <Comp {...(t != null ? { t } : {})} />
          ) : (
            <div style={{ padding: 48, color: "#fff", fontFamily: "monospace" }}>
              Unknown post id: "{id}". Known ids: {Object.keys(registry).join(", ") || "(none)"}
            </div>
          )}
        </FormatContext.Provider>
      </div>
    </div>
  );
}
