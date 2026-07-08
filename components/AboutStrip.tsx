"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HEL = "Helvetica Neue, Helvetica, Arial, sans-serif";
const CAN = "'CanelaText', serif";
const MUTED = "#888780";
const DARK = "#232323";
const SECONDARY = "#363636";
const BORDER = "#BBBDBC";

type Row = { label: string; detail: string; last?: boolean };

const ROWS: Row[] = [
  { label: "Photography", detail: "Six years running an independent photography business." },
  { label: "Restaurant",  detail: "Co-own Anand, an Indian fine dining restaurant in Fargo. Designed the full brand identity myself." },
  { label: "DJ",          detail: "Play sets in my spare time." },
  { label: "Weekends",    detail: "Sourdough, mostly. Lego, occasionally." },
  { label: "Reading",     detail: "Mystery thrillers and romance novels, no in-between.", last: true },
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRow({ label, detail, last, delay }: Row & { delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 24,
        borderTop: `1px solid ${BORDER}`,
        borderBottom: last ? `1px solid ${BORDER}` : undefined,
        padding: "16px 0",
      }}
    >
      <span style={{
        fontFamily: HEL,
        fontSize: 16,
        fontWeight: 400,
        color: MUTED,
        flexShrink: 0,
        width: 110,
      }}>
        {label}
      </span>
      <span style={{
        fontFamily: HEL,
        fontSize: 16,
        lineHeight: 1.6,
        color: SECONDARY,
        textAlign: "right",
      }}>
        {detail}
      </span>
    </motion.div>
  );
}

export default function AboutStrip() {
  return (
    <section
      className="mx-6 min-[480px]:mx-12 md:mx-[220px]"
      style={{ paddingTop: 80, paddingBottom: 120 }}
    >
      <div style={{ display: "flex", gap: 56, alignItems: "flex-start" }}>

        {/* Left column */}
        <div style={{ flex: "0 0 50%", maxWidth: "50%" }}>
          <FadeUp delay={0}>
            <p style={{
              fontFamily: HEL,
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: MUTED,
              margin: 0,
              marginBottom: 16,
            }}>
              Off the clock
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p style={{
              fontFamily: CAN,
              fontWeight: 300,
              fontSize: 40,
              lineHeight: 1.2,
              color: DARK,
              margin: 0,
            }}>
              There&apos;s more to it than the case studies.
            </p>
          </FadeUp>
        </div>

        {/* Right column */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {ROWS.map((row, i) => (
            <AnimatedRow key={row.label} {...row} delay={i * 0.07} />
          ))}
        </div>

      </div>
    </section>
  );
}
