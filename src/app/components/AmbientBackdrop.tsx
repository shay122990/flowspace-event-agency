"use client";

import { motion } from "framer-motion";
import AnimatedParticles from "@/app/components/AnimatedParticles";

export default function AmbientBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        initial={{ rotate: 0, scale: 1 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 24 }}
        className="absolute -top-40 -left-40 h-[56rem] w-[56rem] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #7c3aed, #06b6d4, #22c55e, #f43f5e, #f59e0b, #7c3aed)",
        }}
      />

      <div
        className="absolute inset-x-0 top-0 mx-auto h-[42rem] w-[42rem] rounded-full blur-3xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(244,63,94,0.35), rgba(56,189,248,0.3), rgba(16,185,129,0.35))",
        }}
      />

      <motion.div
        initial={{ x: "-10%" }}
        animate={{ x: "10%" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 18 }}
        className="absolute bottom-[-6rem] left-1/2 h-[14rem] w-[120vw] -translate-x-1/2 rotate-2
                   bg-gradient-to-r from-fuchsia-500/40 via-cyan-400/40 to-emerald-400/40 blur-2xl"
      />

      <div
        className="absolute inset-0 opacity-15"
        style={{
          background:
            "linear-gradient(to right, rgba(236,72,153,0.2) 1px, transparent 1px), \
             linear-gradient(to bottom, rgba(56,189,248,0.2) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <AnimatedParticles />
    </div>
  );
}
