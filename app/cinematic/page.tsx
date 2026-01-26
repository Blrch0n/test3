import type { Metadata } from "next";
import CinematicContent from "@/components/cinematic/CinematicContent";

export const metadata: Metadata = {
  title: "Sys&CoTech - Mission Control",
  description: "Student innovation lab. Build. Compete. Ship.",
};

export default function CinematicPage() {
  return (
    <div className="cinematic min-h-screen bg-black text-white">
      <CinematicContent />
    </div>
  );
}
