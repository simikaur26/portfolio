import Hero from "@/components/Hero";
import ContextBlock from "@/components/ContextBlock";
import CaseImage from "@/components/CaseImage";
import SectionHeader from "@/components/SectionHeader";
import DesignChallenge from "@/components/DesignChallenge";
import Button from "@/components/Button";
import GroupedPoints from "@/components/GroupedPoints";
import FeatureScreenshot from "@/components/FeatureScreenshot";
import OutcomeBanner from "@/components/OutcomeBanner";
import CaseStudyNav from "@/components/CaseStudyNav";
import WorkSection from "@/components/WorkSection";

const NAV_SECTIONS = [
  { id: "context",              label: "CONTEXT" },
  { id: "the-problem",         label: "THE PROBLEM" },
  { id: "constraints",         label: "CONSTRAINTS" },
  { id: "key-design-decision-1", label: "KEY DESIGN DECISION 1" },
  { id: "key-design-decision-2", label: "KEY DESIGN DECISION 2" },
  { id: "key-design-decision-3", label: "KEY DESIGN DECISION 3" },
  { id: "final-outcome",       label: "FINAL OUTCOME" },
  { id: "reflection",          label: "REFLECTION" },
];

export default function CompareFormulas() {
  return (
    <div
      style={{ "--case-accent": "var(--color-blue)" } as React.CSSProperties}
    >
      <div id="hero">
        <Hero
          title="Compare Formulas: Rebuilding a Workflow for ElementAI"
          logoSrc="/compare-formulas/pml-logo.svg"
          logoWidth={186}
          logoHeight={53}
          leftSrc="/compare-formulas/hero-left.svg"
          rightSrc="/compare-formulas/hero-right.svg"
        />
      </div>

      <main className="pt-20 px-16">
        <div className="max-w-[930px] mx-auto">
          <div id="context">
            <ContextBlock
              timeline="May 2026"
              role="Product Designer"
              team="1 product designer, 2 engineers, 1 PM"
              overview="Prime Matter Labs is a contract manufacturer for skin and beauty products. After acquiring another company, the team needed chemists to move from Optiva, their legacy formulation platform, into Element AI, Prime Matter's newer internal system.

One key migration feature from Optiva was Compare Formulas: a tool chemists used to compare ingredient percentages across multiple formulas before locking them for production.

I was the solo product designer, working with one PM and two engineers. I owned the design process from a design standpoint: user conversations, requirements shaping, Figma explorations, design critiques, QA, and handoff."
            />
          </div>
          <CaseImage
            src="/compare-formulas/overview-image.svg"
            alt="Compare Formulas overview — ElementAI formula comparison interface"
            width={930}
            height={365}
          />

          <div id="the-problem" className="mt-20">
            <SectionHeader
              eyebrow="THE PROBLEM"
              heading="The ask was feature parity. The real challenge was workflow confidence."
            />
            <p className="text-body mt-8">
              The ask sounded simple: rebuild an Optiva feature in Element AI. But the real problem was trust.
            </p>
            <p className="text-body mt-6">
              Chemists already relied on Optiva to compare formulas, especially when checking large shade families or formula variants. One chemist described comparing many formulas at once to make sure percentages stayed consistent across shades and to catch math errors before formulas were locked.
            </p>
            <CaseImage
              src="/compare-formulas/optiva.svg"
              alt="Optiva formula comparison interface"
              width={645}
              height={287}
              displayWidth={645}
              caption={`Optiva's "Compare Formulas" feature`}
            />
            <p className="text-body mt-6">
              Optiva worked, but it was fragmented. If users found an issue with the formula, they had to leave the comparison, open the formula elsewhere, make the change, and rerun the report. The opportunity was not just to copy Optiva — it was to make the workflow faster and easier to act on.
            </p>
            <DesignChallenge iconSrc="/compare-formulas/design-challenge-icon.svg">
              How might we preserve a familiar comparison workflow while making it clearer, more actionable, and easier to trust in Element AI?
            </DesignChallenge>
            <div className="mt-12 flex justify-center">
              <Button href="#final-outcome" color="#6494CE" textColor="#232323">Jump to the solution</Button>
            </div>
          </div>

          <div id="constraints" className="mt-20">
            <SectionHeader
              eyebrow="CONSTRAINTS"
              heading="Designing for inconsistency became the hardest constraint."
            />
            <p className="text-body mt-8">Two constraints shaped the work:</p>
            <div className="mt-4">
              <GroupedPoints
                data={[
                  {
                    heading: "Complex formula data",
                    items: [
                      { icon: "🧪", text: "Formulas could include many ingredients" },
                      { icon: "🧱", text: "Formulas often had different structures" },
                    ],
                  },
                  {
                    heading: "Two user groups",
                    items: [
                      { icon: "👩🏽‍🔬", text: "Chemists needed a clean way to compare ingredient amounts." },
                      { icon: "👷🏼‍♀️", text: "Process engineers needed more visibility into phase order and sequence." },
                    ],
                  },
                ]}
              />
            </div>
          </div>

          <div id="key-design-decision-1" className="mt-20">
            <SectionHeader
              eyebrow="KEY DESIGN DECISION 1"
              heading="Split the workflow instead of forcing one view to do everything"
            />
            <p className="text-body mt-8">
              My early explorations tried to support every need in one comparison table: ingredients, percentages, phases, formula sequence, and editing. That approach broke down quickly when we realized there were two user groups using this feature so two separate things.
            </p>
            <p className="text-body mt-6">
              When phases entered the table, the layout became harder to scan because formulas did not always line up neatly. One discussion framed it as a &apos;Tetris&apos; problem: once formulas had different phase structures, the comparison stopped being straightforward.
            </p>
            <p className="text-body mt-6">So I split the experience into two views:</p>
            <div className="mt-8">
              <FeatureScreenshot
                blocks={[
                  {
                    heading: "Sequential view for process engineers",
                    text: "Allows engineers to view the formulas in phases for easy formula structure scanning",
                    imageSrc: "/compare-formulas/KD1-1.svg",
                    imageAlt: "Sequential view for process engineers",
                    imageWidth: 650,
                    imageHeight: 422,
                  },
                  {
                    heading: "List view for chemists",
                    text: "Allows chemists to easily scan ingredients",
                    imageSrc: "/compare-formulas/KD1-2.svg",
                    imageAlt: "List view for chemists",
                    imageWidth: 664,
                    imageHeight: 398,
                  },
                ]}
              />
            </div>
            <p className="text-body mt-8">
              The tradeoff was adding another mode, but it made each view clearer. Instead of one dense table trying to satisfy everyone, each view supported a distinct job.
            </p>
          </div>

          <div id="key-design-decision-2" className="mt-20">
            <SectionHeader
              eyebrow="KEY DESIGN DECISION 2"
              heading="Turn comparison into action"
            />
            <p className="text-body mt-8">
              The biggest improvement over Optiva was making the comparison actionable.
            </p>
            <p className="text-body mt-6">
              In the legacy workflow, finding a mistake was only the beginning. Users still had to leave the report, open the formula, edit it, and rerun the comparison. During research, one user said inline editing would make the workflow &apos;significantly easier.&apos;
            </p>
            <p className="text-body mt-6">
              I explored edit states directly inside the comparison experience. Simple percentage changes could be handled inline, while more complex changes, like adding an ingredient that did not exist in a formula, needed a guided flow with the right context.
            </p>
            <p className="text-body mt-6">
              This became a key design shift: the tool was no longer just a report. It became a workspace where chemists could find differences and resolve them faster.
            </p>
            <div className="mt-8">
              <FeatureScreenshot
                blocks={[
                  {
                    heading: "Edit ingredients directly",
                    text: "Chemists can now add or edit the ingredient amounts, eliminating switching tabs and going back and forth between formulas",
                    imageSrc: "/compare-formulas/KD2-1.svg",
                    imageAlt: "Inline ingredient editing in ElementAI",
                    imageWidth: 664,
                    imageHeight: 398,
                  },
                ]}
              />
            </div>
          </div>

          <div id="key-design-decision-3" className="mt-20">
            <SectionHeader
              eyebrow="KEY DESIGN DECISION 3"
              heading="Small visual cues made dense formula data easier to trust."
            />
            <p className="text-body mt-8">
              Once the core workflow was in place, the next challenge was helping users scan dense formula data without slowing down.
            </p>
            <p className="text-body mt-6">
              In Optiva, users relied heavily on visual comparison. Higher and lower amounts were highlighted against the reference formula, which made differences easier to catch. I carried that behavior into Element AI, using red and green states to show when an amount was lower or higher than the reference formula.
            </p>
            <CaseImage
              src="/compare-formulas/KD3-1.svg"
              alt="Red and green comparison states in ElementAI"
              width={930}
              height={296}
            />
            <p className="text-body mt-6">
              I also added cues for edge cases that came up in user conversations and design critiques. If the same raw material appeared multiple times, users could quickly identify repeated ingredients instead of manually hunting across the table. If an ingredient existed in one formula but not another, the interface made that absence visible instead of hiding it.
            </p>
            <p className="text-body mt-6">
              These details were small individually, but together they made the table feel more trustworthy. Users were not just seeing data; they were getting signals about what needed attention.
            </p>
            <CaseImage
              src="/compare-formulas/KD3-2.svg"
              alt="Edge case visual cues in ElementAI"
              width={930}
              height={204}
            />
            <CaseImage
              src="/compare-formulas/KD3-3.svg"
              alt="Hovering over icon highlights repeated ingredient at every instance"
              width={816}
              height={255}
              caption="Hovering over the icon, will highlight the repeated ingredient at every instance"
            />
          </div>

          <div id="final-outcome" className="mt-20 scroll-mt-12">
            <OutcomeBanner
              heading="The final design turned a static report into a clearer, more actionable workspace."
            />
            <p className="text-body mt-8">
              Compare Formulas has been built and users are beginning to use it in Element AI.
            </p>
            <p className="text-body mt-6">
              Because the feature is still early, I do not have long-term usage metrics yet. But initial reactions were positive. During review, one chemist said the feature would make their lives &apos;so much easier&apos; and that she was &apos;very excited&apos; to use it.
            </p>
            <p className="text-body mt-6">
              The final experience helped move a critical Optiva workflow into Element AI while improving on the original tool through clearer context, multiple comparison views, and editing support.
            </p>
            <div
              className="mt-8 w-full flex items-center justify-center"
              style={{ backgroundColor: "#BBBDBC", height: "400px" }}
            >
              <p className="text-label-l3 text-secondary">Final outcome image coming soon</p>
            </div>
          </div>

          <div id="reflection" className="mt-20 mb-20">
            <SectionHeader
              eyebrow="REFLECTION"
              heading="I learned that migration work is really behavior-change work."
            />
            <p className="text-body mt-8">
              This project taught me that migration work is not just about feature parity.
            </p>
            <p className="text-body mt-6">
              Users needed the new tool to feel familiar enough to trust, but better enough to justify switching. The hardest design decisions came from figuring out what to preserve, what to improve, and what to simplify for the first release.
            </p>
            <p className="text-body mt-6">
              If I revisited this project, I would validate edge cases earlier, especially around phase alignment and missing ingredients. Those details looked small at first, but they shaped the entire interaction model.
            </p>
            <p className="text-body mt-6">
              The final product was stronger because we let the messy middle influence the design instead of hiding it.
            </p>
          </div>

          <h4 className="text-h4 mt-24">
            Thanks for reading :) See some more work below
          </h4>
        </div>
      </main>
      <WorkSection exclude="/compare-formulas" />

      <CaseStudyNav sections={NAV_SECTIONS} />
    </div>
  );
}
