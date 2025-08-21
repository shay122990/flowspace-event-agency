"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/proposal", label: "Proposal" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="border-b border-white/10">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="font-bold tracking-tight text-xl">
          FlowSpace
        </Link>
        <ul className="flex gap-4 text-sm">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`px-3 py-2 rounded-md ${
                    active ? "bg-white/10" : "hover:bg-white/10"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
