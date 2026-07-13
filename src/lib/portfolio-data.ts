export const siteConfig = {
  name: "Shivram Parkhi",
  role: "Creative Developer & Designer",
  email: "shivramparkhi@gmail.com",
  location: "Pune, Maharashtra, India",
  social: {
    discord: "https://discord.com/users/shivramparkhi_40164",
    github: "https://github.com/Shivramamol",
    linkedin: "https://www.linkedin.com/in/shivram-parkhi-4311ba300/",
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
    id: "drone-detection",
    title: "Drone Detection",
    category: "Computer Vision",
    description:
      "Python-based system for detecting drones in video streams using computer vision and machine learning techniques.",
    year: "2024",
    image: "/images/projects/synapse.jpg",
    link: "https://github.com/Shivramamol/drone-detection",
    tags: ["Python", "Computer Vision", "ML"],
  },
  {
    id: "hackerrank-orchestrate",
    title: "HackerRank Orchestrate",
    category: "Automation",
    description:
      "Python automation utility for orchestrating and managing HackerRank workflows and test executions.",
    year: "2024",
    image: "/images/projects/atlas.jpg",
    link: "https://github.com/Shivramamol/hackerrank_orchestarte",
    tags: ["Python", "Automation", "Tooling"],
  },
  {
    id: "employee-mansys",
    title: "Employee Management System",
    category: "Web App",
    description:
      "A simple employee management system built with JavaScript for tracking staff records and organizational data.",
    year: "2023",
    image: "/images/projects/luminex.jpg",
    link: "https://github.com/Shivramamol/simple_employee_mansys",
    tags: ["JavaScript", "CRUD", "Web"],
  },
  {
    id: "simple-interest",
    title: "Simple Interest Calculator",
    category: "Web Tool",
    description:
      "Lightweight HTML calculator for computing simple interest with a clean, distraction-free interface.",
    year: "2023",
    image: "/images/projects/velvet.jpg",
    link: "https://github.com/Shivramamol/Simple_Interest_Calculator",
    tags: ["HTML", "CSS", "JavaScript"],
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
    id: "servicenow-vip",
    role: "Virtual Internship Program — ServiceNow Administrator",
    company: "ServiceNow University",
    period: "Jun 2026 · Remote · 1 month",
    description:
      "Completed the ServiceNow University Virtual Internship focused on ServiceNow administration, platform configuration, and workflow fundamentals.",
  },
  {
    id: "sunfibo-intern",
    role: "Software Intern",
    company: "Sun Fibo Technology Pvt. Ltd.",
    period: "Jun 2025 — Aug 2025 · Hybrid · 3 months",
    description:
      "Worked on CAD customization and software development across C#, C++, C, and Python — building internal tooling and extensions for CAD workflows.",
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
