"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Dot = { left: number; top: number; delay: number; dur: number };

export default function AnimatedParticles() {
  const [dots, setDots] = useState<Dot[]>([]);

  // Avoid SSR/CSR mismatch by generating on mount
  useEffect(() => {
    const N = 22;
    const seq = Array.from({ length: N }, (_, i) => ({
      left: (i * 53) % 100,
      top: (i * 97) % 100,
      delay: ((i * 173) % 1500) / 1000,
      dur: 5 + ((i * 37) % 500) / 100,
    }));
    setDots(seq);
  }, []);

  if (!dots.length) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {dots.map((p, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,.7)]"
          style={{ left: `${p.left}%`, top: `${p.top}%` }}
          initial={{ opacity: 0.15, scale: 0.7, y: 0 }}
          animate={{ y: [0, -20, 0], opacity: [0.15, 0.6, 0.15] }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
