"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  company: string;
  heading: string;
  description: string;
  videoSrc?: string;
  videoPosition?: string;
  layout?: "horizontal" | "vertical";
  fullWidth?: boolean;
  href: string;
};

const SPRING = { type: "spring" as const, stiffness: 150, damping: 22, mass: 1 };
const CARD_SHADOW = "0 4px 24px rgba(0,0,0,0.08)";
const HOVER_SHADOW = "0 16px 48px rgba(0,0,0,0.10)";

export default function CaseStudyCard({
  company,
  heading,
  videoSrc,
  videoPosition = "center center",
  layout = "vertical",
  href,
}: Props) {
  const video = videoSrc ? (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 block w-full h-full object-cover"
      style={{ objectPosition: videoPosition }}
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  ) : null;

  if (layout === "horizontal") {
    return (
      <motion.div
        whileHover={{ scale: 1.012, y: -6, boxShadow: HOVER_SHADOW }}
        transition={SPRING}
        style={{ borderRadius: 16, boxShadow: CARD_SHADOW }}
      >
        <Link
          href={href}
          scroll={true}
          onClick={() => window.scrollTo(0, 0)}
          className="flex flex-row no-underline h-[315px] rounded-[16px] overflow-hidden"
          style={{ background: "#FFFFFF", padding: 16, gap: 16 }}
        >
          {/* Left — text, top-left aligned */}
          <div style={{ width: "45%", flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <p className="text-eyebrow" style={{ color: "#888780" }}>{company}</p>
            <p style={{ marginTop: 8, fontSize: 24, fontWeight: 500, color: "#232323", lineHeight: 1.35 }}>
              {heading}
            </p>
          </div>

          {/* Right — video fills remaining space */}
          <div style={{ flex: 1, position: "relative", borderRadius: 4, overflow: "hidden" }}>
            {video}
          </div>
        </Link>
      </motion.div>
    );
  }

  // Default: vertical layout — video top, text bottom
  return (
    <motion.div
      whileHover={{ scale: 1.012, y: -6, boxShadow: HOVER_SHADOW }}
      transition={SPRING}
      style={{ borderRadius: 16, boxShadow: CARD_SHADOW }}
    >
      <Link
        href={href}
        scroll={true}
        onClick={() => window.scrollTo(0, 0)}
        className="flex flex-col no-underline rounded-[16px] overflow-hidden"
        style={{ background: "#FFFFFF", padding: 16, gap: 24 }}
      >
        {/* Video — top, fixed height */}
        {videoSrc && (
          <div style={{ position: "relative", height: 260, borderRadius: 4, overflow: "hidden", flexShrink: 0 }}>
            {video}
          </div>
        )}

        {/* Text — bottom */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p className="text-eyebrow" style={{ color: "#888780" }}>{company}</p>
          <p style={{ marginTop: 8, fontSize: 22, fontWeight: 500, color: "#232323", lineHeight: 1.35 }}>
            {heading}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
