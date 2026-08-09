"use client";

import React, { useState, useEffect, useRef } from "react";

/**
 * Design tokens from the portfolio's design system
 */
const tokens = {
  bg: "#FFFFFF",
  surface: "#FAF9F6",
  surfaceLine: "#BBBDBC",
  text: "#232323",
  muted: "#363636",
  faint: "#8A8A86",
  terracotta: "#993C1D",
  alert: "#C1432E",
  alertDim: "rgba(193,67,46,0.08)",
};

/**
 * Fires once when the element scrolls into view.
 * Everything that "reveals" on scroll uses this.
 */
function useReveal(threshold = 0.2): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function Reveal({
  children,
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Eyebrow({
  children,
  n,
  color,
}: {
  children: React.ReactNode;
  n?: string;
  color?: string;
}) {
  return (
    <div
      style={{
        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        fontSize: 11,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: color || tokens.terracotta,
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      {n && <span style={{ opacity: 0.55 }}>{n}</span>}
      <span>{children}</span>
    </div>
  );
}

function HeroVideo() {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 12,
        border: `1px solid ${tokens.surfaceLine}`,
        overflow: "hidden",
        background: tokens.surface,
        boxShadow: "0 24px 48px -24px rgba(35,35,35,0.18)",
      }}
    >
      <video
        src="/stellantis/images/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          display: "block",
          borderRadius: 12,
        }}
      />
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        fontSize: 12,
        color: tokens.muted,
        border: `1px solid ${tokens.surfaceLine}`,
        borderRadius: 999,
        padding: "6px 14px",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

const DECISIONS = [
  {
    n: "01",
    title: "Red overlay + blur",
    body: "The whole display darkens and reddens so the alert isn't a thing on screen, it's the only thing on screen.",
    tries: [
      "Red overlay on the left and right — too abrupt, felt like a crash, not a warning",
      "overlay towards the bottom of the cluster — didn't read as urgent enough",
    ],
    shipped: "tinting the center red gave the alert visual weight in the cluster's fixed grid.",
  },
  {
    n: "02",
    title: "Two words, not a paragraph",
    body: '"Take control." No explanation. A wheel icon with hands going back on it says the rest.',
    tries: [
      "Icon and mutliline explanation — too much to read in time",
      "played around with icons — it looked too busy",
    ],
    shipped: "Two words are fast to read and the icon tells the action—no ambiguity when a driver's attention is already split.",
  },
];

function TryThumb({
  n,
  index,
  label,
  onOpen,
}: {
  n: string;
  index: number;
  label: string;
  onOpen: (item: { n: string; index: number; label: string }) => void;
}) {
  const [hover, setHover] = useState(false);

  const attemptMap: { [key: string]: { [key: number]: string } } = {
    "01": {
      0: "/stellantis/images/decision-01-attempt-1-solid-overlay.svg",
      1: "/stellantis/images/decision-01-attempt-2-border-flash.svg",
    },
    "02": {
      0: "/stellantis/images/decision-02-attempt-1-full-text.svg",
      1: "/stellantis/images/decision-02-attempt-2-icon-only.svg",
    },
  };

  const src = attemptMap[n]?.[index];

  return (
    <div
      onClick={() => onOpen({ n, index, label })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen({ n, index, label });
      }}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        cursor: "pointer",
        outline: "none",
      }}
    >
      <div
        style={{
          width: 64,
          height: 48,
          flexShrink: 0,
          borderRadius: 3,
          border: `1px solid ${hover ? tokens.text : tokens.surfaceLine}`,
          background: tokens.surface,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "border-color 200ms ease, transform 200ms ease",
          transform: hover ? "scale(1.05)" : "scale(1)",
          overflow: "hidden",
        }}
      >
        {src ? (
          <img
            src={src}
            alt={`Decision ${n} attempt v${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <span
            style={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize: 9,
              color: hover ? tokens.text : tokens.muted,
              letterSpacing: "0.04em",
            }}
          >
            v{index + 1}
          </span>
        )}
      </div>
      <div
        style={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize: 12.5,
          color: hover ? tokens.text : tokens.muted,
          lineHeight: 1.5,
          paddingTop: 4,
        }}
      >
        {label}
      </div>
    </div>
  );
}

interface LightboxItem {
  n: string;
  index: number;
  label: string;
}

function Lightbox({
  item,
  onClose,
}: {
  item: LightboxItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(35,35,35,0.88)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(20px, 6vw, 64px)",
        animation: "lightboxFade 200ms ease",
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: "absolute",
          top: "clamp(16px, 4vw, 32px)",
          right: "clamp(16px, 4vw, 32px)",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.3)",
          color: "#FAF9F6",
          borderRadius: 999,
          width: 40,
          height: 40,
          fontSize: 18,
          cursor: "pointer",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        }}
      >
        ×
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "min(900px, 88vw)",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            aspectRatio: "4 / 3",
            borderRadius: 4,
            border: `1px solid rgba(255,255,255,0.35)`,
            background: "rgba(255,255,255,0.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {(() => {
            const shippedMap: { [key: string]: string } = {
              "01": "/stellantis/images/decision-01-red-overlay.svg",
              "02": "/stellantis/images/decision-02-take-control.svg",
            };
            const attemptMap: { [key: string]: { [key: number]: string } } = {
              "01": {
                0: "/stellantis/images/decision-01-attempt-1-solid-overlay.svg",
                1: "/stellantis/images/decision-01-attempt-2-border-flash.svg",
              },
              "02": {
                0: "/stellantis/images/decision-02-attempt-1-full-text.svg",
                1: "/stellantis/images/decision-02-attempt-2-icon-only.svg",
              },
            };
            const src =
              item.index === -1
                ? shippedMap[item.n]
                : attemptMap[item.n]?.[item.index];
            return src ? (
              <img
                src={src}
                alt={`Decision ${item.n}${item.index === -1 ? " final design" : ` attempt v${item.index + 1}`}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: "16px",
                }}
              />
            ) : (
              <span
                style={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "0.06em",
                }}
              >
                [ IMAGE — DECISION {item.n}
                {item.index === -1 ? "" : `, ATTEMPT v${item.index + 1}`} ]
              </span>
            );
          })()}
        </div>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            alignItems: "baseline",
            gap: 10,
          }}
        >
          <span
            style={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize: 11,
              letterSpacing: "0.08em",
              color: "rgba(255,255,255,0.55)",
              textTransform: "uppercase",
            }}
          >
            Decision {item.n}
            {item.index === -1 ? " · Final Design" : ` · v${item.index + 1}`}
          </span>
        </div>
        <div
          style={{
            fontFamily: "'CanelaText', serif",
            fontStyle: "italic",
            fontSize: 20,
            color: "#FAF9F6",
            marginTop: 6,
            maxWidth: 640,
          }}
        >
          {item.label}
        </div>
      </div>
    </div>
  );
}

