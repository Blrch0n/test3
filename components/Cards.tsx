"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Card({ children, className = "", delay = 0 }: CardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-xl glass-panel p-6 hover-lift hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_40px_rgba(91,95,255,0.15)] transition-all duration-300 ${className}`}
    >
      <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-white/10 group-hover:border-[#5B5FFF]/40 transition-colors" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-white/10 group-hover:border-[#5B5FFF]/40 transition-colors" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-white/10 group-hover:border-[#5B5FFF]/40 transition-colors" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-white/10 group-hover:border-[#5B5FFF]/40 transition-colors" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function ValueCard({
  icon,
  title,
  description,
  delay = 0,
}: ValueCardProps) {
  return (
    <Card delay={delay}>
      <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.02] border border-[#00D4FF]/20 mb-5 group-hover:border-[#00D4FF]/40 group-hover:shadow-[0_0_16px_rgba(0,212,255,0.2)] transition-all duration-300">
        <div className="relative">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold mb-2.5 group-hover:text-[#00D4FF] transition-colors">
        {title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </Card>
  );
}

interface PillarCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function PillarCard({
  icon,
  title,
  description,
  delay = 0,
}: PillarCardProps) {
  return (
    <Card delay={delay}>
      <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.02] border border-[#5B5FFF]/20 mb-4 group-hover:scale-105 group-hover:border-[#5B5FFF]/40 group-hover:shadow-[0_0_16px_rgba(91,95,255,0.2)] transition-all duration-300">
        <div className="relative">{icon}</div>
      </div>
      <h4 className="text-base font-semibold mb-2 group-hover:text-[#5B5FFF] transition-colors">
        {title}
      </h4>
      <p className="text-white/55 text-sm leading-relaxed">{description}</p>
    </Card>
  );
}

interface ProgramCardProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

export function ProgramCard({
  number,
  title,
  description,
  delay = 0,
}: ProgramCardProps) {
  return (
    <Card delay={delay} className="relative overflow-hidden min-h-[240px]">
      {/* Subtle background number */}
      <div className="absolute top-6 right-6 text-6xl font-bold text-white/[0.03] group-hover:text-white/[0.05] group-hover:scale-105 transition-all duration-300">
        {number}
      </div>
      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-3 pr-12 group-hover:text-[#00D4FF] transition-colors">
          {title}
        </h3>
        <p className="text-white/55 text-sm leading-relaxed mb-5">
          {description}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-white/[0.02] border border-[#00D4FF]/20 text-[#00D4FF] text-sm font-medium hover:bg-white/[0.04] hover:border-[#00D4FF]/40 hover:gap-2.5 hover:shadow-[0_0_16px_rgba(0,212,255,0.2)] transition-all"
        >
          Learn More
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </Card>
  );
}

interface EventCardProps {
  year: string;
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function EventCard({
  year,
  icon,
  title,
  description,
  delay = 0,
}: EventCardProps) {
  return (
    <Card delay={delay}>
      <div className="inline-block px-3 py-1 rounded-md border border-[#5B5FFF]/20 bg-white/[0.02] text-[11px] font-mono uppercase tracking-wider text-white/50 mb-4 group-hover:border-[#5B5FFF]/40 group-hover:text-white/70 transition-all">
        {year}
      </div>
      <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/[0.02] border border-[#9B4FFF]/20 mb-4 group-hover:scale-105 group-hover:border-[#9B4FFF]/40 group-hover:shadow-[0_0_20px_rgba(155,79,255,0.25)] transition-all duration-300">
        <div className="relative">{icon}</div>
      </div>
      <h4 className="text-base font-semibold mb-2.5 group-hover:text-[#9B4FFF] transition-colors">
        {title}
      </h4>
      <p className="text-white/55 text-sm leading-relaxed">{description}</p>
    </Card>
  );
}
