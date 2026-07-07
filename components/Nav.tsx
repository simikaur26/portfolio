"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const EMAIL = "simikaurb26@gmail.com";

const PILL = {
  background: "rgba(255, 255, 255, 0.7)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255, 255, 255, 0.4)",
  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
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
    <div
      style={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        width: "calc(100% - 32px)",
        maxWidth: 800,
      }}
    >
      {/* Main nav pill */}
      <nav
        className="flex items-center justify-between gap-4"
        style={{ ...PILL, padding: "10px 16px", borderRadius: 999, fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
      >
        {/* Logo */}
        <Link href="/" aria-label="Home" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image src="/logo.svg" alt="Simi Kaur" width={36} height={30} priority />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-5">
          <a href="/" onClick={handleWorkClick} className="text-label-l3 hover:opacity-60 transition-opacity duration-200" style={{ color: "#232323", textDecoration: "none" }}>
            Work
          </a>
          <Link href="/about" className="text-label-l3 hover:opacity-60 transition-opacity duration-200" style={{ color: "#232323", textDecoration: "none" }}>
            About Me
          </Link>
          <a href="https://drive.google.com/file/d/1s7qIxAlOYw4lTuTG57niGC7dLePus8zf/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-label-l3 hover:opacity-60 transition-opacity duration-200" style={{ color: "#232323", textDecoration: "none" }}>
            Resume
          </a>
        </div>

        {/* Desktop contact button */}
        <button
          onClick={handleContact}
          className="hidden md:block"
          style={{ flexShrink: 0, background: "#232323", border: "none", color: "#ffffff", borderRadius: 999, padding: "6px 16px", cursor: "pointer", transition: "background 200ms ease", fontSize: "15.6px", lineHeight: "19.7px", fontWeight: 400 }}
          onMouseEnter={e => (e.currentTarget.style.background = "#363636")}
          onMouseLeave={e => (e.currentTarget.style.background = "#232323")}
        >
          {copied ? "Copied!" : "Contact"}
        </button>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4, flexShrink: 0 }}
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: "block", width: 20, height: 1.5, background: "#232323", borderRadius: 2 }}
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.15 }}
            style={{ display: "block", width: 20, height: 1.5, background: "#232323", borderRadius: 2 }}
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: "block", width: 20, height: 1.5, background: "#232323", borderRadius: 2 }}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden mt-2 flex flex-col"
            style={{ ...PILL, borderRadius: 20, padding: "8px 8px", gap: 2 }}
          >
            {[
              { label: "Work", onClick: handleWorkClick, href: "/" },
              { label: "About Me", href: "/about" },
              { label: "Resume", href: "https://drive.google.com/file/d/1s7qIxAlOYw4lTuTG57niGC7dLePus8zf/view?usp=sharing", external: true },
            ].map(({ label, href, onClick, external }) => (
              external ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  style={{ display: "block", padding: "12px 16px", fontSize: 15.6, color: "#232323", textDecoration: "none", borderRadius: 12 }}
                >
                  {label}
                </a>
              ) : onClick ? (
                <a
                  key={label}
                  href={href}
                  onClick={onClick}
                  style={{ display: "block", padding: "12px 16px", fontSize: 15.6, color: "#232323", textDecoration: "none", borderRadius: 12 }}
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  href={href!}
                  onClick={() => setMenuOpen(false)}
                  style={{ display: "block", padding: "12px 16px", fontSize: 15.6, color: "#232323", textDecoration: "none", borderRadius: 12 }}
                >
                  {label}
                </Link>
              )
            ))}
            <div style={{ height: 1, background: "#BBBDBC", margin: "4px 16px" }} />
            <button
              onClick={handleContact}
              style={{ display: "block", textAlign: "left", padding: "12px 16px", fontSize: 15.6, color: "#232323", background: "none", border: "none", cursor: "pointer", borderRadius: 12 }}
            >
              {copied ? "Copied!" : "Copy email"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
