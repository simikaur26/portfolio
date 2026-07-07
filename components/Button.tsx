"use client";

type Props = {
  children: React.ReactNode;
  href?: string;
  color?: string;
  textColor?: string;
};

export default function Button({ children, href }: Props) {
  const inner = (
    <span
      style={{
        display: "inline-block",
        border: "1px solid #232323",
        borderRadius: 6,
        padding: "8px 24px",
        fontSize: 15,
        lineHeight: 1.5,
        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        fontWeight: 400,
        color: "#232323",
        textDecoration: "none",
        cursor: "pointer",
        transition: "background 150ms ease, color 150ms ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.background = "#232323";
        (e.currentTarget as HTMLElement).style.color = "#fff";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.background = "transparent";
        (e.currentTarget as HTMLElement).style.color = "#232323";
      }}
    >
      {children}
    </span>
  );

  if (href) {
    return <a href={href} style={{ textDecoration: "none" }}>{inner}</a>;
  }
  return <button type="button" style={{ background: "none", border: "none", padding: 0 }}>{inner}</button>;
}
