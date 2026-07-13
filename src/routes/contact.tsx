import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Alex Morgan" },
      {
        name: "description",
        content:
          "Get in touch with Alex Morgan for design, development, and creative collaboration opportunities.",
      },
      { property: "og:title", content: "Contact — Alex Morgan" },
      {
        property: "og:description",
        content:
          "Get in touch with Alex Morgan for design, development, and creative collaboration opportunities.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Info */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Contact</p>
            <h1 className="mt-4 font-display text-5xl text-foreground md:text-6xl">
              Let's make something meaningful.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I'm currently open to select freelance projects, full-time opportunities, and
              creative collaborations. If you have an idea worth building, I'd love to hear about
              it.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-card/30 p-4 transition-colors hover:border-primary/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="text-foreground">{siteConfig.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-card/30 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
                  <p className="text-foreground">{siteConfig.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a
                href={siteConfig.social.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                aria-label="Discord"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-white/10 bg-card/30 p-8 md:p-10">
            <h2 className="font-display text-2xl text-foreground">Send a message</h2>
            <form
              action={`mailto:${siteConfig.email}`}
              method="post"
              encType="text/plain"
              className="mt-8 space-y-6"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
