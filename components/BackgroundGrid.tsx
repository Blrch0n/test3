"use client";

import { useEffect, useRef } from "react";

export default function BackgroundGrid() {
  const auroraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const auroraElement = auroraRef.current;
    if (!auroraElement) return;

    
    const handlePointerMove = (e: PointerEvent) => {
      auroraElement.style.setProperty("--mx", `${e.clientX}px`);
      auroraElement.style.setProperty("--my", `${e.clientY}px`);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.020) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.020) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px, 24px 24px, 96px 96px, 96px 96px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, black 55%, transparent 100%)",
        }}
      />

      
      <div
        ref={auroraRef}
        className="aurora-flow-overlay"
        style={
          {
            "--mx": "50vw",
            "--my": "50vh",
          } as React.CSSProperties
        }
      />

      
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, rgba(7,8,11,0) 45%, rgba(7,8,11,0.55) 100%)",
        }}
      />
    </div>
  );
}
