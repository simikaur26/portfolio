"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const EMAIL = "simikaurb26@gmail.com";
const HEL = "Helvetica Neue, Helvetica, Arial, sans-serif";
const CAN = "'CanelaText', serif";
const MUTED = "#888780";
const DARK = "#232323";
const BORDER = "#BBBDBC";
const BG = "#F2F1F0";

const LINK_STYLE: React.CSSProperties = {
  fontFamily: HEL,
  fontSize: 14,
  fontWeight: 400,
  color: MUTED,
  textDecoration: "none",
  letterSpacing: "0.01em",
  cursor: "pointer",
  background: "none",
  border: "none",
  padding: 0,
};

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    if (pathname === "/") {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollToWork", "1");
      router.push("/");
    }
  };

  const handleContact = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setMenuOpen(false);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: BG,
        borderBottom: `1px solid ${BORDER}`,
      }}
    >
      {/* ── Desktop masthead ──────────────────────────────────────────── */}
      <nav
        className="hidden md:grid"
        style={{
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "16px 48px",
        }}
      >
        {/* Left: Work · About */}
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          <a href="/" onClick={handleWorkClick} style={LINK_STYLE}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.5")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
            Work
          </a>
          <Link href="/about" style={LINK_STYLE}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.5")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
            About
          </Link>
        </div>

        {/* Center: wordmark */}
        <Link
          href="/"
          style={{
            fontFamily: CAN,
            fontWeight: 300,
            fontSize: 22,
            color: DARK,
            textDecoration: "none",
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
          }}
        >
          Simi Kaur
        </Link>

        {/* Right: Resume · Contact */}
        <div style={{ display: "flex", gap: 28, alignItems: "center", justifyContent: "flex-end" }}>
          <a
            href="https://drive.google.com/file/d/1s7qIxAlOYw4lTuTG57niGC7dLePus8zf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={LINK_STYLE}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.5")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Resume
          </a>
          <button
            onClick={handleContact}
            style={{
              ...LINK_STYLE,
              color: DARK,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.5")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            {copied ? "Copied!" : "Contact"}
          </button>
        </div>
      </nav>

      {/* ── Mobile bar ────────────────────────────────────────────────── */}
      <div
        className="md:hidden flex items-center justify-between"
        style={{ padding: "14px 24px" }}
      >
        <Link
          href="/"
          style={{
            fontFamily: CAN,
            fontWeight: 300,
            fontSize: 20,
            color: DARK,
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Simi Kaur
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", flexDirection: "column", gap: 5 }}
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: "block", width: 20, height: 1.5, background: DARK }}
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.15 }}
            style={{ display: "block", width: 20, height: 1.5, background: DARK }}
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: "block", width: 20, height: 1.5, background: DARK }}
          />
        </button>
      </div>

      {/* ── Mobile dropdown ───────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="md:hidden"
            style={{
              background: BG,
              borderTop: `1px solid ${BORDER}`,
              padding: "8px 0 16px",
            }}
          >
            {[
              { label: "Work", onClick: handleWorkClick, href: "/" },
              { label: "About", href: "/about" },
              { label: "Resume", href: "https://drive.google.com/file/d/1s7qIxAlOYw4lTuTG57niGC7dLePus8zf/view?usp=sharing", external: true },
            ].map(({ label, href, onClick, external }) =>
              external ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  style={{ display: "block", padding: "12px 24px", fontFamily: HEL, fontSize: 15, color: MUTED, textDecoration: "none" }}
                >
                  {label}
                </a>
              ) : onClick ? (
                <a
                  key={label}
                  href={href}
                  onClick={onClick}
                  style={{ display: "block", padding: "12px 24px", fontFamily: HEL, fontSize: 15, color: MUTED, textDecoration: "none" }}
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  href={href!}
                  onClick={() => setMenuOpen(false)}
                  style={{ display: "block", padding: "12px 24px", fontFamily: HEL, fontSize: 15, color: MUTED, textDecoration: "none" }}
                >
                  {label}
                </Link>
              )
            )}
            <div style={{ height: 1, background: BORDER, margin: "8px 24px" }} />
            <button
              onClick={handleContact}
              style={{ display: "block", width: "100%", textAlign: "left", padding: "12px 24px", fontFamily: HEL, fontSize: 15, color: DARK, background: "none", border: "none", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              {copied ? "Copied!" : "Contact"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
