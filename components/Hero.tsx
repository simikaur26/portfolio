import Image from "next/image";
import { ChevronDown } from "lucide-react";

type Props = {
  title: string;
  href: string;
  leftSrc: string;
  rightSrc: string;
};

export default function Hero({ title, href, leftSrc, rightSrc }: Props) {
  return (
    /*
      w-full + overflow-hidden: spans the full browser width because Hero now
      lives outside the centered max-w-5xl column in page.tsx. No negative
      margins needed — the section is naturally full-bleed.
    */
    <section className="relative w-full overflow-hidden h-screen">
      {/* Centered content — banner and links stay in a readable column */}
      <div className="relative z-10 flex flex-col items-center gap-6 pt-20 px-16">
        {/* Navy banner with white text — inline color overrides --case-accent */}
        <div
          className="w-[62%] rounded-2xl px-12 py-10 text-center"
          style={{ backgroundColor: "var(--color-navy)" }}
        >
          <h3 className="text-h3 text-center" style={{ color: "#ffffff" }}>
            {title}
          </h3>
        </div>

        {/* Live preview link — primary dark text, GitHub's own black for the icon */}
        <a
          href={href}
          className="flex items-center gap-2 text-primary text-label-l2 underline-offset-4 hover:underline"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            aria-hidden="true"
            style={{ fill: "#181717" }}
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          Click here for a live preview
        </a>
      </div>

      {/* Chevron pinned to the bottom center of the hero */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
        <ChevronDown size={28} strokeWidth={1.5} className="text-secondary" />
      </div>

      {/*
        Images are absolute within this section, which is now truly full-viewport-
        width. left-0 / right-0 put them flush against the real screen edges.
      */}
      <div className="absolute bottom-0 left-0 w-[28%] translate-y-[25%]">
        <Image
          src={leftSrc}
          alt=""
          width={957}
          height={1098}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="absolute bottom-0 right-0 w-[28%] translate-y-[25%]">
        <Image
          src={rightSrc}
          alt=""
          width={936}
          height={1064}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
