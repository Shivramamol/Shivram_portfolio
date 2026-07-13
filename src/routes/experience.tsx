import { createFileRoute } from "@tanstack/react-router";
import { experience } from "@/lib/portfolio-data";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Shivram Parkhi" },
      {
        name: "description",
        content:
          "Shivram Parkhi's professional experience across software development, CAD customization, and ServiceNow administration.",
      },
      { property: "og:title", content: "Experience — Shivram Parkhi" },
      {
        property: "og:description",
        content:
          "Shivram Parkhi's professional experience across software development, CAD customization, and ServiceNow administration.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Experience</p>
          <h1 className="mt-4 font-display text-5xl text-foreground md:text-6xl">
            Where I've worked
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A path through product design, creative development, and the teams that shaped how I
            think about craft.
          </p>
        </div>

        <div className="mt-16">
          {experience.map((item, index) => (
            <div
              key={item.id}
              className={`grid gap-8 border-t border-white/10 py-12 md:grid-cols-12 ${
                index === experience.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="md:col-span-3">
                <span className="text-sm font-medium text-primary">{item.period}</span>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                  <h2 className="font-display text-2xl text-foreground">{item.role}</h2>
                  <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    {item.company}
                  </span>
                </div>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-2xl border border-white/10 bg-card/30 p-8 md:p-12">
          <div>
            <h2 className="font-display text-2xl text-foreground">Education</h2>
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-foreground">B.E. in Computer Science</p>
                <p className="text-sm text-muted-foreground">Pune, Maharashtra, India</p>
              </div>
              <div>
                <p className="text-foreground">Diploma in Computer Engineering</p>
                <p className="text-sm text-muted-foreground">Pimpri Chinchwad Polytechnic, Pune</p>
              </div>
              <div>
                <p className="text-foreground">SSC</p>
                <p className="text-sm text-muted-foreground">Jai Hind High School, Pune</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
