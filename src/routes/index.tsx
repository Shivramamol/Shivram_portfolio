import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Morgan — Creative Developer & Designer" },
      {
        name: "description",
        content:
          "Portfolio of Alex Morgan, a creative developer and designer crafting digital experiences that feel considered, intuitive, and quietly bold.",
      },
      { property: "og:title", content: "Alex Morgan — Creative Developer & Designer" },
      {
        property: "og:description",
        content:
          "Portfolio of Alex Morgan, a creative developer and designer crafting digital experiences that feel considered, intuitive, and quietly bold.",
      },
    ],
  }),
  component: HomePage,
});

const featuredProjects = projects.slice(0, 3);

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-24 lg:px-8 lg:pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-mid/20 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Creative Developer & Designer
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[1.1] text-foreground md:text-7xl lg:text-8xl">
              Crafting digital experiences with depth and intention.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I design and build thoughtful products, brands, and interfaces for teams who care
              about the details.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                View projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
              >
                Get in touch
                <ArrowDownRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Selected work
              </p>
              <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">
                Projects that define me
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              See all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3">
            {featuredProjects.map((project) => (
              <div key={project.id} className="mb-6">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-y border-white/10 bg-card/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">About</p>
              <h2 className="mt-4 font-display text-3xl leading-snug text-foreground md:text-4xl">
                A decade of shaping products, brands, and the spaces between them.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I bring together design thinking and technical craft to create work that is both
                beautiful and functional. From early-stage startups to global products, I help
                teams find clarity and build with confidence.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                Read more about me
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
