"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function GlobalCursor() {
  const cursorRef  = useRef<HTMLDivElement>(null);
  const inHeroRef  = useRef(false);
  const [size,   setSize]   = useState(10);
  const [inHero, setInHero] = useState(false);

  useEffect(() => {
    document.documentElement.style.cursor = "none";

    const onMouseMove = (e: MouseEvent) => {
      const el = cursorRef.current;
      if (!el) return;
      // Position via direct DOM mutation — no re-render needed per frame
      el.style.left = `${e.clientX}px`;
      el.style.top  = `${e.clientY}px`;

      // Only setState when hero-entry status actually changes
      const nowInHero = !!(e.target as Element).closest("[data-hero]");
      if (nowInHero !== inHeroRef.current) {
        inHeroRef.current = nowInHero;
        setInHero(nowInHero);
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const interactive = !!(e.target as Element).closest("a, button, [role='button']");
      setSize(interactive ? 16 : 10);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  const opacity = inHero ? 0 : size === 16 ? 0.7 : 1;

  return (
    <motion.div
      ref={cursorRef}
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        left: 0,
        top: 0,
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        background: "#232323",
      }}
      animate={{ width: size, height: size, opacity }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    />
  );
}
