import CaseStudyCard from "@/components/CaseStudyCard";

const CARDS = [
  {
    company: "ACORNS",
    heading: "Building Trust during Customer Suspensions At Acorns",
    description: "Redesigned Acorns' suspension-resolution experience to reduce customer anxiety, guide users through verification more clearly, and rebuild trust during high-stress account lockouts.",
    videoSrc: "/homepage/acorns-home.mp4",
    layout: "horizontal" as const,
    fullWidth: true,
    href: "/acorns",
  },
  {
    company: "SAMPLESERVE",
    heading: "Designing digital evidence collection for the real world",
    description: "Designing a 0→1 mobile platform that helps officers document, organize, and transfer evidence from the field to the lab.",
    videoSrc: "/homepage/samplecsi-home.mp4",
    layout: "vertical" as const,
    href: "/sample-csi",
  },
  {
    company: "PRIME MATTER LABS",
    heading: "Compare Formulas: Rebuilding a Workflow for ElementAI",
    description: "Helping chemists compare, edit, and trust dense formula data without leaving their workflow.",
    videoSrc: "/homepage/pml-home.mp4",
    videoPosition: "60% center",
    layout: "vertical" as const,
    href: "/compare-formulas",
  },
];

export default function WorkSection({ exclude }: { exclude?: string }) {
  const cards = (exclude ? CARDS.filter((c) => c.href !== exclude) : CARDS).map((c) =>
    exclude && c.href === "/acorns" ? { ...c, layout: "vertical" as const, fullWidth: false } : c
  );

  return (
    <section id="work" className="py-20 px-16">
      <div className="max-w-[930px] mx-auto">
        {!exclude && (
          <p className="text-eyebrow" style={{ color: "#363636" }}>selected work</p>
        )}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${!exclude ? "mt-8" : ""}`}
          style={{ gap: 24 }}
        >
          {cards.map((card) => (
            <div key={card.href} className={card.fullWidth ? "md:col-span-2" : ""}>
              <CaseStudyCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