function DecisionImage({
  n,
  onClick,
}: {
  n: string;
  onClick?: () => void;
}) {
  const imageMap: { [key: string]: string } = {
    "01": "/stellantis/images/decision-01-red-overlay.svg",
    "02": "/stellantis/images/decision-02-take-control.svg",
  };

  const src = imageMap[n];

  return (
    <div
      onClick={onClick}
      style={{
        width: "100%",
        aspectRatio: "4 / 3",
        borderRadius: 4,
        border: `1px solid ${tokens.surfaceLine}`,
        background: tokens.surface,
        overflow: "hidden",
        cursor: onClick ? "pointer" : "default",
      }}
    >
      {src ? (
        <img
          src={src}
          alt={`Decision ${n} final design`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            padding: "16px",
          }}
        />
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <span
            style={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize: 12,
              color: tokens.muted,
              letterSpacing: "0.06em",
            }}
          >
            [ IMAGE — DECISION {n} ]
          </span>
        </div>
      )}
    </div>
  );
}

const ITERATIONS = [
  {
    n: "01",
    title: "Stellantis's grid",
    body: "Started with their fixed layout: upper display, center display, lower display, safe areas on both sides. Not much room to be clever.",
  },
  {
    n: "02",
    title: "First pass, analog",
    body: "Round dials, classic gauge cluster. Functional, safe, forgettable. Didn't feel like a Jeep yet.",
  },
  {
    n: "03",
    title: "Adding personality",
    body: "Swapped in digital gauges shaped to the Jeep silhouette. Better, but still no story for what happens in an emergency.",
  },
  {
    n: "04",
    title: "Final cluster",
    body: "Glowing digital gauges, red piping standing by, ready to take over the whole frame the moment something goes wrong.",
  },
];

