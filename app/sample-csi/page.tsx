"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import CaseImage from "@/components/CaseImage";
import SectionHeader from "@/components/SectionHeader";
import QuoteCluster from "@/components/QuoteCluster";
import Button from "@/components/Button";
import TwoUp from "@/components/TwoUp";
import ThreeUp from "@/components/ThreeUp";
import FigmaEmbed from "@/components/FigmaEmbed";
import RefinementBlock from "@/components/RefinementBlock";
import WorkSection from "@/components/WorkSection";

const TOOLS = [
  { name: "Figma",       src: "/figma.svg" },
  { name: "ChatGPT",     src: "/chatgpt.svg" },
  { name: "Claude Code", src: "/claude.svg" },
  { name: "Granola",     src: "/granola.svg" },
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

export default function SampleCSI() {
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
      style={{ "--case-accent": "var(--color-navy)", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" } as React.CSSProperties}
    >
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div
        id="hero"
        className="mx-6 my-6 min-[480px]:mx-12 min-[480px]:my-[60px] md:mx-[220px] md:my-[100px]"
        style={{ textAlign: "center" }}
      >
        <Image
          src="/sample-csi/logo.svg"
          alt="Sample CSI"
          width={180}
          height={48}
          priority
          style={{ width: 180, height: "auto", display: "inline-block" }}
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
          Designing Software That Helps Police Preserve Evidence in Court
        </p>

        <div style={{ marginTop: 24, borderRadius: 16, overflow: "hidden", aspectRatio: "16/9" }}>
          <video
            autoPlay muted loop playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          >
            <source src="/homepage/samplecsi-home.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Context cards */}
        <div ref={cardsRef} className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          <motion.div {...cardAnim(cardsInView, 0)} style={CARD_STYLE}>
            <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>Timeline</p>
            <p style={{ fontSize: 16, color: "#232323" }}>Jan – Apr 2026</p>
          </motion.div>
          <motion.div {...cardAnim(cardsInView, 0.08)} style={CARD_STYLE}>
            <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>Role</p>
            <p style={{ fontSize: 16, color: "#232323" }}>Product Designer</p>
          </motion.div>
          <motion.div {...cardAnim(cardsInView, 0.16)} style={CARD_STYLE}>
            <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>Team</p>
            <p style={{ fontSize: 16, color: "#232323" }}>5 students</p>
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
                  Officers were documenting evidence across disconnected systems — notebooks, spreadsheets, and photos — with no reliable way to capture the details that matter. Small mistakes in chain-of-custody records could compromise cases in court.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>Solution</p>
                <p style={{ fontSize: 16, color: "#232323", lineHeight: 1.6 }}>
                  Designed SampleCSI from 0→1: a platform with adaptive forms, AI guardrails that surface what officers might miss, and linked evidence relationships — so teams can document reliably under pressure.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Live preview link */}
        <div style={{ marginTop: 20, display: "flex", justifyContent: "center" }}>
          <a
            href="https://amulyavw02.github.io/samplecsi/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#888780", textDecoration: "none" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" style={{ fill: "#888780", flexShrink: 0 }}>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
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
              The problem wasn&apos;t digitizing paperwork. It was preserving trust.
            </p>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
              Early in our research, we learned that evidence collection is messy, high-pressure, and inconsistent between agencies. Officers were documenting information across notebooks, spreadsheets, photos, and disconnected systems. Small mistakes — like missing timestamps or unclear chain-of-custody records — could create serious issues later.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
              At first, we thought the challenge was mostly about efficiency. But interviews and artifact analysis shifted our perspective. The real problem was reliability under pressure — officers weren&apos;t just filling out forms. They were trying to build credible narratives from chaotic scenes.
            </p>
          </div>
        </motion.div>

        <div style={{ marginTop: 48 }}>
          <QuoteCluster />
        </div>

        {/* Design challenge pull quote */}
        <div style={{ marginTop: 64, textAlign: "center" }}>
          <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>The Design Challenge</p>
          <p
            className="text-[22px] md:text-[28px]"
            style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontStyle: "italic", lineHeight: 1.4, color: "#232323", maxWidth: 640, margin: "16px auto 0" }}
          >
            How do we help officers document reliably under pressure without slowing them down?
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="#final-outcome">Jump to the solution</Button>
        </div>
      </div>

      <main className="mx-6 min-[480px]:mx-12 md:mx-[220px] pt-20">

        {/* CONSTRAINTS */}
        <div id="constraints" className="mt-20 scroll-mt-[50px]">
          <SectionHeader eyebrow="CONSTRAINTS" heading="Designing for inconsistency became the hardest constraint." canela />
          <p className="mt-8" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            One of the biggest challenges was realizing there wasn&apos;t a single workflow to design around. Different agencies documented evidence differently, used different terminology, and prioritized different information. We explored more standardized flows, but the more artifacts we reviewed, the more limiting that approach felt. So we made a different tradeoff: build a system that felt flexible without losing structure.
          </p>
          <p className="mt-6" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636", fontWeight: 500 }}>
            That led to four core features:
          </p>
          <TwoUp
            images={[
              { src: "/sample-csi/constraints1.svg", alt: "Dynamic forms that adapted based on evidence type", width: 435, height: 333, caption: "Dynamic forms that adapted based on evidence type", captionStyle: "body" },
              { src: "/sample-csi/constraints2.svg", alt: "Custom fields for agency-specific workflows", width: 435, height: 333, caption: "Custom fields for agency-specific workflows", captionStyle: "body" },
            ]}
          />
          <TwoUp
            images={[
              { src: "/sample-csi/constraints3.svg", alt: "Progressive disclosure to reduce cognitive overload in the field", width: 435, height: 333, caption: "Progressive disclosure to reduce cognitive overload in the field", captionStyle: "body" },
              { src: "/sample-csi/constraints4.svg", alt: "AI-assisted prompts that helped officers avoid missing critical details", width: 435, height: 333, caption: "AI-assisted prompts that helped officers avoid missing critical details", captionStyle: "body" },
            ]}
          />
        </div>

        {/* KEY DESIGN DECISION 1 */}
        <div id="key-design-decision-1" className="mt-20 scroll-mt-[50px]">
          <SectionHeader eyebrow="KEY DESIGN DECISION 1" heading="AI as guardrails, not automation." canela />
          <p className="mt-8" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            As we learned more about evidence collection workflows, we kept running into the same issue: officers needed to document information quickly, but missing even a small detail could create problems later. We explored more automated documentation flows early on, but the deeper we got into the problem space, the less comfortable full automation felt. In a workflow built around accountability and chain of custody, fully AI-generated reports felt more likely to create distrust than confidence.
          </p>

          <div className="mt-8 mb-2">
            <FigmaEmbed
              src="https://player.vimeo.com/video/1196749357?badge=0&autopause=0&player_id=0&app_id=58479"
              aspectRatio={127.66}
              maxWidth={400}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <p className="mt-6" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            Instead of generating reports, the system acted more like a set of guardrails. If an officer documented a knife, the interface could surface prompts they might otherwise forget — details about handling, location, or related evidence. The goal wasn&apos;t to replace human judgment, but to support it.
          </p>

          {/* Pull quote */}
          <p
            className="text-[20px] md:text-[24px]"
            style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontStyle: "italic", lineHeight: 1.4, color: "#232323", textAlign: "center", margin: "48px auto 0", maxWidth: 580 }}
          >
            So we intentionally designed AI to stay in the background.
          </p>
        </div>

        {/* KEY DESIGN DECISION 2 */}
        <div id="key-design-decision-2" className="mt-20 scroll-mt-[50px]">
          <SectionHeader eyebrow="KEY DESIGN DECISION 2" heading="The biggest pivot came from something we didn't hear in interviews." canela />
          <p className="mt-8" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            One of our most important insights came late in the process. During synthesis, we realized evidence rarely exists in isolation — a blood sample connects to a weapon, a fingerprint to a broken object. None of our interviews explicitly revealed this; we uncovered it through artifact analysis and workflow mapping. Once we saw the pattern, we redesigned the case summary experience to support parent-child evidence relationships. We explored several directions:
          </p>
          <ThreeUp
            images={[
              { src: "/sample-csi/KD2-1.svg", alt: "A traditional table view", width: 290, height: 405, caption: "A traditional table view", captionStyle: "body", borderRadius: 5 },
              { src: "/sample-csi/KD2-2.svg", alt: "A folder/tree structure", width: 290, height: 405, caption: "A folder/tree structure", captionStyle: "body", borderRadius: 5 },
              { src: "/sample-csi/KD2-3.svg", alt: "A linked-card model", width: 290, height: 405, caption: "A linked-card model", captionStyle: "body", borderRadius: 5 },
            ]}
          />
          <p className="mt-6" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            We chose the linked-card approach because it preserved fast scanning while still making relationships visible at a glance.
          </p>
          <CaseImage
            src="/sample-csi/KD2-final.svg"
            alt="Final linked-card case summary design"
            width={930}
            height={600}
          />
        </div>

        {/* KEY DESIGN DECISION 3 */}
        <div id="key-design-decision-3" className="mt-20 scroll-mt-[50px]">
          <SectionHeader eyebrow="KEY DESIGN DECISION 3" heading="Usability testing exposed where clarity mattered more than features." canela />
          <p className="mt-8" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            There was one recurring issue that came up in usability testing: language. Terms that felt obvious to us weren&apos;t obvious to officers. We made a series of targeted refinements that improved comprehension and flow. One participant summed it up well: &apos;This would make our work faster.&apos;
          </p>

          <RefinementBlock
            number={1}
            heading="Redesigning the 'Activity Log' to a proper 'Chain of Custody' section with important information upfront"
            beforeSrc="/sample-csi/before1.svg"
            beforeAlt="Activity Log — before"
            beforeWidth={371}
            beforeHeight={323}
            afterSrc="/sample-csi/after1.svg"
            afterAlt="Chain of Custody — after"
            afterWidth={371}
            afterHeight={322}
          />
          <RefinementBlock
            number={2}
            heading="Adjusting the status indicators to match terminology used in the industry today"
            beforeSrc="/sample-csi/before2.svg"
            beforeAlt="Status indicators — before"
            beforeWidth={344}
            beforeHeight={121}
            afterSrc="/sample-csi/after2.svg"
            afterAlt="Status indicators — after"
            afterWidth={344}
            afterHeight={127}
          />
          <RefinementBlock
            number={3}
            heading="Changing 'Parent/Child' to 'Primary/Secondary'"
            beforeSrc="/sample-csi/before3.svg"
            beforeAlt="Parent/Child terminology — before"
            beforeWidth={417}
            beforeHeight={203}
            afterSrc="/sample-csi/after3.svg"
            afterAlt="Primary/Secondary terminology — after"
            afterWidth={414}
            afterHeight={202}
          />
        </div>

        {/* FINAL OUTCOME */}
        <div id="final-outcome" className="mt-20 scroll-mt-[50px]">
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>Final Outcome</p>
            <p
              className="text-[22px] md:text-[28px]"
              style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, lineHeight: 1.4, color: "#232323", maxWidth: 640, margin: "16px auto 0" }}
            >
              The final system balanced structure with flexibility.
            </p>
          </div>
          <p className="mt-8" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            While SampleCSI isn&apos;t live yet due to funding limitations, usability participants consistently described the system as faster and easier to navigate than current documentation processes.
          </p>
          <div className="mt-8 mb-2">
            <FigmaEmbed
              src="https://player.vimeo.com/video/1196749356?badge=0&autopause=0&player_id=0&app_id=58479"
              aspectRatio={127.66}
              maxWidth={400}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>

        {/* USING AI */}
        <div id="using-ai" className="mt-20 scroll-mt-[50px]">
          <SectionHeader eyebrow="USING AI" heading="AI also became part of how we built SampleCSI." canela />
          <p className="mt-8" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            There was something a little meta about this project: we were designing an AI-assisted tool while actively using AI tools ourselves. That wasn&apos;t the original plan, but it became one of the more interesting parts of the process.
          </p>
          <p className="mt-6" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>We used AI tools to:</p>
          <ol className="mt-4 ml-6 space-y-2 list-decimal">
            {[
              "Synthesize interview transcripts",
              "Brainstorm information architecture",
              "Build high fidelity prototypes",
              "Draft usability testing scripts",
            ].map((item) => (
              <li key={item} style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>{item}</li>
            ))}
          </ol>
          <p className="mt-6" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            Each of those tasks had a different character. Synthesis was actually the one that humbled us first. We fed in raw transcripts expecting organized, usable themes and got back output that sounded polished but felt generic — it missed the deeper patterns actually emerging from our interviews. We ended up stepping away from the AI-generated summaries and returning to manual affinity mapping to find more grounded insights ourselves.
          </p>
          <p className="mt-6" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            Brainstorming was more useful for breaking logjams, even when the suggestions weren&apos;t right. Prototyping with AI was the most surprising: it could produce realistic UI in minutes, which let us test more directions than we would have otherwise. Drafting testing scripts required the most oversight — the outputs were plausible but often leading, framing questions in ways that pointed users toward the right answer.
          </p>

          <div className="mt-10 flex justify-center gap-12 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/chatgpt.svg" alt="ChatGPT" width={60} height={60} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/claude.svg" alt="Claude" width={60} height={60} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/granola.svg" alt="Granola" width={60} height={60} />
          </div>

          <p className="mt-10" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            We used ChatGPT for broad brainstorming and quick iteration. Claude was better for longer, more structured tasks where we needed it to hold a lot of context at once. Granola handled meeting notes and kept our synthesis sessions from disappearing into a folder no one opened again.
          </p>
          <p className="mt-6" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            The biggest thing we learned was that AI worked best when we already had a strong point of view. When we came in with a clear question, we got useful output. When we came in vague, we got confident-sounding noise. And when we leaned on it too early — before we had done the hard interpretive work ourselves — it gave us the illusion of progress without the substance.
          </p>
          <p className="mt-6" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            That changed how we structured our working sessions. We started front-loading more alignment work between team members before involving AI, and we got more deliberate about returning to our own research to evaluate whatever it generated.
          </p>

          {/* Pull quote */}
          <p
            className="text-[20px] md:text-[24px]"
            style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontStyle: "italic", lineHeight: 1.4, color: "#232323", textAlign: "center", margin: "48px auto 0", maxWidth: 580 }}
          >
            Ironically, that mirrored one of the core ideas behind SampleCSI itself: AI worked best as augmentation, not replacement.
          </p>

          <div className="mt-8 mb-2">
            <FigmaEmbed
              src="https://player.vimeo.com/video/1196749355?badge=0&autopause=0&player_id=0&app_id=58479"
              aspectRatio={64.52}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>

        {/* REFLECTION */}
        <div id="reflection" className="mt-20 mb-20 scroll-mt-[50px]">
          <SectionHeader eyebrow="REFLECTION" heading="I learned that workflow design isn't really about screens." canela />
          <p className="mt-8" style={{ fontSize: 16, lineHeight: 1.6, color: "#363636" }}>
            It&apos;s about understanding how people make decisions under pressure. If I revisited this project, I&apos;d spend more time validating edge cases earlier, especially around evidence relationships and multi-agency workflows. Our biggest pivot happened relatively late, and earlier questioning could have surfaced it sooner. This project also changed how I think about usability testing — watching users hesitate in real time taught me that clarity often matters more than feature depth, especially in high-stakes environments where confidence and speed are tightly connected.
          </p>
        </div>

        <p
          className="mt-24 text-[22px] md:text-[28px]"
          style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, lineHeight: 1.4, color: "#232323" }}
        >
          Thanks for reading :) See some more work below
        </p>
      </main>

      <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />
      <WorkSection exclude="/sample-csi" />
    </div>
  );
}
