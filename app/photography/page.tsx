import Image from "next/image";

const PHOTOS = Array.from({ length: 36 }, (_, i) => i + 1);

export default function Photography() {
  return (
    <main className="py-20 px-16">
      <div className="max-w-[930px] mx-auto">
        <h3 className="text-h3" style={{ color: "#232323" }}>
          photos i&apos;ve taken over the years
        </h3>

        <div
          className="mt-8 columns-1 min-[640px]:columns-2 min-[900px]:columns-3"
          style={{ columnGap: 16 }}
        >
          {PHOTOS.map((n) => (
            <div key={n} style={{ breakInside: "avoid", marginBottom: 16 }}>
              <Image
                src={`/about/photography/photo${n}.jpg`}
                alt=""
                width={800}
                height={600}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: 6,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
