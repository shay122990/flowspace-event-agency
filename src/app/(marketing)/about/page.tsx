"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import AnimatedParticles from "@/app/components/AnimatedParticles";

const stats = [
  { label: "Events produced", value: "320+" },
  { label: "Countries", value: "28" },
  { label: "Avg NPS", value: "92" },
  { label: "Years of experience", value: "12" },
];

const team = [
  {
    name: "Aisha Khan",
    role: "Creative Director",
    bio: "Leads design & creative strategy for immersive experiences.",
  },
  {
    name: "Marco Ruiz",
    role: "Technical Producer",
    bio: "Builds reliable systems and production flows at scale.",
  },
  {
    name: "Lina Park",
    role: "Client Success",
    bio: "Makes sure every deliverable lands on time and on brand.",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item: Variants = {
  hidden: { y: 10, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { ease: [0.22, 1, 0.36, 1], duration: 0.5 },
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#0b0b12] rounded-xl">
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

      <section className="relative z-10 mx-auto flex py-10 max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white bg-clip-text text-6xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          About FlowSpace
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.5 }}
          className="mt-4 max-w-3xl text-base text-black/80 md:text-lg"
        >
          We design and deliver events & projects with precision, clarity, and
          momentum. From corporate launches and conferences to immersive
          experiential builds, FlowSpace turns complex ideas into seamless
          experiences—on time, on brand, and unforgettable.
        </motion.p>

        <motion.div
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.18, duration: 0.5 }}
          className="mt-6 flex gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-white/95 px-5 py-3 text-sm font-semibold text-black shadow-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
          >
            Get in touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>

          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-gray/90 transition hover:bg-white/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
          >
            Our work
          </a>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto mt-12 max-w-6xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-8 rounded-2xl  p-6 md:grid-cols-2 lg:grid-cols-4 border border-white/50"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              className="flex flex-col items-start gap-2 rounded-lg p-4 border border-white/50"
            >
              <dt className="text-xs uppercase text-black/60">{s.label}</dt>
              <dd className="text-2xl font-bold md:text-3xl">{s.value}</dd>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 border border-white/50 rounded-xl">
          <article className="rounded-2xl  p-6">
            <h3 className="text-lg font-semibold">What we value</h3>
            <p className="mt-3 text-sm text-black/70">
              Clarity, craft, and care. We obsess over the details that move
              people—creative direction, technical reliability, and
              human-centered production.
            </p>

            <ul className="mt-4 grid gap-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/8 text-sm">
                  🔍
                </span>
                <div>
                  <h4 className="text-sm font-medium">Discovery-first</h4>
                  <p className="text-sm text-black/90">
                    We start by understanding the audience, context, and
                    outcomes.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/8 text-sm">
                  ⚙️
                </span>
                <div>
                  <h4 className="text-sm font-medium">Systems that scale</h4>
                  <p className="text-sm text-black/90">
                    Repeatable production flows mean fewer surprises and better
                    delivery.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/8 text-sm">
                  🤝
                </span>
                <div>
                  <h4 className="text-sm font-medium">Partnership</h4>
                  <p className="text-sm text-black/90">
                    We treat clients as collaborators — not just orders of
                    business.
                  </p>
                </div>
              </li>
            </ul>
          </article>

          <article id="work" className="rounded-2xl  p-6">
            <h3 className="text-lg font-semibold">Selected projects</h3>
            <p className="mt-3 text-sm text-black/70">
              Case studies across live product launches, hybrid summits, and
              large-format experiential builds.
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <a
                className="group flex items-start gap-3 rounded-lg p-3 transition hover:bg-white/5"
                href="#"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg  text-xs font-medium">
                  LX
                </div>
                <div>
                  <div className="text-sm font-medium">Launch: NovaX</div>
                  <div className="text-xs text-black/90">
                    Global product debut — hybrid launch, 4000+ attendees
                  </div>
                </div>
              </a>
              <a
                className="group flex items-start gap-3 rounded-lg p-3 transition hover:bg-white/5"
                href="#"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/8 text-xs font-medium">
                  CF
                </div>
                <div>
                  <div className="text-sm font-medium">
                    Conference: CityForum
                  </div>
                  <div className="text-xs text-black/90">
                    Curated content tracks and localized activations.
                  </div>
                </div>
              </a>
              <a
                className="group flex items-start gap-3 rounded-lg p-3 transition hover:bg-white/5"
                href="#"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/8 text-xs font-medium">
                  IM
                </div>
                <div>
                  <div className="text-sm font-medium">Immersive: Meridian</div>
                  <div className="text-xs text-black/90">
                    Large-scale brand experience with custom interactive
                    installations.
                  </div>
                </div>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-12 max-w-6xl px-6 ">
        <h2 className="text-center text-2xl font-semibold">The team</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-black/90">
          A compact team of specialists focused on execution and client
          outcomes.
        </p>

        <motion.ul
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {team.map((m) => (
            <motion.li
              key={m.name}
              variants={item}
              className="rounded-2xl p-4 border border-white"
            >
              <div className="flex items-start gap-4">
                <div
                  className="h-14 w-14 flex-none overflow-hidden rounded-full"
                  aria-hidden
                ></div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold">{m.name}</h3>
                    <span className="rounded-full px-2 py-0.5 text-xs">
                      {m.role}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-black/90">{m.bio}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <section
        id="contact"
        className="relative z-10 mx-auto mt-12 mb-24 max-w-4xl px-6 border border-white rounded-xl"
      >
        <div className="rounded-2xl bg-gradient-to-br  p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold">Start your project</h3>
              <p className="mt-1 text-sm text-black/70">
                Tell us about your timeline and goals — we’ll propose a plan.
              </p>
            </div>

            <form
              className="mt-4 flex w-full flex-col gap-2 md:mt-0 md:w-2/5"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks — we'll be in touch.");
              }}
            >
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-lg border border-white bg-transparent px-4 py-2 text-sm  placeholder:text-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              />

              <button
                type="submit"
                className="mt-1 rounded-lg bg-white/95 px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
              >
                Reach out
              </button>
            </form>
          </div>
        </div>
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
