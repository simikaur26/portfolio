"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const EMAIL = "simikaurb26@gmail.com";

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
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
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 32,
        minWidth: 600,
        maxWidth: 800,
        width: "fit-content",
        padding: "10px 20px",
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        borderRadius: 999,
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Logo */}
      <Link href="/" aria-label="Home" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
        <Image src="/logo.svg" alt="Simi Kaur" width={36} height={30} priority />
      </Link>

      {/* Nav links */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <a
          href="/"
          onClick={handleWorkClick}
          className="text-label-l3 hover:opacity-60 transition-opacity duration-200"
          style={{ color: "#232323", textDecoration: "none" }}
        >
          Work
        </a>
        <Link
          href="/about"
          className="text-label-l3 hover:opacity-60 transition-opacity duration-200"
          style={{ color: "#232323", textDecoration: "none" }}
        >
          About Me
        </Link>
        <a
          href="https://drive.google.com/file/d/1s7qIxAlOYw4lTuTG57niGC7dLePus8zf/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-label-l3 hover:opacity-60 transition-opacity duration-200"
          style={{ color: "#232323", textDecoration: "none" }}
        >
          Resume
        </a>
      </div>

      {/* Contact pill button */}
      <button
        onClick={handleContact}
        style={{
          flexShrink: 0,
          background: "#232323",
          border: "none",
          color: "#ffffff",
          borderRadius: 999,
          padding: "6px 16px",
          cursor: "pointer",
          transition: "background 200ms ease",
          fontSize: "15.6px",
          lineHeight: "19.7px",
          fontWeight: 400,
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "#363636")}
        onMouseLeave={e => (e.currentTarget.style.background = "#232323")}
      >
        {copied ? "Copied!" : "Contact"}
      </button>
    </nav>
  );
}
