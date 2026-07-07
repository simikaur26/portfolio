"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const UPPERCASE_EXT = new Set([1, 2, 3, 18, 20, 21]);

function photoSrc(n: number) {
  return `/about/photography/photo${n}.${UPPERCASE_EXT.has(n) ? "JPG" : "jpg"}`;
}

export default function Photography() {
  const [active, setActive] = useState<string | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close]);

  return (
    <main className="py-20 mx-6 min-[480px]:mx-12 md:mx-[220px]">
      <div className="max-w-[930px] mx-auto">
        <h3 className="text-h3" style={{ color: "#232323" }}>
          photos i&apos;ve taken over the years
        </h3>

        <div
          className="mt-8 columns-1 min-[640px]:columns-2 min-[900px]:columns-3"
          style={{ columnGap: 16 }}
        >
          {Array.from({ length: 36 }, (_, i) => i + 1).map((n) => {
            const src = photoSrc(n);
            return (
              <div
                key={n}
                style={{ breakInside: "avoid", marginBottom: 16 }}
              >
                <Image
                  src={src}
                  alt=""
                  width={800}
                  height={600}
                  onClick={() => setActive(src)}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    borderRadius: 6,
                    cursor: "pointer",
                    transition: "transform 200ms ease, box-shadow 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLImageElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLImageElement).style.boxShadow = "none";
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            animation: "fadeIn 200ms ease",
          }}
        >
          {/* Close button */}
          <button
            onClick={close}
            aria-label="Close"
            style={{
              position: "fixed",
              top: 20,
              right: 24,
              background: "none",
              border: "none",
              color: "#ffffff",
              fontSize: 28,
              lineHeight: 1,
              cursor: "pointer",
              opacity: 0.8,
              zIndex: 1001,
            }}
          >
            ✕
          </button>

          {/* Image — stop clicks from bubbling to overlay */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={active}
            alt=""
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 12,
              display: "block",
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </main>
  );
}
