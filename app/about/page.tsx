import ShelfDisplay from "@/components/ShelfDisplay";
import Bio from "@/components/Bio";

export default function About() {
  return (
    <main className="py-20 mx-6 min-[480px]:mx-12 md:mx-[220px]">
      <div>
        {/* Bio section */}
        <Bio />

        {/* Shelf section — intro text belongs to the shelf */}
        <div className="mt-20">
          <p
            className="text-[28px] md:text-[36px]"
            style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, lineHeight: 1.25, color: "#232323" }}
          >
            things that make me, me
          </p>
          <p
            className="mt-4"
            style={{ fontSize: 16, lineHeight: 1.6, color: "#363636", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            click on anything to learn more.
          </p>
          <div className="mt-5">
            <ShelfDisplay />
          </div>
        </div>
      </div>
    </main>
  );
}
