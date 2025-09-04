"use client";

import Card from "./components/Card";

export default function ServicesPage() {
  const services = [
    { title: "Event Strategy", desc: "Goals, budgets, and KPIs." },
    { title: "Production", desc: "Vendors, staging, logistics." },
    { title: "Project Ops", desc: "Timelines, dependencies, staffing." },
  ];

  return (
    <section className="relative w-full px-10 py-20 text-black/80 bg">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-5xl font-black ">Services</h1>
        <p className="mt-4 text-lg ">
          Expertise across planning, production, and execution.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((s) => (
          <Card key={s.title} title={s.title} desc={s.desc} />
        ))}
      </div>
    </section>
  );
}
