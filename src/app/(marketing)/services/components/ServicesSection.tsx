"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ServiceSection as ServiceSectionType } from "@/app/types/service";

type Props = ServiceSectionType & { index: number };

export default function ServiceSection({
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
}: Props) {
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

        <div className="mt-4 flex flex-wrap items-center gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-gray-200 bg-white/90 px-4 py-3 shadow-sm"
            >
              <div className="text-2xl font-black tracking-tight text-gray-900">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-500">
                {s.label}
              </div>
            </div>
          ))}

          <button className="relative ml-auto inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-transform active:scale-[.98] border-gray-300 bg-white hover:shadow-md">
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
