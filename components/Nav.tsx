"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollToWork", "1");
      router.push("/");
    }
  };

  return (
    <nav className="w-full py-4 z-50">
      <div className="max-w-[930px] mx-auto px-16 flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <Image src="/logo.svg" alt="Simi Kaur" width={60} height={50} priority />
        </Link>

        <div className="flex items-center" style={{ gap: "28px" }}>
          <a
            href="/"
            onClick={handleWorkClick}
            className="text-label-l2 hover:opacity-60 transition-opacity duration-150"
            style={{ color: "#232323", textDecoration: "none" }}
          >
            Work
          </a>
          <Link
            href="/about"
            className="text-label-l2 hover:opacity-60 transition-opacity duration-150"
            style={{ color: "#232323", textDecoration: "none" }}
          >
            About Me
          </Link>
          <a
            href="#"
            className="text-label-l2 hover:opacity-60 transition-opacity duration-150"
            style={{ color: "#232323", textDecoration: "none" }}
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/simi-kaur-396410250"
            target="_blank"
            rel="noopener noreferrer"
            className="text-label-l2 hover:opacity-60 transition-opacity duration-150"
            style={{ color: "#232323", textDecoration: "none" }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}
