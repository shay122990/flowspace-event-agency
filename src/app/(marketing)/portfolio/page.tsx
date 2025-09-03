import Link from "next/link";
import type { Project } from "@/app/types/project";

async function getProjects(): Promise<Project[]> {
  const res = await fetch("http://localhost:3000/api/projects", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <section className="grid gap-6">
      <h1 className="text-3xl font-semibold">Portfolio</h1>
      <p className="text-black/80">Case studies and projects.</p>

      <ul className="grid gap-4">
        {projects.map((project) => (
          <li key={project.slug} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-medium">{project.title}</h2>
            <p className="text-sm text-black/60">{project.description}</p>
            <Link
              href={`/portfolio/${project.slug}`}
              className="text-blue-600 underline mt-2 inline-block"
            >
              View case study →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
