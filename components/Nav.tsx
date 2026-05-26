import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Work",     href: "#" },
  { label: "About Me", href: "#" },
  { label: "Resume",   href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Nav() {
  return (
    <nav
      className="w-full py-4 z-50"
    >
      <div className="max-w-[930px] mx-auto px-16 flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <Image src="/logo.svg" alt="Simi Kaur" width={60} height={50} priority />
        </Link>

        <div className="flex items-center" style={{ gap: "28px" }}>
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-label-l2 hover:opacity-60 transition-opacity duration-150"
              style={{ color: "#232323", textDecoration: "none" }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
