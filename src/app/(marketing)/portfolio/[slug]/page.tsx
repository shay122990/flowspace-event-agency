import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/app/data/projects";
import { projectContent } from "@/app/data/projectContent";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const content = projectContent[project.slug];

  return (
    <section
      className="relative w-full px-6 md:px-10 py-16 text-gray-700 overflow-hidden rounded-xl
                 bg-[radial-gradient(700px_520px_at_0%_0%,rgba(236,72,153,0.18),transparent_45%),radial-gradient(680px_520px_at_100%_0%,rgba(56,189,248,0.2),transparent_48%),radial-gradient(780px_560px_at_50%_100%,rgba(16,185,129,0.18),transparent_50%)]"
    >
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-cyan-300 underline underline-offset-4"
          >
            <span aria-hidden>←</span> Back to portfolio
          </Link>
        </div>

        <header className="relative overflow-hidden rounded-2xl border border-fuchsia-500/25 bg-white/5">
          {content?.hero?.cover ? (
            <div className="relative h-56 md:h-72">
              <Image
                src={content.hero.cover}
                alt={project.title}
                fill
                className="object-cover opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          ) : null}

          <div className="p-6 md:p-8">
            {content?.hero?.kicker && (
              <p className="text-sm uppercase tracking-wider text-gray-500">
                {content.hero.kicker}
              </p>
            )}
            <h1 className="mt-1 text-4xl md:text-5xl font-black">
              {project.title}
            </h1>
            <p className="mt-3 text-gray-500">{project.description}</p>
          </div>
        </header>

        {content?.stats?.length ? (
          <ul className="mt-6 flex flex-wrap gap-3">
            {content.stats.map((s) => (
              <li
                key={s.label}
                className="rounded-xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-cyan-400/10 px-4 py-2"
              >
                <span className="text-gray-500 mr-2">{s.label}:</span>
                <span className="font-semibold">{s.value}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <section className="rounded-2xl border border-fuchsia-500/20 p-6 bg-white/5">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="mt-3 text-gray-500">
              {content?.overview ?? "Overview coming soon."}
            </p>
          </section>

          <section className="rounded-2xl border border-fuchsia-500/20 p-6 bg-white/5">
            <h2 className="text-2xl font-semibold">Services</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {(content?.services ?? []).map((s) => (
                <li
                  key={s}
                  className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 border border-white/10"
                >
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section className="md:col-span-2 rounded-2xl border border-fuchsia-500/20 p-6 bg-white/5">
            <h2 className="text-2xl font-semibold">Highlights</h2>
            <ul className="mt-4 grid md:grid-cols-2 gap-3 list-disc list-inside text-gray-500">
              {(content?.highlights ?? []).map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>

          {content?.gallery?.length ? (
            <section className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {content.gallery.map((src) => (
                  <li
                    key={src}
                    className="overflow-hidden rounded-xl border border-white/10"
                  >
                    <Image
                      src={src}
                      alt={project.title}
                      width={1000}
                      height={750}
                      className="h-44 w-full object-cover hover:scale-105 transition-transform"
                    />
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </div>
    </section>
  );
}
