"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";

const T = "#993C1D";
const GRAY = "#BBBDBC";
const DARK = "#232323";
const MUTED = "#888780";
const HEL = "Helvetica Neue, Helvetica, Arial, sans-serif";
const CAN = "'CanelaText', serif";

const EW = 280;          // card width
const GAP = 280;         // space between cards — wide enough that adjacent entries are off-screen
const STEP = EW + GAP;   // 560

const DOT_D = 12;
const DOT_AREA_H = 44;
const DOT_Y = DOT_AREA_H / 2; // 22
const DOT_CX = DOT_D / 2;     // 6 — dot left-aligned within each card

// Line constants (relative to the inner wrapper, before padding)
// Career change is now index 2: gray covers 0→2, terracotta covers 2→5
const GRAY_LINE_W   = 2 * STEP;              // dot 0 → dot 2
const TERRA_LINE_X  = 2 * STEP + DOT_CX;    // dot 2 center
const TERRA_LINE_W  = 3 * STEP;              // dot 2 → dot 5


const ENTRIES = [
  { title: "Undergrad in psychology", meta: "University of North Dakota", desc: "Before design, I studied how people actually think.",                                                                                     accent: false, pivot: false },
  { title: "Medical scribe",          meta: "Pre-med track",             desc: "I thought medicine was my passion so I worked around physicians, but quickly realized that wasn't for me.",                                    accent: false, pivot: false },
  { title: "Career change",           meta: "The turn",                  desc: "Left medicine, walked toward the blank page instead.",                                                                                           accent: true,  pivot: true  },
  { title: "MSI, UX Design",          meta: "University of Michigan",    desc: "Went back to school to get a degree in information science. I got to work with Sample CSI and Stellantis during my time there.",               accent: true,  pivot: false },
  { title: "Acorns",                  meta: "Product design intern",     desc: "I started interning here from Apr 2025 to Jun 2026. I worked on all parts of the app, and then joined the growth team for the second half of my internship.", accent: true, pivot: false },
  { title: "Prime Matter Labs",        meta: "Contract product designer", desc: "I joined in Jan of 2026 where I was the solo product designer for three months. I continued beyond when my contract was supposed to end.",      accent: true,  pivot: false },
];

type Entry = (typeof ENTRIES)[number];

function EntryCard({ entry }: { entry: Entry }) {
  const dotColor   = entry.accent ? T : DARK;
  const titleColor = entry.pivot  ? T : DARK;
  const metaColor  = entry.pivot  ? T : MUTED;

  return (
    <>
      <div style={{ height: DOT_AREA_H, display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
        <div style={{ position: "relative", width: DOT_D, height: DOT_D }}>
          {entry.pivot && (
            <motion.div
              aria-hidden="true"
              animate={{ scale: [1, 2.8], opacity: [0.5, 0] }}
              transition={{ duration: 1.8, ease: "easeOut", repeat: Infinity, repeatDelay: 0.6 }}
              style={{ position: "absolute", inset: 0, borderRadius: "50%", border: `1.5px solid ${T}` }}
            />
          )}
          <div style={{ width: DOT_D, height: DOT_D, borderRadius: "50%", background: dotColor, position: "relative", zIndex: 2 }} />
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <p style={{ fontFamily: CAN, fontWeight: entry.pivot ? 500 : 300, fontStyle: entry.pivot ? "italic" : "normal", fontSize: 20, lineHeight: 1.25, color: titleColor, margin: 0, marginBottom: 6 }}>
          {entry.title}
        </p>
        <p style={{ fontFamily: HEL, fontSize: 13, fontWeight: 400, letterSpacing: "0.02em", color: metaColor, margin: 0, marginBottom: 12 }}>
          {entry.meta}
        </p>
        <p style={{ fontFamily: HEL, fontSize: 14, fontWeight: 300, lineHeight: 1.65, color: "#363636", margin: 0 }}>
          {entry.desc}
        </p>
      </div>
    </>
  );
}

function EntryWrapper({ entry }: { entry: Entry }) {
  return (
    <div style={{ width: EW, flexShrink: 0 }}>
      <EntryCard entry={entry} />
    </div>
  );
}

export default function HorizontalTimeline() {
  const outerRef   = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const startXRef  = useRef(0);
  const lpRef      = useRef(0);
  const x          = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const vw = window.innerWidth;
      lpRef.current   = parseInt(getComputedStyle(trackRef.current).paddingLeft) || 0;
      // Start: entry 0 centered.  End: entry 6 centered.  Range = -6*STEP always.
      startXRef.current = vw / 2 - lpRef.current - EW / 2;
      // Apply immediately so the initial position is correct on mount
      x.set(startXRef.current + scrollYProgress.get() * (-6 * STEP));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [scrollYProgress, x]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    x.set(startXRef.current + v * (-5 * STEP));
  });

  /* ── Reduced motion fallback ────────────────────────────────────────── */
  if (prefersReducedMotion) {
    return (
      <section style={{ padding: "80px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontFamily: HEL, fontSize: 13, fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, margin: 0, marginBottom: 10 }}>background</p>
          <p style={{ fontFamily: CAN, fontWeight: 300, fontSize: 40, color: DARK, lineHeight: 1.2, margin: 0 }}>How I got here</p>
        </div>
        <div className="pl-6 min-[480px]:pl-12 md:pl-[220px]" style={{ overflowX: "auto", paddingRight: 24, paddingBottom: 16 }}>
          <div style={{ display: "flex", gap: GAP }}>
            {ENTRIES.map((e, i) => (
              <div key={i} style={{ width: EW, flexShrink: 0 }}>
                <EntryCard entry={e} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ── Scroll-pinned version ──────────────────────────────────────────── */
  return (
    <div ref={outerRef} style={{ height: "600vh", position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 52,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: HEL, fontSize: 13, fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, margin: 0, marginBottom: 10 }}>
            background
          </p>
          <p style={{ fontFamily: CAN, fontWeight: 300, fontSize: 40, color: DARK, lineHeight: 1.2, margin: 0 }}>
            How I got here
          </p>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="pl-6 pr-6 min-[480px]:pl-12 min-[480px]:pr-12 md:pl-[220px] md:pr-[220px]"
        >
          <div style={{ position: "relative", display: "inline-block" }}>
            {/* Gray line: dots 0 → 3 */}
            <div aria-hidden="true" style={{ position: "absolute", top: DOT_Y - 1, left: DOT_CX, width: GRAY_LINE_W, height: 2, background: GRAY, zIndex: 0 }} />
            {/* Terracotta line: dots 3 → 6 */}
            <div aria-hidden="true" style={{ position: "absolute", top: DOT_Y - 1, left: TERRA_LINE_X, width: TERRA_LINE_W, height: 2, background: T, zIndex: 0 }} />

            <div style={{ display: "flex", gap: GAP, position: "relative", zIndex: 1 }}>
              {ENTRIES.map((entry, i) => (
                <EntryWrapper key={i} entry={entry} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
