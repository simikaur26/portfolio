"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup, useReducedMotion } from "framer-motion";

const ACCENT = "#993C1D";

// ── Object SVGs ──────────────────────────────────────────────────────────────

function CameraObject({ width = 60, height = 45 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 60 45" fill="none" aria-hidden="true">
      <rect x="2" y="10" width="56" height="32" rx="8" fill="#C8C1BA" />
      <rect x="8" y="4" width="18" height="8" rx="4" fill="#B8B2AC" />
      <circle cx="30" cy="26" r="11" fill="#9E9890" />
      <circle cx="30" cy="26" r="7" fill="#7A746E" />
      <circle cx="30" cy="26" r="3.5" fill="#3C3834" />
      <circle cx="50" cy="18" r="4" fill={ACCENT} />
      <circle cx="27.5" cy="23.5" r="1.5" fill="white" fillOpacity="0.45" />
    </svg>
  );
}

function LogoObject({ width = 80, height = 80 }: { width?: number; height?: number }) {
  return (
    <Image
      src="/logo.svg"
      width={width}
      height={height}
      alt=""
      aria-hidden="true"
      style={{ display: "block" }}
    />
  );
}

function MenuObject({ width = 40, height = 65 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 56 91" fill="none" aria-hidden="true">
      <rect x="2" y="26" width="5" height="28" rx="2.5" fill={ACCENT} />
      <rect x="2" y="8" width="3" height="20" rx="1.5" fill={ACCENT} fillOpacity="0.7" />
      <rect x="6" y="8" width="3" height="20" rx="1.5" fill={ACCENT} fillOpacity="0.7" />
      <rect x="14" y="2" width="30" height="87" rx="8" fill="#EAE0D2" />
      <rect x="14" y="2" width="30" height="18" rx="5" fill={ACCENT} />
      <rect x="14" y="12" width="30" height="8" fill={ACCENT} />
      <rect x="19" y="28" width="20" height="3" rx="1.5" fill={ACCENT} fillOpacity="0.35" />
      <rect x="19" y="36" width="15" height="3" rx="1.5" fill={ACCENT} fillOpacity="0.35" />
      <rect x="19" y="46" width="18" height="3" rx="1.5" fill={ACCENT} fillOpacity="0.35" />
      <rect x="19" y="54" width="12" height="3" rx="1.5" fill={ACCENT} fillOpacity="0.35" />
      <rect x="19" y="63" width="16" height="3" rx="1.5" fill={ACCENT} fillOpacity="0.35" />
      <rect x="19" y="71" width="10" height="3" rx="1.5" fill={ACCENT} fillOpacity="0.35" />
      <rect x="49" y="26" width="5" height="28" rx="2.5" fill={ACCENT} />
      <path d="M49 8 L54 20 L54 26 L49 26 Z" fill={ACCENT} fillOpacity="0.7" />
    </svg>
  );
}

function BooksObject({ width = 65, height = 72 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 65 72" fill="none" aria-hidden="true">
      {/* Right book */}
      <rect x="47" y="16" width="16" height="56" rx="3" fill="#B04848" />
      <rect x="47" y="24" width="16" height="2" fill="white" fillOpacity="0.25" />
      <rect x="49" y="29" width="12" height="1.5" fill="white" fillOpacity="0.18" />
      <rect x="49" y="33" width="9" height="1.5" fill="white" fillOpacity="0.18" />
      {/* Left book */}
      <rect x="2" y="12" width="18" height="60" rx="3" fill="#C25B3A" />
      <rect x="2" y="20" width="18" height="2" fill="white" fillOpacity="0.25" />
      <rect x="4" y="25" width="14" height="1.5" fill="white" fillOpacity="0.18" />
      <rect x="4" y="29" width="11" height="1.5" fill="white" fillOpacity="0.18" />
      {/* Center book — tallest */}
      <rect x="22" y="6" width="23" height="66" rx="3" fill="#D4873F" />
      <rect x="22" y="16" width="23" height="2.5" fill="white" fillOpacity="0.25" />
      <rect x="25" y="22" width="17" height="1.5" fill="white" fillOpacity="0.18" />
      <rect x="25" y="27" width="14" height="1.5" fill="white" fillOpacity="0.18" />
      <rect x="25" y="32" width="12" height="1.5" fill="white" fillOpacity="0.18" />
    </svg>
  );
}

function BreadObject({ width = 70, height = 50 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 70 50" fill="none" aria-hidden="true">
      <rect x="4" y="22" width="62" height="24" rx="10" fill="#B8722A" />
      <rect x="8" y="10" width="54" height="28" rx="16" fill="#D08830" />
      <rect x="14" y="7" width="42" height="22" rx="13" fill="#E8A535" />
      <line x1="22" y1="9" x2="19" y2="22" stroke="#A86020" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="35" y1="8" x2="32" y2="21" stroke="#A86020" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="48" y1="9" x2="45" y2="22" stroke="#A86020" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="44" cy="11" r="3.5" fill="white" fillOpacity="0.12" />
    </svg>
  );
}

