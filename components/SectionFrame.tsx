"use client";

import { ReactNode } from "react";

interface SectionFrameProps {
  children: ReactNode;
  index?: string;
  className?: string;
  showTopDivider?: boolean;
  showBottomDivider?: boolean;
}

export default function SectionFrame({
  children,
  index,
  className = "",
  showTopDivider = true,
  showBottomDivider = false,
}: SectionFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {showTopDivider && (
        <div className="absolute top-0 left-0 right-0 h-px bg-white/8" />
      )}
      {showBottomDivider && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/8" />
      )}

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[96px_1fr] lg:gap-10">
          
          <div className="hidden lg:block pt-24">
            {index && (
              <div className="sticky top-28">
                <div className="flex items-center gap-3 text-[10px] font-mono text-white/35 tracking-[0.28em] uppercase">
                  <span>{index}</span>
                  <span className="h-px w-10 bg-white/12" />
                </div>
              </div>
            )}
          </div>

          
          <div className="relative lg:border-l lg:border-white/8 lg:pl-10">
            
            <div className="pointer-events-none absolute -top-3 -left-3 h-8 w-8 border-l border-t border-white/10" />
            <div className="pointer-events-none absolute -top-3 -right-3 h-8 w-8 border-r border-t border-white/10" />
            <div className="pointer-events-none absolute -bottom-3 -left-3 h-8 w-8 border-l border-b border-white/10" />
            <div className="pointer-events-none absolute -bottom-3 -right-3 h-8 w-8 border-r border-b border-white/10" />

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
