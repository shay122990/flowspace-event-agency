"use client";

import AmbientBackdrop from "@/app/components/AmbientBackdrop";
import Card from "./components/ServiceCard";

export default function ServicesPage() {
  const services = [
    { title: "Event Strategy", desc: "Goals, budgets, and KPIs." },
    { title: "Production", desc: "Vendors, staging, logistics." },
    { title: "Project Ops", desc: "Timelines, dependencies, staffing." },
  ];

  return (
    <section
      className="relative w-full px-10 py-20 rounded-xl overflow-hidden text-white
                 bg-[radial-gradient(720px_520px_at_0%_-10%,rgba(236,72,153,0.18),transparent_45%),radial-gradient(700px_520px_at_110%_0%,rgba(56,189,248,0.22),transparent_48%),radial-gradient(760px_540px_at_50%_110%,rgba(16,185,129,0.18),transparent_50%)]"
    >
      <AmbientBackdrop />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h1 className="text-5xl font-black">Services</h1>
        <p className="mt-4 text-lg">
          Expertise across planning, production, and execution.
        </p>
      </div>

      <div className="relative z-10 mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((s) => (
          <Card key={s.title} title={s.title} desc={s.desc} />
        ))}
      </div>
    </section>
  );
}
