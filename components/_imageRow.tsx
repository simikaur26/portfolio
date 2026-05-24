import Image from "next/image";

export type ImageItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  captionStyle?: "label" | "body";
};

export function ImageCell({
  src,
  alt,
  width,
  height,
  caption,
  captionStyle = "label",
  sizes,
}: ImageItem & { sizes: string }) {
  return (
    <div className="flex-1 min-w-0">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
        sizes={sizes}
      />
      {caption && (
        <p
          className={
            captionStyle === "body"
              ? "text-body text-center mt-3"
              : "text-label-l3 text-secondary text-center mt-3"
          }
        >
          {caption}
        </p>
      )}
    </div>
  );
}
