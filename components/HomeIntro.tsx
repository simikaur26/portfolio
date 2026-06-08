"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

const ACCENT = "#232323";

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

// ── Constants ───────────────────────────────────────────────────────────────

const POPUP_SPRING = {
  type: "spring" as const,
  stiffness: 220,
  damping: 16,
  mass: 1.4,
};

const WORD_EASE = [0.16, 1, 0.3, 1] as const;

const LINE1 = ["hey,", "i'm", "simi."];
const LINE2 = ["i", "make", "a", "lot", "of", "things."];


// ── Chip ────────────────────────────────────────────────────────────────────

type PopupFC = () => React.ReactElement;

function Chip({
  label,
  Popup,
}: {
  label: string;
  Popup: PopupFC;
}) {
  const [hovered, setHovered] = useState(false);

  const showPopup = hovered;

  return (
    <span
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {showPopup && (
          <motion.span
            key="popup"
            style={{
              position: "absolute",
              top: "calc(100% + 10px)",
              left: "50%",
              transform: "translateX(-50%)",
              pointerEvents: "none",
              display: "inline-block",
            }}
            initial={{ opacity: 0, y: -14, scale: 0.6 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.88 }}
            transition={POPUP_SPRING}
          >
            <Popup />
          </motion.span>
        )}
      </AnimatePresence>
      <span
        className="chip-label"
        style={{
          color: showPopup ? ACCENT : "#232323",
          transition: "color 200ms ease",
        }}
      >
        {label}
      </span>
    </span>
  );
}

// ── Doodle layer ────────────────────────────────────────────────────────────

function DoodleLayer({ skip }: { skip: boolean }) {
  const BASE = 2.2;   // seconds — start after chips appear
  const DUR  = 0.35;  // seconds per mark
  const STEP = 0.36;  // seconds between mark starts (sequential chain)

  // Returns a motion.path for a straight line segment
  const L = (x1: number, y1: number, x2: number, y2: number, sw: number, mi: number) => (
    <motion.path
      d={`M ${x1} ${y1} L ${x2} ${y2}`}
      strokeWidth={sw}
      initial={{ pathLength: skip ? 1 : 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: DUR, delay: skip ? 0 : BASE + mi * STEP, ease: "easeInOut" }}
    />
  );

  // Returns a motion.path for an arbitrary SVG path
  const P = (d: string, sw: number, mi: number) => (
    <motion.path
      d={d}
      strokeWidth={sw}
      initial={{ pathLength: skip ? 1 : 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: DUR, delay: skip ? 0 : BASE + mi * STEP, ease: "easeInOut" }}
    />
  );

  return (
    <svg
      aria-hidden="true"
      className="doodle-layer"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Starburst large — far left, mid-height (80, 450), r=10 */}
      <g stroke={ACCENT} strokeLinecap="round" fill="none" opacity={0.65}>
        {L(70, 450, 90, 450, 2.5, 0)}
        {L(85, 441.3, 75, 458.7, 2.5, 0)}
        {L(75, 441.3, 85, 458.7, 2.5, 0)}
      </g>

      {/* Starburst small — far right, upper (1370, 350), r=6.3 */}
      <g stroke={ACCENT} strokeLinecap="round" fill="none" opacity={0.60}>
        {L(1363.7, 350, 1376.3, 350, 2.1, 1)}
        {L(1373.2, 344.5, 1366.8, 355.5, 2.1, 1)}
        {L(1366.8, 344.5, 1373.2, 355.5, 2.1, 1)}
      </g>

      {/* Loose circle — far left, lower (90, 678), r≈22 */}
      <g stroke={ACCENT} strokeLinecap="round" fill="none" opacity={0.70}>
        {P("M 113 675 C 111 656 102 652 90 653 C 76 654 67 664 68 678 C 69 693 79 704 92 702 C 106 700 114 690 113 675 Z", 2.2, 2)}
      </g>

      {/* Curved arrow — top right (1290, 185), pointing right-down */}
      <g stroke={ACCENT} strokeLinecap="round" fill="none" opacity={0.65}>
        {P("M 1268 188 C 1274 175 1290 172 1302 181", 2.2, 3)}
        {P("M 1296 173 L 1302 181 L 1295 187", 2.2, 3)}
      </g>

      {/* Squiggle — bottom center-right (920, 770), 3 waves ~126px wide */}
      <g stroke={ACCENT} strokeLinecap="round" fill="none" opacity={0.60}>
        {P("M 857 770 C 866 759 878 781 899 770 C 913 759 927 781 941 770 C 955 759 969 781 983 770", 2.2, 4)}
      </g>

      {/* Plus — top left area (300, 155), arms 13px */}
      <g stroke={ACCENT} strokeLinecap="round" fill="none" opacity={0.70}>
        {L(300, 142, 300, 168, 2.5, 5)}
        {L(287, 155, 313, 155, 2.5, 5)}
      </g>

      {/* Diamond — bottom far right (1360, 740), half-size 13px */}
      <g stroke={ACCENT} strokeLinecap="round" fill="none" opacity={0.58}>
        {P("M 1360 727 L 1373 740 L 1360 753 L 1347 740 Z", 2.2, 6)}
      </g>
    </svg>
  );
}

