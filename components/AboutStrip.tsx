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
        borderTop: `1px solid ${BORDER}`,
        borderBottom: last ? `1px solid ${BORDER}` : undefined,
        padding: "14px 0",
      }}
    >
      {/* Mobile: stacked. Desktop: space-between */}
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between" style={{ gap: 4 }}>
        <span style={{
          fontFamily: HEL,
          fontSize: 13,
          fontWeight: 400,
          letterSpacing: "0.04em",
          color: MUTED,
        }}>
          {label}
        </span>
        <span style={{
          fontFamily: HEL,
          fontSize: 15,
          lineHeight: 1.6,
          color: SECONDARY,
        }}>
          {detail}
        </span>
      </div>
    </motion.div>
  );
}

export default function AboutStrip() {
  return (
    <section
      className="mx-6 min-[480px]:mx-12 md:mx-[220px]"
      style={{ paddingTop: 80, paddingBottom: 120 }}
    >
      <div className="flex flex-col md:flex-row md:items-start" style={{ gap: 48 }}>

        {/* Left column */}
        <div className="w-full md:w-1/2 md:flex-shrink-0">
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
            <p
              className="text-[28px] md:text-[40px]"
              style={{
                fontFamily: CAN,
                fontWeight: 300,
                lineHeight: 1.2,
                color: DARK,
                margin: 0,
              }}
            >
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
