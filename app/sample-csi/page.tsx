"use client";

import Image from "next/image";
import ContextBlock from "@/components/ContextBlock";
import CaseImage from "@/components/CaseImage";
import SectionHeader from "@/components/SectionHeader";
import EmphasisLine from "@/components/EmphasisLine";
import QuoteCluster from "@/components/QuoteCluster";
import Button from "@/components/Button";
import TwoUp from "@/components/TwoUp";
import ThreeUp from "@/components/ThreeUp";
import Script from "next/script";
import FigmaEmbed from "@/components/FigmaEmbed";
import RefinementBlock from "@/components/RefinementBlock";
import OutcomeBanner from "@/components/OutcomeBanner";
import CaseStudyNav from "@/components/CaseStudyNav";
import WorkSection from "@/components/WorkSection";

const TOOLS = [
  { name: "Figma",       src: "/figma.svg" },
  { name: "ChatGPT",     src: "/chatgpt.svg" },
  { name: "Claude Code", src: "/claude.svg" },
  { name: "Granola",     src: "/granola.svg" },
];

export default function SampleCSI() {
  return (
    <div
      style={{ "--case-accent": "var(--color-navy)" } as React.CSSProperties}
    >
      {/* ── Custom two-column hero ─────────────────────────────────────────── */}
      <div
        id="hero"
        style={{
          position: "relative",
          overflow: "visible",
          paddingLeft: 64,
          paddingRight: 64,
          paddingTop: 80,
          minHeight: "calc(100vh - var(--nav-height))",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            gap: 64,
            maxWidth: 930,
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Left column */}
          <div style={{ flex: 1, paddingBottom: 64 }}>
            <Image
              src="/sample-csi/logo.svg"
              alt="Sample CSI"
              width={180}
              height={48}
              priority
              style={{ width: 180, height: "auto" }}
            />
            <h5 className="text-h5" style={{ color: "#232323", marginTop: 40, marginBottom: 36 }}>
              Designing software that helps police preserve evidence in court
            </h5>
            <a
              href="https://amulyavw02.github.io/samplecsi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-label-l2"
              style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 40, color: "#232323", textDecoration: "none" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" style={{ fill: "#232323", flexShrink: 0 }}>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Click here for a live preview
            </a>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 48px", marginTop: 40 }}>
              <div>
                <p className="text-eyebrow">Timeline</p>
                <p className="text-label-l2" style={{ color: "#232323", marginTop: 4 }}>Jan – Apr 2026</p>
              </div>
              <div>
                <p className="text-eyebrow">Role</p>
                <p className="text-label-l2" style={{ color: "#232323", marginTop: 4 }}>Product Designer</p>
              </div>
              <div>
                <p className="text-eyebrow">Team</p>
                <p className="text-label-l2" style={{ color: "#232323", marginTop: 4 }}>5 students</p>
              </div>
              <div>
                <p className="text-eyebrow">Tech Stack</p>
                <div className="flex gap-[8px] mt-2">
                  {TOOLS.map(({ name, src }) => (
                    <div key={name} className="group relative">
                      <div className="w-8 h-8 flex items-center justify-center rounded-[8px] bg-transparent group-hover:bg-[#f4f3ef] transition-all duration-200 ease-out group-hover:-translate-y-0.5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={src} alt={name} width={18} height={18} />
                      </div>
                      <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded text-label-l3 bg-[#232323] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right column — video replacing the iPad mockup */}
          <div style={{ flex: "0 0 340px", alignSelf: "stretch", display: "flex", alignItems: "flex-end" }}>
            <div style={{ width: "100%", height: 480, borderRadius: 16, overflow: "hidden", position: "relative" }}>
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              >
                <source src="/homepage/samplecsi-home.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <main className="pt-20 px-16">
        <div className="max-w-[930px] mx-auto">
          <ContextBlock
            timeline="Jan – Apr 2026"
            role="Product Designer"
            team="5 students"
            overview="Over 12 weeks, our team designed SampleCSI, a platform that helps officers document, organize, and transfer evidence from the field to the lab. I worked across the full process, conducting research interviews, leading competitive analysis, narrating usability tests, and driving the final UI system and polished interface designs. The project was highly collaborative, with every team member contributing across research and design."
          />
          <CaseImage
            src="/sample-csi/overview-image.png"
            alt="Overview of the Sample CSI evidence collection product"
            width={1788}
            height={744}
          />

          <div id="the-problem" className="mt-20 scroll-mt-[50px]">
            <SectionHeader
              eyebrow="THE PROBLEM"
              heading="The problem wasn't digitizing paperwork. It was preserving trust."
            />
            <p className="text-body mt-8">
              Early in our research, we learned that evidence collection is messy, high-pressure, and inconsistent between agencies. Officers were documenting information across notebooks, spreadsheets, photos, and disconnected systems. Small mistakes, like missing timestamps or unclear chain-of-custody records, could create serious issues later. At first, we thought the challenge was mostly about efficiency: making reporting faster and reducing paperwork. But interviews and artifact analysis shifted our perspective.
            </p>
            <EmphasisLine>
              The real problem was reliability under pressure. Officers weren&apos;t just filling out forms; they were trying to build credible narratives from chaotic scenes.
            </EmphasisLine>
            <QuoteCluster />
            <div className="mt-12 flex justify-center">
              <Button href="#final-outcome">Jump to the solution</Button>
            </div>
          </div>

          <div id="constraints" className="mt-20 scroll-mt-[50px]">
            <SectionHeader
              eyebrow="CONSTRAINTS"
              heading="Designing for inconsistency became the hardest constraint."
            />
            <p className="text-body mt-8">
              One of the biggest challenges was realizing there wasn&apos;t a single workflow to design around. Different agencies documented evidence differently, used different terminology, and prioritized different information. We first explored more standardized flows, but the more artifacts we reviewed, the more limiting that approach felt. It might improve consistency, but it would also force officers to change the way they already worked. So we made a different tradeoff: build a system that felt flexible without losing structure.
            </p>
            <p className="text-body mt-6" style={{ fontWeight: 600 }}>
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

          <div id="key-design-decision-1" className="mt-20 scroll-mt-[50px]">
            <SectionHeader
              eyebrow="KEY DESIGN DECISION 1"
              heading="AI as guardrails, not automation"
            />
            <p className="text-body mt-8">
              As we learned more about evidence collection workflows, we kept running into the same issue: officers needed to document information quickly, but missing even a small detail could create problems later. We explored more automated documentation flows early on, but the deeper we got into the problem space, the less comfortable full automation felt. In a workflow built around accountability and chain of custody, fully AI-generated reports felt more likely to create distrust than confidence.
            </p>
            <EmphasisLine>
              So we intentionally designed AI to stay in the background.
            </EmphasisLine>
            <div className="mt-8 mb-2">
              <FigmaEmbed
                src="https://player.vimeo.com/video/1196749357?badge=0&autopause=0&player_id=0&app_id=58479"
                aspectRatio={127.66}
                maxWidth={400}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <p className="text-body mt-6">
              Instead of generating reports, the system acted more like a set of guardrails. If an officer documented a knife, for example, the interface could surface prompts they might otherwise forget, like details about handling, location, or related evidence. The goal wasn&apos;t to replace human judgment, but to support it.
            </p>
          </div>

          <div id="key-design-decision-2" className="mt-20 scroll-mt-[50px]">
            <SectionHeader
              eyebrow="KEY DESIGN DECISION 2"
              heading="The biggest pivot came from something we didn't hear in interviews"
            />
            <p className="text-body mt-8">
              One of our most important insights came late in the process. During synthesis, we realized evidence rarely exists in isolation — a blood sample connects to a weapon, a fingerprint to a broken object. None of our interviews explicitly revealed this; we uncovered it through artifact analysis and workflow mapping. Once we saw the pattern, we redesigned the case summary experience to support parent-child evidence relationships. We explored several directions:
            </p>
            <ThreeUp
              images={[
                { src: "/sample-csi/KD2-1.svg", alt: "A traditional table view", width: 290, height: 405, caption: "A traditional table view", captionStyle: "body", borderRadius: 5 },
                { src: "/sample-csi/KD2-2.svg", alt: "A folder/tree structure", width: 290, height: 405, caption: "A folder/tree structure", captionStyle: "body", borderRadius: 5 },
                { src: "/sample-csi/KD2-3.svg", alt: "A linked-card model", width: 290, height: 405, caption: "A linked-card model", captionStyle: "body", borderRadius: 5 },
              ]}
            />
            <p className="text-body mt-6">
              We chose the linked-card approach because it preserved fast scanning while still making relationships visible at a glance.
            </p>
            {/* KD2-final.svg: add this file to public/sample-csi/ — update width/height to match actual asset */}
            <CaseImage
              src="/sample-csi/KD2-final.svg"
              alt="Final linked-card case summary design"
              width={930}
              height={600}
            />
          </div>

          <div id="key-design-decision-3" className="mt-20 scroll-mt-[50px]">
            <SectionHeader
              eyebrow="KEY DESIGN DECISION 3"
              heading="Usability testing exposed where clarity mattered more than features"
            />
            <p className="text-body mt-8">
              There was one recurring issue that came up in usability testing, and that was language. Terms that felt obvious to us weren&apos;t obvious to officers. We made a series of targeted refinements that improved comprehension and flow. One participant summed it up well: &apos;This would make our work faster.&apos;
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

          <div id="final-outcome" className="mt-20 scroll-mt-[50px]">
            <OutcomeBanner heading="The final system balanced structure with flexibility" />
            <p className="text-body mt-8">
              The final system balanced structure with flexibility, which was a critical requirement. While SampleCSI isn&apos;t live yet due to funding limitations, usability participants consistently described the system as faster and easier to navigate than current documentation processes.
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
          <div id="using-ai" className="mt-20 scroll-mt-[50px]">
            <SectionHeader
              eyebrow="USING AI"
              heading="AI also became part of how we built SampleCSI"
            />
            <p className="text-body mt-8">
              There was something a little meta about this project: we were designing an AI-assisted tool while actively using AI tools ourselves. That wasn&apos;t the original plan, but it became one of the more interesting parts of the process.
            </p>
            <p className="text-body mt-6">We used AI tools to:</p>
            <ol className="mt-4 ml-6 space-y-2 list-decimal">
              <li className="text-body pl-2">Synthesize interview transcripts</li>
              <li className="text-body pl-2">Brainstorm information architecture</li>
              <li className="text-body pl-2">Build high fidelity prototypes</li>
              <li className="text-body pl-2">Draft usability testing scripts</li>
            </ol>
            <p className="text-body mt-6">
              Each of those tasks had a different character. Synthesis was actually the one that humbled us first. We fed in raw transcripts expecting organized, usable themes and got back output that sounded polished but felt generic. It missed the deeper patterns that were actually emerging from our interviews. We ended up stepping away from the AI-generated summaries and returning to manual affinity mapping to find more grounded insights ourselves.
            </p>
            <p className="text-body mt-6">
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
            <p className="text-body mt-10">
              We used ChatGPT for broad brainstorming and quick iteration. Claude was better for longer, more structured tasks where we needed it to hold a lot of context at once. Granola handled meeting notes and kept our synthesis sessions from disappearing into a folder no one opened again.
            </p>
            <p className="text-body mt-6">
              The biggest thing we learned was that AI worked best when we already had a strong point of view. When we came in with a clear question, we got useful output. When we came in vague, we got confident-sounding noise. And when we leaned on it too early — before we had done the hard interpretive work ourselves — it gave us the illusion of progress without the substance.
            </p>
            <p className="text-body mt-6">
              That changed how we structured our working sessions. We started front-loading more alignment work between team members before involving AI, and we got more deliberate about returning to our own research to evaluate whatever it generated.
            </p>
            <EmphasisLine>
              Ironically, that mirrored one of the core ideas behind SampleCSI itself: AI worked best as augmentation, not replacement.
            </EmphasisLine>
            <div className="mt-8 mb-2">
              <FigmaEmbed
                src="https://player.vimeo.com/video/1196749355?badge=0&autopause=0&player_id=0&app_id=58479"
                aspectRatio={64.52}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
          <div id="reflection" className="mt-20 scroll-mt-[50px]">
            <SectionHeader
              eyebrow="REFLECTION"
              heading="I learned that workflow design isn't really about screens"
            />
            <p className="text-body mt-8">
              It&apos;s about understanding how people make decisions under pressure. If I revisited this project, I&apos;d spend more time validating edge cases earlier, especially around evidence relationships and multi-agency workflows. Our biggest pivot happened relatively late, and earlier questioning could have surfaced it sooner. This project also changed how I think about usability testing. Watching users hesitate in real time taught me that clarity often matters more than feature depth, especially in high-stakes environments where confidence and speed are tightly connected.
            </p>
          </div>
          <h5 className="text-h5 mt-24">
            Thanks for reading :) See some more work below
          </h5>
        </div>
      </main>
      <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />
      <WorkSection exclude="/sample-csi" />
      <CaseStudyNav sections={[
        { id: "the-problem",          label: "THE PROBLEM" },
        { id: "constraints",          label: "CONSTRAINTS" },
        { id: "key-design-decision-1", label: "KEY DESIGN DECISION 1" },
        { id: "key-design-decision-2", label: "KEY DESIGN DECISION 2" },
        { id: "key-design-decision-3", label: "KEY DESIGN DECISION 3" },
        { id: "final-outcome",        label: "FINAL OUTCOME" },
        { id: "using-ai",             label: "USING AI" },
        { id: "reflection",           label: "REFLECTION" },
      ]} />
    </div>
  );
}
