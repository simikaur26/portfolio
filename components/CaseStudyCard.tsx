"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  company: string;
  heading: string;
  description: string;
  accentColor: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export default function CaseStudyCard({
  company,
  heading,
  description,
  accentColor,
  imageSrc,
  imageAlt,
  href,
}: Props) {
  return (
    // --card-accent cascades to all children so var(--card-accent) works in Tailwind arbitrary values
    <div
      className="relative w-full pb-[8px] pr-[8px]"
      style={{ "--card-accent": accentColor } as React.CSSProperties}
    >
      {/* Backing card — stays fixed while front card slides over it on hover */}
      <div
        className="absolute top-[8px] left-[8px] right-0 bottom-0 rounded-[16px]"
        style={{ backgroundColor: "var(--card-accent)" }}
        aria-hidden="true"
      />

      {/* Front card — group drives all child hover states */}
      <Link
        href={href}
        scroll={true}
        onClick={() => window.scrollTo(0, 0)}
        className="
          group
          block relative z-10 no-underline
          h-[400px] rounded-[16px] overflow-hidden
          border-2 border-[#232323] bg-[#F2F1F0]
          transition-[transform,background-color,border-color] duration-[250ms] ease-in-out
          hover:translate-x-[8px] hover:translate-y-[8px]
          hover:border-transparent
          hover:bg-[var(--card-accent)]
        "
      >
        {/* Text area */}
        <div className="absolute top-[30px] left-[30px] right-[30px] z-10">
          <p className="text-eyebrow text-[#363636] transition-colors duration-[250ms] group-hover:text-white">
            {company}
          </p>

          <div className="relative mt-[10px]">
            {/* Default heading — fades out on hover */}
            <div
              className="transition-opacity duration-[250ms] group-hover:opacity-0"
              style={{ fontSize: 22, fontWeight: 500, color: "#232323", lineHeight: 1.4 }}
            >
              {heading}
            </div>

            {/* Hover description — fades in on hover, overlaid at same position */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-[250ms] group-hover:opacity-100"
              style={{ fontSize: 22, fontWeight: 400, color: "white", lineHeight: 1.4 }}
            >
              {description}
            </div>
          </div>
        </div>

        {/* Thumbnail — lower-right, clipped by card overflow:hidden, fades out on hover */}
        <div
          className="absolute transition-opacity duration-[250ms] group-hover:opacity-0"
          style={{
            bottom: -24,
            right: -24,
            width: "68%",
            height: 270,
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) calc(100vw - 128px), 453px"
            style={{ objectFit: "cover", objectPosition: "top left" }}
          />
        </div>
      </Link>
    </div>
  );
}
