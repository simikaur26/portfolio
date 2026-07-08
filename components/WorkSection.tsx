"use client";

import Link from "next/link";
import { useState } from "react";

const CARDS = [
  {
    company: "Prime Matter Labs",
    heading: "Compare Formulas: Rebuilding a Workflow for ElementAI",
    videoSrc: "/homepage/pml-home.mp4",
    videoPosition: "60% center",
    href: "/compare-formulas",
  },
  {
    company: "Acorns",
    heading: "Building Trust during Customer Suspensions at Acorns",
    videoSrc: "/homepage/acorns-home.mp4",
    href: "/acorns",
  },
  {
    company: "Acorns",
    heading: "Growth Experiments at Acorns",
    videoSrc: "/homepage/experiment-home.mp4",
    href: "/acorns-growth",
  },
  {
    company: "SampleServe",
    heading: "Designing digital evidence collection for the real world",
    videoSrc: "/homepage/samplecsi-home.mp4",
    href: "/sample-csi",
  },
];

type Card = (typeof CARDS)[number];

function WorkTile({ card }: { card: Card }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    // Only activate hover on pointer devices (not touch)
    if (window.matchMedia("(hover: hover)").matches) setHovered(true);
  };

  return (
    <Link
      href={card.href}
      onClick={() => window.scrollTo(0, 0)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        position: "relative",
        overflow: "hidden",
        aspectRatio: "3 / 2",
        background: "#1a1a1a",
        textDecoration: "none",
      }}
    >
      {card.videoSrc && (
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: card.videoPosition ?? "center center",
          }}
        >
          <source src={card.videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.48)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.28s ease",
        }}
      />

      {/* Text — bottom-aligned, revealed on hover */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "20px 22px",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.28s ease, transform 0.28s ease",
        }}
      >
        <p style={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize: 11,
          fontWeight: 400,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.6)",
          margin: 0,
          marginBottom: 5,
        }}>
          {card.company}
        </p>
        <p style={{
          fontFamily: "'CanelaText', serif",
          fontWeight: 300,
          fontSize: 18,
          lineHeight: 1.25,
          color: "#FFFFFF",
          margin: 0,
        }}>
          {card.heading}
        </p>
      </div>
    </Link>
  );
}

export default function WorkSection({ exclude }: { exclude?: string }) {
  const cards = exclude ? CARDS.filter((c) => c.href !== exclude) : CARDS;

  return (
    <section id="work" className="py-20 mx-6 min-[480px]:mx-12 md:mx-[220px]">
      {!exclude && (
        <p className="text-eyebrow" style={{ color: "#363636" }}>selected work</p>
      )}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-3 ${!exclude ? "mt-8" : ""}`}
      >
        {cards.map((card) => (
          <WorkTile key={card.href} card={card} />
        ))}
      </div>
    </section>
  );
}
