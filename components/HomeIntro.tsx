"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

// ── Typewriter ───────────────────────────────────────────────────────────────

const PHRASES = [
  "clarity.",
  "confidence.",
  "efficiency.",
  "action.",
];

function useTypewriter(phrases: string[], skip: boolean) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState(skip ? phrases[0] : "");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(skip ? "pausing" : "typing");

  useEffect(() => {
    if (skip) return;
    const current = phrases[phraseIndex];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("pausing"), 1600);
        return () => clearTimeout(t);
      }
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), 400);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 32);
        return () => clearTimeout(t);
      } else {
        setPhraseIndex((i) => (i + 1) % phrases.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, phraseIndex, phrases, skip]);

  return { displayed, phase };
}

// ── Hero cursor ─────────────────────────────────────────────────────────────

function HeroCursor({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top  = `${e.clientY}px`;
      }
    };
    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);
    container.addEventListener("mousemove",  onMouseMove);
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);
    return () => {
      container.removeEventListener("mousemove",  onMouseMove);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!visible) return null;
  return (
    <div ref={cursorRef} style={{ position: "fixed", pointerEvents: "none", zIndex: 999, left: 0, top: 0, transform: "translate(-50%, -50%)" }}>
      <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#232323" }} />
    </div>
  );
}

// ── Main export ─────────────────────────────────────────────────────────────

export default function HomeIntro() {
  const reducedMotion = useReducedMotion();
  const skip = !!reducedMotion;
  const sectionRef = useRef<HTMLElement>(null);
  const { displayed, phase } = useTypewriter(PHRASES, skip);

  const fade = (delay: number) => ({
    initial: skip ? {} : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const, delay: skip ? 0 : delay },
  });

  return (
    <section
      id="hero-intro"
      data-hero
      ref={sectionRef}
      className="flex flex-col justify-center px-6 min-[480px]:px-12 md:px-[220px]"
      style={{ height: "75vh", position: "relative", cursor: "none" }}
    >
      <HeroCursor containerRef={sectionRef} />

      {/* Eyebrow */}
      <motion.p
        {...fade(0)}
        style={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize: 14,
          fontWeight: 400,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#888780",
          marginBottom: 20,
        }}
      >
        Simi, product designer
      </motion.p>

      {/* Headline */}
      <motion.h1
        {...fade(0.15)}
        className="text-[30px] min-[480px]:text-[40px] md:text-[50px] md:whitespace-nowrap"
        style={{
          fontFamily: "'CanelaText', serif",
          fontWeight: 300,
          lineHeight: 1.2,
          color: "#232323",
          letterSpacing: "-0.01em",
        }}
      >
        Turning complexity into{" "}
        <span style={{ color: "#993C1D" }}>
            {displayed}
            {/* blinking cursor */}
            <motion.span
              animate={{ opacity: phase === "pausing" ? [1, 0, 1] : 1 }}
              transition={phase === "pausing" ? { duration: 0.9, repeat: Infinity } : { duration: 0 }}
              style={{ display: "inline-block", marginLeft: 2, fontStyle: "normal" }}
            >
              |
            </motion.span>
          </span>
      </motion.h1>

    </section>
  );
}
