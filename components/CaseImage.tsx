import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  displayWidth?: number;
  borderRadius?: number;
};

export default function CaseImage({ src, alt, width, height, caption, displayWidth, borderRadius }: Props) {
  return (
    <figure
      className={`my-6${displayWidth ? " mx-auto" : ""}`}
      style={displayWidth ? { maxWidth: displayWidth } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
        style={borderRadius ? { borderRadius } : undefined}
      />
      {caption && (
        <figcaption className="text-label-l3 text-caption mt-2 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
