import { createFileRoute } from "@tanstack/react-router";
import { about, skills, siteConfig } from "@/lib/portfolio-data";
import shivramPhoto from "@/assets/shivram_passsize.JPG.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shivram Parkhi" },
      {
        name: "description",
        content:
          "Learn about Shivram Parkhi's background, approach, and skills as a creative developer and designer.",
      },
      { property: "og:title", content: "About — Shivram Parkhi" },
      {
        property: "og:description",
        content:
          "Learn about Shivram Parkhi's background, approach, and skills as a creative developer and designer.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28">
              <div className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-card/30">
                <img
                  src={shivramPhoto.url}
                  alt="Shivram Parkhi"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">About</p>
              <h1 className="mt-4 font-display text-5xl text-foreground md:text-6xl">
                {siteConfig.name}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">{siteConfig.role}</p>
              <div className="mt-8 space-y-4 text-sm text-muted-foreground">
                <p>
                  <span className="block text-xs uppercase tracking-wider text-foreground">Location</span>
                  {siteConfig.location}
                </p>
                <p>
                  <span className="block text-xs uppercase tracking-wider text-foreground">Email</span>
                  {siteConfig.email}
                </p>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-8">
            <p className="font-display text-2xl leading-relaxed text-foreground md:text-3xl">
              {about.headline}
            </p>

            <div className="mt-12 space-y-6 text-base leading-7 text-muted-foreground">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-16">
              <h2 className="font-display text-2xl text-foreground">Skills & capabilities</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-card/50 px-4 py-2 text-sm text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-16 rounded-2xl border border-white/10 bg-card/30 p-8">
              <h2 className="font-display text-2xl text-foreground">Approach</h2>
              <ul className="mt-6 space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">01.</span>
                  <span>
                    <strong className="text-foreground">Start with people.</strong> Every project
                    begins with understanding the humans on the other side of the screen.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">02.</span>
                  <span>
                    <strong className="text-foreground">Design in systems.</strong> I build
                    flexible foundations that scale, not one-off artifacts.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">03.</span>
                  <span>
                    <strong className="text-foreground">Ship with care.</strong> Details matter —
                    from the first prototype to the final pixel.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
