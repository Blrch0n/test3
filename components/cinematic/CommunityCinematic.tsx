"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Placeholder gallery data - replace with real photos later
const galleryItems = [
  { id: 1, caption: "Hackathon 2024 - Team Photo", aspectRatio: "landscape" },
  { id: 2, caption: "Workshop Session", aspectRatio: "portrait" },
  { id: 3, caption: "Demo Day Presentation", aspectRatio: "landscape" },
  { id: 4, caption: "Award Ceremony", aspectRatio: "square" },
  { id: 5, caption: "Team Building Event", aspectRatio: "landscape" },
  { id: 6, caption: "Coding Marathon", aspectRatio: "portrait" },
  { id: 7, caption: "Project Showcase", aspectRatio: "square" },
  { id: 8, caption: "Community Meetup", aspectRatio: "landscape" },
];

export default function CommunityCinematic() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="community" className="relative py-32 bg-black overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-cyan-400 text-sm mb-4 uppercase tracking-wider">
            &gt; Community Archive
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="neon-text">Story</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Behind every win is a team. Behind every project is collaboration.
            This is Sys&CoTech in action.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onClick={() => setSelectedImage(item.id)}
              className={`
                relative cursor-pointer group overflow-hidden rounded-lg
                ${item.aspectRatio === "portrait" ? "row-span-2" : ""}
                ${item.aspectRatio === "landscape" ? "col-span-2" : ""}
              `}
            >
              {/* Placeholder with gradient */}
              <div
                className={`
                  bg-gradient-to-br from-slate-800 to-slate-900 
                  flex items-center justify-center
                  ${item.aspectRatio === "portrait" ? "aspect-[3/4]" : ""}
                  ${item.aspectRatio === "landscape" ? "aspect-[16/9]" : ""}
                  ${item.aspectRatio === "square" ? "aspect-square" : ""}
                `}
              >
                {/* Icon */}
                <svg
                  className="w-16 h-16 text-slate-700 group-hover:text-cyan-400 transition-colors"
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

              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm font-medium">{item.caption}</p>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 border-2 border-cyan-500/0 group-hover:border-cyan-500 rounded-lg transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          className="text-center cinematic-panel p-6 rounded-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <svg
              className="w-5 h-5 text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-cyan-400 font-bold">Photo Placeholders</span>
          </div>
          <p className="text-slate-400 text-sm">
            This gallery is ready for your real photos. Simply add image URLs to
            the gallery data and they'll display with the same cinematic
            treatment.
          </p>
        </motion.div>
      </div>

      {/* Simple Lightbox Modal (optional enhancement) */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full aspect-video bg-slate-900 rounded-lg flex items-center justify-center">
            <p className="text-slate-500">Photo #{selectedImage}</p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
