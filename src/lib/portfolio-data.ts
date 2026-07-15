export const siteConfig = {
  name: "Shivram Parkhi",
  role: "Creative Developer & Designer",
  email: "shivramparkhi@gmail.com",
  location: "Pune, Maharashtra, India",
  social: {
    discord: "https://discord.com/users/shivramparkhi_40164",
    github: "https://github.com/Shivramamol",
    linkedin: "https://www.linkedin.com/in/shivram-parkhi-4311ba300/",
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
    year: "2026",
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
    year: "2026",
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
  {
    id: "aharix",
    title: "Aharix",
    category: "Mobile App",
    description:
      "A mobile application built using Kotlin and Java, designed to deliver a smooth native Android experience. A research paper based on this project was published on IJRASET.",
    year: "2026",
    image: "/images/projects/ember.jpg",
    link: "https://github.com/Shivramamol/aharix",
    tags: ["Kotlin", "Java", "Android"],
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
  "C",
  "C++",
  "C#",
  "Python",
  "Java",
  "Kotlin",
  "JavaScript",
  "HTML & CSS",
  "Android Development",
  "CAD Customization",
  "ServiceNow Administration",
  "Computer Vision",
  "Machine Learning",
  "Automation & Scripting",
  "Git & GitHub",
  "Problem Solving",
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export const certifications: Certification[] = [
  {
    id: "servicenow-vip-cert",
    title: "ServiceNow Administrator — Virtual Internship",
    issuer: "ServiceNow University",
    year: "2026",
  },
  {
    id: "sunfibo-cert",
    title: "Software Internship Completion",
    issuer: "Sun Fibo Technology Pvt. Ltd.",
    year: "2025",
  },
  {
    id: "aharix-paper",
    title: "Research Paper — Aharix Mobile Application",
    issuer: "Published on IJRASET",
    year: "2026",
  },
];

export const about = {
  headline: "I craft digital experiences that feel considered, intuitive, and quietly bold.",
  paragraphs: [
    "With over a 3 years of experience across software development, product design, and frontend development, I help teams turn complex problems into elegant, human-centered solutions.",
    "My work sits at the intersection of strategy and craft. I believe the best designs are not only beautiful but also purposeful — every interaction should earn its place.",
    "When I'm not designing, you'll find me exploring new tech specially in ai and related fields, collecting useful information, or experimenting with generative art. Also i like to play football⚽ and cricket 🏏 as it keeps me relax and healthy.",
  ],
};
