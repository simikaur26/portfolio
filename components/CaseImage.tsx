import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export default function CaseImage({ src, alt, width, height, caption }: Props) {
  return (
    <figure className="my-6">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
      />
      {caption && (
        <figcaption className="text-label-l3 text-secondary mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
