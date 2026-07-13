import { createFileRoute } from "@tanstack/react-router";
import { experience } from "@/lib/portfolio-data";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Alex Morgan" },
      {
        name: "description",
        content:
          "Alex Morgan's professional experience across product design, UX, and creative development.",
      },
      { property: "og:title", content: "Experience — Alex Morgan" },
      {
        property: "og:description",
        content:
          "Alex Morgan's professional experience across product design, UX, and creative development.",
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
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl text-foreground">Education</h2>
              <div className="mt-6">
                <p className="text-foreground">BFA in Graphic Design</p>
                <p className="text-sm text-muted-foreground">Rhode Island School of Design, 2015</p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground">Recognition</h2>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>Awwwards Site of the Day — 2023</li>
                <li>FWA of the Month — 2022</li>
                <li>Adobe Design Achievement Awards — Finalist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
