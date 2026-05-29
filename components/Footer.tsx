"use client";

import { useState } from "react";
import Image from "next/image";

const EMAIL = "simikaurb26@gmail.com";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer className="px-16 py-10" style={{ backgroundColor: "#F2F1F0" }}>
      <div className="max-w-[930px] mx-auto">

        {/* CTA */}
        <h2 className="text-h2" style={{ color: "#232323" }}>
          Let&apos;s make something!
        </h2>
        <p className="text-body mt-2" style={{ color: "#363636" }}>
          I&apos;m always open to new opportunities, collaborations, or just a good conversation.
        </p>
        <button
          onClick={handleCopy}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="text-label-l2 mt-4 inline-block"
          style={{
            backgroundColor: "#993C1D",
            color: "#ffffff",
            padding: "10px 24px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            opacity: hovered ? 0.85 : 1,
            transition: "opacity 150ms ease",
          }}
        >
          {copied ? "copied!" : "copy my email"}
        </button>

        {/* Bottom rule + tagline */}
        <div
          className="flex items-center justify-between mt-10 pt-6"
          style={{ borderTop: "1px solid #BBBDBC" }}
        >
          <Image src="/logo.svg" alt="SK" width={40} height={32} />
          <p className="text-label-l3" style={{ color: "#BBBDBC" }}>
            designed by me, vibecoded with claude. we both did our best
          </p>
        </div>

      </div>
    </footer>
  );
}
