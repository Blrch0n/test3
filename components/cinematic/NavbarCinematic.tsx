"use client";

import Link from "next/link";

export default function NavbarCinematic() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 cinematic-panel border-b border-slate-700/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Mission Badge */}
        <Link href="/cinematic" className="flex items-center gap-3 group">
          <div className="w-10 h-10 neon-border rounded-sm flex items-center justify-center bg-black transition-all group-hover:scale-105">
            <span className="text-cyan-400 font-bold text-lg font-mono">
              S&C
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold tracking-tight text-sm">
              Sys&CoTech
            </span>
            <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">
              Mission Control
            </span>
          </div>
        </Link>

        {/* Center Status */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
            Recruiting: Open
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-6 text-sm font-mono">
            <a
              href="#capabilities"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#achievements"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Achievements
            </a>
            <a
              href="#join"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Join
            </a>
            <a
              href="#community"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Community
            </a>
          </div>

          {/* CTA */}
          <a
            href="tel:+97694945798"
            className="px-4 py-2 bg-cyan-500 text-black text-sm font-semibold rounded hover:bg-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
          >
            Request Access
          </a>
        </div>
      </div>
    </nav>
  );
}
