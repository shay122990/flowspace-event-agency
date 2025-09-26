"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/app/types/project";
import AmbientBackdrop from "@/app/components/AmbientBackdrop";
import ProjectCard from "./components/ProjectCard";

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
        setErr(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section
      className="relative w-full px-10 py-20 overflow-hidden rounded-xl text-gray-700
                 bg-[radial-gradient(700px_520px_at_0%_0%,rgba(236,72,153,0.18),transparent_45%),radial-gradient(680px_520px_at_100%_0%,rgba(56,189,248,0.2),transparent_48%),radial-gradient(780px_560px_at_50%_100%,rgba(16,185,129,0.18),transparent_50%)]"
    >
      <AmbientBackdrop />

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="text-center">
          <h1 className="text-5xl font-black">Portfolio</h1>
          <p className="mt-4 text-lg">Case studies and projects.</p>
        </header>

        {loading && (
          <p className="mt-12 text-center text-fuchsia-300/80">Loading…</p>
        )}
        {err && <p className="mt-12 text-center text-red-400">{err}</p>}

        {!loading && !err && (
          <ul className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
