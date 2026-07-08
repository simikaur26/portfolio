"use client";

import { useState } from "react";

const EMAIL = "simikaurb26@gmail.com";
const HEL = "Helvetica Neue, Helvetica, Arial, sans-serif";
const CAN = "'CanelaText', serif";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer className="mx-6 min-[480px]:mx-12 md:mx-[220px] py-16">

      {/* CTA — two columns */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 md:gap-12">

        {/* Left: text */}
        <div>
          <p style={{ fontFamily: CAN, fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>
            Get in touch
          </p>
          <p
            className="text-[36px] md:text-[52px]"
            style={{
              fontFamily: CAN,
              fontWeight: 300,
              lineHeight: 1.15,
              color: "#232323",
              marginTop: 12,
              maxWidth: 560,
            }}
          >
            Still looking for the next blank page.
          </p>
          <p style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: "#363636",
            fontFamily: HEL,
            marginTop: 16,
            maxWidth: 440,
          }}>
            I&apos;m always open to new opportunities, collaborations, or just a good conversation.
          </p>
          <p style={{
            fontSize: 14,
            lineHeight: 1.5,
            color: "#993C1D",
            fontFamily: HEL,
            marginTop: 8,
          }}>
            Currently open to full-time roles in NYC or remote.
          </p>
        </div>

        {/* Right: links */}
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 24, flexShrink: 0, flexWrap: "wrap" }}>
          <a
            href="https://drive.google.com/file/d/1s7qIxAlOYw4lTuTG57niGC7dLePus8zf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: HEL, fontSize: 15, color: "#232323", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/simikaur/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: HEL, fontSize: 15, color: "#232323", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            LinkedIn
          </a>
          <button
            onClick={handleCopy}
            style={{
              fontFamily: HEL,
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#232323",
              background: "none",
              border: "none",
              borderBottom: "1px solid #232323",
              padding: "0 0 2px",
              cursor: "pointer",
              transition: "color 150ms ease, border-color 150ms ease",
            }}
          >
            {copied ? "copied!" : "copy my email"}
          </button>
        </div>

      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-16 pt-6"
        style={{ borderTop: "1px solid #BBBDBC" }}
      >
        <p style={{ fontFamily: CAN, fontWeight: 300, fontSize: 18, color: "#232323" }}>
          Simi Kaur
        </p>
        <p style={{ fontSize: 13, color: "#BBBDBC", fontFamily: HEL }}>
          designed by me, vibecoded with claude. we both did our best
        </p>
      </div>

    </footer>
  );
}
