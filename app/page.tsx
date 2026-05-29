"use client";

import { useState, useEffect, useRef } from "react";
import HomeIntro from "@/components/HomeIntro";
import WorkSection from "@/components/WorkSection";
import ReturningHero from "@/components/ReturningHero";

const STORAGE_KEY = "hasSeenIntro";

export default function Home() {
  // null = not yet checked (avoids flash of wrong content during hydration)
  const [hasSeenIntro, setHasSeenIntro] = useState<boolean | null>(null);
  // Tracks whether the WorkSection has scrolled into view this session
  const [workInView, setWorkInView] = useState(false);
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
          setWorkInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasSeenIntro]);

  // Enable window-level snap while showing the intro; clean up when done
  useEffect(() => {
    if (hasSeenIntro !== false) return;
    document.documentElement.style.scrollSnapType = "y proximity";
    return () => {
      document.documentElement.style.scrollSnapType = "";
    };
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
      <div
        ref={workRef}
        style={{
          opacity: hasSeenIntro === false && !workInView ? 0.7 : 1,
          transition: "opacity 0.4s ease",
        }}
      >
        <WorkSection />
      </div>
    </main>
  );
}
