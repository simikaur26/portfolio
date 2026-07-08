"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      animate={inView || prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: prefersReducedMotion ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}

function ResultCallout({ headline, detail }: { headline: string; detail: string }) {
  return (
    <div
      style={{
        borderLeft: "2.5px solid #3F7D45",
        paddingLeft: 16,
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <p
        style={{
          fontSize: 11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#3F7D45",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 400,
          margin: 0,
        }}
      >
        Result
      </p>
      <p
        style={{
          fontFamily: "'CanelaText', serif",
          fontWeight: 300,
          fontSize: 19,
          lineHeight: 1.3,
          color: "#232323",
          margin: 0,
        }}
      >
        {headline}
      </p>
      <p
        style={{
          fontSize: 14,
          lineHeight: 1.5,
          color: "#8A897F",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          margin: 0,
        }}
      >
        {detail}
      </p>
    </div>
  );
}


const DETAIL_LABEL: React.CSSProperties = {
  fontFamily: "'CanelaText', serif",
  fontWeight: 300,
  fontSize: 16,
  color: "#A1A1A1",
};

const BODY: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.6,
  color: "#363636",
};

export default function AcornsGrowth() {
  return (
    <div
      style={{
        "--case-accent": "var(--color-acorns)",
        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
      } as React.CSSProperties}
    >
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div
        className="mx-6 my-6 min-[480px]:mx-12 min-[480px]:my-[60px] md:mx-[220px] md:my-[100px]"
        style={{ textAlign: "center" }}
      >
        <Image
          src="/acorns/acorns-logo.svg"
          alt="Acorns"
          width={186}
          height={40}
          priority
          style={{ width: 186, height: "auto", display: "inline-block" }}
        />

        <p
          className="text-[24px] min-[480px]:text-[32px] md:text-[44px]"
          style={{
            fontFamily: "'CanelaText', serif",
            fontWeight: 300,
            lineHeight: 1.2,
            color: "#232323",
            marginTop: 24,
            maxWidth: 680,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Growth Experiments at Acorns
        </p>

        <p
          style={{
            ...BODY,
            marginTop: 20,
            maxWidth: 580,
            marginLeft: "auto",
            marginRight: "auto",
            color: "#888780",
          }}
        >
          Not every product decision needs a permanent build to validate. Two live experiments I designed and shipped into Acorns&apos; onboarding funnel, testing hypotheses with real user traffic before committing to permanent changes.
        </p>

        {/* Hero cover */}
        <div style={{ marginTop: 32 }}>
          <Image
            src="/experiments/experiment-hero.svg"
            alt="Acorns onboarding funnel with both experiments' entry points highlighted"
            width={1200}
            height={525}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <main className="mx-6 min-[480px]:mx-12 md:mx-[220px] pb-20">

        {/* ── Experiment 01 ─────────────────────────────────────────────── */}
        <FadeUp>
          <SectionHeader eyebrow="Experiment 1" heading="Silver plan pricing" canela />
        </FadeUp>

        <FadeUp delay={0.06}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ marginTop: 40 }}>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p style={DETAIL_LABEL}>The question</p>
              <p style={BODY}>
                Could Silver move from $6 to $8 without losing subscribers, and would a discount, once revealed, actually improve retention — not just get people through the initial click? A painted door normally just measures a click. We wanted to know if someone who thought they&apos;d gotten a deal stuck around longer than someone who never saw one.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p style={DETAIL_LABEL}>The constraint I held to</p>
              <p style={BODY}>
                We also wanted to redesign the pricing screen around this time. I pushed to keep the two apart. Changing both the price and the UI in one test would&apos;ve made it impossible to know which one moved conversion. The redesign stayed on the shelf until this test ran clean on its own.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p style={DETAIL_LABEL}>Role</p>
              <p style={BODY}>
                Designed the flow end to end, wrote the discount messaging, built it into the live app.
              </p>
            </div>

            <ResultCallout
              headline="Conversions held at $8."
              detail="Retention impact pending, confirming with my former manager."
            />

          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div style={{ marginTop: 64 }}>
            <Image
              src="/experiments/experiment-1.svg"
              alt="Silver plan pricing experiment screens"
              width={1200}
              height={800}
              style={{ width: "50%", height: "auto", display: "block", margin: "0 auto" }}
            />
          </div>
        </FadeUp>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #BBBDBC", margin: "80px 0" }} />

        {/* ── Experiment 02 ─────────────────────────────────────────────── */}
        <FadeUp>
          <SectionHeader eyebrow="Experiment 2" heading="Previous plan reminder" canela />
        </FadeUp>

        <FadeUp delay={0.06}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ marginTop: 40 }}>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p style={DETAIL_LABEL}>The question</p>
              <p style={BODY}>
                For returning users, what would actually move them through the resubscription funnel faster — being reminded of their old plan at all, or how that reminder was worded? I split UI treatment (banner vs. pill badge) and copy framing (&ldquo;Resubscribe to Silver&rdquo; vs. &ldquo;Renew your Silver subscription&rdquo;) into separate variables so we could isolate which one was doing the real work.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p style={DETAIL_LABEL}>My working theory</p>
              <p
                style={{
                  ...BODY,
                  color: "#888780",
                  fontStyle: "italic",
                }}
              >
                Copy is the first thing someone actually reads, before they register any visual treatment. My hunch going in was that wording would matter more than banner vs. pill. Unconfirmed — flagged as a hypothesis until the real numbers come back.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p style={DETAIL_LABEL}>Role</p>
              <p style={BODY}>
                Designed and built all four variants solo, wrote the copy for each.
              </p>
            </div>

            <ResultCallout
              headline="Results pending."
              detail="Confirming with my former manager."
            />

          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="grid grid-cols-2 gap-4" style={{ marginTop: 64 }}>
            {[
              { src: "/experiments/Banner-resubscribe.svg", caption: "Banner — \"Resubscribe to Silver\"" },
              { src: "/experiments/Banner-renew.svg",       caption: "Banner — \"Renew your Silver subscription\"" },
              { src: "/experiments/pill-resubscribe.svg",  caption: "Pill badge — \"Resubscribe to Silver\"" },
              { src: "/experiments/pill-renew.svg",        caption: "Pill badge — \"Renew your Silver subscription\"" },
            ].map(({ src, caption }) => (
              <div key={src}>
                <Image
                  src={src}
                  alt={caption}
                  width={600}
                  height={800}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <p style={{ fontSize: 13, color: "#A1A1A1", marginTop: 8, textAlign: "center" }}>{caption}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        <div className="mt-24 flex justify-between">
          <a
            href="/acorns"
            className="group inline-flex items-center gap-2"
            style={{ background: "#232323", color: "#ffffff", borderRadius: 999, padding: "10px 20px", fontSize: 15.6, textDecoration: "none", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            <span className="inline-block transition-transform duration-200 group-hover:rotate-45">←</span>
            Previous case study
          </a>
          <a
            href="/compare-formulas"
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
