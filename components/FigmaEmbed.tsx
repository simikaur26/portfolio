export default function FigmaEmbed({
  src,
  height = 550,
  aspectRatio,
  maxWidth,
  allow,
  referrerPolicy,
}: {
  src: string;
  height?: number;
  /** Padding-top percentage for responsive aspect-ratio embeds (e.g. 64.52 for landscape, 127.66 for portrait) */
  aspectRatio?: number;
  /** Constrains the embed width (px) and centers it — useful for portrait videos at full column width */
  maxWidth?: number;
  allow?: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}) {
  if (aspectRatio !== undefined) {
    return (
      <div style={maxWidth ? { maxWidth, margin: "0 auto" } : undefined}>
        <div
          style={{
            position: "relative",
            paddingTop: `${aspectRatio}%`,
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <iframe
            src={src}
            allow={allow}
            referrerPolicy={referrerPolicy}
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
      </div>
    );
  }

  // Fixed-height mode — used for Figma prototype embeds
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <style>{`
        @media (max-width: 768px) {
          .figma-embed-iframe {
            height: 400px !important;
          }
        }
      `}</style>
      <iframe
        className="figma-embed-iframe"
        src={src}
        allowFullScreen
        style={{
          width: "100%",
          height,
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: 12,
          display: "block",
        }}
      />
    </div>
  );
}
