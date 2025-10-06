"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

export type ContactCardProps = {
  icon: React.ElementType;
  label: string;
  href: string;
  helper?: string;
  className?: string;
  target?: string;
  rel?: string;
};

const fadeUp: Variants = {
  hidden: { y: 16, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ContactCard({
  icon: Icon,
  label,
  href,
  helper,
  className = "",
  target,
  rel,
}: ContactCardProps) {
  const external = target === "_blank";
  const computedRel = rel ?? (external ? "noopener noreferrer" : undefined);

  return (
    <motion.a
      variants={fadeUp}
      href={href}
      target={target}
      rel={computedRel}
      className={
        "group relative block rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-saturate-150 transition-colors hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 " +
        className
      }
    >
      <div className="flex items-center gap-4">
        <span className="rounded-xl bg-white/10 p-3">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="font-medium text-white">{label}</p>
          {helper && <p className="text-sm text-white/60">{helper}</p>}
        </div>
      </div>
    </motion.a>
  );
}
