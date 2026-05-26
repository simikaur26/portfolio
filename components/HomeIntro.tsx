"use client";

import React, { useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const ACCENT = "#993C1D";

// ── Popup illustrations ─────────────────────────────────────────────────────

function DashboardPopup() {
  return (
    <svg width="64" height="54" viewBox="0 0 64 54" fill="none" aria-hidden="true">
      <rect width="64" height="14" rx="4" fill={ACCENT} />
      <rect y="18" width="29" height="18" rx="3" fill={ACCENT} fillOpacity="0.22" />
      <rect x="33" y="18" width="31" height="18" rx="3" fill={ACCENT} fillOpacity="0.22" />
      <rect y="40" width="20" height="8" rx="3" fill={ACCENT} fillOpacity="0.18" />
      <rect x="24" y="40" width="28" height="8" rx="3" fill={ACCENT} fillOpacity="0.18" />
      <rect x="56" y="40" width="8" height="8" rx="3" fill={ACCENT} />
      <circle cx="8" cy="7" r="2" fill="white" fillOpacity="0.6" />
      <circle cx="14" cy="7" r="2" fill="white" fillOpacity="0.6" />
      <circle cx="20" cy="7" r="2" fill="white" fillOpacity="0.6" />
    </svg>
  );
}

function CameraPopup() {
  return (
    <svg width="58" height="54" viewBox="0 0 58 54" fill="none" aria-hidden="true">
      {/* Sparkle left */}
      <line x1="4" y1="4" x2="4" y2="12" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="0" y1="8" x2="8" y2="8" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
      {/* Sparkle right */}
      <line x1="52" y1="2" x2="52" y2="8" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="49" y1="5" x2="55" y2="5" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
      {/* Body */}
      <rect x="2" y="16" width="54" height="36" rx="6" fill={ACCENT} />
      {/* Viewfinder bump */}
      <rect x="21" y="8" width="16" height="10" rx="3" fill={ACCENT} />
      {/* Flash dot */}
      <circle cx="46" cy="24" r="3" fill="white" fillOpacity="0.7" />
      {/* Lens rings */}
      <circle cx="29" cy="34" r="12" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.35" />
      <circle cx="29" cy="34" r="7" fill="white" fillOpacity="0.18" />
      <circle cx="29" cy="34" r="3.5" fill="white" fillOpacity="0.35" />
    </svg>
  );
}

function MenuPopup() {
  return (
    <svg width="56" height="62" viewBox="0 0 56 62" fill="none" aria-hidden="true">
      {/* Menu card */}
      <rect x="8" y="0" width="40" height="58" rx="6" fill={ACCENT} fillOpacity="0.1" stroke={ACCENT} strokeWidth="1.5" />
      {/* Heading bar */}
      <rect x="14" y="9" width="28" height="4" rx="2" fill={ACCENT} />
      {/* Content lines */}
      <rect x="14" y="19" width="22" height="3" rx="1.5" fill={ACCENT} fillOpacity="0.4" />
      <rect x="14" y="27" width="16" height="3" rx="1.5" fill={ACCENT} fillOpacity="0.4" />
      <rect x="14" y="35" width="24" height="3" rx="1.5" fill={ACCENT} fillOpacity="0.4" />
      <rect x="14" y="43" width="14" height="3" rx="1.5" fill={ACCENT} fillOpacity="0.4" />
      {/* Fork (left) */}
      <rect x="0.5" y="14" width="2.5" height="22" rx="1.25" fill={ACCENT} />
      <rect x="0.5" y="9"  width="1.5" height="9"  rx="0.75" fill={ACCENT} />
      <rect x="3"   y="9"  width="1.5" height="9"  rx="0.75" fill={ACCENT} />
      {/* Knife (right) */}
      <rect x="53" y="14" width="2.5" height="22" rx="1.25" fill={ACCENT} />
      <path d="M53 9 L55.5 15 L55.5 20 L53 20 Z" fill={ACCENT} fillOpacity="0.75" />
    </svg>
  );
}

function LegoPopup() {
  const colors = ["#E3000B", "#006DB7", "#FFD700", "#00A650"];
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
      <Image src="/logo.svg" alt="" width={46} height={38} priority />
      <div style={{ display: "flex", gap: "4px" }}>
        {colors.map((color, i) => (
          <div
            key={i}
            style={{
              width: 11,
              height: 11,
              borderRadius: 2,
              background: color,
              boxShadow: "inset 0 -2px 0 rgba(0,0,0,0.18)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 2,
                left: "50%",
                transform: "translateX(-50%)",
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.35)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Shared reveal transition ────────────────────────────────────────────────

const REVEAL = {
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const POPUP_SPRING = {
  type: "spring" as const,
  stiffness: 370,
  damping: 22,
  mass: 0.9,
};

// ── Simple (non-identity) reveal section ───────────────────────────────────

function RevealSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const hasEntered = useInView(ref, { once: true, amount: 0.18 });

  return (
    <section
      ref={ref}
      className="h-screen flex items-center px-16"
    >
      <motion.div
        className="max-w-[930px] mx-auto w-full"
        initial={reducedMotion ? REVEAL.visible : REVEAL.hidden}
        animate={reducedMotion || hasEntered ? REVEAL.visible : REVEAL.hidden}
        transition={REVEAL.transition}
      >
        {children}
      </motion.div>
    </section>
  );
}

// ── Identity section (with popup) ──────────────────────────────────────────

type PopupFC = () => React.ReactElement;

function IdentitySection({
  before,
  phrase,
  after,
  Popup,
}: {
  before: string;
  phrase: string;
  after: string;
  Popup: PopupFC;
}) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const hasEntered = useInView(ref, { once: true, amount: 0.18 });
  const isActive   = useInView(ref, { once: false, amount: 0.45 });

  const showPopup = reducedMotion || isActive;

  return (
    <section
      ref={ref}
      className="h-screen flex items-center px-16"
    >
      <motion.div
        className="max-w-[930px] mx-auto w-full"
        initial={reducedMotion ? REVEAL.visible : REVEAL.hidden}
        animate={reducedMotion || hasEntered ? REVEAL.visible : REVEAL.hidden}
        transition={REVEAL.transition}
      >
        <h3 className="text-h3">
          {before}
          <span style={{ position: "relative", display: "inline-block" }}>
            {/* Popup floats above the key phrase */}
            {reducedMotion ? (
              <span
                className="absolute scale-75 md:scale-100"
                style={{
                  bottom: "calc(100% + 10px)",
                  left: 0,
                  transformOrigin: "bottom left",
                }}
              >
                <Popup />
              </span>
            ) : (
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    key="popup"
                    className="absolute scale-75 md:scale-100"
                    style={{
                      bottom: "calc(100% + 10px)",
                      left: 0,
                      transformOrigin: "bottom left",
                      display: "inline-block",
                    }}
                    initial={{ opacity: 0, y: 12, scale: 0.78 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.88 }}
                    transition={{ ...POPUP_SPRING, delay: 0.25 }}
                  >
                    <Popup />
                  </motion.span>
                )}
              </AnimatePresence>
            )}

            {/* Key phrase — bold, shifts to accent when active */}
            <span
              style={{
                fontWeight: 700,
                color: showPopup ? ACCENT : "inherit",
                transition: "color 250ms ease",
              }}
            >
              {phrase}
            </span>
          </span>
          {after}
        </h3>
      </motion.div>
    </section>
  );
}

// ── Main export ─────────────────────────────────────────────────────────────

export default function HomeIntro() {
  return (
    <>
      {/* Section 1 — Intro */}
      <RevealSection>
        <h1 className="text-h1">hey! i&apos;m simi,</h1>
        <h1 className="text-h1">and i make a lot of things.</h1>

        {/* keep scrolling + skip link — same row, 40px apart */}
        <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <ChevronDown size={16} strokeWidth={1.5} color="#363636" />
            </motion.div>
            <span className="text-label-l3" style={{ color: "#363636" }}>keep scrolling</span>
          </div>

          <a
            href="#work"
            className="text-label-l3"
            style={{
              color: "#232323",
              textDecoration: "none",
              borderBottom: "1px solid transparent",
              transition: "border-color 150ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#232323")}
            onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "transparent")}
          >
            skip to my work →
          </a>
        </div>
      </RevealSection>

      {/* Section 2 — Product designer */}
      <IdentitySection
        before="a "
        phrase="product designer"
        after=" who thinks about the business, not just the screens."
        Popup={DashboardPopup}
      />

      {/* Section 3 — Photographer */}
      <IdentitySection
        before="a "
        phrase="photographer"
        after=" who learned how to frame a story."
        Popup={CameraPopup}
      />

      {/* Section 4 — Restaurant owner */}
      <IdentitySection
        before="a "
        phrase="restaurant owner"
        after=" who notices people, service, and small details."
        Popup={MenuPopup}
      />

      {/* Section 5 — Lego builder */}
      <IdentitySection
        before="a "
        phrase="lego builder"
        after=" who knows every piece has a job."
        Popup={LegoPopup}
      />

      {/* Section 6 — Closer */}
      <RevealSection>
        <h3 className="text-h3">
          but most of my focus goes into{" "}
          <span style={{ color: ACCENT }}>making products</span>
          {". "}
          <strong>here&apos;s the work.</strong>
        </h3>
      </RevealSection>
    </>
  );
}
