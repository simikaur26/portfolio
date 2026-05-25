import Hero from "@/components/Hero";
import ContextBlock from "@/components/ContextBlock";
import CaseImage from "@/components/CaseImage";
import SectionHeader from "@/components/SectionHeader";
import EmphasisLine from "@/components/EmphasisLine";
import QuoteCluster from "@/components/QuoteCluster";
import Button from "@/components/Button";
import TwoUp from "@/components/TwoUp";
import ThreeUp from "@/components/ThreeUp";
import CaseVideo from "@/components/CaseVideo";
import RefinementBlock from "@/components/RefinementBlock";
import OutcomeBanner from "@/components/OutcomeBanner";
import CaseStudyNav from "@/components/CaseStudyNav";

export default function SampleCSI() {
  return (
    <div
      style={{ "--case-accent": "var(--color-navy)" } as React.CSSProperties}
    >
      <div id="hero">
        <Hero
          title="Designing Digital Evidence Collection for the Real World"
          href="#"
          leftSrc="/sample-csi/hero-left.png"
          rightSrc="/sample-csi/hero-right.png"
        />
      </div>

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

          <div id="the-problem" className="mt-20">
            <SectionHeader
              eyebrow="THE PROBLEM"
              heading="The problem wasn't digitizing paperwork. It was preserving trust."
            />
            <p className="text-body mt-8">
              Early in our research, we learned that evidence collection is messy, high-pressure, and inconsistent between agencies. Officers were documenting information across notebooks, spreadsheets, photos, and disconnected systems. Small mistakes, like missing timestamps or unclear chain-of-custody records, could create serious issues later.
            </p>
            <p className="text-body mt-6">
              At first, we thought the challenge was mostly about efficiency: making reporting faster and reducing paperwork. But interviews and artifact analysis shifted our perspective.
            </p>
            <EmphasisLine>
              The real problem was reliability under pressure. Officers weren&apos;t just filling out forms; they were trying to build credible narratives from chaotic scenes.
            </EmphasisLine>
            <QuoteCluster />
            <div className="mt-12 flex justify-center">
              <Button href="#final-outcome">Jump to the solution</Button>
            </div>
          </div>

          <div id="constraints" className="mt-20">
            <SectionHeader
              eyebrow="CONSTRAINTS"
              heading="Designing for inconsistency became the hardest constraint."
            />
            <p className="text-body mt-8">
              One of the biggest challenges was realizing there wasn't a single workflow to design around. Different agencies documented evidence differently, used different terminology, and prioritized different information.
            </p>
            <p className="text-body mt-6">
              We first explored more standardized flows, but the more artifacts we reviewed, the more limiting that approach felt. It might improve consistency, but it would also force officers to change the way they already worked.
            </p>
            <p className="text-body mt-6">
              So we made a different tradeoff: build a system that felt flexible without losing structure. That led to four core features:
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

          <div id="key-design-decision-1" className="mt-20">
            <SectionHeader
              eyebrow="KEY DESIGN DECISION 1"
              heading="AI as guardrails, not automation"
            />
            <p className="text-body mt-8">
              As we learned more about evidence collection workflows, we kept running into the same issue: officers needed to document information quickly, but missing even a small detail could create problems later.
            </p>
            <p className="text-body mt-6">
              We explored more automated documentation flows early on, but the deeper we got into the problem space, the less comfortable full automation felt. Evidence still needed to be observed, interpreted, and signed off by the person collecting it. In a workflow built around accountability and chain of custody, fully AI-generated reports felt more likely to create distrust than confidence.
            </p>
            <EmphasisLine>
              So we intentionally designed AI to stay in the background.
            </EmphasisLine>
            <p className="text-body mt-6">
              Instead of generating reports, the system acted more like a set of guardrails. If an officer documented a knife, for example, the interface could surface prompts they might otherwise forget, like details about handling, location, or related evidence.
            </p>
            <p className="text-body mt-6">
              The goal wasn&apos;t to replace human judgment, but to support it. AI helped reduce cognitive load without taking control away from the user, because in this kind of workflow, trust mattered more than automation.
            </p>
            <CaseVideo src="/sample-csi/ai-feature.mp4" />
          </div>

          <div id="key-design-decision-2" className="mt-20">
            <SectionHeader
              eyebrow="KEY DESIGN DECISION 2"
              heading="The biggest pivot came from something we didn't hear in interviews"
            />
            <p className="text-body mt-8">
              One of our most important ideas came late in the process.
            </p>
            <p className="text-body mt-6">
              During synthesis, we realized evidence rarely exists independently — items are often connected. A blood sample relates to a weapon. A fingerprint relates to a broken object. But our original designs treated every evidence item as flat and isolated.
            </p>
            <p className="text-body mt-6">
              What made this interesting was that none of our interviews explicitly told us this. In hindsight, we probably weren&apos;t asking the right questions. But once we noticed the pattern through artifact analysis and workflow mapping, we couldn&apos;t unsee it.
            </p>
            <p className="text-body mt-6">
              We pivoted the case summary experience to support linked evidence relationships. Instead of displaying evidence as disconnected entries, the system could visually group linked evidence together.
            </p>
            <p className="text-body mt-6">
              This changed the architecture of the case summary page entirely. We explored several directions:
            </p>
            <ThreeUp
              images={[
                { src: "/sample-csi/KD2-1.svg", alt: "A traditional table view", width: 290, height: 405, caption: "A traditional table view", captionStyle: "body" },
                { src: "/sample-csi/KD2-2.svg", alt: "A folder/tree structure", width: 290, height: 405, caption: "A folder/tree structure", captionStyle: "body" },
                { src: "/sample-csi/KD2-3.svg", alt: "A linked-card model", width: 290, height: 405, caption: "A linked-card model", captionStyle: "body" },
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

          <div id="key-design-decision-3" className="mt-20">
            <SectionHeader
              eyebrow="KEY DESIGN DECISION 3"
              heading="Usability testing exposed where clarity mattered more than features"
            />
            <p className="text-body mt-8">
              I narrated all of our usability tests, which gave me a front-row seat to where users hesitated, second-guessed themselves, or lost confidence.
            </p>
            <p className="text-body mt-6">
              One recurring issue was language. Terms that felt obvious to us weren&apos;t obvious to officers. Labels like &apos;Activity Log&apos; or &apos;Evidence Management&apos; created uncertainty about what actions lived where.
            </p>
            <p className="text-body mt-6">
              We made a series of targeted refinements. These weren&apos;t flashy changes, but they dramatically improved comprehension and flow. One participant summed it up well: &apos;This would make our work faster.&apos;
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

          <div id="final-outcome" className="mt-20 scroll-mt-12">
            <OutcomeBanner heading="The final system balanced structure with flexibility" />
            <p className="text-body mt-8">
              The final system balanced structure with flexibility — a critical requirement we only fully understood midway through the project.
            </p>
            <p className="text-body mt-6">
              While SampleCSI isn&apos;t live yet due to funding limitations, usability participants consistently described the system as faster and easier to navigate than current documentation processes.
            </p>
            <CaseVideo src="/sample-csi/final-outcome.mp4" />
          </div>
          <div id="using-ai" className="mt-20">
            <SectionHeader
              eyebrow="USING AI"
              heading="AI also became part of how we built SampleCSI"
            />
            <p className="text-body mt-8">
              There was something a little meta about this project: we were designing an AI-assisted tool while actively using AI tools ourselves. That wasn&apos;t the original plan, but it became one of the more interesting parts of the process.
            </p>
            <p className="text-body mt-6">
              Early on, we used AI cautiously — mostly for quick lookups and sanity checks. But as the project grew more complex, we started leaning on it more intentionally. We found ourselves treating it less like a search engine and more like a collaborator with strong opinions we didn&apos;t always agree with.
            </p>
            <p className="text-body mt-6">We used AI tools to:</p>
            <ol className="mt-4 ml-6 space-y-2 list-decimal">
              <li className="text-body pl-2">Synthesize interview transcripts</li>
              <li className="text-body pl-2">Brainstorm information architecture</li>
              <li className="text-body pl-2">Build high fidelity prototypes</li>
              <li className="text-body pl-2">Draft usability testing scripts</li>
            </ol>
            <p className="text-body mt-6">
              Each of those tasks had a different character. Synthesis felt like the clearest win — feeding in raw transcripts and getting back organized themes saved hours. Brainstorming was useful for breaking logjams, even when the suggestions weren&apos;t right. Prototyping with AI was the most surprising: it could produce realistic UI in minutes, which let us test more directions than we would have otherwise.
            </p>
            <p className="text-body mt-6">
              Drafting testing scripts was the one that required the most oversight. The outputs were plausible but often leading — they'd frame questions in ways that pointed users toward the &apos;right&apos; answer. Editing those required knowing what good looked like in the first place.
            </p>
            <div className="mt-10 flex justify-center gap-12 items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/sample-csi/chatgpt.svg" alt="ChatGPT" width={60} height={60} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/sample-csi/claude.svg" alt="Claude" width={60} height={60} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/sample-csi/granola.svg" alt="Granola" width={60} height={60} />
            </div>
            <p className="text-body mt-10">
              We used ChatGPT for broad brainstorming and quick iteration. Claude was better for longer, more structured tasks — things where we needed it to hold a lot of context at once. Granola handled meeting notes and kept our synthesis sessions from disappearing into a folder no one opened again.
            </p>
            <p className="text-body mt-6">
              The biggest thing we learned was that AI worked best when we already had a strong point of view. When we came in with a clear question, we got useful output. When we came in vague, we got confident-sounding noise.
            </p>
            <p className="text-body mt-6">
              That changed how we structured our working sessions. We started front-loading more alignment work between team members before involving AI — not because we distrusted it, but because we needed to know what we were actually trying to answer before we asked.
            </p>
            <p className="text-body mt-6">
              It also made us more deliberate about when to step back. The more we relied on AI to generate options, the more we needed to anchor on our own research to evaluate them. The tools were fast; judgment still had to come from us.
            </p>
            <EmphasisLine>
              Ironically, that mirrored one of the core ideas behind SampleCSI itself: AI worked best as augmentation, not replacement.
            </EmphasisLine>
            <CaseVideo src="/sample-csi/research-overview.mp4" />
          </div>
          <div id="reflection" className="mt-20">
            <SectionHeader
              eyebrow="REFLECTION"
              heading="I learned that workflow design isn't really about screens"
            />
            <p className="text-body mt-8">
              It&apos;s about understanding how people make decisions under pressure.
            </p>
            <p className="text-body mt-6">
              If I revisited this project, I&apos;d spend more time validating edge cases earlier, especially around evidence relationships and multi-agency workflows. Our biggest pivot happened relatively late, and earlier questioning could have surfaced it sooner.
            </p>
            <p className="text-body mt-6">
              This project also changed how I think about usability testing. Watching users hesitate in real time taught me that clarity often matters more than feature depth — especially in high-stakes environments where confidence and speed are tightly connected.
            </p>
          </div>
          <h4 className="text-h4 mt-24 mb-16">
            Thanks for reading :) See some more work below
          </h4>
        </div>
      </main>
      <CaseStudyNav />
    </div>
  );
}
