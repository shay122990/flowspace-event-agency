"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/app/types/project";

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/projects", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data: Project[] = await res.json();
        setProjects(data);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setErr(e.message);
        } else {
          setErr("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section className="relative w-full px-10 py-20 overflow-hidden bg-black/40 text-white rounded-xl">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-blue-400/20 to-orange-400/20 blur-2xl" />
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

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="text-center">
          <h1 className="text-5xl font-black">Portfolio</h1>
          <p className="mt-4 text-lg">Case studies and projects.</p>
        </header>

        {loading && <p className="mt-12 text-center text-black/70">Loading…</p>}
        {err && <p className="mt-12 text-center text-red-600">{err}</p>}

        {!loading && !err && (
          <ul className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <motion.li
                key={project.slug}
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative rounded-2xl border border-black/10 bg-white/10 p-6 backdrop-blur-md hover:border-black/30 hover:bg-white/20 transition-colors"
              >
                <h2 className="text-xl font-medium">{project.title}</h2>
                <p className="mt-2 text-sm text-white">{project.description}</p>

                <Link
                  href={`/portfolio/${project.slug}`}
                  className="mt-3 inline-block text-fuchsia-400  underline"
                >
                  View case study →
                </Link>

                <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-fuchsia-500/25 via-cyan-400/25 to-emerald-400/25 blur-xl" />
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
