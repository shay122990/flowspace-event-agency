import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="grid gap-4">
      <h1 className="text-3xl font-semibold">{project?.title}</h1>
      <p className="text-black/80">{project?.description}</p>
      <p className="text-black/60">More detailed content coming soon...</p>
    </section>
  );
}
