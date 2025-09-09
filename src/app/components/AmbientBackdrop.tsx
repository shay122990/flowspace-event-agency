"use client";

import { motion } from "framer-motion";
import AnimatedParticles from "@/app/components/AnimatedParticles";
import clsx from "clsx";

type Variant = "about" | "portfolio" | "services";

interface AmbientBackdropProps {
  /** Choose slight style differences per page */
  variant?: Variant;
  /** Keep particles optional */
  withParticles?: boolean;
  /** Extra classes if you ever need them */
  className?: string;
}

export default function AmbientBackdrop({
  variant = "about",
  withParticles = false,
  className,
}: AmbientBackdropProps) {
  const cfg = {
    about: {
      rotateDur: 30,
      mask: "radial-gradient(60%_60%_at_50%_35%,#000_30%,transparent_70%)",
      blobSize: "h-[60rem] w-[60rem]",
      glowSize: "h-[44rem] w-[44rem]",
      conicOpacity: "opacity-60",
      gridOpacity: "opacity-20",
      hue: "hue-rotate-0",
    },
    portfolio: {
      rotateDur: 24,
      mask: "radial-gradient(70%_70%_at_50%_40%,#000_40%,transparent_80%)",
      blobSize: "h-[56rem] w-[56rem]",
      glowSize: "h-[40rem] w-[40rem]",
      conicOpacity: "opacity-50",
      gridOpacity: "opacity-20",
      hue: "hue-rotate-15",
    },
    services: {
      rotateDur: 18,
      mask: "radial-gradient(68%_68%_at_50%_42%,#000_38%,transparent_78%)",
      blobSize: "h-[52rem] w-[52rem]",
      glowSize: "h-[38rem] w-[38rem]",
      conicOpacity: "opacity-45",
      gridOpacity: "opacity-20",
      hue: "hue-rotate-30",
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
          cfg.blobSize,
          cfg.conicOpacity,
          cfg.hue
        )}
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #7c3aed, #06b6d4, #22c55e, #f43f5e, #f59e0b, #7c3aed)",
        }}
      />

      {/* Soft radial glow with subtle mask */}
      <div
        className="absolute inset-0"
        style={{ WebkitMaskImage: cfg.mask, maskImage: cfg.mask }}
      >
        <div
          className={clsx(
            "absolute inset-x-0 top-0 mx-auto rounded-full blur-2xl",
            cfg.glowSize
          )}
          style={{
            background:
              "linear-gradient(135deg, rgba(244,63,94,0.3), rgba(56,189,248,0.2), rgba(16,185,129,0.3))",
          }}
        />
      </div>

      <div
        className={clsx("absolute inset-0", cfg.gridOpacity)}
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse at center, black, transparent 70%)",
        }}
      />

      {withParticles && <AnimatedParticles />}

      <motion.div
        initial={{ x: "-10%" }}
        animate={{ x: "10%" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 18 }}
        className="absolute bottom-[-6rem] left-1/2 h-[14rem] w-[120vw] -translate-x-1/2 rotate-2 bg-gradient-to-r from-fuchsia-500/40 via-cyan-400/40 to-emerald-400/40 blur-2xl"
      />
    </div>
  );
}
