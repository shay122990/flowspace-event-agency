"use client";

import { motion } from "framer-motion";
import Card from "./components/Card";

export default function ServicesPage() {
  const services = [
    { title: "Event Strategy", desc: "Goals, budgets, and KPIs." },
    { title: "Production", desc: "Vendors, staging, logistics." },
    { title: "Project Ops", desc: "Timelines, dependencies, staffing." },
  ];

  return (
    <section className="relative w-full px-10 py-20 rounded-xl overflow-hidden bg-[#0b0b12] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-cyan-400/20 to-emerald-400/20 blur-2xl" />
      </div>

      <motion.div
        aria-hidden
        initial={{ rotate: -8 }}
        animate={{ rotate: 8 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          duration: 12,
        }}
        className="pointer-events-none absolute inset-0 opacity-40 blur-3xl"
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

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_70%_at_50%_40%,#000_40%,transparent_80%)]"
      >
        <div className="absolute inset-x-0 top-0 mx-auto h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-pink-400/20 via-cyan-400/20 to-emerald-400/20 blur-3xl" />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h1 className="text-5xl font-black">Services</h1>
        <p className="mt-4 text-lg">
          Expertise across planning, production, and execution.
        </p>
      </div>

      <div className="relative z-10 mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((s) => (
          <Card key={s.title} title={s.title} desc={s.desc} />
        ))}
      </div>
    </section>
  );
}
