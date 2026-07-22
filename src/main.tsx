import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Preview } from "./preview/Preview";
// Load the SAME offline base64 woff2 the Remotion MP4 renders with (render-truth parity): the dev
// Preview measures/renders exactly what the video does — no online fonts, no FOUT, no metric drift.
import "./remotion/fonts-local.css";
import "./index.css";

// This dev surface renders one primitive on the bare 1080×N canvas at `?id=<post>` — the same surface
// the Playwright QA inspector and the Path-B agent harness render against. Open `?id=<id>` (the error
// screen lists the known ids); append `?format=square|vertical` or `?t=<0..1>` for a motion frame.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Preview />
  </StrictMode>,
);
