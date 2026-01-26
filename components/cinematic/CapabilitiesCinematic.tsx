"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Hackathons",
    description:
      "Compete in national and international coding competitions. Ship real products in 24-48 hours.",
    size: "large",
  },
  {
    title: "Olympiads",
    description:
      "Train for competitive programming. Algorithmic thinking at scale.",
    size: "medium",
  },
  {
    title: "Team Projects",
    description:
      "Build production-grade applications with real users and real impact.",
    size: "medium",
  },
  {
    title: "Workshops",
    description:
      "Learn cutting-edge tech: AI/ML, blockchain, DevOps, cloud architecture.",
    size: "small",
  },
  {
    title: "Mentorship",
    description:
      "1-on-1 guidance from industry professionals and senior members.",
    size: "small",
  },
];

export default function CapabilitiesCinematic() {
  return (
    <section
      id="capabilities"
      className="relative py-32 bg-gradient-to-b from-black via-slate-950 to-black"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-cyan-400 text-sm mb-4 uppercase tracking-wider">
              &gt; Capabilities Online
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              What We
              <br />
              <span className="neon-text">Build</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Sys&CoTech is a mission control for student innovation. We don't
              just learn—we ship. From hackathon victories to olympiad medals,
              from side projects to production systems.
            </p>
          </motion.div>

          {/* Asymmetric Module Grid */}
          <div className="grid grid-cols-2 gap-4 auto-rows-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`
                  group relative cinematic-panel p-6 rounded-lg cursor-pointer
                  hover:border-cyan-500/50 transition-all duration-300
                  ${capability.size === "large" ? "col-span-2 row-span-2" : ""}
                  ${capability.size === "medium" ? "col-span-2" : ""}
                  ${capability.size === "small" ? "col-span-1" : ""}
                `}
                style={{
                  background: "rgba(15, 23, 42, 0.6)",
                }}
              >
                {/* Scanline effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6, 182, 212, 0.03) 2px, rgba(6, 182, 212, 0.03) 4px)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/0 group-hover:border-cyan-500 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500/0 group-hover:border-purple-500 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center pt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 mb-4">
            Ready to build something amazing?
          </p>
          <a
            href="#join"
            className="inline-flex items-center gap-2 text-cyan-400 font-mono hover:text-cyan-300 transition-colors"
          >
            <span>See how to join</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
