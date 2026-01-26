"use client";

import dynamic from "next/dynamic";
import NavbarCinematic from "@/components/cinematic/NavbarCinematic";
import CapabilitiesCinematic from "@/components/cinematic/CapabilitiesCinematic";
import AchievementsCinematic from "@/components/cinematic/AchievementsCinematic";
import JoinPipelineCinematic from "@/components/cinematic/JoinPipelineCinematic";
import CommunityCinematic from "@/components/cinematic/CommunityCinematic";
import FooterCinematic from "@/components/cinematic/FooterCinematic";
import { CursorGlow } from "@/components/cinematic/CursorGlow";

// Dynamic import for WebGL-heavy Hero component
const HeroCinematic = dynamic(
  () => import("@/components/cinematic/HeroCinematic"),
  {
    ssr: false,
    loading: () => (
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-black to-slate-900">
        <div className="text-center">
          <div className="text-7xl md:text-8xl font-bold tracking-tight mb-4">
            <span className="neon-text">Sys&CoTech</span>
          </div>
          <p className="text-xl text-slate-300">Loading mission control...</p>
        </div>
      </section>
    ),
  },
);

export default function CinematicContent() {
  return (
    <>
      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Film grain overlay */}
      <div className="film-grain" />

      {/* Navbar */}
      <NavbarCinematic />

      {/* Hero Section */}
      <HeroCinematic />

      {/* Capabilities Section */}
      <CapabilitiesCinematic />

      {/* Achievements Section */}
      <AchievementsCinematic />

      {/* Join Pipeline Section */}
      <JoinPipelineCinematic />

      {/* Community Gallery Section */}
      <CommunityCinematic />

      {/* Footer */}
      <FooterCinematic />
    </>
  );
}
