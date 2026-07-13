import { siteConfig } from "@/lib/portfolio-data";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row lg:px-8">
        <div className="text-center md:text-left">
          <p className="font-display text-lg text-foreground">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{siteConfig.role}</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={siteConfig.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
