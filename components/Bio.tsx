"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ACCENT = "#993C1D";
const HIGHLIGHT_BG = "rgba(153, 60, 29, 0.12)";

type Segment = { text: string; long: boolean };

const PARAGRAPHS: Segment[][] = [
  [
    {
      text: "When I was younger, I wanted to be a lot of things. I was extremely passionate about wanting to be Hannah Montana but that obviously didn't work out (only because I'm not blonde ofc). As I grew up, I was drawn to the medical field, but I realized it wasn't for me because it didn't feel creative.",
      long: false,
    },
    {
      text: " During my undergrad I started my photography business. I was creatively on fire and ran a pretty steady business for 6 years.",
      long: true,
    },
    { text: " I discovered UX during my quarter-life", long: false },
    { text: " 'I don't know what I want to do'", long: true },
    { text: " crisis, and it felt like all the pieces fell into place.", long: false },
  ],
  [
    {
      text: "I attended the University of Michigan to study information science specializing in UX research and design.",
      long: false,
    },
    {
      text: " I learned more than I expected: how to run research, how to think about systems, how to design for real constraints, and how to work with engineers and PMs who are moving fast.",
      long: true,
    },
  ],
  [
    {
      text: "In the summer of 2025 I landed an internship at Acorns, my internship got extended not one, not twice, but three times!",
      long: false,
    },
    {
      text: " What was supposed to be a 12 week internship turned into one year. I learned so much here, starting on projects covering different parts of the app, then eventually joining the growth team. I got to design for three experiments and build internal Figma tools the team is using today!",
      long: true,
    },
    {
      text: " I also worked as the sole product designer at Prime Matter Labs while still in school.",
      long: false,
    },
    {
      text: " It was equal parts terrifying and exciting. I learned what it actually means to handle ambiguity: the space where there's no existing pattern to follow, no obvious right answer, and you just have to figure it out.",
      long: true,
    },
  ],
  [
    {
      text: "Outside of design, I'm co-opening a restaurant in Fargo with my family.",
      long: false,
    },
    {
      text: " It's a completely different kind of problem solving, operations, brand, service, people, and it's made me a better designer in ways I didn't expect.",
      long: true,
    },
  ],
  [
    {
      text: "Now that I'm graduated, I'm looking for roles that push me somewhere new. I've never been someone who waits until conditions are perfect.",
      long: false,
    },
    {
      text: " I took the photography business, I took the extra job, I said yes to the restaurant. I want to keep going like that.",
      long: true,
    },
  ],
];

function LongSpan({
  text,
  active,
  instant,
}: {
  text: string;
  active: boolean;
  instant: boolean;
}) {
  if (!active) return null;

  const trimmed = text.trimStart();
  const hasLeadingSpace = trimmed.length < text.length;
  const words = trimmed.split(/\s+/).filter(Boolean);

  return (
    <>
      {hasLeadingSpace && " "}
      <span style={{ backgroundColor: HIGHLIGHT_BG, borderRadius: 3, padding: "2px 4px" }}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: instant ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={instant ? { duration: 0 } : { duration: 0.08, delay: i * 0.03, ease: "easeOut" }}
          >
            {word}
            {i < words.length - 1 && " "}
          </motion.span>
        ))}
      </span>
    </>
  );
}

export default function Bio() {
  const [mode, setMode] = useState<"short" | "long">("short");
  const reducedMotion = useReducedMotion();
  const isLong = mode === "long";
  const instant = !!reducedMotion;

  return (
    <div>
      {/* Heading */}
      <h3 className="text-h3 mb-8" style={{ color: "#232323" }}>
        what&apos;s led me to here
      </h3>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row md:items-start gap-12">

        {/* Left: photo */}
        <div style={{ flex: "40 40 0", minWidth: 0 }}>
          <Image
            src="/about/about-me.png"
            alt="Simi Kaur"
            width={600}
            height={500}
            style={{
              width: "100%",
              height: 500,
              objectFit: "cover",
              borderRadius: 16,
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        {/* Right: badges + bio text */}
        <div style={{ flex: "60 60 0", minWidth: 0 }}>
          {/* Mode badges */}
          <div className="flex items-center gap-2 mb-8">
            {(["short", "long"] as const).map((m) => {
              const active = mode === m;
              return (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className="text-label-l3"
                  style={{
                    padding: "4px 14px",
                    borderRadius: 999,
                    border: `1.5px solid ${ACCENT}`,
                    backgroundColor: active ? ACCENT : "transparent",
                    color: active ? "white" : ACCENT,
                    cursor: "pointer",
                    transition: "background-color 150ms ease, color 150ms ease",
                  }}
                >
                  {m}
                </button>
              );
            })}
          </div>

          {/* Bio paragraphs */}
          <div className="flex flex-col" style={{ gap: 24 }}>
            {PARAGRAPHS.map((segments, pi) => (
              <p key={pi} className="text-body" style={{ color: "#232323" }}>
                {segments.map((seg, si) =>
                  seg.long ? (
                    <LongSpan
                      key={si}
                      text={seg.text}
                      active={isLong}
                      instant={instant}
                    />
                  ) : (
                    <span key={si}>{seg.text}</span>
                  )
                )}
              </p>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
