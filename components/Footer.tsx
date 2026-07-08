"use client";

import { useState } from "react";
import Image from "next/image";

const EMAIL = "simikaurb26@gmail.com";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer
      className="mx-6 min-[480px]:mx-12 md:mx-[220px] py-16"
    >
      {/* CTA */}
      <p style={{ fontFamily: "'CanelaText', serif", fontWeight: 300, fontSize: 16, color: "#A1A1A1" }}>
        Get in touch
      </p>
      <p
        className="text-[36px] md:text-[52px]"
        style={{
          fontFamily: "'CanelaText', serif",
          fontWeight: 300,
          lineHeight: 1.15,
          color: "#232323",
          marginTop: 12,
          maxWidth: 600,
        }}
      >
        Let&apos;s make something.
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "#363636", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", marginTop: 16, maxWidth: 460 }}>
        I&apos;m always open to new opportunities, collaborations, or just a good conversation.
      </p>

      <button
        onClick={handleCopy}
        style={{
          marginTop: 28,
          display: "inline-block",
          border: "1px solid #232323",
          borderRadius: 6,
          padding: "8px 24px",
          fontSize: 15,
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 400,
          color: "#232323",
          background: "transparent",
          cursor: "pointer",
          transition: "background 150ms ease, color 150ms ease",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.background = "#232323";
          (e.currentTarget as HTMLElement).style.color = "#fff";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.background = "transparent";
          (e.currentTarget as HTMLElement).style.color = "#232323";
        }}
      >
        {copied ? "copied!" : "copy my email"}
      </button>

      {/* Bottom */}
      <div
        className="flex items-center justify-between mt-16 pt-6"
        style={{ borderTop: "1px solid #BBBDBC" }}
      >
        <Image src="/logo.svg" alt="SK" width={40} height={32} />
        <p style={{ fontSize: 13, color: "#BBBDBC", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
          designed by me, vibecoded with claude. we both did our best
        </p>
      </div>
    </footer>
  );
}
