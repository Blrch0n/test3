"use client";

import { motion } from "framer-motion";

export default function FooterCinematic() {
  return (
    <footer className="relative py-16 bg-black border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 neon-border rounded-sm flex items-center justify-center bg-black">
                <span className="text-cyan-400 font-bold text-lg font-mono">
                  S&C
                </span>
              </div>
              <span className="text-white font-semibold text-lg">
                Sys&CoTech
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Student innovation lab. We build, compete, and ship real projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#capabilities"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Achievements
                </a>
              </li>
              <li>
                <a
                  href="#join"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Join Us
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+97694945798"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+976 9494 5798</span>
              </a>
              <div className="pt-4">
                <a
                  href="tel:+97694945798"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-black text-sm font-semibold rounded hover:bg-cyan-400 transition-colors"
                >
                  Request Access
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; 2026 Sys&CoTech. Mission control for student innovation.</p>
          <div className="flex items-center gap-4">
            <a href="/" className="hover:text-cyan-400 transition-colors">
              Classic Site
            </a>
            <span>•</span>
            <a href="/cinematic" className="text-cyan-400">
              Cinematic Mode
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
