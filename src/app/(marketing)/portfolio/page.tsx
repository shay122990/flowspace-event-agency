import { projects } from "@/app/data/projects";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <section className="grid gap-6">
      <h1 className="text-3xl font-semibold">Portfolio</h1>
      <p className="text-black/80">Case studies and projects.</p>

      <ul className="grid grid-cols-3 gap-4">
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