function DJBoardObject({ width = 80, height = 52 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 80 52" fill="none" aria-hidden="true">
      <rect width="80" height="52" rx="8" fill="#2A2A2A" />
      <circle cx="21" cy="21" r="14" fill="#1C1C1C" />
      <circle cx="21" cy="21" r="10" fill="#2E2E2E" />
      <circle cx="21" cy="21" r="4" fill="#3A3A3A" />
      <circle cx="21" cy="21" r="2" fill={ACCENT} />
      <circle cx="59" cy="21" r="14" fill="#1C1C1C" />
      <circle cx="59" cy="21" r="10" fill="#2E2E2E" />
      <circle cx="59" cy="21" r="4" fill="#3A3A3A" />
      <circle cx="59" cy="21" r="2" fill={ACCENT} />
      <circle cx="40" cy="16" r="5" fill="#3A3A3A" />
      <circle cx="40" cy="16" r="2.5" fill="#555" />
      <circle cx="40" cy="16" r="1" fill={ACCENT} />
      <circle cx="40" cy="28" r="4" fill="#3A3A3A" />
      <circle cx="40" cy="28" r="2" fill="#555" />
      <rect x="12" y="40" width="56" height="5" rx="2.5" fill="#1A1A1A" />
      <rect x="28" y="38" width="10" height="9" rx="3" fill="#555" />
      <circle cx="40" cy="43" r="1.5" fill={ACCENT} fillOpacity="0.7" />
    </svg>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

type ItemData = {
  id: string;
  label: string;
  body: string;
  Component: (props: { width?: number; height?: number }) => React.ReactElement;
  w: number;
  h: number;
  link?: { href: string; text: string };
  photo?: string;
};

const SHELVES: [ItemData, ItemData][] = [
  [
    {
      id: "camera",
      label: "framing stories",
      body: "I've been taking photos since I was a teenager. Photography taught me how to notice light, composition, and the moment before something happens. That instinct for framing — knowing what to include and what to leave out — shows up in everything I design.",
      Component: CameraObject,
      w: 60,
      h: 45,
      link: { href: "/photography", text: "see my photography →" },
      photo: "/about/photography/photo18.jpg",
    },
    {
      id: "sk-mark",
      label: "building systems",
      body: "I've built Lego sets my whole life. There's something deeply satisfying about how every piece has exactly one right fit, and how complex things emerge from simple, repeatable parts. I think about design the same way — modular, intentional, and built to last.",
      Component: LogoObject,
      w: 80,
      h: 80,
    },
  ],
  [
    {
      id: "bread",
      label: "made with time",
      body: "Baking bread is one of my favorite things. I love the process, the waiting, the folding, the watching it come together over a few days. When people eat it and enjoy it, that's the whole point. And when it doesn't work out, it's just a fun problem to solve.",
      Component: BreadObject,
      w: 70,
      h: 50,
    },
    {
      id: "dj-board",
      label: "learning by ear",
      body: "I recently fell in love with EDM and got curious about how it's actually made and mixed. So I got a board and started experimenting. I'm not good yet, but that's kind of the point. It's a hobby with no stakes, just sound and curiosity.",
      Component: DJBoardObject,
      w: 80,
      h: 52,
    },
  ],
  [
    {
      id: "menu",
      label: "people, service, details",
      body: "I'm a 1/5 owner of Anand, an Indian restaurant my family is building in Fargo. Running a restaurant taught me that great service is really great design — you're orchestrating a hundred small details so people feel taken care of without noticing the work.",
      Component: MenuObject,
      w: 40,
      h: 65,
    },
    {
      id: "books",
      label: "reading everything",
      body: "Reading is how I think. I'm drawn to books about systems, behavior, and the way things get made — design, economics, food, cities. Right now I'm working through a stack that's half design criticism, half cookbooks.",
      Component: BooksObject,
      w: 65,
      h: 72,
      link: { href: "https://www.goodreads.com", text: "see what I'm reading →" },
    },
  ],
];

const ALL_ITEMS: ItemData[] = SHELVES.flat();

// ── Shelf plank ───────────────────────────────────────────────────────────────

function ShelfPlank({ width = "100%" }: { width?: number | string }) {
  return (
    <div
      style={{
        width,
        height: 14,
        backgroundColor: "#E8E0D5",
        borderRadius: 8,
        boxShadow: "0 14px 30px rgba(0,0,0,0.08)",
        marginTop: 2,
        flexShrink: 0,
      }}
    />
  );
}

// ── ObjectSlot ────────────────────────────────────────────────────────────────

function ObjectSlot({
  item,
  isActive,
  isDimmed,
  onSelect,
}: {
  item: ItemData;
  isActive: boolean;
  isDimmed: boolean;
  onSelect: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const reducedMotion = useReducedMotion();
  const layoutId = reducedMotion ? undefined : `obj-${item.id}`;

  return (
    <div
      className="relative flex flex-col items-center cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect()}
      aria-label={item.label}
    >
      {/* Hover label — hidden when active */}
      <div
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap pointer-events-none"
        style={{ opacity: hovered && !isActive ? 1 : 0, transition: "opacity 200ms ease" }}
      >
        <span className="text-label-l3" style={{ color: ACCENT }}>
          {item.label}
        </span>
      </div>

      {/* Invisible placeholder while object is in spotlight */}
      {isActive && <div style={{ width: item.w, height: item.h }} aria-hidden="true" />}

      {/* Object with shadow + lift + layoutId */}
      {!isActive && (
        <div
          style={{
            filter: hovered
              ? "drop-shadow(0 8px 20px rgba(0,0,0,0.14))"
              : "drop-shadow(0 4px 12px rgba(0,0,0,0.1))",
            transition: "filter 200ms ease",
            display: "inline-block",
          }}
        >
          <motion.div
            layoutId={layoutId}
            animate={{ opacity: isDimmed ? 0.4 : 1 }}
            transition={{ duration: 0.2 }}
            style={{ display: "inline-block" }}
          >
            <motion.div
              animate={{ y: reducedMotion ? 0 : hovered ? -6 : 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ display: "inline-block" }}
            >
              <item.Component width={item.w} height={item.h} />
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

// ── ShelfRow ──────────────────────────────────────────────────────────────────

function ShelfRow({
  items,
  activeId,
  onSelect,
}: {
  items: [ItemData, ItemData];
  activeId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-end justify-around">
        {items.map((item) => (
          <ObjectSlot
            key={item.id}
            item={item}
            isActive={item.id === activeId}
            isDimmed={activeId !== null && item.id !== activeId}
            onSelect={() => onSelect(item.id)}
          />
        ))}
      </div>
      <ShelfPlank />
    </div>
  );
}

// ── SpotlightSection ──────────────────────────────────────────────────────────

function SpotlightSection({
  activeItem,
  onDeselect,
}: {
  activeItem: ItemData | null;
  onDeselect: () => void;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="flex flex-col">
      {/* Object display area — height matches tallest item on Shelf 1 (Logo, 80px) so plank aligns */}
      <div
        className="flex items-end justify-center"
        style={{ height: 80 }}
      >
        {activeItem ? (
          <motion.div
            key={activeItem.id}
            layoutId={reducedMotion ? undefined : `obj-${activeItem.id}`}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ display: "inline-block", cursor: "pointer", transformOrigin: "center bottom" }}
            onClick={onDeselect}
            title="click to deselect"
          >
            <activeItem.Component width={activeItem.w} height={activeItem.h} />
          </motion.div>
        ) : (
          <span className="text-label-l3" style={{ color: "#BBBDBC" }}>
            select something
          </span>
        )}
      </div>

      <div className="flex justify-center">
        <ShelfPlank width={150} />
      </div>

      {/* Description panel */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {activeItem && (
            <motion.div
              key={activeItem.id}
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Heading + close button */}
              <div className="flex items-start justify-between gap-4">
                <h6 className="text-h6" style={{ color: ACCENT }}>
                  {activeItem.label}
                </h6>
                <button
                  onClick={onDeselect}
                  aria-label="Close"
                  style={{
                    fontSize: 24,
                    lineHeight: 1,
                    color: "#BBBDBC",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    flexShrink: 0,
                    marginTop: 6,
                  }}
                >
                  ×
                </button>
              </div>

              {/* Photo */}
              {activeItem.photo ? (
                <Image
                  src={activeItem.photo}
                  alt=""
                  width={600}
                  height={400}
                  className="mt-4 w-full rounded-[8px]"
                  style={{ height: 160, objectFit: "cover" }}
                />
              ) : (
                <div
                  className="mt-4 w-full rounded-[8px] flex items-center justify-center"
                  style={{ backgroundColor: "#BBBDBC", height: 160 }}
                >
                  <span className="text-label-l3" style={{ color: "#363636" }}>
                    photo coming soon
                  </span>
                </div>
              )}

              {/* Body */}
              <p className="text-body mt-4" style={{ color: "#232323" }}>
                {activeItem.body}
              </p>

              {/* Optional link */}
              {activeItem.link && (
                <a
                  href={activeItem.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label-l2 mt-3 inline-block"
                  style={{
                    color: ACCENT,
                    textDecoration: "underline",
                    textUnderlineOffset: 3,
                  }}
                >
                  {activeItem.link.text}
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function ShelfDisplay() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeItem = ALL_ITEMS.find((item) => item.id === activeId) ?? null;

  const handleSelect = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <LayoutGroup>
      <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-x-16 gap-y-12">
        {/* Left: three shelf rows */}
        <div className="flex flex-col gap-14">
          {SHELVES.map((items, i) => (
            <ShelfRow key={i} items={items} activeId={activeId} onSelect={handleSelect} />
          ))}
        </div>

        {/* Right: spotlight */}
        <div>
          <SpotlightSection activeItem={activeItem} onDeselect={() => setActiveId(null)} />
        </div>
      </div>
    </LayoutGroup>
  );
}
