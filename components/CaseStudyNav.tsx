"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "the-problem", label: "THE PROBLEM" },
  { id: "constraints", label: "CONSTRAINTS" },
  { id: "key-design-decision-1", label: "KEY DESIGN DECISION 1" },
  { id: "key-design-decision-2", label: "KEY DESIGN DECISION 2" },
  { id: "key-design-decision-3", label: "KEY DESIGN DECISION 3" },
  { id: "final-outcome", label: "FINAL OUTCOME" },
  { id: "using-ai", label: "USING AI" },
  { id: "reflection", label: "REFLECTION" },
];

export default function CaseStudyNav() {
  const [visibleIds, setVisibleIds] = useState<Set<string>>(new Set());
  // Start hidden; becomes false once the hero has fully left the viewport.
  const [heroInView, setHeroInView] = useState(true);

  useEffect(() => {
    // Observer 1 — section active state.
    // rootMargin creates a band: 10% from top, 70% from bottom (top 20% strip).
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        setVisibleIds((prev) => {
          const next = new Set(prev);
          entries.forEach((entry) => {
            if (entry.isIntersecting) next.add(entry.target.id);
            else next.delete(entry.target.id);
          });
          return next;
        });
      },
      { rootMargin: "-10% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    // Observer 2 — hero visibility.
    // threshold: 0 means isIntersecting flips to false only when the very last
    // pixel of the hero has scrolled off screen (fully out of view).
    const heroObserver = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0 }
    );

    const heroEl = document.getElementById("hero");
    if (heroEl) heroObserver.observe(heroEl);

    return () => {
      sectionObserver.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  const activeId = sections.find(({ id }) => visibleIds.has(id))?.id ?? "";

  return (
    <nav
      className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-5 z-40"
      aria-label="Case study sections"
      style={{
        opacity: heroInView ? 0 : 1,
        pointerEvents: heroInView ? "none" : "auto",
        transition: "opacity 200ms ease",
      }}
    >
      {sections.map(({ id, label }) => {
        const isActive = activeId === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 no-underline"
            aria-current={isActive ? "true" : undefined}
          >
            {/* Dot (inactive) → vertical line (active) */}
            <span
              style={{
                flexShrink: 0,
                display: "block",
                width: isActive ? "2px" : "6px",
                height: isActive ? "18px" : "6px",
                borderRadius: isActive ? "1px" : "3px",
                backgroundColor: isActive
                  ? "var(--color-navy)"
                  : "rgba(54,54,54,0.3)",
                transition:
                  "width 200ms ease, height 200ms ease, border-radius 200ms ease, background-color 200ms ease",
              }}
            />
            <span
              style={{
                fontSize: "10px",
                lineHeight: "1.3",
                letterSpacing: "0.08em",
                maxWidth: "100px",
                color: isActive ? "var(--color-navy)" : "rgba(54,54,54,0.45)",
                fontWeight: isActive ? 600 : 400,
                transition: "color 200ms ease, font-weight 200ms ease",
              }}
            >
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
