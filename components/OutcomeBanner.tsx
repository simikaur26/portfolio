type Props = {
  heading: string;
  eyebrow?: string;
  color?: string;
};

export default function OutcomeBanner({
  heading,
  eyebrow = "FINAL OUTCOME",
  color = "#1B2D4F",
}: Props) {
  return (
    /*
      Same geometry as Button at rest: wrapper reserves 7px bottom+right so the
      offset block fits without overflow. pr-[7px] narrows the content box, making
      the front card and offset block the same width, both filling the column.
    */
    <div className="relative w-full pb-[7px] pr-[7px] my-8">
      {/* Offset block — hard solid color, positioned 7px down-right of the front card */}
      <div
        className="absolute top-[7px] left-[7px] right-0 bottom-0 rounded-[8px]"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      {/* Front card — static, no hover/focus */}
      <div
        className="relative z-10 w-full rounded-[8px] p-4 text-center"
        style={{ backgroundColor: "#F2F1F0", border: `2px solid ${color}` }}
      >
        <p className="text-eyebrow text-secondary">{eyebrow}</p>
        <h5 className="text-h5 mt-3">{heading}</h5>
      </div>
    </div>
  );
}
