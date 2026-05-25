import Image from "next/image";

type Block = {
  heading: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

type Props = {
  blocks: Block[];
};

export default function FeatureScreenshot({ blocks }: Props) {
  return (
    <div className="flex flex-col" style={{ gap: "48px" }}>
      {blocks.map((block) => (
        <div
          key={block.imageSrc}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start"
        >
          {/* Left: 1/3 — heading + body */}
          <div className="md:col-span-1">
            <p className="text-label-l2" style={{ color: "#232323" }}>
              {block.heading}
            </p>
            <p className="text-body mt-3" style={{ color: "#232323" }}>
              {block.text}
            </p>
          </div>

          {/* Right: 2/3 — screenshot with container shadow + radius */}
          <div
            className="md:col-span-2 overflow-hidden"
            style={{
              borderRadius: "14px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <Image
              src={block.imageSrc}
              alt={block.imageAlt}
              width={block.imageWidth}
              height={block.imageHeight}
              className="w-full h-auto block"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
