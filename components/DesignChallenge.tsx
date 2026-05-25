import Image from "next/image";

type Props = {
  iconSrc: string;
  children: React.ReactNode;
};

export default function DesignChallenge({ iconSrc, children }: Props) {
  return (
    <div className="relative w-full pb-[15px] pr-[15px] my-8">
      {/* Offset block — 15px down-right accent shadow */}
      <div
        className="absolute top-[15px] left-[15px] right-0 bottom-0 rounded-[8px]"
        style={{ backgroundColor: "var(--case-accent)" }}
        aria-hidden="true"
      />
      {/* Front card */}
      <div
        className="relative z-10 w-full rounded-[8px]"
        style={{
          backgroundColor: "#F2F1F0",
          border: "2px solid var(--case-accent)",
          padding: "40px 50px",
        }}
      >
        {/* Header row: icon + label */}
        <div className="flex items-center gap-4">
          <Image src={iconSrc} alt="" width={48} height={48} />
          <h6
            className="text-h6"
            style={{
              color: "#232323",
              WebkitTextStroke: "1px #232323",
              fontWeight: 400,
            }}
          >
            Design Challenge
          </h6>
        </div>
        {/* Body: the "How might we…" question */}
        <p className="text-body mt-4" style={{ color: "#232323" }}>
          {children}
        </p>
      </div>
    </div>
  );
}
