"use client";

import { motion } from "framer-motion";

const pipelineSteps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Fill out our application form. Tell us about your interests, skills, and what you want to build.",
    duration: "5 minutes",
  },
  {
    number: "02",
    title: "Interview",
    description:
      "Chat with our team. We want to know your motivation, learn about your projects, and see if we're a good fit.",
    duration: "30 minutes",
  },
  {
    number: "03",
    title: "Onboarding",
    description:
      "Meet the team, get access to resources, join our community channels. We'll introduce you to mentors and ongoing projects.",
    duration: "1 week",
  },
  {
    number: "04",
    title: "Track Selection",
    description:
      "Choose your focus: Competitive Programming, Hackathons, Product Development, or Research. You can do multiple tracks.",
    duration: "Flexible",
  },
  {
    number: "05",
    title: "Build & Learn",
    description:
      "Work on real projects, compete in contests, attend workshops. Get 1-on-1 mentorship and technical guidance.",
    duration: "Ongoing",
  },
  {
    number: "06",
    title: "Demo & Ship",
    description:
      "Present your work to the community. Ship to production. Add wins to your portfolio. Mentor new members.",
    duration: "Recurring",
  },
];

const requirements = [
  "Currently enrolled in university or high school",
  "Passion for technology and building things",
  "Basic programming knowledge (any language)",
  "Commitment to weekly meetups and projects",
  "Open to collaboration and learning",
];

export default function JoinPipelineCinematic() {
  return (
    <section
      id="join"
      className="relative py-32 bg-gradient-to-b from-black via-slate-950 to-black"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-cyan-400 text-sm mb-4 uppercase tracking-wider">
            &gt; Recruitment Pipeline
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Join the <span className="neon-text">Mission</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We're looking for builders, thinkers, and doers. If you're ready to
            ship real projects and win competitions, here's how to get started.
          </p>
        </motion.div>

        {/* Pipeline Steps */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="space-y-6">
            {pipelineSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="cinematic-panel p-8 rounded-lg hover:border-cyan-500/50 transition-all">
                  <div className="flex items-start gap-6">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 neon-border rounded-lg flex items-center justify-center bg-black group-hover:scale-110 transition-transform">
                        <span className="text-2xl font-bold neon-text">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {step.title}
                        </h3>
                        <span className="text-sm text-slate-500 font-mono">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < pipelineSteps.length - 1 && (
                    <div className="absolute left-14 top-full h-6 w-0.5 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Requirements & CTA */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="cinematic-panel p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-6 text-cyan-400">
              Requirements
            </h3>
            <ul className="space-y-3">
              {requirements.map((req, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-400"
                >
                  <svg
                    className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Time Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="cinematic-panel p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-6 text-purple-400">
              Time Commitment
            </h3>
            <div className="space-y-4 text-slate-400">
              <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                <span>Weekly meetups</span>
                <span className="font-mono text-cyan-400">2-3 hours</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                <span>Project work</span>
                <span className="font-mono text-cyan-400">5-10 hours</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                <span>Competitions</span>
                <span className="font-mono text-cyan-400">As needed</span>
              </div>
              <div className="pt-2">
                <p className="text-sm text-slate-500">
                  Flexible schedule. We understand you have classes and other
                  commitments.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center pt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="tel:+97694945798"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 text-black text-lg font-bold rounded-lg hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all group"
          >
            <span>Request Access Now</span>
            <svg
              className="w-6 h-6 group-hover:translate-x-2 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <p className="text-slate-500 mt-4 font-mono text-sm">
            Call or message:{" "}
            <span className="text-cyan-400">+976 9494 5798</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
