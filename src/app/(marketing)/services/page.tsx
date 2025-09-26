"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AmbientBackdrop from "@/app/components/AmbientBackdrop";

const SECTIONS = [
  {
    id: "strategy",
    kicker: "01",
    title: "Event Strategy",
    desc: "Translate business goals into measurable outcomes with KPI frameworks, audience journeys, and budget architecture that keep creativity grounded in reality.",
    bullets: [
      "Goal → KPI mapping",
      "Audience segmentation & journeys",
      "Budget architecture & ROI model",
      "Program design & content arcs",
    ],
    stats: [
      { label: "Avg. ROI lift", value: "+23%" },
      { label: "On-time briefs", value: "96%" },
    ],
    img: "/images/services/strategy.jpg",
    accentFrom: "from-pink-500",
    accentTo: "to-emerald-500",
  },
  {
    id: "production",
    kicker: "02",
    title: "Production",
    desc: "Vendor orchestration, stagecraft, and technical direction. We make showtime bulletproof with tight run-of-show and onsite control room discipline.",
    bullets: [
      "Vendor sourcing & bids",
      "Stage & AV direction",
      "Run-of-show & cueing",
      "Permits, H&S, logistics",
    ],
    stats: [
      { label: "Vendor SLA hit", value: "99%" },
      { label: "Change orders", value: "−34%" },
    ],
    img: "/images/services/production.jpg",
    accentFrom: "from-cyan-500",
    accentTo: "to-fuchsia-500",
  },
  {
    id: "ops",
    kicker: "03",
    title: "Project Ops",
    desc: "Dependencies, staffing, and risk management. We keep the machine humming with clear comms, transparent timelines, and contingency planning.",
    bullets: [
      "Critical path + Gantt",
      "Risk register & contingencies",
      "Crew planning & comms",
      "Budget tracking & approvals",
    ],
    stats: [
      { label: "Timeline variance", value: "<2d" },
      { label: "Risk mitigated", value: "87%" },
    ],
    img: "/images/services/ops.jpg",
    accentFrom: "from-emerald-500",
    accentTo: "to-pink-500",
  },
];

export default function ServicesPage() {
  return (
    <section className="relative w-full overflow-hidden rounded-xl bg-[radial-gradient(720px_520px_at_0%_-10%,rgba(236,72,153,0.18),transparent_45%),radial-gradient(700px_520px_at_110%_0%,rgba(56,189,248,0.22),transparent_48%),radial-gradient(760px_540px_at_50%_110%,rgba(16,185,129,0.18),transparent_50%)] px-6 py-20 md:px-10">
      <AmbientBackdrop />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h1 className="text-5xl font-black tracking-tight text-gray-900 drop-shadow-sm">
          Services
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Expertise across planning, production, and execution.
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-16 flex max-w-6xl flex-col gap-16">
        {SECTIONS.map((s, i) => (
          <ServiceSection key={s.id} index={i} {...s} />
        ))}
      </div>

      {/* Anchor offset for sticky headers/navs */}
      <style>{`
        #strategy, #production, #ops { scroll-margin-top: 96px; }
      `}</style>
    </section>
  );
}

function ServiceSection({
  id,
  kicker,
  title,
  desc,
  bullets,
  stats,
  img,
  accentFrom,
  accentTo,
  index,
}: {
  id: string;
  kicker: string;
  title: string;
  desc: string;
  bullets: string[];
  stats: { label: string; value: string }[];
  img: string;
  accentFrom: string;
  accentTo: string;
  index: number;
}) {
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`grid items-center gap-8 rounded-3xl border border-white/20 bg-white/80 p-6 shadow-xl backdrop-blur-md md:grid-cols-2 ${
        isReversed ? "md:[direction:rtl]" : ""
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl md:aspect-[4/3]">
        <Image
          src={img}
          alt={title}
          fill
          priority={index === 0}
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
        <motion.div
          aria-hidden
          initial={{ x: "-120%" }}
          whileHover={{ x: "120%" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="absolute inset-y-0 -left-1/3 w-1/3 rotate-6 bg-gradient-to-r from-white/10 via-white/40 to-white/10"
        />
      </div>

      {/* Content */}
      <div className="space-y-5 md:[direction:ltr]">
        <div className="inline-flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest text-gray-500">
            {kicker}
          </span>
          <span
            className={`h-[1px] w-12 bg-gradient-to-r ${accentFrom} ${accentTo}`}
          />
        </div>

        <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-relaxed text-gray-700">{desc}</p>

        {/* feature pills */}
        <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {bullets.map((b) => (
            <li
              key={b}
              className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm hover:shadow-md"
            >
              {b}
            </li>
          ))}
        </ul>

        {/* stats & cta */}
        <div className="mt-4 flex flex-wrap items-center gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`rounded-2xl border border-gray-200 bg-white/90 px-4 py-3 shadow-sm`}
            >
              <div className="text-2xl font-black tracking-tight text-gray-900">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-500">
                {s.label}
              </div>
            </div>
          ))}

          <button
            className={`relative ml-auto inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-transform active:scale-[.98] border-gray-300 bg-white hover:shadow-md`}
          >
            <span>Request proposal</span>
            <span
              className={`inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo}`}
            />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
