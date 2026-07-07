type Props = {
  heading: string;
  eyebrow?: string;
  canela?: boolean;
};

export default function SectionHeader({ heading, eyebrow, canela }: Props) {
  return (
    <div>
      {eyebrow && (
        <p className="text-eyebrow">{eyebrow}</p>
      )}
      {canela ? (
        <p
          style={{
            fontFamily: "'CanelaText', serif",
            fontWeight: 300,
            fontSize: 36,
            lineHeight: 1.25,
            color: "#232323",
            marginTop: eyebrow ? 12 : 0,
          }}
        >
          {heading}
        </p>
      ) : (
        <h5 className={`text-h5 ${eyebrow ? "mt-3" : ""}`}>{heading}</h5>
      )}
    </div>
  );
}
