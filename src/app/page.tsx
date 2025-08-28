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
    <main className="relative min-h-[100svh] overflow-hidden bg-[#0b0b12] text-gray-800 mt-6 rounded-xl">
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

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-28 md:pt-36">
        <header className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-br from-fuchsia-600 via-fuchsia-500 to-fuchsia-600 font-black bg-clip-text text-5xl leading-tight tracking-tight text-transparent md:text-7xl"
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
              className="relative inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-transform active:scale-[.98] bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-emerald-400 text-black shadow-[0_10px_30px_-10px_rgba(99,102,241,.6)] hover:brightness-110"
            >
              <span className="relative z-10">Generate Proposal</span>
              <span className="absolute inset-0 -z-0 rounded-xl ring-1 ring-white/40" />
            </Link>

            <Link
              href="/portfolio"
              className="relative inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-transform active:scale-[.98] border border-white/20 bg-white/5 text-black/80 hover:border-white/40"
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
