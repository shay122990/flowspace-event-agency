"use client";

import { motion } from "framer-motion";
import AnimatedParticles from "@/app/components/AnimatedParticles";
import clsx from "clsx";

type Variant = "about" | "portfolio" | "services";

interface Props {
  variant?: Variant;
  withParticles?: boolean;
  className?: string;
}

export default function AmbientBackdrop({
  variant = "about",
  withParticles = false,
  className,
}: Props) {
  const cfg = {
    about: {
      rotateDur: 30,
      blob: "h-[60rem] w-[60rem]",
      glow: "h-[44rem] w-[44rem]",
      conicOpacity: "opacity-70",
    },
    portfolio: {
      rotateDur: 24,
      blob: "h-[56rem] w-[56rem]",
      glow: "h-[40rem] w-[40rem]",
      conicOpacity: "opacity-60",
    },
    services: {
      rotateDur: 18,
      blob: "h-[52rem] w-[52rem]",
      glow: "h-[38rem] w-[38rem]",
      conicOpacity: "opacity-55",
    },
  }[variant];

  return (
    <div
      aria-hidden
      className={clsx(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <motion.div
        initial={{ rotate: 0, scale: 1 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: cfg.rotateDur,
        }}
        className={clsx(
          "absolute -top-40 -left-40 rounded-full blur-3xl",
          cfg.blob,
          cfg.conicOpacity
        )}
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #7c3aed, #06b6d4, #22c55e, #f43f5e, #f59e0b, #7c3aed)",
        }}
      />

      {/* Soft luminous glow (no masks) */}
      <div
        className={clsx(
          "absolute inset-x-0 top-0 mx-auto rounded-full blur-2xl",
          cfg.glow
        )}
        style={{
          background:
            "linear-gradient(135deg, rgba(244,63,94,0.35), rgba(56,189,248,0.28), rgba(16,185,129,0.35))",
        }}
      />

      {/* Optional particles */}
      {withParticles && <AnimatedParticles />}

      <motion.div
        initial={{ x: "-10%" }}
        animate={{ x: "10%" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 18 }}
        className="absolute bottom-[-6rem] left-1/2 h-[14rem] w-[120vw] -translate-x-1/2 rotate-2
                   bg-gradient-to-r from-fuchsia-500/40 via-cyan-400/40 to-emerald-400/40 blur-2xl"
      />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
