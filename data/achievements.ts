// Achievement data structure
export interface Achievement {
  year: number;
  eventName: string;
  placement: string;
  category: "Hackathon" | "Olympiad" | "Project";
  photoSrc?: string; // Optional - will be added later
  projectLink?: string; // Optional
}

// Sample achievement data (you'll replace this with real data)
export const achievements: Achievement[] = [
  {
    year: 2024,
    eventName: "National Hackathon Championship",
    placement: "1st Place",
    category: "Hackathon",
  },
  {
    year: 2024,
    eventName: "International Coding Olympiad",
    placement: "Gold Medal",
    category: "Olympiad",
  },
  {
    year: 2023,
    eventName: "Tech Innovation Summit",
    placement: "Best Project",
    category: "Project",
  },
  {
    year: 2023,
    eventName: "Regional Hackathon Series",
    placement: "2nd Place",
    category: "Hackathon",
  },
  {
    year: 2023,
    eventName: "National Programming Contest",
    placement: "Silver Medal",
    category: "Olympiad",
  },
  {
    year: 2022,
    eventName: "Startup Weekend Mongolia",
    placement: "Winner",
    category: "Hackathon",
  },
  {
    year: 2022,
    eventName: "Math & CS Olympiad",
    placement: "Bronze Medal",
    category: "Olympiad",
  },
  {
    year: 2022,
    eventName: "University Innovation Challenge",
    placement: "1st Place",
    category: "Project",
  },
];
