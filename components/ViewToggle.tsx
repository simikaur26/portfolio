"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type View = {
  key: string;
  label: string;
  eyebrow: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
};

type Props = {
  views: View[];
};

export default function ViewToggle({ views }: Props) {
  const [activeKey, setActiveKey] = useState(views[0]?.key);
  const active = views.find((v) => v.key === activeKey) ?? views[0];

  return (
    <div className="mt-8">
      {/* Toggle pills */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {views.map((view) => {
          const isActive = view.key === activeKey;
          return (
            <button
              key={view.key}
              onClick={() => setActiveKey(view.key)}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                fontSize: 14,
                fontFamily: "inherit",
                cursor: "pointer",
                border: isActive ? "1px solid #232323" : "1px solid #D1D1D1",
                background: isActive ? "#232323" : "transparent",
                color: isActive ? "#FFFFFF" : "#232323",
                transition: "background 200ms ease, color 200ms ease, border-color 200ms ease",
              }}
            >
              {view.label}
            </button>
          );
        })}
      </div>

      {/* Card */}
      <div
        style={{
          background: "#FFFFFF",
          border: "0.5px solid #E8E8E8",
          borderRadius: 12,
          overflow: "hidden",
          padding: 28,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <p className="text-eyebrow" style={{ color: "#A1A1A1" }}>{active.eyebrow}</p>
            <p className="text-body" style={{ marginTop: 12, color: "#232323" }}>{active.description}</p>
            <div style={{ marginTop: 20 }}>
              <Image
                src={active.imageSrc}
                alt={active.imageAlt}
                width={active.imageWidth}
                height={active.imageHeight}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
