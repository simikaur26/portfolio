import ShelfDisplay from "@/components/ShelfDisplay";
import Bio from "@/components/Bio";

export default function About() {
  return (
    <main className="py-20 px-16">
      <div className="max-w-[930px] mx-auto">
        {/* Bio section */}
        <Bio />

        {/* Shelf section — intro text belongs to the shelf */}
        <div className="mt-20">
          <h3 className="text-h3" style={{ color: "#232323" }}>
            things that make me, me
          </h3>
          <p className="text-body mt-4" style={{ color: "#363636" }}>
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
