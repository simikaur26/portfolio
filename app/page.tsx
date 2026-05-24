import ContextBlock from "@/components/ContextBlock";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import EmphasisLine from "@/components/EmphasisLine";
import CaseImage from "@/components/CaseImage";
import QuoteCluster from "@/components/QuoteCluster";
import Button from "@/components/Button";
import TwoUp from "@/components/TwoUp";
import ThreeUp from "@/components/ThreeUp";
import BeforeAfter from "@/components/BeforeAfter";
import RefinementBlock from "@/components/RefinementBlock";
import OutcomeBanner from "@/components/OutcomeBanner";

export default function Home() {
  return (
    <div
      style={{ "--case-accent": "var(--color-navy)" } as React.CSSProperties}
    >
      {/* Hero spans the full viewport — sits outside the centered content column */}
      <Hero
        title="Designing Digital Evidence Collection for the Real World"
        href="#"
        leftSrc="/sample-csi/hero-left.png"
        rightSrc="/sample-csi/hero-right.png"
      />

      {/* Everything below the hero stays in the centered column */}
      <main className="py-20 px-16">
        <div className="max-w-[930px] mx-auto">
          <ContextBlock
            timeline="Jan – Apr 2026"
            role="Product Designer"
            team="5 students"
            overview="A semester-long UX project redesigning the case submission interface for a crime scene investigation platform. The focus was on reducing cognitive load for investigators during high-stress documentation workflows, with particular attention to field-entry order, progressive disclosure, and mobile usability."
          />
          <CaseImage
            src="/sample-csi/overview-image.png"
            alt="Overview of the Sample CSI evidence collection product"
            width={1788}
            height={744}
          />
          <div className="mt-20">
            <SectionHeader
              eyebrow="THE PROBLEM"
              heading="The problem wasn't digitizing paperwork. It was preserving trust."
            />
            <p className="text-body mt-8">
              Early in our research, we learned that evidence collection is messy, high-pressure, and inconsistent between agencies. Officers were documenting information across notebooks, spreadsheets, photos, and disconnected systems. Small mistakes, like missing timestamps or unclear chain-of-custody records, could create serious issues later.
            </p>
            <EmphasisLine>
              The real problem was reliability under pressure. Officers weren&apos;t just filling out forms; they were trying to build credible narratives from chaotic scenes.
            </EmphasisLine>
            <QuoteCluster />
            <div className="mt-12 flex justify-center">
              <Button>View live prototype</Button>
            </div>

            <TwoUp
              images={[
                { src: "/sample-csi/overview-image.png", alt: "Placeholder left", width: 1788, height: 744, caption: "Screen A" },
                { src: "/sample-csi/overview-image.png", alt: "Placeholder right", width: 1788, height: 744, caption: "Screen B" },
              ]}
            />

            <ThreeUp
              images={[
                { src: "/sample-csi/overview-image.png", alt: "Placeholder 1", width: 1788, height: 744, caption: "Step 1" },
                { src: "/sample-csi/overview-image.png", alt: "Placeholder 2", width: 1788, height: 744, caption: "Step 2" },
                { src: "/sample-csi/overview-image.png", alt: "Placeholder 3", width: 1788, height: 744, caption: "Step 3" },
              ]}
            />

            <BeforeAfter
              beforeSrc="/sample-csi/overview-image.png"
              beforeAlt="Before state"
              beforeWidth={1788}
              beforeHeight={744}
              afterSrc="/sample-csi/overview-image.png"
              afterAlt="After state"
              afterWidth={1788}
              afterHeight={744}
            />

            <RefinementBlock
              number={1}
              heading='Redesigning the "Activity Log" to a proper "Chain of Custody" section with important information upfront'
              beforeSrc="/sample-csi/overview-image.png"
              beforeAlt="Activity Log — before"
              beforeWidth={1788}
              beforeHeight={744}
              afterSrc="/sample-csi/overview-image.png"
              afterAlt="Chain of Custody — after"
              afterWidth={1788}
              afterHeight={744}
            />

            <OutcomeBanner heading="The final system balanced structure with flexibility" />

            <RefinementBlock
              number={2}
              heading="Surfacing critical metadata at the top of every evidence record"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