// ── Doodle canvas ───────────────────────────────────────────────────────────

type CompletedStroke = {
  points: { x: number; y: number }[];
  completedAt: number;
  opacity: number;
};

// Canvas has pointer-events:none so chips beneath receive hover events.
// All drawing listeners attach to the container (section) element instead.
function DoodleCanvas({
  containerRef,
  onFirstInteraction,
}: {
  containerRef: React.RefObject<HTMLElement | null>;
  onFirstInteraction?: () => void;
}) {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const strokesRef  = useRef<CompletedStroke[]>([]);
  const activeRef   = useRef<{ x: number; y: number }[] | null>(null);

  // Keep canvas pixels in sync with element size
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const sync = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  // rAF draw loop — closure only touches local refs, no prop-ref capture issues
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let rafId: number;

    const loop = (timestamp: number) => {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = ACCENT;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        strokesRef.current = strokesRef.current.filter((s) => {
          s.opacity = Math.max(0, 1 - (timestamp - s.completedAt) / 3000);
          return s.opacity > 0;
        });
        for (const s of strokesRef.current) {
          if (s.points.length < 2) continue;
          ctx.globalAlpha = s.opacity * 0.7;
          ctx.beginPath();
          ctx.moveTo(s.points[0].x, s.points[0].y);
          for (let i = 1; i < s.points.length; i++) ctx.lineTo(s.points[i].x, s.points[i].y);
          ctx.stroke();
        }

        const active = activeRef.current;
        if (active && active.length >= 2) {
          ctx.globalAlpha = 0.7;
          ctx.beginPath();
          ctx.moveTo(active[0].x, active[0].y);
          for (let i = 1; i < active.length; i++) ctx.lineTo(active[i].x, active[i].y);
          ctx.stroke();
        }

        ctx.globalAlpha = 1;
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Attach drawing + touch listeners to the container (not the canvas)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pt = (clientX: number, clientY: number) => {
      const r = container.getBoundingClientRect();
      return { x: clientX - r.left, y: clientY - r.top };
    };
    const commit = () => {
      if (activeRef.current && activeRef.current.length >= 2) {
        strokesRef.current.push({ points: activeRef.current, completedAt: performance.now(), opacity: 1 });
      }
      activeRef.current = null;
    };

    const onMouseDown  = (e: MouseEvent) => { onFirstInteraction?.(); activeRef.current = [pt(e.clientX, e.clientY)]; };
    const onMouseMove  = (e: MouseEvent) => { if (e.buttons !== 1 || !activeRef.current) return; activeRef.current.push(pt(e.clientX, e.clientY)); };
    const onTouchStart = (e: TouchEvent) => { e.preventDefault(); onFirstInteraction?.(); activeRef.current = [pt(e.touches[0].clientX, e.touches[0].clientY)]; };
    const onTouchMove  = (e: TouchEvent) => { e.preventDefault(); if (activeRef.current) activeRef.current.push(pt(e.touches[0].clientX, e.touches[0].clientY)); };

    container.addEventListener("mousedown",  onMouseDown);
    container.addEventListener("mousemove",  onMouseMove);
    container.addEventListener("mouseup",    commit);
    container.addEventListener("mouseleave", commit);
    container.addEventListener("touchstart", onTouchStart, { passive: false });
    container.addEventListener("touchmove",  onTouchMove,  { passive: false });
    container.addEventListener("touchend",   commit);
    return () => {
      container.removeEventListener("mousedown",  onMouseDown);
      container.removeEventListener("mousemove",  onMouseMove);
      container.removeEventListener("mouseup",    commit);
      container.removeEventListener("mouseleave", commit);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove",  onTouchMove);
      container.removeEventListener("touchend",   commit);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 2, pointerEvents: "none", display: "block" }}
    />
  );
}

// ── Hero cursor ─────────────────────────────────────────────────────────────

const INTERACTIVE = 'h1, .chip-label, .draw-prompt-text, .chevron-hint, a, button';

