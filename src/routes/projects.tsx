import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Shivram Parkhi" },
      {
        name: "description",
        content:
          "A selection of software projects by Shivram Parkhi, spanning computer vision, automation, and web tools.",
      },
      { property: "og:title", content: "Projects — Shivram Parkhi" },
      {
        property: "og:description",
        content:
          "A selection of software projects by Shivram Parkhi, spanning computer vision, automation, and web tools.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Work</p>
          <h1 className="mt-4 font-display text-5xl text-foreground md:text-6xl">Projects</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A curated selection of work across brand identity, digital products, and web
            experiences. Each project is a collaboration with teams who value craft.
          </p>
        </div>

        <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3">
          {projects.map((project) => (
            <div key={project.id} className="mb-6">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
