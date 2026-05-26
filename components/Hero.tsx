"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  title: string;
  href?: string;
  leftSrc: string;
  rightSrc: string;
  linkText?: string;
  logoSrc?: string;
  logoWidth?: number;
  logoHeight?: number;
};

export default function Hero({
  title,
  href,
  leftSrc,
  rightSrc,
  linkText = "Click here for a live preview",
  logoSrc,
  logoWidth,
  logoHeight,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress of the hero section itself
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // As the hero scrolls out (0→1), images drift upward 0→-60px
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100vh - var(--nav-height))" }}
    >
      {/* Centered content — banner and links stay in a readable column */}
      <div className="relative z-10 flex flex-col items-center gap-6 pt-20 px-16">
        {/* Optional logo above the banner */}
        {logoSrc && logoWidth && logoHeight && (
          <Image
            src={logoSrc}
            alt=""
            width={logoWidth}
            height={logoHeight}
            priority
          />
        )}

        {/* Banner — background uses --case-accent set on the page wrapper */}
        <div
          className="w-[62%] rounded-2xl px-12 py-10 text-center"
          style={{ backgroundColor: "var(--case-accent)" }}
        >
          <h3 className="text-h3 text-center" style={{ color: "#ffffff" }}>
            {title}
          </h3>
        </div>

        {/* Live preview link — only rendered when href is provided */}
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
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
            {linkText}
          </a>
        )}
      </div>

      {/* Bouncing chevron pinned to the bottom center */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} strokeWidth={1.5} className="text-secondary" />
        </motion.div>
      </div>

      {/* Left mockup — outer div handles static offset, motion.div handles parallax */}
      <div className="absolute bottom-0 left-0 w-[28%] translate-y-[25%]">
        <motion.div style={{ y: imageY }}>
          <Image
            src={leftSrc}
            alt=""
            width={957}
            height={1098}
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </div>

      {/* Right mockup — same structure */}
      <div className="absolute bottom-0 right-0 w-[28%] translate-y-[25%]">
        <motion.div style={{ y: imageY }}>
          <Image
            src={rightSrc}
            alt=""
            width={936}
            height={1064}
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
