export default function ServicesPage() {
  const services = [
    { title: "Event Strategy", desc: "Goals, budgets, and KPIs." },
    { title: "Production", desc: "Vendors, staging, logistics." },
    { title: "Project Ops", desc: "Timelines, dependencies, staffing." },
  ];

  return (
    <section className="grid gap-6">
      <h1 className="text-3xl font-semibold">Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="rounded-xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-white/70">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
