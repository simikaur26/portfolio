
type Props = {
  width?: number;
};

export default function IPadMockup({ width = 420 }: Props) {
  const height   = Math.round(width * 4 / 3);
  const radius   = Math.round(width * 0.05);
  const bezelX   = Math.round(width * 0.035);
  const bezelY   = Math.round(width * 0.04);
  const screenW  = width  - bezelX * 2;
  const screenH  = height - bezelY * 2;
  const barW     = Math.round(width * 0.30);
  const camTop   = Math.round(bezelY / 2 - 3);
  const barBottom = Math.round((bezelY - 4) / 2);

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        borderRadius: radius,
        background: "#1a1a1a",
        boxShadow: [
          "inset 0 0 0 1px rgba(255,255,255,0.08)",
          "0 40px 80px rgba(0,0,0,0.18)",
          "0 8px 24px rgba(0,0,0,0.10)",
        ].join(", "),
        flexShrink: 0,
      }}
    >
      {/* Front camera */}
      <div
        style={{
          position: "absolute",
          top: camTop,
          left: "50%",
          transform: "translateX(-50%)",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#2a2a2a",
          zIndex: 1,
        }}
      />

      {/* Screen */}
      <div
        style={{
          position: "absolute",
          top: bezelY,
          left: bezelX,
          width: screenW,
          height: screenH,
          overflow: "hidden",
          borderRadius: 2,
          background: "#000",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/sample-csi/hero.svg"
          alt="Sample CSI app screenshot"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
          }}
        />
      </div>

      {/* Home bar */}
      <div
        style={{
          position: "absolute",
          bottom: barBottom,
          left: "50%",
          transform: "translateX(-50%)",
          width: barW,
          height: 4,
          borderRadius: 2,
          background: "#333",
          zIndex: 1,
        }}
      />
    </div>
  );
}
