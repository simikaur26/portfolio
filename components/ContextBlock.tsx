type Props = {
  timeline?: string;
  role?: string;
  team?: string;
  overview: string;
  tools?: { name: string; src: string }[];
};

export default function ContextBlock({ overview }: Props) {
  return (
    <div>
      <p className="text-eyebrow">Context</p>
      <p className="text-body text-primary mt-4">{overview}</p>
    </div>
  );
}
