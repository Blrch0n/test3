"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { achievements, type Achievement } from "@/data/achievements";

type FilterType = "All" | "Hackathon" | "Olympiad" | "Project";

export default function AchievementsCinematic() {
  const [filter, setFilter] = useState<FilterType>("All");

  // Get unique years sorted descending
  const years = Array.from(new Set(achievements.map((a) => a.year))).sort(
    (a, b) => b - a,
  );

  // Filter achievements
  const filtered =
    filter === "All"
      ? achievements
      : achievements.filter((a) => a.category === filter);

  // Group by year
  const groupedByYear = filtered.reduce(
    (acc, achievement) => {
      if (!acc[achievement.year]) {
        acc[achievement.year] = [];
      }
      acc[achievement.year].push(achievement);
      return acc;
    },
    {} as Record<number, Achievement[]>,
  );

  return (
    <section id="achievements" className="relative py-32 bg-black">
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
            &gt; Mission Log
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Wall of <span className="neon-text">Wins</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Proof of concept. Proof of execution. Every trophy tells a story of
            late nights, bold ideas, and unstoppable execution.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {(["All", "Hackathon", "Olympiad", "Project"] as FilterType[]).map(
            (category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`
                px-6 py-2 font-mono text-sm uppercase tracking-wider rounded-full transition-all
                ${
                  filter === category
                    ? "bg-cyan-500 text-black"
                    : "cinematic-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50"
                }
              `}
              >
                {category}
              </button>
            ),
          )}
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              {Object.entries(groupedByYear)
                .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
                .map(([year, yearAchievements]) => (
                  <div key={year} className="relative">
                    {/* Year Rail */}
                    <div className="flex items-start gap-8 mb-8">
                      <div className="sticky top-24 flex-shrink-0">
                        <div className="w-24 h-24 neon-border rounded-lg flex items-center justify-center bg-black">
                          <span className="text-3xl font-bold neon-text">
                            {year}
                          </span>
                        </div>
                      </div>

                      {/* Achievement Cards */}
                      <div className="flex-1 grid md:grid-cols-2 gap-4">
                        {yearAchievements.map((achievement, index) => (
                          <motion.div
                            key={`${achievement.eventName}-${index}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="group cinematic-panel p-6 rounded-lg hover:border-cyan-500/50 transition-all cursor-pointer"
                          >
                            {/* Category Badge */}
                            <div className="flex items-start justify-between mb-4">
                              <span
                                className={`
                                  px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full
                                  ${achievement.category === "Hackathon" ? "bg-cyan-500/20 text-cyan-400" : ""}
                                  ${achievement.category === "Olympiad" ? "bg-purple-500/20 text-purple-400" : ""}
                                  ${achievement.category === "Project" ? "bg-green-500/20 text-green-400" : ""}
                                `}
                              >
                                {achievement.category}
                              </span>
                            </div>

                            {/* Event Name */}
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                              {achievement.eventName}
                            </h3>

                            {/* Placement */}
                            <div className="text-2xl font-bold text-cyan-400 mb-4">
                              {achievement.placement}
                            </div>

                            {/* Photo Placeholder */}
                            {achievement.photoSrc ? (
                              <div className="aspect-video rounded overflow-hidden">
                                <img
                                  src={achievement.photoSrc}
                                  alt={achievement.eventName}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ) : (
                              <div className="aspect-video rounded border border-slate-700 flex items-center justify-center text-slate-600">
                                <svg
                                  className="w-12 h-12"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                              </div>
                            )}

                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/0 group-hover:border-cyan-500 transition-all duration-300 rounded-tr-lg" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center pt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 mb-2">
            <span className="neon-text font-bold">Note:</span> Photos will be
            added as you upload them.
          </p>
          <p className="text-slate-500 text-sm">
            This is just the beginning. More victories coming soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
