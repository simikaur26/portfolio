import CaseStudyCard from "@/components/CaseStudyCard";

export default function WorkSection() {
  return (
    <section id="work" className="py-20 px-16">
      <div className="max-w-[930px] mx-auto">
        <p className="text-eyebrow" style={{ color: "#363636" }}>selected work</p>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-8" style={{ gap: 24 }}>
          <CaseStudyCard
            company="SAMPLESERVE"
            heading="Designing digital evidence collection for the real world"
            description="Designing a 0→1 mobile platform that helps officers document, organize, and transfer evidence from the field to the lab."
            accentColor="#1B2D4F"
            imageSrc="/homepage/samplecsicard.svg"
            imageAlt="Sample CSI case study preview"
            href="/sample-csi"
          />
          <CaseStudyCard
            company="PRIME MATTER LABS"
            heading="Rebuilding formula comparison"
            description="Helping chemists compare, edit, and trust dense formula data without leaving their workflow."
            accentColor="#6494CE"
            imageSrc="/homepage/pmlcard.svg"
            imageAlt="Compare Formulas case study preview"
            href="/compare-formulas"
          />
          <CaseStudyCard
            company="ACORNS"
            heading="Building trust during customer suspensions"
            description="Redesigned Acorns' suspension-resolution experience to reduce customer anxiety, guide users through verification more clearly, and rebuild trust during high-stress account lockouts."
            accentColor="#6EC739"
            imageSrc="/homepage/acornscard.svg"
            imageAlt="Acorns case study preview"
            href="/acorns"
          />
        </div>
      </div>
    </section>
  );
}
