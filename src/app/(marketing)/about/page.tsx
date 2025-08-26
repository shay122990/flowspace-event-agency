"use client";

import { motion } from "framer-motion";
import AnimatedParticles from "@/app/components/AnimatedParticles";

export default function AboutPage() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#0b0b12] text-white">
      <motion.div
        aria-hidden
        initial={{ rotate: 0, scale: 1 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        className="pointer-events-none absolute -top-40 -left-40 h-[60rem] w-[60rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #7c3aed, #06b6d4, #22c55e, #f43f5e, #f59e0b, #7c3aed)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_35%,#000_30%,transparent_70%)]"
      >
        <div className="absolute inset-x-0 top-0 mx-auto h-[44rem] w-[44rem] rounded-full bg-gradient-to-br from-fuchsia-500/30 via-sky-400/20 to-emerald-400/30 blur-2xl" />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />

      <AnimatedParticles />

      <section className="relative z-10 mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-5xl font-black leading-tight tracking-tight text-transparent md:text-6xl"
        >
          About FlowSpace
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-5 text-lg text-white/80 md:text-xl"
        >
          We design and deliver events & projects with precision, clarity, and
          momentum.
        </motion.p>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 max-w-2xl text-white/70"
        >
          From corporate launches and conferences to immersive experiential
          builds, FlowSpace turns complex ideas into seamless experiences—on
          time, on brand, and unforgettable.
        </motion.p>
      </section>

      <motion.div
        aria-hidden
        initial={{ x: "-10%" }}
        animate={{ x: "10%" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 18 }}
        className="pointer-events-none absolute bottom-[-6rem] left-1/2 h-[14rem] w-[120vw] -translate-x-1/2 rotate-2 bg-gradient-to-r from-fuchsia-500/40 via-cyan-400/40 to-emerald-400/40 blur-2xl"
      />
    </main>
  );
}
