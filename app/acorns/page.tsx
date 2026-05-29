import Hero from "@/components/Hero";
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

export default function Acorns() {
  return (
    <div
      style={{ "--case-accent": "var(--color-acorns)" } as React.CSSProperties}
    >
      <div id="hero">
        <Hero
          title="Building trust during customer suspensions"
          logoSrc="/acorns/acorns-logo.svg"
          logoWidth={186}
          logoHeight={40}
          leftSrc="/acorns/hero-left.svg"
          rightSrc="/acorns/hero-right.svg"
          href="https://www.figma.com/proto/8bKON9jlaGGptYzg0OO1MW/Portfolio?page-id=60%3A26398&node-id=222-8246&viewport=1211%2C368%2C0.11&t=rdIp14feaTrHVmFd-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=222%3A8246&show-proto-sidebar=1"
          linkText="Click here for a live preview"
          previewIcon="/figma.svg"
        />
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
              The old experience treated every suspension the same.
            </p>
            <p className="text-body mt-6">
              If customers missed the suspension email, or first discovered the issue while logging in, they landed on a generic uploader with very little guidance. Once they submitted documents, the process basically disappeared into a void.
            </p>
            <p className="text-body mt-6">
              From a business standpoint, suspension-related issues were generating 400–500 support contacts per week, and customers spent over 12,000 cumulative minutes on support calls in a single week trying to regain account access. Some low-risk suspensions still took days to resolve.
            </p>
            <p className="text-body mt-6">
              But the deeper issue was emotional. Customers weren&apos;t just confused. They were scared they had lost access to their money.
            </p>

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
              heading="Making the experience simpler didn't mean the system was simple."
            />
            <p className="text-body mt-8">
              Different suspension types needed different combinations of IDs, bank statements, written explanations, acknowledgements, and manual review. But the old uploader flattened all of those into the same generic experience.
            </p>
            <p className="text-body mt-6">
              The challenge was reducing confusion for customers without oversimplifying the compliance complexity behind the scenes.
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

            <p className="text-body mt-8">
              The conversational direction felt easier to move through and reduced the feeling of being hit with everything at once.
            </p>
          </div>

          {/* KEY DESIGN DECISION 2 */}
          <div id="key-design-decision-2" className="mt-20 scroll-mt-[50px]">
            <SectionHeader
              eyebrow="KEY DESIGN DECISION 2"
              heading="Progressive disclosure helped reduce anxiety."
            />
            <p className="text-body mt-8">
              Early versions surfaced every requirement immediately: upload documents, explain transactions, acknowledge terms, wait for review.
            </p>
            <p className="text-body mt-6">It technically worked, but it felt stressful.</p>
            <p className="text-body mt-6">
              So I started exploring a step-by-step flow that guided customers through one task at a time. Instead of presenting a wall of requirements, the experience focused on the next thing the customer needed to do.
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
              heading="Let customers stay connected to their account, even while suspended."
            />
            <p className="text-body mt-8">
              One insight kept coming up while working through the flows: customers were panicking because they couldn&apos;t see their money.
            </p>
            <p className="text-body mt-6">
              The original experience basically hard-locked users out of the product. But that made the situation feel even more alarming.
            </p>
            <p className="text-body mt-6">
              So instead of fully blocking access, I designed a read-only account state. Customers could still:
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

            <p className="text-body mt-6">
              They just couldn&apos;t take sensitive actions like moving money.
            </p>

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
              The final experience replaced the generic uploader with a guided flow that adapted based on suspension type, surfaced progress more clearly, and gave customers more visibility throughout review.
            </p>
            <p className="text-body mt-6">
              It also created a scalable foundation for future verification and support experiences across Acorns.
            </p>
            <p className="text-body mt-6">
              Most importantly, the experience felt more human. Instead of leaving customers in the dark during a stressful moment, the flow gave them context, progress, and reassurance.
            </p>

            <div className="mt-8 mb-2">
              <FigmaEmbed src="https://embed.figma.com/proto/SIm2tPuTMaJahlj9l7aFzw/Dynamic-Suspension-Experience?node-id=598-91470&viewport=890%2C321%2C0.05&scaling=scale-down&content-scaling=fixed&starting-point-node-id=598%3A91470&show-proto-sidebar=1&page-id=488%3A20887&embed-host=share" />
            </div>
          </div>

          {/* REFLECTION */}
          <div id="reflection" className="mt-20 scroll-mt-[50px]">
            <SectionHeader
              eyebrow="REFLECTION"
              heading="I learned that trust breaks fast when users lose visibility."
            />
            <p className="text-body mt-8">
              This project changed how I think about high-stress financial workflows.
            </p>
            <p className="text-body mt-6">
              At first, I approached it like a form redesign problem. But the deeper issue was emotional. Customers needed clarity and reassurance just as much as they needed functionality.
            </p>
            <p className="text-body mt-6">
              The biggest lesson was realizing that reducing friction doesn&apos;t always mean removing steps. Sometimes it just means helping people understand where they are, what&apos;s happening, and what comes next.
            </p>
            <p className="text-body mt-6">
              If I revisited the project, I&apos;d spend more time testing how different suspension types changed pacing and trust needs across the flow.
            </p>
          </div>

          <h4 className="text-h4 mt-24">
            Thanks for reading :) See some more work below
          </h4>
        </div>
      </main>
      <WorkSection exclude="/acorns" />

      <CaseStudyNav sections={NAV_SECTIONS} />
    </div>
  );
}
