"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CgMenuLeft, CgClose } from "react-icons/cg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/proposal", label: "Proposal" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  }

  return (
    <header
      className={[
        "sticky top-0 z-40 flex flex-col items-center gap-8",
        "border-b border-black/10",
        "backdrop-blur-md bg-white/60 supports-[backdrop-filter]:bg-white/60",
        "text-black",
        "lg:border-b lg:border-white/10",
        "lg:backdrop-blur lg:bg-transparent lg:supports-[backdrop-filter]:bg-transparent",
        "lg:text-black",
      ].join(" ")}
    >
      {/* Mobile bar */}
      <div className="container mx-auto flex items-center justify-between py-3 lg:hidden">
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/30"
        >
          <CgMenuLeft size={22} />
        </button>

        <Link href="/" className="font-bold tracking-tight text-xl">
          FlowSpace
        </Link>

        <Link
          href="/proposal"
          className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium bg-black/10 text-black hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-black/30"
        >
          Proposal
        </Link>
      </div>

      {/* Desktop header */}
      <div className="container hidden w-full gap-4 lg:flex lg:flex-col lg:items-center lg:justify-center lg:py-5">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          FlowSpace
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-center gap-2 text-sm">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`rounded-md px-3 py-2 transition-colors ${
                      active
                        ? "bg-white/10"
                        : "hover:bg-white/10 focus-visible:bg-white/10"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Mobile dialog + slide-out */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        className={`lg:hidden fixed inset-0 transition-opacity ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onMouseDown={handleOverlayClick}
      >
        {/* <div className="absolute inset-0 bg-black backdrop-blur-md" /> */}

        {/* Slide-out panel */}
        <div
          ref={panelRef}
          className={`absolute left-0 top-0 h-full w-72 bg-black/80 backdrop-blur-3xl text-white shadow-xl transition-transform duration-200 ease-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between  px-4 py-3">
            <Link
              href="/"
              className="font-semibold tracking-tight"
              onClick={() => setOpen(false)}
            >
              FlowSpace
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/30"
            >
              <span className="sr-only">Close</span>
              <CgClose size={22} />
            </button>
          </div>

          <nav aria-label="Mobile">
            <ul className="px-2 py-8 bg-white/90 text-black rounded-br-xl">
              {navLinks.map((l) => {
                const active = pathname === l.href;
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`block rounded-md px-3 py-4 text-sm ${
                        active
                          ? "bg-white/10"
                          : "hover:bg-black/5 focus-visible:bg-black/5"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
