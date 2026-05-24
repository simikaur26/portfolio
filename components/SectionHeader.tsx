type Props = {
  heading: string;
  eyebrow?: string;
};

export default function SectionHeader({ heading, eyebrow }: Props) {
  return (
    <div>
      {eyebrow && (
        <p className="text-eyebrow text-secondary">{eyebrow}</p>
      )}
      <h5 className={`text-h5 ${eyebrow ? "mt-3" : ""}`}>{heading}</h5>
    </div>
  );
}
