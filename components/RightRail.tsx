"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "INTRO" },
  { id: "about", label: "ABOUT" },
  { id: "pillars", label: "CORE" },
  { id: "programs", label: "TRAINING" },
  { id: "events", label: "EVENTS" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "CONTACT" },
];

export default function RightRail() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -50% 0px",
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const currentSectionLabel =
    sections.find((s) => s.id === activeSection)?.label || "INTRO";

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-6 pointer-events-none">
      {/* Section indicator */}
      <div className="flex flex-col items-center gap-3 mb-2">
        <div className="text-[9px] font-mono text-white/40 tracking-[0.25em] uppercase rotate-180 [writing-mode:vertical-lr]">
          {currentSectionLabel}
        </div>
        <div className="w-px h-8 bg-gradient-to-b from-white/10 to-transparent" />
      </div>

      {/* Dot markers */}
      <div className="flex flex-col items-center gap-3">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group pointer-events-auto"
            aria-label={section.label}
          >
            <div
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-[#5B5FFF] scale-150 shadow-[0_0_12px_rgba(91,95,255,0.8)]"
                  : "bg-white/20 hover:bg-white/40 hover:scale-125"
              }`}
            />
          </a>
        ))}
      </div>

      {/* MENU label */}
      <div className="flex flex-col items-center gap-3 mt-2">
        <div className="w-px h-8 bg-gradient-to-t from-white/10 to-transparent" />
        <div className="text-[9px] font-mono text-white/30 tracking-[0.25em] uppercase rotate-180 [writing-mode:vertical-lr]">
          MENU
        </div>
      </div>
    </div>
  );
}