function HeroCursor({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const cursorRef  = useRef<HTMLDivElement>(null);
  const [visible,  setVisible]  = useState(false);
  const [isCircle, setIsCircle] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top  = `${e.clientY}px`;
      }
    };
    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) setIsCircle(true);
    };
    const onMouseOut = (e: MouseEvent) => {
      const to = e.relatedTarget as Element | null;
      if (!to || !to.closest(INTERACTIVE)) setIsCircle(false);
    };
    const onEnter = () => setVisible(true);
    const onLeave = () => { setVisible(false); setIsCircle(false); };

    container.addEventListener("mousemove",  onMouseMove);
    container.addEventListener("mouseover",  onMouseOver);
    container.addEventListener("mouseout",   onMouseOut);
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);
    return () => {
      container.removeEventListener("mousemove",  onMouseMove);
      container.removeEventListener("mouseover",  onMouseOver);
      container.removeEventListener("mouseout",   onMouseOut);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!visible) return null;

  return (
    <div
      ref={cursorRef}
      style={{ position: "fixed", pointerEvents: "none", zIndex: 999, left: 0, top: 0, transform: "translate(-50%, -50%)" }}
    >
      <div style={{ position: "relative", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {!isCircle && (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ position: "absolute" }}>
            <path d="M3 14 L6 17 L17 6 L14 3 Z" fill="#232323" />
            <path d="M3 14 L6 17 L4.5 18.5 Z" fill="#232323" opacity="0.6" />
            <line x1="14" y1="3" x2="17" y2="6" stroke="white" strokeWidth="1" />
          </svg>
        )}
        <AnimatePresence>
          {isCircle && (
            <motion.div
              key="circle"
              style={{ position: "absolute", width: 10, height: 10, borderRadius: "50%", background: "#232323" }}
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.3, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── Main export ─────────────────────────────────────────────────────────────

const CHIPS: Array<{ label: string; Popup: PopupFC }> = [
  { label: "product designer", Popup: DashboardPopup },
  { label: "photographer",     Popup: CameraPopup },
  { label: "restaurant owner", Popup: MenuPopup },
  { label: "lego builder",     Popup: LegoPopup },
];

export default function HomeIntro() {
  const reducedMotion = useReducedMotion();
  const skip = !!reducedMotion;
  const [promptVisible, setPromptVisible] = useState(true);
  const [promptReady, setPromptReady] = useState(false);
  const [pulseActive, setPulseActive] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  // Trigger the draw-on animation 2s after mount (after headline words build in)
  useEffect(() => {
    if (skip) return;
    const t = setTimeout(() => setPromptReady(true), 2000);
    return () => clearTimeout(t);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function renderWord(word: string, globalIdx: number) {
    if (skip) {
      return <span key={`w-${globalIdx}`} style={{ display: "inline-block" }}>{word}</span>;
    }
    return (
      <motion.span
        key={`w-${globalIdx}`}
        style={{ display: "inline-block" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: WORD_EASE, delay: globalIdx * 0.1 }}
      >
        {word}
      </motion.span>
    );
  }

  return (
    <section
      id="hero-intro"
      data-hero
      ref={sectionRef}
      className="flex flex-col items-center justify-center text-center px-16"
      style={{ height: "calc(100vh - var(--nav-height))", position: "relative" }}
    >
      <HeroCursor containerRef={sectionRef} />
      <DoodleLayer skip={skip} />
      <DoodleCanvas containerRef={sectionRef} onFirstInteraction={() => setPromptVisible(false)} />

      {/* Draw prompt — first in-flow flex item, above the headline */}
      {promptVisible && (
        skip ? (
          <div style={{ marginBottom: 24, alignSelf: "center", position: "relative", zIndex: 1 }}>
            <span
              className={`${caveat.className} draw-prompt-text`}
              style={{ fontFamily: "'Caveat', cursive", fontSize: "24px", color: "#888780" }}
            >
              draw something here
            </span>
          </div>
        ) : (
          <motion.div
            style={{ marginBottom: 24, alignSelf: "center", position: "relative", zIndex: 1 }}
            animate={{ opacity: pulseActive ? [1, 0.5, 1] : 1 }}
            transition={
              pulseActive
                ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.01 }
            }
          >
            <motion.div
              style={{ overflow: "hidden", display: "inline-block" }}
              initial={{ width: 0 }}
              animate={{ width: promptReady ? 220 : 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              onAnimationComplete={() => { if (promptReady) setPulseActive(true); }}
            >
              <span
                className={`${caveat.className} draw-prompt-text`}
                style={{ fontFamily: "'Caveat', cursive", fontSize: "24px", color: "#888780", display: "block", whiteSpace: "nowrap" }}
              >
                draw something here
              </span>
            </motion.div>
          </motion.div>
        )
      )}

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Headline */}
        <h1 className="text-h1">
          {LINE1.map((word, i) => (
            <React.Fragment key={i}>
              {renderWord(word, i)}
              {i < LINE1.length - 1 && " "}
            </React.Fragment>
          ))}
        </h1>
        <h1 className="text-h1">
          {LINE2.map((word, i) => (
            <React.Fragment key={i}>
              {renderWord(word, LINE1.length + i)}
              {i < LINE2.length - 1 && " "}
            </React.Fragment>
          ))}
        </h1>

        {/* Identity chips */}
        <div
          style={{
            marginTop: 28,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "nowrap",
          }}
        >
          {CHIPS.map((chip, i) => (
            <React.Fragment key={chip.label}>
              <Chip label={chip.label} Popup={chip.Popup} />
              {i < CHIPS.length - 1 && (
                <motion.span
                  style={{ color: "#BBBDBC", padding: "0 12px", userSelect: "none" }}
                  initial={skip ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: skip ? 0 : 1.65 + i * 0.1 }}
                >
                  /
                </motion.span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Chevron pinned to bottom center */}
      <motion.div
        className="chevron-hint"
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 1 }}
        initial={skip ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: skip ? 0 : 2.2 }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} strokeWidth={1.5} color="#363636" />
        </motion.div>
      </motion.div>
    </section>
  );
}
