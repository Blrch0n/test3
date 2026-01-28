"use client";

import { SectionHeader } from "@/components/FAQ";
import { ProjectCard } from "@/components/Cards";

const projectsData = [
  {
    title: "Sys&CoTech Website",
    description:
      "Modern landing page built with Next.js 16, React 19, and Tailwind v4. Features real-time 3D graphics, command palette, and responsive design.",
    tags: ["Next.js", "React", "Three.js"],
    links: [
      { label: "View Site", href: "#hero" },
      { label: "GitHub", href: "https://github.com/syscotech" },
    ],
  },
  {
    title: "Dev Hackathon Platform",
    description:
      "Registration and management system for our annual 48-hour innovation sprint. Supports team formation, submission tracking, and live leaderboards.",
    tags: ["TypeScript", "Node.js", "PostgreSQL"],
    links: [
      { label: "Visit", href: "https://devhackathon.mn" },
      { label: "GitHub", href: "https://github.com/syscotech/hackathon" },
    ],
  },
  {
    title: "Learning Management System",
    description:
      "Internal platform for training programs with course materials, progress tracking, and interactive coding challenges for members.",
    tags: ["React", "Express", "MongoDB"],
    links: [
      { label: "Demo", href: "#programs" },
      { label: "Learn More", href: "#contact" },
    ],
  },
  {
    title: "Contest Prep Tracker",
    description:
      "Practice tool for competitive programming with problem sets, automated testing, and performance analytics to prepare for contests.",
    tags: ["Python", "Django", "Redis"],
    links: [
      { label: "Try It", href: "#programs" },
      { label: "GitHub", href: "https://github.com/syscotech/contest-prep" },
    ],
  },
  {
    title: "Club Portal Dashboard",
    description:
      "Member dashboard for event registration, project showcases, attendance tracking, and collaboration tools for club activities.",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    links: [
      { label: "Preview", href: "#about" },
      { label: "Docs", href: "#faq" },
    ],
  },
  {
    title: "Design Resources Library",
    description:
      "Curated collection of UI/UX design assets, templates, and learning resources created by members for the community.",
    tags: ["Figma", "React", "Markdown"],
    links: [
      { label: "Browse", href: "#pillars" },
      { label: "Contribute", href: "#contact" },
    ],
  },
];

export default function Projects() {
  return (
    <div className="relative">
      <SectionHeader
        eyebrow="SHOWCASE"
        title="Built Here"
        subtitle="Real projects shipped by members—from hackathon winners to production platforms."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            links={project.links}
            delay={index * 0.08}
          />
        ))}
      </div>
    </div>
  );
}
