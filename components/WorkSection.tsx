"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import CaseStudyCard from "@/components/CaseStudyCard";

const CARDS = [
  {
    company: "Prime Matter Labs",
    heading: "Compare Formulas: Rebuilding a Workflow for ElementAI",
    description: "Helping chemists compare, edit, and trust dense formula data without leaving their workflow.",
    videoSrc: "/homepage/pml-home.mp4",
    videoPosition: "60% center",
    layout: "horizontal" as const,
    fullWidth: true,
    href: "/compare-formulas",
  },
  {
    company: "SampleServe",
    heading: "Designing digital evidence collection for the real world",
    description: "Designing a 0→1 mobile platform that helps officers document, organize, and transfer evidence from the field to the lab.",
    videoSrc: "/homepage/samplecsi-home.mp4",
    layout: "vertical" as const,
    href: "/sample-csi",
  },
  {
    company: "Acorns",
    heading: "Building Trust during Customer Suspensions At Acorns",
    description: "Redesigned Acorns' suspension-resolution experience to reduce customer anxiety, guide users through verification more clearly, and rebuild trust during high-stress account lockouts.",
    videoSrc: "/homepage/acorns-home.mp4",
    layout: "vertical" as const,
    href: "/acorns",
  },
  {
    company: "Acorns",
    heading: "Growth Experiments at Acorns",
    description: "Two live growth experiments designed and shipped into Acorns' onboarding funnel, testing hypotheses with real user traffic before committing to permanent changes.",
    videoSrc: "/homepage/experiment-home.mp4",
    layout: "horizontal" as const,
    fullWidth: true,
    href: "/acorns-growth",
  },
];

function AnimatedCard({ children, delay, fullWidth }: { children: React.ReactNode; delay: number; fullWidth?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={fullWidth ? "md:col-span-2" : ""}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      animate={inView || prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: prefersReducedMotion ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}

export default function WorkSection({ exclude }: { exclude?: string }) {
  const cards = (exclude ? CARDS.filter((c) => c.href !== exclude) : CARDS).map((c) =>
    exclude && c.href === "/compare-formulas" ? { ...c, layout: "vertical" as const, fullWidth: false } : c
  );

  return (
    <section id="work" className="py-20 mx-6 min-[480px]:mx-12 md:mx-[220px]">
      {!exclude && (
        <p className="text-eyebrow" style={{ color: "#363636" }}>selected work</p>
      )}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${!exclude ? "mt-8" : ""}`}
        style={{ gap: 24 }}
      >
        {cards.map((card, i) => (
          <AnimatedCard key={card.href} delay={i * 0.08} fullWidth={card.fullWidth}>
            <CaseStudyCard {...card} />
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
