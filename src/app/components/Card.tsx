"use client";
import { motion } from "framer-motion";

type CardProps = {
  title: string;
  desc: string;
};

export default function Card({ title, desc }: CardProps) {
  return (
    <motion.article
      variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm"
    >
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,#a78bfa_0deg,#22d3ee_120deg,#34d399_240deg,#f472b6_360deg)] opacity-0 blur-[6px]"
      />

      <div className="relative z-10">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-white/70">{desc}</p>
      </div>

      <motion.div
        aria-hidden
        initial={{ x: 0 }}
        whileHover={{ x: 6 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80"
      >
        Explore →
      </motion.div>
    </motion.article>
  );
}
