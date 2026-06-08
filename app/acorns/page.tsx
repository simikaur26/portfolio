import Image from "next/image";
import ContextBlock from "@/components/ContextBlock";
import CaseImage from "@/components/CaseImage";
import SectionHeader from "@/components/SectionHeader";
import DesignChallenge from "@/components/DesignChallenge";
import Button from "@/components/Button";
import GroupedPoints from "@/components/GroupedPoints";
import FeatureScreenshot from "@/components/FeatureScreenshot";
import EmphasisLine from "@/components/EmphasisLine";
import OutcomeBanner from "@/components/OutcomeBanner";
import CaseStudyNav from "@/components/CaseStudyNav";
import WorkSection from "@/components/WorkSection";
import TwoUp from "@/components/TwoUp";
import FigmaEmbed from "@/components/FigmaEmbed";

const NAV_SECTIONS = [
  { id: "the-problem",           label: "THE PROBLEM" },
  { id: "constraints",           label: "CONSTRAINTS" },
  { id: "key-design-decision-1", label: "KEY DESIGN DECISION 1" },
  { id: "key-design-decision-2", label: "KEY DESIGN DECISION 2" },
  { id: "key-design-decision-3", label: "KEY DESIGN DECISION 3" },
  { id: "final-outcome",         label: "FINAL OUTCOME" },
  { id: "reflection",            label: "REFLECTION" },
];

const TOOLS = [
  { name: "Figma",  src: "/figma.svg" },
  { name: "Gemini", src: "/gemini.svg" },
];

