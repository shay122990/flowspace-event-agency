"use client";

import AmbientBackdrop from "@/app/components/AmbientBackdrop";
import ServiceSection from "./components/servicesSection";
import { servicesSections } from "@/app/data/servicesSections";

export default function ServicesPage() {
  return (
    <section className="relative w-full overflow-hidden rounded-xl bg-[radial-gradient(720px_520px_at_0%_-10%,rgba(236,72,153,0.18),transparent_45%),radial-gradient(700px_520px_at_110%_0%,rgba(56,189,248,0.22),transparent_48%),radial-gradient(760px_540px_at_50%_110%,rgba(16,185,129,0.18),transparent_50%)] px-6 py-20 md:px-10">
      <AmbientBackdrop />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h1 className="text-8xl font-black tracking-tight text-white drop-shadow-sm">
          Services
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Expertise across planning, production, and execution.
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-16 flex max-w-6xl flex-col gap-16">
        {servicesSections.map((s, i) => (
          <ServiceSection key={s.id} index={i} {...s} />
        ))}
      </div>

      <style>{`
        #strategy, #production, #ops { scroll-margin-top: 96px; }
      `}</style>
    </section>
  );
}
