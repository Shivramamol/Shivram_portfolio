import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const href = project.link || "#";
  const isExternal = href.startsWith("http");
  return (
    <article className="group break-inside-avoid rounded-xl border border-white/10 bg-card/50 p-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card">
      <a
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="block"
      >
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              featured ? "aspect-[4/3]" : "aspect-[3/4]"
            }`}
          />
          <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4 text-foreground" />
          </div>
        </div>

        <div className="mt-4 px-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              {project.category}
            </span>
            <span className="text-xs text-muted-foreground">{project.year}</span>
          </div>
          <h3 className="mt-2 font-display text-2xl text-foreground">{project.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