export default function Acorns() {
  return (
    <div
      style={{ "--case-accent": "var(--color-acorns)" } as React.CSSProperties}
    >
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
        <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", gap: 64, maxWidth: 930, margin: "0 auto", width: "100%" }}>
          {/* Left column */}
          <div style={{ flex: 1, paddingBottom: 64 }}>
            <Image src="/acorns/acorns-logo.svg" alt="Acorns" width={186} height={40} priority style={{ width: 186, height: "auto" }} />
            <h5 className="text-h5" style={{ color: "#232323", marginTop: 40, marginBottom: 36 }}>
              Building trust during customer suspensions
            </h5>
            <a
              href="https://www.figma.com/proto/8bKON9jlaGGptYzg0OO1MW/Portfolio?page-id=60%3A26398&node-id=222-8246&viewport=1211%2C368%2C0.11&t=rdIp14feaTrHVmFd-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=222%3A8246&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-label-l2"
              style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 40, color: "#232323", textDecoration: "none" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/figma.svg" alt="" width={16} height={16} style={{ display: "block" }} />
              Click here for a live preview
            </a>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 48px", marginTop: 40 }}>
              <div>
                <p className="text-eyebrow">Timeline</p>
                <p className="text-label-l2" style={{ color: "#232323", marginTop: 4 }}>Sep – Nov 2025</p>
              </div>
              <div>
                <p className="text-eyebrow">Role</p>
                <p className="text-label-l2" style={{ color: "#232323", marginTop: 4 }}>Product Designer</p>
              </div>
              <div>
                <p className="text-eyebrow">Team</p>
                <p className="text-label-l2" style={{ color: "#232323", marginTop: 4 }}>1 product designer, 1 PM</p>
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

          {/* Right column — video */}
          <div style={{ flex: "0 0 340px", alignSelf: "stretch", display: "flex", alignItems: "flex-end" }}>
            <div style={{ width: "100%", height: 480, borderRadius: 16, overflow: "hidden", position: "relative" }}>
              <video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
                <source src="/homepage/acorns-home.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <main className="pt-20 px-16">
        <div className="max-w-[930px] mx-auto">
          <ContextBlock
            timeline="Sep – Nov 2025"
            role="Product Designer"
            team="1 product designer, 1 PM"
            tools={[
              { name: "Figma",  src: "/figma.svg" },
              { name: "Gemini", src: "/gemini.svg" },
            ]}
            overview={`At Acorns, customers who were falsely suspended from their accounts had to go through a manual verification process to regain access.

The existing flow was stressful. Customers would see a suspension message, land on a generic document uploader, and often have no idea what was happening next. Many ended up contacting support just to understand where they were in the process.

I worked on redesigning this experience into a more guided suspension-resolution flow that adapted based on the customer's situation.

I partnered with a PM, engineering, and compliance stakeholders, and owned the design work end to end: workflow mapping, explorations, prototyping, and final UI design.`}
          />

          <CaseImage
            src="/acorns/overview.svg"
            alt="Acorns suspension resolution flow overview"
            width={930}
            height={400}
          />

          {/* THE PROBLEM */}
          <div id="the-problem" className="mt-20 scroll-mt-[50px]">
            <SectionHeader
              eyebrow="THE PROBLEM"
              heading="The real problem wasn't document upload. It was uncertainty."
            />
            <p className="text-body mt-8">
              The old experience treated every suspension the same. If customers missed the suspension email, or first discovered the issue while logging in, they landed on a generic uploader with very little guidance. Once they submitted documents, the process basically disappeared into a void. From a business standpoint, suspension-related issues were generating 400–500 support contacts per week, and customers spent over 12,000 cumulative minutes on support calls in a single week trying to regain account access. Some low-risk suspensions still took days to resolve.
            </p>
            <EmphasisLine>
              But the deeper issue was emotional. Customers weren&apos;t just confused. They were scared they had lost access to their money.
            </EmphasisLine>

            <CaseImage
              src="/acorns/problem1.svg"
              alt="Original suspension experience — problem"
              width={930}
              height={400}
            />
            <CaseImage
              src="/acorns/problem2.svg"
              alt="Support contact volume from suspension issues"
              width={930}
              height={400}
            />
            <CaseImage
              src="/acorns/problem3.svg"
              alt="Customer journey during suspension"
              width={930}
              height={400}
            />

            <DesignChallenge iconSrc="/compare-formulas/design-challenge-icon.svg">
              How do we make this process feel clearer and more trustworthy without weakening fraud and compliance protections?
            </DesignChallenge>

            <div className="mt-12 flex justify-center">
              <Button href="#final-outcome" textColor="#232323">
                Jump to the solution
              </Button>
            </div>
          </div>

          {/* CONSTRAINTS */}
          <div id="constraints" className="mt-20 scroll-mt-[50px]">
            <SectionHeader
              eyebrow="CONSTRAINTS"
              heading="Making Complexity Feel Simple"
            />
            <p className="text-body mt-8">
              Different suspension types needed different combinations of IDs, bank statements, written explanations, acknowledgements, and manual review. But the old uploader flattened all of those into the same generic experience. The challenge was reducing confusion for customers without oversimplifying the compliance complexity behind the scenes.
            </p>
          </div>

          {/* KEY DESIGN DECISION 1 */}
          <div id="key-design-decision-1" className="mt-20 scroll-mt-[50px]">
            <SectionHeader
              eyebrow="KEY DESIGN DECISION 1"
              heading="Replace the generic uploader with a guided experience."
            />
            <p className="text-body mt-8">
              The first big shift was moving away from a static uploader toward a more dynamic flow. Instead of showing every customer the same upload screen, the experience adapted based on suspension type.
            </p>
            <p className="text-body mt-6">Customers could now see:</p>

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

            <p className="text-body mt-8">Early on, I explored a few directions:</p>

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

            <EmphasisLine>
              The conversational direction felt easier to move through and reduced the feeling of being hit with everything at once.
            </EmphasisLine>
          </div>

          {/* KEY DESIGN DECISION 2 */}
          <div id="key-design-decision-2" className="mt-20 scroll-mt-[50px]">
            <SectionHeader
              eyebrow="KEY DESIGN DECISION 2"
              heading="Progressive disclosure helped reduce anxiety."
            />
            <p className="text-body mt-8">
              Early versions surfaced every requirement immediately: upload documents, explain transactions, acknowledge terms, wait for review. It technically worked, but it felt stressful. So I started exploring a step-by-step flow that guided customers through one task at a time. Instead of presenting a wall of requirements, the experience focused on the next thing the customer needed to do.
            </p>

            <div className="mt-8">
              <FeatureScreenshot
                blocks={[
                  {
                    heading: "The AI will guide the customer through the recovery process",
                    text: "The experience would start with what they exactly need, but then break each step down.",
                    imageSrc: "/acorns/KD2-1.svg",
                    imageAlt: "AI-guided customer recovery process",
                    imageWidth: 664,
                    imageHeight: 398,
                  },
                  {
                    heading: "Progressive disclosure",
                    text: "The customer will know what's happening at every step, leaving minimal room for uncertainty.",
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
            <SectionHeader
              eyebrow="KEY DESIGN DECISION 3"
              heading="Account Access, Even During Suspension"
            />
            <p className="text-body mt-8">
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

            <EmphasisLine>
              This ended up becoming one of the most important trust-building decisions in the project.
            </EmphasisLine>

            <CaseImage
              src="/acorns/KD3-1.svg"
              alt="Read-only account state during suspension"
              width={930}
              height={400}
            />
          </div>

          {/* FINAL OUTCOME */}
          <div id="final-outcome" className="mt-20 scroll-mt-[50px]">
            <OutcomeBanner
              heading="The final experience turned a black-box process into a guided recovery flow."
            />
            <p className="text-body mt-8">
              The final experience replaced the generic uploader with a guided flow that adapted based on suspension type, surfaced progress more clearly, and gave customers more visibility throughout review. It also created a scalable foundation for future verification and support experiences across Acorns. Most importantly, the experience felt more human. Instead of leaving customers in the dark during a stressful moment, the flow gave them context, progress, and reassurance.
            </p>

            <div className="mt-8 mb-2">
              <FigmaEmbed src="https://embed.figma.com/proto/8bKON9jlaGGptYzg0OO1MW/Portfolio?page-id=60%3A26398&node-id=222-8246&p=f&viewport=1209%2C237%2C0.11&scaling=scale-down&content-scaling=fixed&starting-point-node-id=222%3A8246&show-proto-sidebar=1&embed-host=share" />
            </div>
          </div>

          {/* REFLECTION */}
          <div id="reflection" className="mt-20 scroll-mt-[50px]">
            <SectionHeader
              eyebrow="REFLECTION"
              heading="I learned that trust breaks fast when users lose visibility."
            />
            <p className="text-body mt-8">
              This project changed how I think about high-stress financial workflows. At first, I approached it like a form redesign problem. But the deeper issue was emotional. Customers needed clarity and reassurance just as much as they needed functionality. The biggest lesson was realizing that reducing friction doesn&apos;t always mean removing steps. Sometimes it just means helping people understand where they are, what&apos;s happening, and what comes next. If I revisited the project, I&apos;d spend more time testing how different suspension types changed pacing and trust needs across the flow.
            </p>
          </div>

          <h5 className="text-h5 mt-24">
            Thanks for reading :) See some more work below
          </h5>
        </div>
      </main>
      <WorkSection exclude="/acorns" />

      <CaseStudyNav sections={NAV_SECTIONS} />
    </div>
  );
}
