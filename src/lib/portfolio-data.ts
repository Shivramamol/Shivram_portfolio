export const siteConfig = {
  name: "Shivram Parkhi",
  role: "Creative Developer & Designer",
  email: "shivramparkhi@gmai.com",
  location: "Pune,Maharashtra,India",
  social: {
    twitter: "https://twitter.com/alexmorgan",
    github: "https://github.com/alexmorgan",
    linkedin: "https://linkedin.com/in/alexmorgan",
    dribbble: "https://dribbble.com/alexmorgan",
  },
};

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  year: string;
  image: string;
  link?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "luminex",
    title: "Luminex",
    category: "Brand Identity",
    description:
      "A complete visual identity system for a quantum computing startup, balancing scientific precision with human warmth.",
    year: "2024",
    image: "/images/projects/luminex.jpg",
    tags: ["Branding", "Visual Identity", "Print"],
  },
  {
    id: "nocturne",
    title: "Nocturne",
    category: "Digital Product",
    description:
      "An immersive music discovery app designed for late-night listening sessions and deep focus.",
    year: "2024",
    image: "/images/projects/nocturne.jpg",
    tags: ["UI/UX", "Mobile", "Design System"],
  },
  {
    id: "atlas",
    title: "Atlas Archive",
    category: "Web Design",
    description:
      "Editorial website for an independent architecture journal, built around a flexible typographic grid.",
    year: "2023",
    image: "/images/projects/atlas.jpg",
    tags: ["Web Design", "Typography", "CMS"],
  },
  {
    id: "velvet",
    title: "Velvet",
    category: "E-commerce",
    description:
      "A premium skincare brand experience with soft gradients, tactile photography, and seamless checkout.",
    year: "2023",
    image: "/images/projects/velvet.jpg",
    tags: ["E-commerce", "Art Direction", "Packaging"],
  },
  {
    id: "synapse",
    title: "Synapse",
    category: "Data Visualization",
    description:
      "Interactive dashboard transforming complex neural research data into clear, explorable stories.",
    year: "2022",
    image: "/images/projects/synapse.jpg",
    tags: ["Dashboard", "Data Viz", "React"],
  },
  {
    id: "ember",
    title: "Ember",
    category: "Campaign",
    description:
      "Launch campaign for a sustainable energy company, blending documentary photography with bold typographic statements.",
    year: "2022",
    image: "/images/projects/ember.jpg",
    tags: ["Campaign", "Art Direction", "Social"],
  },
];

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    id: "senior-designer",
    role: "Senior Product Designer",
    company: "Stripe",
    period: "2022 — Present",
    description:
      "Leading design for developer-facing tools and payment experiences. Shaping design systems and mentoring a growing team.",
  },
  {
    id: "product-designer",
    role: "Product Designer",
    company: "Figma",
    period: "2019 — 2022",
    description:
      "Designed collaboration features used by millions of designers. Helped evolve the component system and prototyping workflows.",
  },
  {
    id: "ux-designer",
    role: "UX Designer",
    company: "Airbnb",
    period: "2017 — 2019",
    description:
      "Worked on search and discovery experiences, improving how guests find and book unique stays around the world.",
  },
  {
    id: "freelance",
    role: "Freelance Designer & Developer",
    company: "Independent",
    period: "2015 — 2017",
    description:
      "Built brands and websites for early-stage startups, agencies, and cultural institutions.",
  },
];

export const skills = [
  "UI/UX Design",
  "Design Systems",
  "Brand Identity",
  "Frontend Development",
  "Art Direction",
  "Prototyping",
  "Motion Design",
  "User Research",
];

export const about = {
  headline: "I craft digital experiences that feel considered, intuitive, and quietly bold.",
  paragraphs: [
    "With over a decade of experience across product design, brand identity, and frontend development, I help teams turn complex problems into elegant, human-centered solutions.",
    "My work sits at the intersection of strategy and craft. I believe the best designs are not only beautiful but also purposeful — every interaction should earn its place.",
    "When I'm not designing, you'll find me exploring brutalist architecture, collecting vintage typography books, or experimenting with generative art.",
  ],
};