function IterationCard({
  n,
  title,
  body,
  emphasis,
}: {
  n: string;
  title: string;
  body: string;
  emphasis?: boolean;
}) {
  const imageMap: { [key: string]: string } = {
    "01": "/stellantis/images/iteration-01-stellantis-layout-grids.svg",
    "02": "/stellantis/images/iteration-02-analog-first-pass.svg",
    "03": "/stellantis/images/iteration-03-jeep-personality.svg",
    "04": "/stellantis/images/iteration-04-final-cluster.svg",
  };

  const src = imageMap[n];

  return (
    <div
      style={{
        flexShrink: 0,
        opacity: emphasis ? 1 : 0.3,
        transform: emphasis ? "scale(1)" : "scale(0.92)",
        transition: "opacity 450ms ease, transform 450ms ease",
      }}
    >
      <div
        style={{
          height: "min(66vh, 680px)",
          aspectRatio: "16 / 10",
          borderRadius: 12,
          border: `1px solid ${tokens.surfaceLine}`,
          background: tokens.surface,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 22,
          overflow: "hidden",
        }}
      >
        {src ? (
          <img
            src={src}
            alt={`Iteration ${n}: ${title}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              padding: "16px",
              borderRadius: 12,
            }}
          />
        ) : (
          <span
            style={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize: 13,
              color: tokens.muted,
              letterSpacing: "0.06em",
            }}
          >
            [ IMAGE {n} ]
          </span>
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 14,
          marginBottom: 6,
        }}
      >
        <span
          style={{
            fontFamily: "'CanelaText', serif",
            fontStyle: "italic",
            fontSize: 24,
            color: tokens.alert,
          }}
        >
          {n}
        </span>
        <span
          style={{
            fontFamily: "'CanelaText', serif",
            fontWeight: 300,
            fontSize: 24,
            color: tokens.text,
          }}
        >
          {title}
        </span>
      </div>
      <div
        style={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize: 14,
          color: tokens.muted,
          lineHeight: 1.6,
          maxWidth: 520,
        }}
      >
        {body}
      </div>
    </div>
  );
}

/**
 * Pins the section in place while you scroll down, and translates
 * the card track horizontally in step with that scroll.
 */
function IterationsScroll() {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    function onScroll() {
      const outer = outerRef.current;
      const track = trackRef.current;
      if (!outer || !track) return;

      const rect = outer.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const totalScrollable = outer.offsetHeight - viewportH;
      if (totalScrollable <= 0) return;

      const scrolled = Math.min(Math.max(-rect.top, 0), totalScrollable);
      const progress = scrolled / totalScrollable;
      const maxTranslate = Math.max(track.scrollWidth - outer.clientWidth, 0);

      setTranslate(-progress * maxTranslate);
      setActive(
        Math.min(
          ITERATIONS.length - 1,
          Math.floor(progress * ITERATIONS.length)
        )
      );
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={outerRef}
      style={{
        position: "relative",
        height: `${ITERATIONS.length * 100}vh`,
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: 96,
            transform: `translateX(${translate}px)`,
            paddingLeft: "clamp(20px, 6vw, 64px)",
            paddingRight: "10vw",
          }}
        >
          {ITERATIONS.map((it, i) => (
            <IterationCard
              key={it.n}
              {...it}
              emphasis={i === active}
            />
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 6,
          }}
        >
          {ITERATIONS.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === active ? 18 : 6,
                height: 6,
                borderRadius: 999,
                background: i === active ? tokens.alert : tokens.surfaceLine,
                transition: "all 400ms ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface DecisionData {
  n: string;
  title: string;
  body: string;
  tries: string[];
  shipped: string;
}

function DecisionBlock({
  decision,
  onOpenLightbox,
}: {
  decision: DecisionData;
  onOpenLightbox: (item: LightboxItem) => void;
}) {
  const [activeTab, setActiveTab] = useState<"shipped" | 0 | 1>("shipped");

  const imageMap: { [key: string]: string } = {
    "01": "/stellantis/images/decision-01-red-overlay.svg",
    "02": "/stellantis/images/decision-02-take-control.svg",
  };

  const attemptMap: { [key: string]: { [key: number]: string } } = {
    "01": {
      0: "/stellantis/images/decision-01-attempt-1-solid-overlay.svg",
      1: "/stellantis/images/decision-01-attempt-2-border-flash.svg",
    },
    "02": {
      0: "/stellantis/images/decision-02-attempt-1-full-text.svg",
      1: "/stellantis/images/decision-02-attempt-2-icon-only.svg",
    },
  };

  const currentCaption =
    activeTab === "shipped" ? decision.shipped : decision.tries[activeTab];
  const currentImage =
    activeTab === "shipped"
      ? imageMap[decision.n]
      : attemptMap[decision.n]?.[activeTab];

  const handleImageClick = () => {
    if (activeTab !== "shipped") {
      onOpenLightbox({
        n: decision.n,
        index: activeTab,
        label: decision.tries[activeTab],
      });
    }
  };

  return (
    <div style={{ marginBottom: "clamp(32px, 5vw, 56px)" }}>
      {/* Decision text block */}
      <div style={{ marginBottom: 32 }}>
        <div
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize: 11,
            letterSpacing: "0.12em",
            color: tokens.alert,
            fontWeight: 700,
            marginBottom: 10,
            textTransform: "uppercase",
          }}
        >
          Decision {decision.n}
        </div>
        <div
          style={{
            borderLeft: `2px solid ${tokens.alert}`,
            paddingLeft: 20,
          }}
        >
          <div
            style={{
              fontFamily: "'CanelaText', serif",
              fontWeight: 300,
              fontSize: "clamp(28px, 4vw, 40px)",
              color: tokens.text,
              marginBottom: 14,
              lineHeight: 1.15,
            }}
          >
            {decision.title}
          </div>
          <div
            style={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize: 15,
              color: tokens.muted,
              lineHeight: 1.7,
              maxWidth: 620,
            }}
          >
            {decision.body}
          </div>
        </div>
      </div>

      {/* Tab buttons */}
      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 24,
          flexWrap: "wrap",
        }}
      >
        {decision.tries.map((_, i) => (
          <button
            key={`v${i + 1}`}
            onClick={() => setActiveTab(i as 0 | 1)}
            style={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "8px 16px",
              borderRadius: 20,
              border:
                activeTab === i
                  ? `2px solid ${tokens.alert}`
                  : `1px solid ${tokens.surfaceLine}`,
              background: "transparent",
              color: activeTab === i ? tokens.alert : tokens.muted,
              cursor: "pointer",
              transition: "all 200ms ease",
            }}
          >
            v{i + 1}
          </button>
        ))}
        <button
          onClick={() => setActiveTab("shipped")}
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: "8px 16px",
            borderRadius: 20,
            border:
              activeTab === "shipped"
                ? `2px solid ${tokens.alert}`
                : `1px solid ${tokens.surfaceLine}`,
            background: "transparent",
            color: activeTab === "shipped" ? tokens.alert : tokens.muted,
            cursor: "pointer",
            transition: "all 200ms ease",
          }}
        >
          Shipped
        </button>
      </div>

      {/* Caption */}
      <div style={{ marginBottom: 8 }}>
        <div
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize: 11,
            letterSpacing: "0.1em",
            color: tokens.alert,
            fontWeight: 700,
            marginBottom: 8,
            textTransform: "uppercase",
          }}
        >
          {activeTab === "shipped" ? "What shipped" : "Rejected"}
        </div>
        <div
          style={{
            fontFamily: "'CanelaText', serif",
            fontStyle: "italic",
            fontSize: 19,
            color: tokens.text,
            lineHeight: 1.5,
            maxWidth: 460,
            opacity: 1,
            transition: "opacity 300ms ease",
          }}
        >
          {currentCaption}
        </div>
      </div>

      {/* Image */}
      <div
        onClick={handleImageClick}
        style={{
          width: "100%",
          aspectRatio: "4 / 3",
          maxHeight: "400px",
          borderRadius: "12px",
          overflow: "hidden",
          cursor: activeTab !== "shipped" ? "pointer" : "default",
          opacity: 1,
          transition: "opacity 300ms ease",
        }}
      >
        {currentImage ? (
          <img
            src={currentImage}
            alt={`Decision ${decision.n}${activeTab === "shipped" ? " final design" : ` attempt v${activeTab + 1}`}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

function Quote({
  text,
  who,
}: {
  text: string;
  who: string;
}) {
  return (
    <div
      style={{
        borderLeft: `2px solid ${tokens.alert}`,
        paddingLeft: 16,
      }}
    >
      <div
        style={{
          fontFamily: "'CanelaText', serif",
          fontStyle: "italic",
          fontSize: 16,
          color: tokens.text,
          lineHeight: 1.5,
        }}
      >
        "{text}"
      </div>
      <div
        style={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize: 11,
          letterSpacing: "0.08em",
          color: tokens.muted,
          marginTop: 8,
          textTransform: "uppercase",
        }}
      >
        {who}
      </div>
    </div>
  );
}

function Bar({
  label,
  value,
  max,
  color,
  delay = 0,
}: {
  label: string;
  value: number;
  max: number;
  color: string;
  delay?: number;
}) {
  const [ref, visible] = useReveal(0.4);
  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize: 12,
          color: tokens.muted,
          marginBottom: 6,
        }}
      >
        <span>{label}</span>
        <span style={{ color: tokens.text }}>{value}/7</span>
      </div>
      <div
        style={{
          height: 6,
          borderRadius: 3,
          background: tokens.surfaceLine,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: visible ? `${(value / max) * 100}%` : "0%",
            background: color,
            borderRadius: 3,
            transition: `width 900ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

function RecCard({ title, body }: { title: string; body: string }) {
  return (
    <div
      style={{
        padding: "20px 0",
        borderTop: `1px solid ${tokens.surfaceLine}`,
      }}
    >
      <div
        style={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          color: tokens.text,
          marginBottom: 6,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize: 13.5,
          color: tokens.muted,
          lineHeight: 1.6,
        }}
      >
        {body}
      </div>
    </div>
  );
}

export default function StellantisCaseStudy() {
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null);

  return (
    <div
      style={{
        background: tokens.bg,
        color: tokens.text,
        minHeight: "100vh",
        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
      }}
    >
      <style>{`
        @keyframes lightboxFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        * { box-sizing: border-box; }
      `}</style>


      {/* Hero */}
      <div
        style={{
          padding: "clamp(40px, 8vw, 96px) clamp(20px, 6vw, 64px) 0",
          maxWidth: 1080,
          margin: "0 auto",
        }}
      >
        <Eyebrow>Stellantis × Mcity × University of Michigan — March 2026</Eyebrow>
        <h1
          style={{
            fontFamily: "'CanelaText', serif",
            fontWeight: 300,
            fontSize: "clamp(44px, 9vw, 96px)",
            lineHeight: 0.98,
            margin: "18px 0 20px",
          }}
        >
          Take control.
        </h1>
        <p
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize: "clamp(15px, 2vw, 18px)",
            color: tokens.muted,
            maxWidth: 560,
            lineHeight: 1.6,
            marginBottom: 40,
          }}
        >
          Designing the five seconds when a self-driving Jeep hands the wheel
          back to a human, and testing whether the design actually works in a
          VR simulator on a real test track.
        </p>

        <div style={{ marginBottom: "clamp(48px, 8vw, 88px)" }}>
          <HeroVideo />
          <div
            style={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize: 11,
              color: tokens.muted,
              marginTop: 10,
              textAlign: "center",
              letterSpacing: "0.04em",
            }}
          >
            The instrument cluster moving between active and alert states
          </div>
        </div>
      </div>

      {/* Scenario */}
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 clamp(20px, 6vw, 64px) clamp(48px, 8vw, 88px)",
          display: "grid",
          gap: 20,
        }}
        className="grid-cols-1 md:grid-cols-2"
      >
        <div>
          <Eyebrow n="01">The moment</Eyebrow>
          <h2
            style={{
              fontFamily: "'CanelaText', serif",
              fontWeight: 300,
              fontSize: "clamp(26px, 4vw, 36px)",
              margin: "12px 0 16px",
            }}
          >
            The 5 seconds that matter
          </h2>
        </div>
        <div>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: tokens.muted,
              marginBottom: 16,
            }}
          >
            You're in a Grand Cherokee, hands off the wheel, L3 autonomy
            driving. You're following a semi-truck down the highway. The
            truck swerves. Behind it, a disabled vehicle, stopped dead in
            your lane.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: tokens.muted }}>
            The car knows before you do. The question is whether it can tell
            you fast enough, and clearly enough, for you to take over. That
            was the brief: not "design a warning light," but design the
            moment a car and a human trade control of a 4,500-pound vehicle.
          </p>
        </div>
      </div>

      {/* Constraints */}
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 clamp(20px, 6vw, 64px) clamp(48px, 8vw, 88px)",
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <Chip>Must feel like Jeep — bold, stable</Chip>
        <Chip>Must meet automotive safety standards</Chip>
        <Chip>Must fit Stellantis's fixed cluster grid</Chip>
      </div>

      {/* Iterations intro */}
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 clamp(20px, 6vw, 64px)",
        }}
      >
        <Eyebrow n="02">Getting there</Eyebrow>
        <h2
          style={{
            fontFamily: "'CanelaText', serif",
            fontWeight: 300,
            fontSize: "clamp(26px, 4vw, 36px)",
            margin: "12px 0 8px",
          }}
        >
          It took a few passes
        </h2>
        <p
          style={{
            fontSize: 14.5,
            color: tokens.muted,
            maxWidth: 560,
            lineHeight: 1.7,
            marginBottom: 8,
          }}
        >
          Stellantis handed us a fixed grid, not a blank page. Getting from
          that grid to something that felt like a Jeep, and could still turn
          into an alert, took a few rounds.
        </p>
      </div>

      {/* Iterations — full width, unconstrained */}
      <div style={{ marginBottom: "clamp(56px, 8vw, 96px)" }}>
        <IterationsScroll />
      </div>

      {/* Design decisions */}
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 clamp(20px, 6vw, 64px) clamp(56px, 8vw, 96px)",
        }}
      >
        <Eyebrow n="03">How we designed the handoff</Eyebrow>
        <h2
          style={{
            fontFamily: "'CanelaText', serif",
            fontWeight: 300,
            fontSize: "clamp(26px, 4vw, 36px)",
            margin: "12px 0 36px",
          }}
        >
          Two decisions that carried the alert
        </h2>
        <div
          style={{
            maxWidth: 930,
            margin: "0 auto",
          }}
        >
          {DECISIONS.map((decision) => (
            <DecisionBlock
              key={decision.n}
              decision={decision}
              onOpenLightbox={setLightbox}
            />
          ))}
        </div>
      </div>

      {/* Final Design */}
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "clamp(24px, 4vw, 48px) clamp(20px, 6vw, 64px)",
        }}
      >
        <Eyebrow n="04">The final outcome</Eyebrow>
        <h2
          style={{
            fontFamily: "'CanelaText', serif",
            fontWeight: 300,
            fontSize: "clamp(26px, 4vw, 36px)",
            margin: "12px 0 32px",
          }}
        >
          The cluster under alert
        </h2>
        <div
          style={{
            borderRadius: "12px",
            overflow: "hidden",
            marginBottom: 20,
          }}
        >
          <video
            src="/stellantis/images/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
            }}
          />
        </div>
        <div
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize: 11,
            letterSpacing: "0.1em",
            color: tokens.muted,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Video
        </div>
        <p
          style={{
            fontFamily: "'CanelaText', serif",
            fontStyle: "italic",
            fontSize: 19,
            color: tokens.text,
            lineHeight: 1.5,
            maxWidth: 560,
            marginBottom: 0,
          }}
        >
          Cluster transitions into alert state (full red overlay, two-word directive, audio chime, and flashing) when a handoff is required.
        </p>
      </div>

      {/* Testing */}
      <div
        style={{
          background: tokens.surface,
          borderTop: `1px solid ${tokens.surfaceLine}`,
          borderBottom: `1px solid ${tokens.surfaceLine}`,
          padding: "clamp(48px, 8vw, 88px) clamp(20px, 6vw, 64px)",
        }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <Eyebrow n="05">Testing it for real</Eyebrow>
          <h2
            style={{
              fontFamily: "'CanelaText', serif",
              fontWeight: 300,
              fontSize: "clamp(26px, 4vw, 36px)",
              margin: "12px 0 12px",
            }}
          >
            Onto a VR rig, onto Mcity's test track
          </h2>
          <p
            style={{
              fontSize: 15,
              color: tokens.muted,
              maxWidth: 620,
              lineHeight: 1.7,
              marginBottom: 36,
            }}
          >
            Mockups don't tell you if someone actually grabs the wheel in
            time. So we put two competing alert concepts in front of four
            drivers, strapped into a VR simulator on a real steering rig at
            Mcity, and watched what they did when the truck ahead swerved.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 32,
            }}
          >
            <Reveal delay={0} y={16}>
              <Quote
                text="Definitely chimes. Sound is the most effective because when you're not looking, it gets your alert."
                who="P02"
              />
            </Reveal>
            <Reveal delay={120} y={16}>
              <Quote
                text="The red's very clear — something's going wrong and I need to do something."
                who="P03"
              />
            </Reveal>
            <Reveal delay={240} y={16}>
              <Quote
                text="I didn't notice what the text said at all. I just heard the chime and saw red."
                who="P04"
              />
            </Reveal>
          </div>
        </div>
      </div>

      {/* Findings */}
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "clamp(48px, 8vw, 88px) clamp(20px, 6vw, 64px)",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 40,
        }}
      >
        <div>
          <Eyebrow n="06">What we learned</Eyebrow>
          <h2
            style={{
              fontFamily: "'CanelaText', serif",
              fontWeight: 300,
              fontSize: "clamp(26px, 4vw, 36px)",
              margin: "12px 0 20px",
            }}
          >
            Sound wins. Text mostly doesn't.
          </h2>
          <p style={{ fontSize: 14.5, color: tokens.muted, lineHeight: 1.75, marginBottom: 12 }}>
            Every participant said the chime was what actually got their
            attention, not the visual. Red flashing won second place. Text
            barely registered, three of four couldn't recall what it said.
          </p>
          <p style={{ fontSize: 14.5, color: tokens.muted, lineHeight: 1.75 }}>
            The bigger surprise: two of four drivers reacted to the truck
            swerving before our alert even fired. Trust in the system also
            wasn't fixed. One driver trusted it far more alone than with his
            family in the car.
          </p>
        </div>
        <div>
          <Bar label="Sound" value={7} max={7} color="#6EC739" delay={0} />
          <Bar label="Visual (red flash)" value={5.5} max={7} color={tokens.terracotta} delay={120} />
          <Bar label="Text" value={0.5} max={7} color={tokens.surfaceLine} delay={240} />
        </div>
      </div>

      {/* Recommendations */}
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 clamp(20px, 6vw, 64px) clamp(64px, 10vw, 110px)",
        }}
      >
        <Eyebrow n="07">Where it goes next</Eyebrow>
        <h2
          style={{
            fontFamily: "'CanelaText', serif",
            fontWeight: 300,
            fontSize: "clamp(26px, 4vw, 36px)",
            margin: "12px 0 8px",
          }}
        >
          Four things I'd try next
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            columnGap: 40,
          }}
        >
          <Reveal delay={0} y={14}>
            <RecCard
              title="Add haptics"
              body="Seat vibration came up unprompted, especially from drivers with kids in the car."
            />
          </Reveal>
          <Reveal delay={80} y={14}>
            <RecCard
              title="Voice over text"
              body='Replace the paragraph nobody reads with two spoken words: "Brake." "Take control."'
            />
          </Reveal>
          <Reveal delay={160} y={14}>
            <RecCard
              title="Move it into view"
              body="Put the highest-priority alert on a HUD, not just the cluster, since half of driving isn't spent looking down."
            />
          </Reveal>
          <Reveal delay={240} y={14}>
            <RecCard
              title="Question the timing"
              body="Some drivers felt the car had time to solve it alone. Worth testing a shorter time-to-collision."
            />
          </Reveal>
        </div>
      </div>

      {/* Navigation Footer */}
      <NavigationFooter />

      <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}

function NavigationFooter() {
  const [prevHover, setPrevHover] = useState(false);
  const [nextHover, setNextHover] = useState(false);

  return (
    <div
      style={{
        maxWidth: 1080,
        margin: "0 auto",
        padding: "clamp(48px, 8vw, 88px) clamp(20px, 6vw, 64px)",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <a
        href="/sample-csi"
        style={{
          background: "#232323",
          color: "#ffffff",
          borderRadius: "999px",
          padding: "10px 20px",
          fontSize: 15.6,
          textDecoration: "none",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          transition: "all 200ms ease",
        }}
        onMouseEnter={() => setPrevHover(true)}
        onMouseLeave={() => setPrevHover(false)}
      >
        <span
          style={{
            display: "inline-block",
            transition: "transform 200ms ease",
            transform: prevHover ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          ←
        </span>
        Previous case study
      </a>
      <a
        href="/compare-formulas"
        style={{
          background: "#232323",
          color: "#ffffff",
          borderRadius: "999px",
          padding: "10px 20px",
          fontSize: 15.6,
          textDecoration: "none",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          transition: "all 200ms ease",
        }}
        onMouseEnter={() => setNextHover(true)}
        onMouseLeave={() => setNextHover(false)}
      >
        Next case study
        <span
          style={{
            display: "inline-block",
            transition: "transform 200ms ease",
            transform: nextHover ? "rotate(-45deg)" : "rotate(0deg)",
          }}
        >
          →
        </span>
      </a>
    </div>
  );
}
