"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";

const WORDS = ["fintech", "automotive", "law enforcement", "manufacturing"];
const EASE = [0.16, 1, 0.3, 1] as const;

const TEXT_BASE: React.CSSProperties = {
  fontFamily: "'CanelaText', serif",
  fontWeight: 300,
  lineHeight: 1.2,
  margin: 0,
};

export default function IndustryScroll() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [showPayoff, setShowPayoff] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 5 equal slots: words at 0–0.8, breathing room at 0.8–1.0
    setWordIndex(Math.min(Math.floor(latest * 5), 3));
    // payoff appears once manufacturing has fully settled (slot 3 = 0.6–0.8, show at 70%)
    setShowPayoff(latest >= 0.72);
  });

  /* ── Reduced motion: static final state ─────────────────────────────── */
  if (prefersReducedMotion) {
    return (
      <section className="px-6 min-[480px]:px-12 md:px-[220px] py-32">
        <p className="text-[30px] min-[480px]:text-[40px] md:text-[50px]"
          style={{ ...TEXT_BASE, color: "#232323" }}>
          I&apos;ve designed for
        </p>
        <p className="text-[30px] min-[480px]:text-[40px] md:text-[50px]"
          style={{ ...TEXT_BASE, color: "#993C1D" }}>
          manufacturing.
        </p>
        <p style={{ marginTop: 32, fontSize: 16, lineHeight: 1.6, color: "#363636", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
          I go where I don&apos;t know the rules yet. That&apos;s the whole appeal.
        </p>
      </section>
    );
  }

  return (
    <div ref={outerRef} style={{ height: "425vh", position: "relative" }}>

      {/* Sticky viewport */}
      <div
        className="px-6 min-[480px]:px-12 md:px-[220px] text-[30px] min-[480px]:text-[40px] md:text-[50px]"
        style={{ position: "sticky", top: 0, height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}
      >
        {/* Static line — inherits font size from parent */}
        <p style={{ ...TEXT_BASE, color: "#232323" }}>
          I&apos;ve designed for
        </p>

        {/* Cycling word — height 1.2em clips vertical slide */}
        <div style={{ position: "relative", overflow: "hidden", height: "1.2em", width: "100%" }}>
          <AnimatePresence initial={false}>
            <motion.p
              key={wordIndex}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: EASE }}
              style={{ ...TEXT_BASE, color: "#993C1D", position: "absolute", top: 0, left: 0, width: "100%" }}
            >
              {WORDS[wordIndex]}.
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Payoff line — fades in once manufacturing has settled */}
        <AnimatePresence>
          {showPayoff && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
              style={{
                marginTop: 32,
                fontSize: 16,
                lineHeight: 1.6,
                color: "#363636",
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                maxWidth: 480,
              }}
            >
              I go where I don&apos;t know the rules yet. That&apos;s the whole appeal.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
