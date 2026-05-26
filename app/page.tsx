"use client";

import { useState, useEffect, useRef } from "react";
import HomeIntro from "@/components/HomeIntro";
import WorkSection from "@/components/WorkSection";
import ReturningHero from "@/components/ReturningHero";

const STORAGE_KEY = "hasSeenIntro";

export default function Home() {
  // null = not yet checked (avoids flash of wrong content during hydration)
  const [hasSeenIntro, setHasSeenIntro] = useState<boolean | null>(null);
  const workRef = useRef<HTMLDivElement>(null);

  // Read localStorage once on mount — can't run on server so useEffect is required
  useEffect(() => {
    setHasSeenIntro(localStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  // For first-time visitors: mark seen when WorkSection scrolls into view
  useEffect(() => {
    if (hasSeenIntro !== false) return;
    const el = workRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          localStorage.setItem(STORAGE_KEY, "true");
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasSeenIntro]);

  // If arriving from a case study via the Work nav link, scroll to #work
  useEffect(() => {
    if (hasSeenIntro === null) return;
    if (sessionStorage.getItem("scrollToWork")) {
      sessionStorage.removeItem("scrollToWork");
      requestAnimationFrame(() => {
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [hasSeenIntro]);

  const markSeen = () => localStorage.setItem(STORAGE_KEY, "true");
  const resetSeen = () => {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  };

  // Render nothing until localStorage is checked — prevents wrong-experience flash
  if (hasSeenIntro === null) return null;

  return (
    <main>
      {hasSeenIntro ? (
        <ReturningHero resetIntro={resetSeen} />
      ) : (
        <HomeIntro onSkip={markSeen} />
      )}
      <div ref={workRef}>
        <WorkSection />
      </div>
    </main>
  );
}
