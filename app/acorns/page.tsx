"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import CaseImage from "@/components/CaseImage";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import GroupedPoints from "@/components/GroupedPoints";
import FeatureScreenshot from "@/components/FeatureScreenshot";
import TwoUp from "@/components/TwoUp";
import FigmaEmbed from "@/components/FigmaEmbed";
import WorkSection from "@/components/WorkSection";

const TOOLS = [
  { name: "Figma",  src: "/figma.svg" },
  { name: "Gemini", src: "/gemini.svg" },
];

const CARD_STYLE = {
  background: "#FFFFFF",
  borderRadius: 12,
  padding: 12,
  display: "flex",
  flexDirection: "column" as const,
  gap: 12,
  textAlign: "left" as const,
  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
};

export default function Acorns() {
  const cardsRef    = useRef<HTMLDivElement>(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-50px" });
  const tldrRef     = useRef<HTMLDivElement>(null);
  const tldrInView  = useInView(tldrRef, { once: true, margin: "-50px" });
  const problemHeaderRef    = useRef<HTMLDivElement>(null);
  const problemHeaderInView = useInView(problemHeaderRef, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  const cardAnim = (inView: boolean, delay: number) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 20 },
    animate: inView || prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.5, ease: "easeOut" as const, delay: prefersReducedMotion ? 0 : delay },
  });

  return (
    <div
      style={{ "--case-accent": "var(--color-acorns)", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" } as React.CSSProperties}
    >
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div
        id="hero"
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
          }}
        >
          Building Trust During Customer Suspensions
        </p>

        <div style={{ marginTop: 24, borderRadius: 16, overflow: "hidden", aspectRatio: "16/9" }}>
          <video
            autoPlay muted loop playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          >
            <source src="/homepage/acorns-home.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Context cards */}
        <div ref={cardsRef} className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          <motion.div {...cardAnim(cardsInView, 0)} style={CARD_STYLE}>
            <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>Timeline</p>
            <p style={{ fontSize: 16, color: "#232323" }}>Sep – Nov 2025</p>
          </motion.div>
          <motion.div {...cardAnim(cardsInView, 0.08)} style={CARD_STYLE}>
            <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>Role</p>
            <p style={{ fontSize: 16, color: "#232323" }}>Product Designer</p>
          </motion.div>
          <motion.div {...cardAnim(cardsInView, 0.16)} style={CARD_STYLE}>
            <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>Team</p>
            <p style={{ fontSize: 16, color: "#232323" }}>1 designer, 1 PM</p>
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

            <motion.div
              style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={tldrInView || prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.15 }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>Problem</p>
                <p style={{ fontSize: 16, color: "#232323", lineHeight: 1.6 }}>
                  Customers falsely suspended from their Acorns accounts faced a generic, stressful upload experience with no visibility into what was happening or what came next — leaving them scared they had lost access to their money.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>Solution</p>
                <p style={{ fontSize: 16, color: "#232323", lineHeight: 1.6 }}>
                  I redesigned the experience into a guided, adaptive resolution flow with progressive disclosure, clear progress signals, and read-only account access during suspension — turning a black-box process into a trustworthy recovery journey.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Figma link */}
        <div style={{ marginTop: 20, display: "flex", justifyContent: "center" }}>
          <a
            href="https://www.figma.com/proto/8bKON9jlaGGptYzg0OO1MW/Portfolio?page-id=60%3A26398&node-id=222-8246&viewport=1211%2C368%2C0.11&t=rdIp14feaTrHVmFd-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=222%3A8246&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#888780", textDecoration: "none", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma.svg" alt="" width={14} height={14} style={{ display: "block" }} />
            View live prototype
          </a>
        </div>
      </div>

      {/* ── The Problem ───────────────────────────────────────────────────── */}
      <div id="the-problem" className="mx-6 min-[480px]:mx-12 md:mx-[220px] mt-20 scroll-mt-[50px]">
        <motion.div
          ref={problemHeaderRef}
          {...(prefersReducedMotion ? {} : {
            initial: { opacity: 0, y: 20 },
            animate: problemHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
            transition: { duration: 0.5, ease: "easeOut" },
          })}
          className="flex flex-col md:flex-row gap-6 md:gap-12"
        >
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>The Problem</p>
            <p
              className="text-[26px] md:text-[36px]"
              style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, lineHeight: 1.25, color: "#232323", marginTop: 12 }}
            >
              The real problem wasn&apos;t document upload. It was uncertainty.
            </p>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
              The old experience treated every suspension the same. Customers who missed the suspension email — or first discovered the issue while logging in — landed on a generic uploader with very little guidance. Once they submitted documents, the process disappeared into a void.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
              From a business standpoint, suspension-related issues were generating 400–500 support contacts per week. Some low-risk suspensions still took days to resolve. But the deeper issue was emotional — customers weren&apos;t just confused. They were scared they had lost access to their money.
            </p>
          </div>
        </motion.div>

        <CaseImage src="/acorns/problem1.svg" alt="Original suspension experience" width={930} height={400} />
        <CaseImage src="/acorns/problem2.svg" alt="Support contact volume from suspension issues" width={930} height={400} />
        <CaseImage src="/acorns/problem3.svg" alt="Customer journey during suspension" width={930} height={400} />

        {/* Design challenge pull quote */}
        <div style={{ marginTop: 64, textAlign: "center" }}>
          <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>The Design Challenge</p>
          <p
            className="text-[22px] md:text-[28px]"
            style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontStyle: "italic", lineHeight: 1.4, color: "#232323", maxWidth: 640, margin: "16px auto 0" }}
          >
            How do we make this process feel clearer and more trustworthy without weakening fraud and compliance protections?
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="#final-outcome">Jump to the solution</Button>
        </div>
      </div>

      <main className="mx-6 min-[480px]:mx-12 md:mx-[220px] pt-20">

        {/* CONSTRAINTS */}
        <div id="constraints" className="mt-20 scroll-mt-[50px]">
          <SectionHeader eyebrow="CONSTRAINTS" heading="Making complexity feel simple." canela />
          <p className="mt-8" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            Different suspension types needed different combinations of IDs, bank statements, written explanations, acknowledgements, and manual review. But the old uploader flattened all of those into the same generic experience. The challenge was reducing confusion for customers without oversimplifying the compliance complexity behind the scenes.
          </p>
        </div>

        {/* KEY DESIGN DECISION 1 */}
        <div id="key-design-decision-1" className="mt-20 scroll-mt-[50px]">
          <SectionHeader eyebrow="KEY DESIGN DECISION 1" heading="Replace the generic uploader with a guided experience." canela />
          <p className="mt-8" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            The first big shift was moving away from a static uploader toward a more dynamic flow. Instead of showing every customer the same upload screen, the experience adapted based on suspension type.
          </p>
          <p className="mt-6" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>Customers could now see:</p>

          <div className="mt-8">
            <GroupedPoints
              data={[
                {
                  items: [
                    { imageSrc: "/acorns/check.svg", text: "What documents were needed" },
                    { imageSrc: "/acorns/check.svg", text: "Why they were being requested" },
                  ],
                },
                {
                  items: [
                    { imageSrc: "/acorns/check.svg", text: "What still needed review" },
                    { imageSrc: "/acorns/check.svg", text: "What would happen next" },
                  ],
                },
              ]}
            />
          </div>

          <p className="mt-8" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>Early on, I explored a few directions:</p>

          <div className="mt-6">
            <TwoUp
              images={[
                {
                  src: "/acorns/KD1-1.svg",
                  alt: "Checklist-based suspension experience",
                  width: 435,
                  height: 333,
                  caption: "A checklist-based experience",
                  captionStyle: "body",
                },
                {
                  src: "/acorns/KD1-2.svg",
                  alt: "Conversational message-style suspension flow",
                  width: 435,
                  height: 333,
                  caption: "A conversational message-style flow",
                  captionStyle: "body",
                },
              ]}
            />
          </div>

          {/* Pull quote */}
          <p
            className="text-[20px] md:text-[24px]"
            style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontStyle: "italic", lineHeight: 1.4, color: "#232323", textAlign: "center", margin: "48px auto 0", maxWidth: 580 }}
          >
            The conversational direction felt easier to move through and reduced the feeling of being hit with everything at once.
          </p>
        </div>

        {/* KEY DESIGN DECISION 2 */}
        <div id="key-design-decision-2" className="mt-20 scroll-mt-[50px]">
          <SectionHeader eyebrow="KEY DESIGN DECISION 2" heading="Progressive disclosure helped reduce anxiety." canela />
          <p className="mt-8" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            Early versions surfaced every requirement immediately: upload documents, explain transactions, acknowledge terms, wait for review. It technically worked, but it felt stressful. So I started exploring a step-by-step flow that guided customers through one task at a time. Instead of presenting a wall of requirements, the experience focused on the next thing the customer needed to do.
          </p>

          <div className="mt-8">
            <FeatureScreenshot
              blocks={[
                {
                  heading: "The AI will guide the customer through the recovery process",
                  text: "The experience starts with exactly what they need, then breaks each step down one at a time.",
                  imageSrc: "/acorns/KD2-1.svg",
                  imageAlt: "AI-guided customer recovery process",
                  imageWidth: 664,
                  imageHeight: 398,
                },
                {
                  heading: "Progressive disclosure",
                  text: "The customer knows what's happening at every step, leaving minimal room for uncertainty.",
                  imageSrc: "/acorns/KD2-2.svg",
                  imageAlt: "Progressive disclosure step-by-step flow",
                  imageWidth: 664,
                  imageHeight: 398,
                },
              ]}
            />
          </div>
        </div>

        {/* KEY DESIGN DECISION 3 */}
        <div id="key-design-decision-3" className="mt-20 scroll-mt-[50px]">
          <SectionHeader eyebrow="KEY DESIGN DECISION 3" heading="Account access, even during suspension." canela />
          <p className="mt-8" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            One insight kept coming up while working through the flows: customers were panicking because they couldn&apos;t see their money. The original experience basically hard-locked users out of the product. But that made the situation feel even more alarming. So instead of fully blocking access, I designed a read-only account state. Customers could still:
          </p>

          <div className="mt-8">
            <GroupedPoints
              data={[
                {
                  items: [
                    { imageSrc: "/acorns/check.svg", text: "Log in" },
                    { imageSrc: "/acorns/check.svg", text: "Access support" },
                  ],
                },
                {
                  items: [
                    { imageSrc: "/acorns/check.svg", text: "View balances" },
                    { imageSrc: "/acorns/check.svg", text: "Continue the resolution flow" },
                  ],
                },
              ]}
            />
          </div>

          {/* Pull quote */}
          <p
            className="text-[20px] md:text-[24px]"
            style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontStyle: "italic", lineHeight: 1.4, color: "#232323", textAlign: "center", margin: "48px auto 0", maxWidth: 580 }}
          >
            This ended up becoming one of the most important trust-building decisions in the project.
          </p>

          <CaseImage src="/acorns/KD3-1.svg" alt="Read-only account state during suspension" width={930} height={400} />
        </div>

        {/* FINAL OUTCOME */}
        <div id="final-outcome" className="mt-20 scroll-mt-[50px]">
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>Final Outcome</p>
            <p
              className="text-[22px] md:text-[28px]"
              style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, lineHeight: 1.4, color: "#232323", maxWidth: 640, margin: "16px auto 0" }}
            >
              The final experience turned a black-box process into a guided recovery flow.
            </p>
          </div>
          <p className="mt-8" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            The final experience replaced the generic uploader with a guided flow that adapted based on suspension type, surfaced progress more clearly, and gave customers more visibility throughout review. It also created a scalable foundation for future verification and support experiences across Acorns. Most importantly, the experience felt more human — instead of leaving customers in the dark during a stressful moment, the flow gave them context, progress, and reassurance.
          </p>

          <div className="mt-8 mb-2">
            <FigmaEmbed src="https://embed.figma.com/proto/8bKON9jlaGGptYzg0OO1MW/Portfolio?page-id=60%3A26398&node-id=222-8246&p=f&viewport=1209%2C237%2C0.11&scaling=scale-down&content-scaling=fixed&starting-point-node-id=222%3A8246&show-proto-sidebar=1&embed-host=share" />
          </div>
        </div>

        {/* REFLECTION */}
        <div id="reflection" className="mt-20 mb-20 scroll-mt-[50px]">
          <SectionHeader eyebrow="REFLECTION" heading="I learned that trust breaks fast when users lose visibility." canela />
          <p className="mt-8" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            This project changed how I think about high-stress financial workflows. At first, I approached it like a form redesign problem. But the deeper issue was emotional. Customers needed clarity and reassurance just as much as they needed functionality. The biggest lesson was realizing that reducing friction doesn&apos;t always mean removing steps — sometimes it just means helping people understand where they are, what&apos;s happening, and what comes next. If I revisited the project, I&apos;d spend more time testing how different suspension types changed pacing and trust needs across the flow.
          </p>
        </div>

        <p
          className="mt-24 text-[22px] md:text-[28px]"
          style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, lineHeight: 1.4, color: "#232323" }}
        >
          Thanks for reading :) See some more work below
        </p>
      </main>

      <WorkSection exclude="/acorns" />
    </div>
  );
}
