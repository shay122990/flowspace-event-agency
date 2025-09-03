import { notFound } from "next/navigation";
import type { Project } from "@/app/types/project";

async function getProject(slug: string): Promise<Project | undefined> {
  const res = await fetch("http://localhost:3000/api/projects", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch project");
  }

  const projects: Project[] = await res.json();
  return projects.find((p) => p.slug === slug);
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="grid gap-4">
      <h1 className="text-3xl font-semibold">{project.title}</h1>
      <p className="text-black/80">{project.description}</p>
      <p className="text-black/60">More detailed content coming soon...</p>
    </section>
  );
}
