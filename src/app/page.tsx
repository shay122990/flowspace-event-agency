import Link from "next/link";

export default function HomePage() {
  return (
    <section className="grid gap-8">
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          FlowSpace
        </h1>
        <p className="mt-4 text-lg text-white/80">
          Turning ideas into seamless experiences.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/proposal"
            className="rounded-lg bg-brand-500 hover:bg-brand-600 px-6 py-3 font-medium"
          >
            Generate Proposal
          </Link>
          <Link
            href="/portfolio"
            className="rounded-lg border border-white/20 hover:border-white/40 px-6 py-3 font-medium"
          >
            View Portfolio
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Corporate Launches",
            desc: "End-to-end launch operations.",
          },
          { title: "Conferences", desc: "Speakers, staging, and schedules." },
          { title: "Experiential", desc: "Immersive brand experiences." },
        ].map((c) => (
          <div key={c.title} className="rounded-xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <p className="mt-2 text-white/70">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
