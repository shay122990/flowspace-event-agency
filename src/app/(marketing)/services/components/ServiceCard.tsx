"use client";

import { motion } from "framer-motion";

interface CardProps {
  title: string;
  desc: string;
}

export default function ServiceCard({ title, desc }: CardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="relative rounded-2xl border border-black/50 bg-white/10 p-6 shadow-lg backdrop-blur-md hover:border-fuchsia-400/50 hover:shadow-fuchsia-500/20 transition"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm">{desc}</p>
    </motion.div>
  );
}
