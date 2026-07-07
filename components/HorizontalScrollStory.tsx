"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

const CARDS = [
  {
    eyebrow: "THE ASK",
    heading: "Rebuild Compare Formulas from Optiva into Element AI.",
    body: "Simple enough, right?",
  },
  {
    eyebrow: "THE REALITY",
    heading: "Optiva worked. But it was fragmented.",
    body: "If you found an issue, you had to leave the comparison, fix it somewhere else, and start over.",
  },
  {
    eyebrow: "THE COMPLICATION",
    heading: "Two user groups. Opposite needs.",
    body: "R&D chemists needed to compare and edit ingredient amounts. Process engineers needed to see formulas in phase sequence. Same tool, completely different jobs.",
  },
  {
    eyebrow: "THE REAL CHALLENGE",
    heading: "How do you make something familiar feel better?",
    body: "Not just feature parity — a workflow that chemists would actually trust.",
  },
];

const N = CARDS.length;
// Expansion occupies first 12% of scroll; contraction the last 12%
const EXPAND_END = 0.12;
const CONTRACT_START = 0.88;

// Gentle ease-out — approximates cubic-bezier(0.25, 0.46, 0.45, 0.94)
const easeOut = (t: number) => 1 - Math.pow(1 - t, 2.5);

export default function HorizontalScrollStory() {
  const outerRef = useRef<HTMLDivElement>(null);

  // Window dimensions — updated client-side only
  const [vw, setVw] = useState(1440);
  const [vh, setVh] = useState(900);
  useEffect(() => {
    const update = () => { setVw(window.innerWidth); setVh(window.innerHeight); };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  // Initial contained card dimensions
  const CARD_H = 500;
  const CARD_W = Math.min(930, vw - 128); // respect px-16 column padding
  const initSide = Math.max(0, (vw - CARD_W) / 2);
  const initTop  = Math.max(0, (vh - CARD_H) / 2);

  // left/right inset: initSide → 0 (expand), 0 → initSide (contract)
  const fixedSide = useTransform(
    scrollYProgress,
    [0, EXPAND_END, CONTRACT_START, 1],
    [initSide, 0, 0, initSide],
    { ease: easeOut }
  );
  // top/bottom inset: initTop → 0 (expand), 0 → initTop (contract)
  const fixedTopVal = useTransform(
    scrollYProgress,
    [0, EXPAND_END, CONTRACT_START, 1],
    [initTop, 0, 0, initTop],
    { ease: easeOut }
  );
  const borderRadius = useTransform(
    scrollYProgress,
    [0, EXPAND_END, CONTRACT_START, 1],
    [16, 0, 0, 16],
    { ease: easeOut }
  );
  // Shadow fades away as card fills the screen
  const boxShadow = useTransform(
    scrollYProgress,
    [0, EXPAND_END],
    ["0 4px 32px rgba(0,0,0,0.10)", "0 0px 0px rgba(0,0,0,0)"]
  );
  // Invisible before/after its scroll range
  const opacity = useTransform(scrollYProgress, [0, 0.04, 0.96, 1], [0, 1, 1, 0]);
  // Card content fades in after expansion completes
  const contentOpacity = useTransform(
    scrollYProgress,
    [EXPAND_END, EXPAND_END + 0.07],
    [0, 1]
  );

  // --- Card snapping ---
  // Map scrollYProgress to card index; each card owns an equal slice of the cards phase
  const snappedIndex = useTransform(scrollYProgress, (p) => {
    const cp = (p - EXPAND_END) / (CONTRACT_START - EXPAND_END);
    return Math.min(N - 1, Math.max(0, Math.floor(cp * N)));
  });
  // Card i sits at -i × 25% of the 400%-wide track
  const rawX = useTransform(snappedIndex, (i) => -25 * i);
  // Soft spring: enough momentum for the "push" feel, not bouncy
  const springX = useSpring(rawX, { stiffness: 300, damping: 42, mass: 1 });
  const translateX = useTransform(springX, (x) => `${x}%`);

  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cp = (latest - EXPAND_END) / (CONTRACT_START - EXPAND_END);
    setActiveIndex(Math.min(N - 1, Math.max(0, Math.floor(cp * N))));
  });

  return (
    <>
      {/*
        In-flow spacer — sits inside the 930px column, provides scroll budget.
        The fixed overlay breaks out of this container visually.
      */}
      <div ref={outerRef} style={{ height: "500vh", marginTop: 32 }} />

      {/* Fixed overlay — driven entirely by scrollYProgress */}
      <motion.div
        style={{
          position: "fixed",
          left: fixedSide,
          top: fixedTopVal,
          right: fixedSide,
          bottom: fixedTopVal,
          borderRadius,
          boxShadow,
          opacity,
          background: "#FFFFFF",
          overflow: "hidden",
          zIndex: 50,
        }}
      >
        {/* Sliding card track — 4 cards × 100% viewport width = 400% */}
        <motion.div
          style={{
            display: "flex",
            width: "400%",
            height: "100%",
            translateX,
            opacity: contentOpacity,
          }}
        >
          {CARDS.map((card, i) => (
            <div
              key={i}
              style={{
                flex: "0 0 25%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 80px",
              }}
            >
              <div style={{ maxWidth: 700, width: "100%" }}>
                <p className="text-eyebrow">{card.eyebrow}</p>
                <p className="text-h2" style={{ marginTop: 32, color: "#232323" }}>
                  {card.heading}
                </p>
                <p className="text-body" style={{ marginTop: 24, color: "#363636" }}>
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Progress dots */}
        <motion.div
          style={{
            position: "absolute",
            bottom: 40,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            gap: 8,
            opacity: contentOpacity,
          }}
        >
          {CARDS.map((_, i) => (
            <div
              key={i}
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: i === activeIndex ? "#232323" : "#D4D3D1",
                transition: "background 300ms ease",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
