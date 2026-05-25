import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  displayWidth?: number;
};

export default function CaseImage({ src, alt, width, height, caption, displayWidth }: Props) {
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
      />
      {caption && (
        <figcaption className="text-label-l3 text-secondary mt-2 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
