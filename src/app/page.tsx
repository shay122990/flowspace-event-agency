"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedParticles from "./components/AnimatedParticles";
import Card from "./components/Card";

const cards = [
  { title: "Corporate Launches", desc: "End-to-end launch operations." },
  { title: "Conferences", desc: "Speakers, staging, and schedules." },
  { title: "Experiential", desc: "Immersive brand experiences." },
];

export default function HomePage() {
  return (
    <main className="flex justify-center relative overflow-hidden md:rounded-xl bg-[#0b0b12] text-gray-800">
      {/* Blurry colorful border overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl"
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/10 via-cyan-400/30 to-emerald-400/30 blur-2xl" />
      </div>

      {/* Rotating conic background */}
      <motion.div
        aria-hidden
        initial={{ rotate: -10 }}
        animate={{ rotate: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          duration: 10,
        }}
        className="pointer-events-none absolute inset-0 opacity-50 blur-3xl"
        style={{
          background: `conic-gradient(
            from 90deg at 50% 50%,
            #2AFADF 0deg,
            #4C83FF 120deg,
            #FFF886 120deg,
            #F072B6 240deg,
            #FFD3A5 240deg,
            #FD6585 360deg
          )`,
        }}
      />

      {/* Soft center glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_35%,#000_30%,transparent_70%)]"
      >
        <div className="absolute inset-x-0 top-0 mx-auto h-[44rem] w-[44rem] rounded-full bg-gradient-to-br from-pink-300/10 via-pink-400/20 to-pink-300 blur-2xl" />
      </div>

      {/* Grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />

      <AnimatedParticles />

      {/* Hero */}
      <section className="relative  w-full min-h-[100svh]  px-10 py-10">
        <div className="w-full h-full rounded  bg-white/30 px-10 py-20">
          <header className="mx-auto max-w-3xl text-center">
            <motion.h1
              // initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
              // animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              // transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-50 text-6xl font-black md:text-7xl lg:text-9xl text-white drop-shadow-none"
            >
              FlowSpace
            </motion.h1>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-4 text-lg text-black/80 md:text-xl"
            >
              Turning ideas into seamless experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/proposal"
                className="relative inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition-transform active:scale-[.98] bg-gradient-to-br from-fuchsia-500/50 via-cyan-400/50 to-emerald-400/50 shadow-[0_10px_30px_-10px_rgba(99,102,241,.6)] hover:brightness-110"
              >
                <span className="relative z-10">Generate Proposal</span>
                <span className="absolute inset-0 -z-0 rounded-xl ring-1 ring-white/40" />
              </Link>

              <Link
                href="/portfolio"
                className="relative inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-transform active:scale-[.98] border border-white/90 bg-white/5 text-black/80 hover:border-purple-800"
              >
                View Portfolio
              </Link>
            </motion.div>
          </header>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2, once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="mt-16 grid grid-cols-1 gap-6 md:mt-24 md:grid-cols-3"
          >
            {cards.map((c) => (
              <Card key={c.title} title={c.title} desc={c.desc} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Top beam */}
      <motion.div
        aria-hidden
        initial={{ x: "10%" }}
        animate={{ x: "-10%" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 18 }}
        className="pointer-events-none absolute top-[-6rem] left-1/2 h-[14rem] w-[120vw] -translate-x-1/2 -rotate-2 bg-gradient-to-r from-fuchsia-500/40 via-cyan-400/40 to-emerald-400/40 blur-2xl z-0"
      />

      {/* Bottom beam */}
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
