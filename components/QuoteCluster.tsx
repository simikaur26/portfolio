const QUOTES = [
  { bg: "#A8DAFF", rotation: -3,  quote: `"What will have happen is they forget to tell somebody or whatever else, and now that piece of paper sits somewhere on a desk or in a folder."` },
  { bg: "#B2F4EE", rotation:  4,  quote: `"There's no real secure chain of evidence.[...] It goes from the scene back to your post, to your worksite… there's just so many variables."` },
  { bg: "#D4BDFF", rotation: -2,  quote: `"Chain of custody is critically important for us."` },
  { bg: "#FFA7DC", rotation:  5,  quote: `"Your notes are only as good as the person writing them"` },
  { bg: "#B2EFBC", rotation: -4,  quote: `"If you skip any of those steps, it can kind of make the chain of custody a little bit muddled."` },
];

export default function QuoteCluster() {
  return (
    /*
      Mobile: centered flex column, cards stack vertically.
      Desktop (lg+): single horizontal row, centered, gaps between cards.
      Five 185px cards + four 16px gaps = 989px — intentionally slightly
      wider than the 930px content column; the default overflow-visible lets
      them bleed out symmetrically without a scrollbar.
    */
    <div className="my-8 flex flex-col gap-6 items-center lg:flex-row lg:justify-center lg:items-center lg:gap-4">
      {QUOTES.map(({ bg, rotation, quote }) => (
        <div
          key={quote.slice(0, 30)}
          className="w-[185px] h-[185px] shrink-0 overflow-hidden rounded-[18px] p-3.5 shadow-[0_0_11px_rgba(0,0,0,0.2)]"
          style={{ backgroundColor: bg, transform: `rotate(${rotation}deg)` }}
        >
          <p className="italic font-normal text-[12.9px] leading-[18px] text-[#1B2D4F]">
            {quote}
          </p>
        </div>
      ))}
    </div>
  );
}
