"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/app/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.li
      key={project.slug}
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative rounded-2xl border border-fuchsia-500/25 
                 bg-gradient-to-br from-fuchsia-500/10 via-cyan-400/10 to-emerald-400/10
                 p-6 hover:border-fuchsia-500/40 hover:from-fuchsia-500/20 hover:via-cyan-400/20 hover:to-emerald-400/20
                 transition-colors"
    >
      <h2 className="text-xl font-medium">{project.title}</h2>
      <p className="mt-2 text-sm">{project.description}</p>

      <Link
        href={`/portfolio/${project.slug}`}
        className="mt-3 inline-block text-fuchsia-600 underline"
      >
        View case study →
      </Link>
    </motion.li>
  );
}
