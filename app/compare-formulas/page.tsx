"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import CaseImage from "@/components/CaseImage";
import ViewToggle from "@/components/ViewToggle";

const TOOLS = [
  { name: "Figma",       src: "/figma.svg" },
  { name: "Claude Code", src: "/claude.svg" },
  { name: "ChatGPT",    src: "/chatgpt.svg" },
  { name: "Granola",    src: "/granola.svg" },
];

const CARD_STYLE = { background: "#FFFFFF", borderRadius: 12, padding: 12, display: "flex", flexDirection: "column" as const, gap: 12, textAlign: "left" as const, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" };
const TERRA = "#993C1D";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const reduced = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={inView || reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}

export default function CompareFormulas() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-50px" });
  const tldrRef = useRef<HTMLDivElement>(null);
  const tldrInView = useInView(tldrRef, { once: true, margin: "-50px" });
const prefersReducedMotion = useReducedMotion();

  const cardAnim = (inView: boolean, delay: number) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 20 },
    animate: inView || prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.5, ease: "easeOut" as const, delay: prefersReducedMotion ? 0 : delay },
  });

  return (
    <div
      style={{ "--case-accent": "var(--color-blue)", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" } as React.CSSProperties}
    >
      {/* ── Custom hero ───────────────────────────────────────────────────── */}
      <div
        id="hero"
        className="mx-6 my-6 min-[480px]:mx-12 min-[480px]:my-[60px] md:mx-[220px] md:my-[100px]"
        style={{ textAlign: "center" }}
      >
        {/* Logo */}
        <Image
          src="/compare-formulas/pml-logo.svg"
          alt="Prime Matter Labs"
          width={186}
          height={53}
          priority
          style={{ width: 186, height: "auto", display: "inline-block" }}
        />

        {/* Title */}
        <p
          className="text-[24px] min-[480px]:text-[32px] md:text-[44px]"
          style={{
            fontFamily: "'CanelaText', serif",
            fontWeight: 300,
            lineHeight: 1.2,
            color: "#232323",
            marginTop: 24,
          }}
        >
          Rebuilding a Critical Workflow for Cosmetic Chemists
        </p>

        {/* Video */}
        <div style={{ marginTop: 24, borderRadius: 16, overflow: "hidden", aspectRatio: "16/9" }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          >
            <source src="/homepage/pml-home.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Context cards row */}
        <div ref={cardsRef} className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          <motion.div {...cardAnim(cardsInView, 0)} style={CARD_STYLE}>
            <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>Timeline</p>
            <p style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 16, color: "#232323" }}>May 2026</p>
          </motion.div>
          <motion.div {...cardAnim(cardsInView, 0.08)} style={CARD_STYLE}>
            <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>Role</p>
            <p style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 16, color: "#232323" }}>Product Designer</p>
          </motion.div>
          <motion.div {...cardAnim(cardsInView, 0.16)} style={CARD_STYLE}>
            <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>Team</p>
            <p style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 16, color: "#232323" }}>1 designer, 2 engineers, 1 PM</p>
          </motion.div>
          <motion.div {...cardAnim(cardsInView, 0.24)} style={CARD_STYLE}>
            <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>Tools</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {TOOLS.map(({ name, src }) => (
                <div key={name} className="group relative">
                  <div className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-transparent group-hover:bg-[#f4f3ef] transition-all duration-200 ease-out group-hover:-translate-y-0.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={name} width={22} height={22} />
                  </div>
                  <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded text-label-l3 bg-[#232323] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* TLDR card */}
        <motion.div
          ref={tldrRef}
          {...cardAnim(tldrInView, 0)}
          style={{
            marginTop: 32,
            background: "#FFFFFF",
            borderRadius: 12,
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            padding: 32,
            textAlign: "left",
          }}
        >
          <div className="flex flex-col md:flex-row gap-3">
            {/* Left — TLDR; */}
            <motion.div
              style={{ flex: 1, display: "flex", alignItems: "flex-start" }}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={tldrInView || prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0 }}
            >
              <p
                className="text-[48px] md:text-[75px]"
                style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, color: "#232323", lineHeight: 1 }}
              >
                TLDR;
              </p>
            </motion.div>

            {/* Right — Problem + Solution */}
            <motion.div
              style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={tldrInView || prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.15 }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>Problem</p>
                <p style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 16, color: "#232323" }}>
                  I worked on a feature that let chemists and process engineers compare a lot of formulas at the same time. The need came from employees switching from another software platform to ours, and it helped make that transition much easier.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>Solution</p>
                <p style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 16, color: "#232323" }}>
                  I redesigned the experience from the ground up, turning a static comparison report into a workspace where chemists could compare, investigate, and resolve issues without leaving the tool.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── The Problem ───────────────────────────────────────────────────── */}
      <div
        id="the-problem"
        className="mx-6 min-[480px]:mx-12 md:mx-[220px] mt-20 scroll-mt-[50px]"
      >
        {/* Numbered eyebrow */}
        <FadeUp delay={0}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <span style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 12, fontWeight: 400, color: TERRA, letterSpacing: "0.06em" }}>01</span>
            <span style={{ width: 1, height: 12, background: "#BBBDBC", display: "inline-block" }} />
            <span style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 11, fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#888780" }}>The Problem</span>
          </div>
        </FadeUp>

        {/* Split layout — headline left, copy right */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div style={{ flex: 1 }}>
            <FadeUp delay={0.08}>
              <p
                className="text-[26px] md:text-[36px]"
                style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, lineHeight: 1.25, color: "#232323" }}
              >
                The ask was feature parity. The real challenge was workflow confidence.
              </p>
            </FadeUp>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
            <FadeUp delay={0.16}>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
                The ask sounded simple: rebuild an Optiva feature in Element AI. But the real problem was trust. Chemists already relied on Optiva to compare formulas — checking percentages across shade families, catching math errors before production.
              </p>
            </FadeUp>

            <FadeUp delay={0.24}>
              <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontStyle: "italic", fontSize: 22, lineHeight: 1.3, color: TERRA }}>
                Optiva worked, but it was fragmented.
              </p>
            </FadeUp>

            <FadeUp delay={0.32}>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
                Finding a problem was only the beginning. The opportunity wasn&apos;t just to copy the feature. It was to make the whole workflow faster and easier to act on.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Annotated screenshot card */}
        <FadeUp delay={0}>
          <div
            style={{
              marginTop: 32,
              background: "#FFFFFF",
              borderRadius: 12,
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              overflow: "hidden",
            }}
          >
            {/* Screenshot */}
            <FadeUp delay={0}>
              <div style={{ padding: 24 }}>
                <Image
                  src="/compare-formulas/optiva.svg"
                  alt="Optiva formula comparison interface"
                  width={645}
                  height={287}
                  className="w-full h-auto block"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.10)" }}
                />
              </div>
            </FadeUp>

            {/* Pain point cards */}
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ padding: "0 24px 24px", gap: 10 }}>
              {[
                "Had to leave the tool to fix issues",
                "Rerun the full report after every change",
                "No way to act on what you found",
              ].map((text, i) => (
                <FadeUp key={text} delay={i * 0.1}>
                  <div style={{ background: "rgba(153,60,29,0.05)", border: "1px solid rgba(153,60,29,0.2)", borderRadius: 8, padding: "10px 12px" }}>
                    <p style={{ fontSize: 11, fontWeight: 500, color: TERRA, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>⚠ Pain Point</p>
                    <p style={{ fontSize: 13, color: "#232323", lineHeight: 1.5 }}>{text}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Design challenge */}
        <div style={{ marginTop: 80 }}>
          {/* Numbered eyebrow */}
          <FadeUp delay={0}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
              <span style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 12, fontWeight: 400, color: TERRA, letterSpacing: "0.06em" }}>02</span>
              <span style={{ width: 1, height: 12, background: "#BBBDBC", display: "inline-block" }} />
              <span style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 11, fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#888780" }}>The Design Challenge</span>
            </div>
          </FadeUp>

          {/* HMW question */}
          <FadeUp delay={0.08}>
            <p
              className="text-[22px] md:text-[28px]"
              style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontStyle: "italic", lineHeight: 1.4, color: "#232323", maxWidth: 560, marginBottom: 32 }}
            >
              How might we preserve a familiar comparison workflow while making it clearer, more actionable, and easier to trust?
            </p>
          </FadeUp>

          {/* Constraint columns */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 24 }}>
            {[
              "Preserve the comparison logic chemists already trusted",
              "Make findings actionable without leaving the tool",
              "Build trust in dense, easy-to-miss data",
            ].map((text, i) => (
              <FadeUp key={text} delay={0.16 + i * 0.1}>
                <div style={{ borderTop: `2px solid ${TERRA}`, paddingTop: 14 }}>
                  <p style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 15, lineHeight: 1.6, color: "#363636" }}>
                    {text}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Jump link */}
          <FadeUp delay={0.46}>
            <div style={{ marginTop: 40 }}>
              <a
                href="#final-outcome"
                style={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontSize: 15,
                  color: "#232323",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                Jump to the solution →
              </a>
            </div>
          </FadeUp>
        </div>
      </div>

      <main className="mx-6 min-[480px]:mx-12 md:mx-[220px]">

          <div id="constraints" className="mt-20 scroll-mt-[50px]">
            {/* Numbered eyebrow */}
            <FadeUp delay={0}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 12, fontWeight: 400, color: TERRA, letterSpacing: "0.06em" }}>03</span>
                <span style={{ width: 1, height: 12, background: "#BBBDBC", display: "inline-block" }} />
                <span style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 11, fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#888780" }}>Constraints</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 36, color: "#232323", lineHeight: 1.25 }}>
                Designing for inconsistency became the hardest constraint.
              </p>
            </FadeUp>

            <FadeUp delay={0.16}>
              <p style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 16, color: "#363636", marginTop: 24, lineHeight: 1.6 }}>
                Chemists and process engineers both used Compare Formulas, but for completely different reasons. Designing one view to serve both meant serving neither well.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-6" style={{ gap: 24 }}>
              <FadeUp delay={0.24}>
                <div style={{ background: "#FFFFFF", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: 40 }}>
                  <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>Chemists</p>
                  <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 30, color: "#232323", marginTop: 12, lineHeight: 1.3 }}>
                    Needed to compare and edit ingredient amounts
                  </p>
                  <p style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 16, color: "#232323", marginTop: 16, lineHeight: 1.6 }}>
                    R&amp;D chemists were checking percentages across formulas, catching math errors, and making small adjustments before locking formulas for production. They needed a fast, editable comparison view.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.34}>
                <div style={{ background: "#FFFFFF", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: 40 }}>
                  <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>Process Engineers</p>
                  <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 30, color: "#232323", marginTop: 12, lineHeight: 1.3 }}>
                    Needed to see formulas in phase sequence
                  </p>
                  <p style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 16, color: "#232323", marginTop: 16, lineHeight: 1.6 }}>
                    Process engineers were checking the order and structure of how ingredients would be added on the manufacturing line. They needed to see formulas organized by phase, not just a flat list of ingredients.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>

          <div id="key-design-decision-1" className="mt-20 scroll-mt-[50px]">
            <FadeUp delay={0}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 12, fontWeight: 400, color: TERRA, letterSpacing: "0.06em" }}>04</span>
                <span style={{ width: 1, height: 12, background: "#BBBDBC", display: "inline-block" }} />
                <span style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 11, fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#888780" }}>Key Design Decision</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <p
                className="text-[26px] md:text-[36px]"
                style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, lineHeight: 1.25, color: "#232323" }}
              >
                Split the workflow instead of forcing one view to do everything
              </p>
            </FadeUp>

            <FadeUp delay={0.16}>
              <div className="mt-8" style={{ borderLeft: `2.5px solid ${TERRA}`, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 6 }}>
                <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: TERRA, fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontWeight: 400, margin: 0 }}>The Decision</p>
                <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 19, lineHeight: 1.3, color: "#232323", margin: 0 }}>
                  One dense table trying to satisfy everyone became two clearer views, each doing one job well.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.24}>
              <p className="mt-8" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
                My early explorations tried to combine ingredients, percentages, phases, formula sequence, and editing into a single comparison table. That approach quickly broke down as we realized users had two distinct needs. Adding phases made formulas harder to compare, creating what we called a &lsquo;Tetris&rsquo; problem — different phase structures no longer aligned cleanly. This led to the design decision to create two different views.
              </p>
            </FadeUp>

            <FadeUp delay={0.32}>
              <ViewToggle
                views={[
                  {
                    key: "list",
                    label: "List view",
                    eyebrow: "List view — Chemists",
                    description: "Allows chemists to easily scan and compare ingredient amounts",
                    imageSrc: "/compare-formulas/KD1-2.svg",
                    imageAlt: "List view for chemists",
                    imageWidth: 664,
                    imageHeight: 398,
                  },
                  {
                    key: "sequential",
                    label: "Sequential view",
                    eyebrow: "Sequential view — Process Engineers",
                    description: "Allows engineers to view formulas in phases for easy formula structure scanning",
                    imageSrc: "/compare-formulas/KD1-1.svg",
                    imageAlt: "Sequential view for process engineers",
                    imageWidth: 650,
                    imageHeight: 422,
                  },
                ]}
              />
            </FadeUp>
          </div>

          <div id="key-design-decision-2" className="mt-20 scroll-mt-[50px]">
            <FadeUp delay={0}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 12, fontWeight: 400, color: TERRA, letterSpacing: "0.06em" }}>05</span>
                <span style={{ width: 1, height: 12, background: "#BBBDBC", display: "inline-block" }} />
                <span style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 11, fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#888780" }}>Key Design Decision</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <p
                className="text-[26px] md:text-[36px]"
                style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, lineHeight: 1.25, color: "#232323" }}
              >
                Turn comparison into action
              </p>
            </FadeUp>

            <FadeUp delay={0.16}>
              <div className="mt-8" style={{ borderLeft: `2.5px solid ${TERRA}`, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 6 }}>
                <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: TERRA, fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontWeight: 400, margin: 0 }}>The Decision</p>
                <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 19, lineHeight: 1.3, color: "#232323", margin: 0 }}>
                  Comparison stopped being read-only. Chemists could edit ingredients directly instead of switching tools to fix what they found.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.24}>
              <p className="mt-8" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
                The biggest improvement over Optiva was making comparison actionable. Instead of finding issues and switching tools to fix them, users could make simple edits directly in the comparison view and follow guided flows for more complex changes.
              </p>
            </FadeUp>

            <FadeUp delay={0.32}>
              <div className="mt-8">
                <Image
                  src="/compare-formulas/KD2-1.svg"
                  alt="Inline ingredient editing in ElementAI"
                  width={664}
                  height={398}
                  className="w-full h-auto block"
                />
              </div>
            </FadeUp>
          </div>

          <div id="key-design-decision-3" className="mt-20 scroll-mt-[50px]">
            <FadeUp delay={0}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 12, fontWeight: 400, color: TERRA, letterSpacing: "0.06em" }}>06</span>
                <span style={{ width: 1, height: 12, background: "#BBBDBC", display: "inline-block" }} />
                <span style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 11, fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#888780" }}>Key Design Decision</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <p
                className="text-[26px] md:text-[36px]"
                style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, lineHeight: 1.25, color: "#232323" }}
              >
                Small visual cues made dense formula data easier to trust.
              </p>
            </FadeUp>

            <FadeUp delay={0.16}>
              <div className="mt-8" style={{ borderLeft: `2.5px solid ${TERRA}`, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 6 }}>
                <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: TERRA, fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontWeight: 400, margin: 0 }}>The Decision</p>
                <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 19, lineHeight: 1.3, color: "#232323", margin: 0 }}>
                  Color cues carried over from Optiva, then extended to catch repeated and missing ingredients too.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.24}>
              <p className="mt-8" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
                In Optiva, users relied heavily on visual comparison. Higher and lower amounts were highlighted against the reference formula, which made differences easier to catch. I carried that behavior into Element AI.
              </p>
            </FadeUp>

            <FadeUp delay={0.32}>
              <CaseImage
                src="/compare-formulas/KD3-1.svg"
                alt="Red and green comparison states in ElementAI"
                width={930}
                height={296}
                caption="Green indicates higher, red indicates lower than the reference formula."
              />
            </FadeUp>

            <FadeUp delay={0.40}>
              <p className="mt-6" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
                I also added cues for edge cases that came up in user conversations and design critiques. If the same raw material appeared multiple times, users could quickly identify repeated ingredients instead of manually hunting across the table. If an ingredient existed in one formula but not another, the interface made that absence visible instead of hiding it.
              </p>
            </FadeUp>

            <FadeUp delay={0.48}>
              <CaseImage
                src="/compare-formulas/KD3-3.svg"
                alt="Hovering over icon highlights repeated ingredient at every instance"
                width={816}
                height={255}
                caption="Hovering over the icon, will highlight the repeated ingredient at every instance"
              />
            </FadeUp>
          </div>

          <div id="final-outcome" className="mt-20 scroll-mt-[50px]">
            <FadeUp delay={0}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 12, fontWeight: 400, color: TERRA, letterSpacing: "0.06em" }}>07</span>
                <span style={{ width: 1, height: 12, background: "#BBBDBC", display: "inline-block" }} />
                <span style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 11, fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#888780" }}>Final Outcome</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <p
                className="text-[26px] md:text-[36px]"
                style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, lineHeight: 1.25, color: "#232323" }}
              >
                The final design turned a static report into a clearer, more actionable workspace.
              </p>
            </FadeUp>

            <FadeUp delay={0.16}>
              <div className="mt-8" style={{ borderLeft: `2.5px solid ${TERRA}`, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 6 }}>
                <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: TERRA, fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontWeight: 400, margin: 0 }}>A chemist, during review</p>
                <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontStyle: "italic", fontSize: 19, lineHeight: 1.3, color: "#232323", margin: 0 }}>
                  &ldquo;This is going to make my life so much easier. I&apos;m very excited to use it.&rdquo;
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.24}>
              <p className="mt-8" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
                Compare Formulas has been built and users are beginning to use it in Element AI. Because the feature is still early, I don&apos;t have long-term usage metrics yet. But initial reactions were positive. The final experience helped move a critical Optiva workflow into Element AI while improving on the original tool through clearer context, multiple comparison views, and editing support.
              </p>
            </FadeUp>

            <FadeUp delay={0.32}>
              <CaseImage
                src="/compare-formulas/KD1-2.svg"
                alt="Compare Formulas final outcome"
                width={664}
                height={398}
              />
            </FadeUp>
          </div>

          <div id="reflection" className="mt-20 mb-20 scroll-mt-[50px]">
            <FadeUp delay={0}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 12, fontWeight: 400, color: TERRA, letterSpacing: "0.06em" }}>08</span>
                <span style={{ width: 1, height: 12, background: "#BBBDBC", display: "inline-block" }} />
                <span style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 11, fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#888780" }}>Reflection</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <p
                className="text-[26px] md:text-[36px]"
                style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, lineHeight: 1.25, color: "#232323" }}
              >
                I learned that migration work is really behavior-change work.
              </p>
            </FadeUp>

            <FadeUp delay={0.16}>
              <p className="mt-8" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
                This project taught me that migration work is not just about feature parity. Users needed the new tool to feel familiar enough to trust, but better enough to justify switching. The hardest design decisions came from figuring out what to preserve, what to improve, and what to simplify for the first release. If I revisited this project, I would validate edge cases earlier, especially around phase alignment and missing ingredients. Those details looked small at first, but they shaped the entire interaction model. The final product was stronger because we let the messy middle influence the design instead of hiding it.
              </p>
            </FadeUp>
          </div>

          <div className="mt-24 flex justify-between">
            <a
              href="/acorns-growth"
              className="group inline-flex items-center gap-2"
              style={{ background: "#232323", color: "#ffffff", borderRadius: 999, padding: "10px 20px", fontSize: 15.6, textDecoration: "none", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              <span className="inline-block transition-transform duration-200 group-hover:rotate-45">←</span>
              Previous case study
            </a>
            <a
              href="/sample-csi"
              className="group inline-flex items-center gap-2"
              style={{ background: "#232323", color: "#ffffff", borderRadius: 999, padding: "10px 20px", fontSize: 15.6, textDecoration: "none", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              Next case study
              <span className="inline-block transition-transform duration-200 group-hover:-rotate-45">→</span>
            </a>
          </div>
      </main>

    </div>
  );
}
