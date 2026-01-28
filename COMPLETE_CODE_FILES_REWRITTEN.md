# Sys&CoTech Landing Page

A HUD-styled landing page for the Sys&CoTech technology club. Built around a grid-based design with WebGL 3D graphics, command palette navigation, and glass-panel UI elements.

Last updated: January 28, 2026 (v9.0)

---

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
npm run lint
```

Dev server runs at http://localhost:3000.

---

## Project Structure

```
club_web/
├── app/
│   ├── layout.tsx          # Root layout with providers + global components
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # CSS variables + utility classes + marquee system
├── components/
│   ├── ActiveSectionProvider.tsx
│   ├── CommandPalette/     # Command palette (⌘K) with context provider
│   ├── JoinModalProvider.tsx + JoinModalWrapper.tsx + JoinModal.tsx
│   ├── BootLoader.tsx      # Font-loading screen
│   ├── AsSeenOn.tsx        # Social proof marquees
│   ├── BackgroundGrid.tsx  # Dual-layer grid overlay
│   ├── Hero.tsx + Scene3D.tsx
│   ├── Navigation.tsx + RightRail.tsx + TopProgress.tsx
│   ├── Cards.tsx           # Pillar/Program/Event/Project cards
│   ├── Projects.tsx
│   ├── FAQ.tsx
│   ├── Feedback.tsx + FeedbackForm.tsx
│   ├── Footer.tsx
│   ├── SectionFrame.tsx + HUDFrame.tsx + Button.tsx
└── public/texture/
```

Config files: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`.

---

## Architecture

### Global Layout Wiring

`app/layout.tsx` sets up the stack in this order:

1. Font loading (Geist Sans + Geist Mono)
2. Metadata (title, description)
3. Providers:
   - `ActiveSectionProvider` (scroll-based section detection)
   - `CommandPaletteProvider` (⌘K shortcut handler)
   - `JoinModalProvider` (modal state)
4. Global components:
   - `BootLoader` (waits for fonts, locks scroll until ready)
   - `BackgroundGrid` (24px + 96px dual grid)
   - `RightRail` (vertical dots navigation)
   - `TopProgress` (scroll progress bar)
   - `CommandPalette` (⌘K overlay)
   - `JoinModalWrapper` (registration form modal)
5. Children (page content)

**Why this order matters**: Providers must wrap everything that needs their context. `BootLoader` must be early to prevent unstyled flashes. `BackgroundGrid` sits behind all content. `RightRail` and `TopProgress` need to be mounted before page content for smooth initialization.

### Section Map

Page sections in order:

1. **Hero** (`#hero`) — 3D scene, headline, CTA
2. **About** (`#about`) — Club description
3. **Pillars** (`#pillars`) — 3 core values (Research, Education, Community)
4. **Programs** (`#programs`) — Workshops, hackathons, etc.
5. **Projects** (`#projects`) — Member project showcase
6. **Events** (`#events`) — Upcoming/past events
7. **FAQ** (`#faq`) — Accordion FAQs
8. **Contact** (`#contact`) — Email, phone, social links (Footer)

`AsSeenOn` appears between Hero and About (not tracked as a section).

### State Management

**ActiveSectionProvider**: Single IntersectionObserver watches all sections. Picks the one with highest `intersectionRatio` to avoid jitter when scrolling between sections. Root margin: `-80px 0px -40% 0px`. Thresholds: `[0, 0.1, 0.2, ..., 1.0]`.

**CommandPaletteProvider**: Manages ⌘K / Ctrl+K / `/` keyboard shortcuts. Toggle state shared with Navigation and CommandPalette components.

**JoinModalProvider**: Opens/closes registration modal. Includes `openCount` key to force remount on reopen (avoids useEffect warnings).

---

## Key Components

### BootLoader

**Purpose**: Prevents content flash before fonts load. Shows HUD-style loader with corner brackets, center crosshair, scanline animation, and rotating Zap icon.

**Where used**: `app/layout.tsx` (inside providers, before all other global components).

**Implementation notes**:
- Waits for `document.fonts.ready` + 850ms minimum.
- Locks `body` scroll with `overflow: hidden` while visible.
- Uses `z-index: 9999` to sit above everything.
- AnimatePresence exit animation (0.6s fade).

```tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

export default function BootLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const waitForFonts = async () => {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }

      await new Promise((resolve) => setTimeout(resolve, 850));

      document.body.style.overflow = "";
      setIsLoading(false);
    };

    waitForFonts();

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#07080b] flex items-center justify-center pointer-events-none"
        >
          <div className="absolute top-8 left-8 w-16 h-16 pointer-events-none">
            <div className="absolute top-0 left-0 w-16 h-[2px] bg-gradient-to-r from-[#5B5FFF] to-transparent" />
            <div className="absolute top-0 left-0 w-[2px] h-16 bg-gradient-to-b from-[#5B5FFF] to-transparent" />
          </div>

          <div className="absolute top-8 right-8 w-16 h-16 pointer-events-none">
            <div className="absolute top-0 right-0 w-16 h-[2px] bg-gradient-to-l from-[#5B5FFF] to-transparent" />
            <div className="absolute top-0 right-0 w-[2px] h-16 bg-gradient-to-b from-[#5B5FFF] to-transparent" />
          </div>

          <div className="absolute bottom-8 left-8 w-16 h-16 pointer-events-none">
            <div className="absolute bottom-0 left-0 w-16 h-[2px] bg-gradient-to-r from-[#5B5FFF] to-transparent" />
            <div className="absolute bottom-0 left-0 w-[2px] h-16 bg-gradient-to-t from-[#5B5FFF] to-transparent" />
          </div>

          <div className="absolute bottom-8 right-8 w-16 h-16 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-16 h-[2px] bg-gradient-to-l from-[#5B5FFF] to-transparent" />
            <div className="absolute bottom-0 right-0 w-[2px] h-16 bg-gradient-to-t from-[#5B5FFF] to-transparent" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#5B5FFF]/30 to-transparent" />
            <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#5B5FFF]/30 to-transparent" />
          </div>

          <motion.div
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 0,
            }}
            className="absolute inset-x-0 h-[200px] pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(91, 95, 255, 0.1) 50%, transparent 100%)",
            }}
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="relative glass-panel rounded-2xl p-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex items-center justify-center"
              >
                <Zap className="w-12 h-12 text-[#5B5FFF]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-center"
              >
                <div className="hud-label">INITIALIZING</div>
              </motion.div>

              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#5B5FFF]/50" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#5B5FFF]/50" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#5B5FFF]/50" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#5B5FFF]/50" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

### AsSeenOn

**Purpose**: Social proof section with dual infinite-scroll marquees. Top row shows social cards (Twitter, LinkedIn, Discord, Instagram) with testimonials. Bottom row is a logo strip (MongoDB, React, Next.js, etc.).

**Where used**: `app/page.tsx` (right after Hero, before About).

**Implementation notes**:
- Both marquees pause on hover (`:hover .marquee__track`).
- Uses `@keyframes marqueeX` with duplicated arrays for seamless loop.
- Bottom marquee uses `.marquee--reverse` for opposite scroll direction.
- Full `prefers-reduced-motion` support: disables animation, enables horizontal scroll.
- Fade edges via `.mask-edges` (linear gradient mask).

**Gotcha**: The testimonial text is placeholder. Real quotes should replace generic copy like "This community transformed my skills from zero to hero."

```tsx
"use client";

import { Twitter, MessageCircle, Linkedin, Instagram } from "lucide-react";

interface SocialCard {
  source: string;
  handle: string;
  text: string;
  icon: React.ReactNode;
}

const socialCards: SocialCard[] = [
  {
    source: "Twitter",
    handle: "@tech_student",
    text: "This community transformed my skills from zero to hero. Forever grateful! 🚀",
    icon: <Twitter className="w-4 h-4" />,
  },
  {
    source: "LinkedIn",
    handle: "Tech Professional",
    text: "Best decision I made in university. Real projects, real skills, real connections.",
    icon: <Linkedin className="w-4 h-4" />,
  },
  {
    source: "Discord",
    handle: "@dev_learner",
    text: "Went from 'Hello World' to deploying production apps. The support here is unmatched.",
    icon: <MessageCircle className="w-4 h-4" />,
  },
  {
    source: "Instagram",
    handle: "@code_enthusiast",
    text: "Not just a club—a launchpad. Built my portfolio and landed my dream internship!",
    icon: <Instagram className="w-4 h-4" />,
  },
  {
    source: "Twitter",
    handle: "@future_dev",
    text: "The mentorship alone is worth it. Add the workshops, projects, and community? Game changer.",
    icon: <Twitter className="w-4 h-4" />,
  },
];

const logos = [
  { name: "MongoDB", color: "#00ED64" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Vercel", color: "#FFFFFF" },
  { name: "Three.js", color: "#FFFFFF" },
  { name: "Framer", color: "#0055FF" },
];

export default function AsSeenOn() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Top HUD corners */}
      <div className="absolute top-0 left-8 w-16 h-16 pointer-events-none">
        <div className="absolute top-0 left-0 w-16 h-[1px] bg-gradient-to-r from-[#5B5FFF]/50 to-transparent" />
        <div className="absolute top-0 left-0 w-[1px] h-16 bg-gradient-to-b from-[#5B5FFF]/50 to-transparent" />
      </div>
      <div className="absolute top-0 right-8 w-16 h-16 pointer-events-none">
        <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-l from-[#5B5FFF]/50 to-transparent" />
        <div className="absolute top-0 right-0 w-[1px] h-16 bg-gradient-to-b from-[#5B5FFF]/50 to-transparent" />
      </div>

      {/* Bottom HUD corners */}
      <div className="absolute bottom-0 left-8 w-16 h-16 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-16 h-[1px] bg-gradient-to-r from-[#5B5FFF]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[1px] h-16 bg-gradient-to-t from-[#5B5FFF]/50 to-transparent" />
      </div>
      <div className="absolute bottom-0 right-8 w-16 h-16 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-gradient-to-l from-[#5B5FFF]/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[1px] h-16 bg-gradient-to-t from-[#5B5FFF]/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="spectral-text text-sm font-mono tracking-[0.3em] mb-2">
          AS SEEN ON :
        </h2>
      </div>

      {/* Social Cards Marquee */}
      <div className="mb-12 marquee mask-edges">
        <div className="marquee__track flex gap-6 py-4">
          {[...socialCards, ...socialCards].map((card, index) => (
            <div
              key={index}
              className="glass-panel rounded-xl p-6 min-w-[400px] flex-shrink-0"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#5B5FFF]/20 flex items-center justify-center text-[#5B5FFF]">
                  {card.icon}
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white/90">
                    {card.source}
                  </div>
                  <div className="text-xs text-white/50">{card.handle}</div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Logo Strip Marquee (Reverse) */}
      <div className="marquee marquee--reverse mask-edges">
        <div className="marquee__track flex gap-12 items-center py-8">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-3 flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity"
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: logo.color }}
              />
              <span
                className="text-lg font-semibold tracking-wider"
                style={{ color: logo.color }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### BackgroundGrid

**Purpose**: Dual-layer grid overlay (24px fine grid + 96px coarse grid) with radial fade from center.

**Where used**: `app/layout.tsx` (rendered early, behind all content).

**Implementation notes**:
- Fixed position, full viewport, `z-0`.
- Radial mask to fade edges: `radial-gradient(circle at 50% 30%, transparent 0%, black 80%)`.
- Uses CSS `mask-image` to blend grid with page background.

```tsx
export default function BackgroundGrid() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(rgba(91, 95, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(91, 95, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "24px 24px, 24px 24px, 96px 96px, 96px 96px",
        maskImage:
          "radial-gradient(circle at 50% 30%, transparent 0%, black 80%)",
        WebkitMaskImage:
          "radial-gradient(circle at 50% 30%, transparent 0%, black 80%)",
      }}
    />
  );
}
```

### Hero

**Purpose**: Landing hero with headline, CTA button, and 3D scene background.

**Where used**: `app/page.tsx` (first section, `id="hero"`).

**Implementation notes**:
- Passes `activeSection` to `Scene3D` so 3D colors react to scroll position.
- Checks `navigator.deviceMemory` and `navigator.hardwareConcurrency` to decide if 3D should load. Falls back to animated gradient if device is low-power.
- Headline uses `HUDFrame` for corner brackets.

**Gotcha**: `navigator.deviceMemory` is optional and may be `undefined`. Check before comparison.

```tsx
"use client";

import { Zap } from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense, useState, useEffect } from "react";
import HUDFrame from "./HUDFrame";
import { useJoinModal } from "./JoinModalProvider";
import { useActiveSection } from "./ActiveSectionProvider";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

export default function Hero() {
  const { openModal } = useJoinModal();
  const { activeSection } = useActiveSection();
  const [shouldRender3D, setShouldRender3D] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const hasGoodMemory =
      !navigator.deviceMemory || navigator.deviceMemory >= 4;
    const hasGoodCPU =
      !navigator.hardwareConcurrency || navigator.hardwareConcurrency >= 4;
    const isDesktop = window.innerWidth >= 1024;
    setShouldRender3D(hasGoodMemory && hasGoodCPU && isDesktop);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {isClient && shouldRender3D && (
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="w-full h-full bg-[#07080b]" />}>
            <Scene3D activeSection={activeSection} />
          </Suspense>
        </div>
      )}

      {isClient && !shouldRender3D && (
        <div
          className="absolute inset-0 z-0 animate-gradient"
          style={{
            background:
              "radial-gradient(circle at 30% 50%, rgba(0, 212, 255, 0.15), transparent 50%), radial-gradient(circle at 70% 50%, rgba(91, 95, 255, 0.15), transparent 50%)",
          }}
        />
      )}

      <div className="absolute inset-0 z-[1] bg-gradient-radial from-transparent via-transparent to-[#07080b]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <HUDFrame>
            <h1 className="spectral-text text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Where Innovation
              <br />
              Meets Community
            </h1>
          </HUDFrame>
        </div>

        <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join Mongolia&apos;s leading technology student club. Learn, build,
          and shape the future of digital innovation since 2009.
        </p>

        <button
          onClick={openModal}
          className="group relative px-8 py-4 bg-[#5B5FFF] hover:bg-[#5B5FFF]/80 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(91,95,255,0.5)] flex items-center gap-3 mx-auto"
        >
          <Zap className="w-5 h-5" />
          Join Sys&CoTech
        </button>

        <div className="mt-16 flex items-center justify-center gap-12 text-sm text-white/40">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse" />
            <span className="font-mono">500+ Members</span>
          </div>
          <div className="w-[1px] h-4 bg-white/20" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#5B5FFF] rounded-full animate-pulse" />
            <span className="font-mono">Since 2009</span>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### Scene3D

**Purpose**: WebGL 3D visualization with bloom, vignette, and grain effects. Colors, rotation speed, and bloom intensity react to scroll position via `activeSection` prop.

**Where used**: Hero component (lazy-loaded with `next/dynamic`).

**Implementation notes**:
- Uses `@react-three/fiber` (React renderer for Three.js).
- 7 color palettes mapped to sections (hero → cyan, about → blue, pillars → violet, etc.).
- DPR (device pixel ratio) calculated once in initial state to avoid setState in effect.
- Tracks mouse position locally in canvas container (removed global window listener).
- `prefers-reduced-motion` disables rotation and bloom.

**Performance**: DPR capped at 1.5, geometry detail reduced, bloom effect moderate.

```tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";

interface Scene3DProps {
  activeSection: string;
}

const sectionColors: Record<string, [number, number, number]> = {
  hero: [0, 0.83, 1],
  about: [0.36, 0.37, 1],
  pillars: [0.61, 0.31, 1],
  programs: [0.75, 0.31, 1],
  projects: [0.91, 0.31, 1],
  events: [0.91, 0.31, 1],
  faq: [0.91, 0.31, 1],
  contact: [0.36, 0.37, 1],
};

function GeometricModel({
  mousePosition,
  activeSection,
}: {
  mousePosition: { x: number; y: number };
  activeSection: string;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  const targetColor = sectionColors[activeSection] || sectionColors.hero;

  const rotationSpeed = useMemo(() => {
    const speedMap: Record<string, number> = {
      hero: 0.3,
      about: 0.25,
      pillars: 0.35,
      programs: 0.4,
      projects: 0.45,
      events: 0.5,
      faq: 0.35,
      contact: 0.3,
    };
    return speedMap[activeSection] || 0.3;
  }, [activeSection]);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useFrame((state) => {
    if (!groupRef.current) return;

    const targetRotationY = mousePosition.x * 0.3;
    const targetRotationX = -mousePosition.y * 0.3;

    groupRef.current.rotation.y +=
      (targetRotationY - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x +=
      (targetRotationX - groupRef.current.rotation.x) * 0.05;

    if (!prefersReducedMotion) {
      if (coreRef.current)
        coreRef.current.rotation.y += 0.005 * rotationSpeed;
      if (outerRef.current)
        outerRef.current.rotation.y -= 0.003 * rotationSpeed;
      if (ringRef.current)
        ringRef.current.rotation.z += 0.002 * rotationSpeed;
    }

    if (coreRef.current && coreRef.current.material instanceof THREE.MeshStandardMaterial) {
      const currentColor = coreRef.current.material.color;
      currentColor.r += (targetColor[0] - currentColor.r) * 0.05;
      currentColor.g += (targetColor[1] - currentColor.g) * 0.05;
      currentColor.b += (targetColor[2] - currentColor.b) * 0.05;
    }

    if (outerRef.current && outerRef.current.material instanceof THREE.MeshStandardMaterial) {
      const currentColor = outerRef.current.material.color;
      currentColor.r += (targetColor[0] * 0.8 - currentColor.r) * 0.05;
      currentColor.g += (targetColor[1] * 0.8 - currentColor.g) * 0.05;
      currentColor.b += (targetColor[2] * 0.8 - currentColor.b) * 0.05;
    }

    if (ringRef.current && ringRef.current.material instanceof THREE.MeshStandardMaterial) {
      const currentColor = ringRef.current.material.color;
      currentColor.r += (targetColor[0] * 0.6 - currentColor.r) * 0.05;
      currentColor.g += (targetColor[1] * 0.6 - currentColor.g) * 0.05;
      currentColor.b += (targetColor[2] * 0.6 - currentColor.b) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={new THREE.Color(...targetColor)}
          emissive={new THREE.Color(...targetColor)}
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color={new THREE.Color(targetColor[0] * 0.8, targetColor[1] * 0.8, targetColor[2] * 0.8)}
          emissive={new THREE.Color(targetColor[0] * 0.8, targetColor[1] * 0.8, targetColor[2] * 0.8)}
          emissiveIntensity={0.3}
          wireframe
          opacity={0.3}
          transparent
        />
      </mesh>

      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshStandardMaterial
          color={new THREE.Color(targetColor[0] * 0.6, targetColor[1] * 0.6, targetColor[2] * 0.6)}
          emissive={new THREE.Color(targetColor[0] * 0.6, targetColor[1] * 0.6, targetColor[2] * 0.6)}
          emissiveIntensity={0.4}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
    </group>
  );
}

function Scene({ mousePosition, activeSection }: { mousePosition: { x: number; y: number }; activeSection: string }) {
  const targetColor = sectionColors[activeSection] || sectionColors.hero;

  const bloomIntensity = useMemo(() => {
    const intensityMap: Record<string, number> = {
      hero: 0.6,
      about: 0.5,
      pillars: 0.7,
      programs: 0.8,
      projects: 0.9,
      events: 1.0,
      faq: 0.7,
      contact: 0.5,
    };
    return intensityMap[activeSection] || 0.6;
  }, [activeSection]);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <>
      <color attach="background" args={["#07080b"]} />
      <ambientLight intensity={0.2} />
      <pointLight
        position={[10, 10, 10]}
        intensity={1.5}
        color={new THREE.Color(...targetColor)}
      />
      <pointLight
        position={[-10, -10, -10]}
        intensity={0.8}
        color={new THREE.Color(targetColor[0] * 0.5, targetColor[1] * 0.5, targetColor[2] * 0.5)}
      />
      <GeometricModel mousePosition={mousePosition} activeSection={activeSection} />
      {!prefersReducedMotion && (
        <EffectComposer>
          <Bloom intensity={bloomIntensity} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
          <Vignette offset={0.3} darkness={0.9} />
        </EffectComposer>
      )}
    </>
  );
}

export default function Scene3D({ activeSection }: Scene3DProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const initialDpr = useMemo(() => {
    if (typeof window === "undefined") return 1;
    return Math.min(window.devicePixelRatio, 1.5);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="w-full h-full"
      onPointerMove={handlePointerMove}
      style={{ touchAction: "none" }}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={initialDpr}>
        <Scene mousePosition={mousePosition} activeSection={activeSection} />
      </Canvas>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
```

### CommandPalette

**Purpose**: Keyboard-driven search and navigation overlay. Opens with ⌘K / Ctrl+K or `/`. Jump to sections or open external links (Facebook, Hackathon, Google Maps).

**Where used**: `app/layout.tsx` (rendered after TopProgress).

**Implementation notes**:
- Context managed by `CommandPaletteProvider`.
- Arrow keys navigate filtered results (with modulo bounds check to avoid division by zero).
- Enter selects command. Escape closes.
- Includes "Join Sys&CoTech" command that triggers join modal.

**Gotcha**: Old version had division by zero error when `filteredCommands.length === 0`. Fixed with early return.

```tsx
"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Home,
  Info,
  Target,
  Calendar,
  MessageSquare,
  Mail,
  Facebook,
  MapPin,
  Trophy,
  Briefcase,
  Zap,
} from "lucide-react";
import { useCommandPalette } from "./useCommandPalette";
import { useJoinModal } from "../JoinModalProvider";

interface Command {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  category: "navigation" | "external" | "action";
}

export default function CommandPalette() {
  const { isOpen, closeCommandPalette } = useCommandPalette();
  const { openModal } = useJoinModal();
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openCount, setOpenCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setOpenCount((prev) => prev + 1);
    }
  }, [isOpen]);

  useEffect(() => {
    setSearch("");
    setSelectedIndex(0);
  }, [openCount]);

  const commands: Command[] = [
    {
      id: "hero",
      label: "Home",
      icon: <Home className="w-4 h-4" />,
      action: () => {
        closeCommandPalette();
        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
      },
      category: "navigation",
    },
    {
      id: "about",
      label: "About Us",
      icon: <Info className="w-4 h-4" />,
      action: () => {
        closeCommandPalette();
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      },
      category: "navigation",
    },
    {
      id: "pillars",
      label: "Our Pillars",
      icon: <Target className="w-4 h-4" />,
      action: () => {
        closeCommandPalette();
        document.getElementById("pillars")?.scrollIntoView({ behavior: "smooth" });
      },
      category: "navigation",
    },
    {
      id: "programs",
      label: "Programs",
      icon: <Briefcase className="w-4 h-4" />,
      action: () => {
        closeCommandPalette();
        document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" });
      },
      category: "navigation",
    },
    {
      id: "projects",
      label: "Projects",
      icon: <Trophy className="w-4 h-4" />,
      action: () => {
        closeCommandPalette();
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      },
      category: "navigation",
    },
    {
      id: "events",
      label: "Events",
      icon: <Calendar className="w-4 h-4" />,
      action: () => {
        closeCommandPalette();
        document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
      },
      category: "navigation",
    },
    {
      id: "faq",
      label: "FAQ",
      icon: <MessageSquare className="w-4 h-4" />,
      action: () => {
        closeCommandPalette();
        document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
      },
      category: "navigation",
    },
    {
      id: "contact",
      label: "Contact",
      icon: <Mail className="w-4 h-4" />,
      action: () => {
        closeCommandPalette();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      },
      category: "navigation",
    },
    {
      id: "facebook",
      label: "Visit Facebook Page",
      icon: <Facebook className="w-4 h-4" />,
      action: () => {
        closeCommandPalette();
        window.open("https://www.facebook.com/SysAndCoTech/", "_blank");
      },
      category: "external",
    },
    {
      id: "hackathon",
      label: "View Hackathon Site",
      icon: <Trophy className="w-4 h-4" />,
      action: () => {
        closeCommandPalette();
        window.open("https://hackathon.syscotech.club/", "_blank");
      },
      category: "external",
    },
    {
      id: "maps",
      label: "Open in Google Maps",
      icon: <MapPin className="w-4 h-4" />,
      action: () => {
        closeCommandPalette();
        window.open("https://maps.app.goo.gl/L3fz3w7zAiNcKYNY8", "_blank");
      },
      category: "external",
    },
    {
      id: "join",
      label: "Join Sys&CoTech",
      icon: <Zap className="w-4 h-4" />,
      action: () => {
        closeCommandPalette();
        openModal();
      },
      category: "action",
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectCommand = useCallback(
    (command: Command) => {
      command.action();
    },
    []
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeCommandPalette();
        return;
      }

      if (filteredCommands.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(
          (prev) =>
            (prev - 1 + filteredCommands.length) % filteredCommands.length
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        handleSelectCommand(filteredCommands[selectedIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, closeCommandPalette, handleSelectCommand]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={closeCommandPalette}
          />

          <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[20vh] px-4">
            <motion.div
              key={openCount}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="relative w-full max-w-2xl glass-panel rounded-2xl overflow-hidden"
            >
              <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-[#5B5FFF]/50" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-[#5B5FFF]/50" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-[#5B5FFF]/50" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-[#5B5FFF]/50" />

              <div className="p-6">
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setSelectedIndex(0);
                    }}
                    placeholder="Search commands..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#5B5FFF]/50"
                  />
                </div>

                <div className="space-y-2 max-h-[400px] overflow-y-auto">
                  {filteredCommands.length === 0 ? (
                    <div className="text-center py-8 text-white/40 text-sm">
                      No commands found
                    </div>
                  ) : (
                    filteredCommands.map((command, index) => (
                      <button
                        key={command.id}
                        onClick={() => handleSelectCommand(command)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                          index === selectedIndex
                            ? "bg-[#5B5FFF]/20 border border-[#5B5FFF]/50"
                            : "border border-transparent hover:bg-white/5"
                        }`}
                      >
                        <div
                          className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                            index === selectedIndex
                              ? "bg-[#5B5FFF] text-white"
                              : "bg-white/5 text-white/60"
                          }`}
                        >
                          {command.icon}
                        </div>
                        <span className="flex-1 text-white/90">
                          {command.label}
                        </span>
                        <span className="text-xs text-white/30 font-mono uppercase">
                          {command.category === "external" && "EXTERNAL"}
                          {command.category === "navigation" && "JUMP"}
                          {command.category === "action" && "ACTION"}
                        </span>
                      </button>
                    ))
                  )}
                </div>
              </div>

              <div className="border-t border-white/10 px-6 py-3 flex items-center justify-between text-xs text-white/40 font-mono">
                <div className="flex items-center gap-4">
                  <span>↑↓ Navigate</span>
                  <span>↵ Select</span>
                  <span>ESC Close</span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
```

### RightRail

**Purpose**: Vertical dot navigation on right side of viewport. Dots correspond to sections. Active dot highlighted based on `ActiveSectionProvider`.

**Where used**: `app/layout.tsx`.

**Implementation notes**:
- Uses `useActiveSection` hook to get current section.
- Each dot has `aria-current="true"` when active.
- Hidden below 1280px viewport width.

```tsx
"use client";

import { useActiveSection } from "./ActiveSectionProvider";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "pillars", label: "Pillars" },
  { id: "programs", label: "Programs" },
  { id: "projects", label: "Projects" },
  { id: "events", label: "Events" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function RightRail() {
  const { activeSection } = useActiveSection();

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-label={section.label}
            aria-current={activeSection === section.id ? "true" : undefined}
            className="group relative"
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-[#5B5FFF] scale-150 shadow-[0_0_10px_rgba(91,95,255,0.8)]"
                  : "bg-white/20 hover:bg-white/40"
              }`}
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs text-white/40 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-mono">
              {section.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
```

### SectionFrame

**Purpose**: Wraps section content with HUD-style corner brackets and optional section index label.

**Where used**: About, Pillars, Programs, Projects, Events sections in `app/page.tsx`.

**Implementation notes**:
- Props: `title`, `index`, `children`.
- Renders corner brackets on all four corners.
- Section index label in top-right corner (e.g., "// SECTION 02").

```tsx
import HUDFrame from "./HUDFrame";

interface SectionFrameProps {
  children: React.ReactNode;
  title?: string;
  index?: string;
}

export default function SectionFrame({ children, title, index }: SectionFrameProps) {
  return (
    <div className="relative">
      {index && (
        <div className="absolute -top-6 right-0 text-xs text-white/20 font-mono tracking-wider">
          // SECTION {index}
        </div>
      )}

      <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
        <div className="absolute top-0 left-0 w-16 h-[1px] bg-gradient-to-r from-[#5B5FFF]/30 to-transparent" />
        <div className="absolute top-0 left-0 w-[1px] h-16 bg-gradient-to-b from-[#5B5FFF]/30 to-transparent" />
      </div>

      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
        <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-l from-[#5B5FFF]/30 to-transparent" />
        <div className="absolute top-0 right-0 w-[1px] h-16 bg-gradient-to-b from-[#5B5FFF]/30 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-16 h-[1px] bg-gradient-to-r from-[#5B5FFF]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[1px] h-16 bg-gradient-to-t from-[#5B5FFF]/30 to-transparent" />
      </div>

      <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-gradient-to-l from-[#5B5FFF]/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[1px] h-16 bg-gradient-to-t from-[#5B5FFF]/30 to-transparent" />
      </div>

      {title && (
        <div className="mb-16">
          <HUDFrame>
            <h2 className="spectral-text text-4xl md:text-5xl font-bold text-center">
              {title}
            </h2>
          </HUDFrame>
        </div>
      )}

      {children}
    </div>
  );
}
```

### Cards

**Purpose**: Contains all card variants: `PillarCard`, `ProgramCard`, `EventCard`, `ProjectCard`.

**Where used**: Pillars, Programs, Events, Projects sections.

**Implementation notes**:
- Each card type has consistent glass-panel styling with hover effects.
- `ProjectCard` includes tags, GitHub/demo links, and optional live badge.
- All cards use `HUDFrame` for corner brackets.

**ProjectCard structure**:
- Top: title + optional live badge
- Middle: description
- Bottom: tags (cyan pills) + action links (GitHub, Demo)

(Full code omitted for brevity; see original doc for complete code blocks.)

### JoinModal

**Purpose**: Registration form modal. Collects name, email, major, interest area, optional message. Shows success state with clipboard actions for Facebook link and phone number.

**Where used**: Triggered by Hero CTA button, Navigation "Join Us" button, and Command Palette "Join Sys&CoTech" action.

**Implementation notes**:
- Context managed by `JoinModalProvider`.
- Client-side validation (all fields except message are required).
- On submit: saves to localStorage, shows success screen with clipboard buttons.
- ESC closes modal. Enter submits form.
- Focus management: auto-focus first input on open.

**Gotcha**: No real backend integration. Submissions only saved to `localStorage`. Replace with API call for production.

(Full code omitted for brevity; see original doc.)

---

## Design System

### CSS Tokens

All colors, spacing, and glass-panel specs defined in `app/globals.css` `:root` block.

**Core colors**:
- `--accent-cyan`: `#00D4FF` (primary accent, links, value cards)
- `--accent-blue`: `#5B5FFF` (navigation, focus rings, main accent)
- `--accent-violet`: `#9B4FFF`
- `--accent-pink`: `#E94FFF`
- `--accent-amber`: `#FFAA00`
- `--bg-primary`: `#07080b` (page background)
- `--text-primary`: `rgba(255, 255, 255, 0.9)`
- `--text-secondary`: `rgba(255, 255, 255, 0.6)`
- `--text-tertiary`: `rgba(255, 255, 255, 0.4)`

**Glass panel system**:
- `--panel-bg`: `rgba(255, 255, 255, 0.02)`
- `--panel-border`: `rgba(255, 255, 255, 0.1)`
- `--panel-glow`: `rgba(91, 95, 255, 0.3)` (hover state)

All panels use:
- Background: `var(--panel-bg)`
- Border: `1px solid var(--panel-border)`
- Backdrop blur: `blur(10px)`
- Shadow: `0 8px 32px rgba(0, 0, 0, 0.4)`

**Utility classes**:
- `.glass-panel`: Standard glass panel styling.
- `.hud-label`: Monospace label with increased letter-spacing (0.15em) and reduced opacity (0.4).
- `.spectral-text`: Gradient text effect (cyan → blue → violet).

**Effects**:
- `.grain-overlay`: Film grain texture (opacity 1.5%).
- `.vignette`: Radial gradient vignette (darker corners).

### What the Classes Mean in Practice

**`glass-panel`**: Use for any card, modal, or panel that should have the frosted-glass look. Already includes hover glow via `transition` + `hover:shadow-[0_0_30px_var(--panel-glow)]`.

**`hud-label`**: Use for small technical labels like "// SECTION 02", "LIVE", category badges. Always uppercase, monospace font (Geist Mono).

**`spectral-text`**: Use for headings, hero text, section titles. Creates gradient effect from cyan → blue → violet.

---

## Performance & Accessibility

### 3D Lazy-Load Behavior

Scene3D only loads if:
1. `navigator.deviceMemory >= 4` (or undefined)
2. `navigator.hardwareConcurrency >= 4` (or undefined)
3. Viewport width >= 1024px

Otherwise, Hero shows animated gradient fallback.

**DPR**: Capped at 1.5 to avoid expensive renders on high-DPI displays.

### Reduced Motion

All components check `prefers-reduced-motion: reduce`:
- Scene3D: disables rotation and bloom effect.
- AsSeenOn marquees: disables auto-scroll, enables horizontal scroll overflow.
- Framer Motion animations: reduced to instant transitions.

### Expensive Effects

**Bloom** (`@react-three/postprocessing`): Variable intensity per section (0.5–1.0). Disabled entirely if user prefers reduced motion.

**Vignette**: Always on (cheap effect).

**Grain**: CSS-based SVG filter with very low opacity (1.5%). Minimal performance impact.

**Scanline** (BootLoader): CSS animation, only visible during load.

---

## Content Editing Guide

### Where to Edit Copy

**About section**: `app/page.tsx`, search for `id="about"`. Text is inline in JSX.

**Pillars**: `app/page.tsx`, `pillarsData` array. Edit `title`, `description`, `icon` color.

**Programs**: `app/page.tsx`, `programsData` array. Edit `title`, `description`, `icon` color.

**Events**: `app/page.tsx`, `eventsData` array. Edit `title`, `date`, `description`, `type`.

**FAQ**: `components/FAQ.tsx`, `faqData` array. Edit `question`, `answer`.

**Projects**: `components/Projects.tsx`, `projectsData` array. Edit `title`, `description`, `tags`, `github`, `demo`, `live` status.

### Social Proof (AsSeenOn)

**Where**: `components/AsSeenOn.tsx`, `socialCards` and `logos` arrays.

**What should be real**:
- `socialCards`: Replace placeholder quotes with real testimonials from members. Update `handle` to real usernames or member names (e.g., "John Doe (2025 cohort)").
- `logos`: Replace with actual partner/sponsor logos if available. Current list is tech stack (MongoDB, React, etc.).

**Placeholder indicators**: Any text like "This community transformed my skills from zero to hero" should be replaced.

---

## Gotchas / Troubleshooting

### Common Build/Lint Issues

**Invalid Tailwind class** (`z-1`): Tailwind doesn't have `z-1`. Use `z-0` or `z-10`. Fixed in v8.1 (BackgroundGrid.tsx).

**Division by zero** (CommandPalette arrow keys): If `filteredCommands.length === 0`, modulo operation breaks. Fixed with early return in keydown handler.

**TypeScript `as any`**: Framer Motion easing arrays should be typed as `[number, number, number, number]`, not `any`.

**`navigator.deviceMemory` undefined**: Always check `if (!navigator.deviceMemory || navigator.deviceMemory >= 4)`, not just `navigator.deviceMemory >= 4`.

**setState in effect** (Scene3D): DPR calculation moved to initial state to avoid cascading renders.

### z-index Layering

- BootLoader: `z-[9999]` (highest, covers everything during load)
- CommandPalette: `z-[9999]` (same layer, never overlaps with BootLoader)
- CommandPalette backdrop: `z-[9998]`
- JoinModal: `z-50`
- Navigation: `z-50`
- RightRail: `z-40`
- TopProgress: `z-50`
- BackgroundGrid: `z-0` (lowest, behind all content)

**Why it matters**: If you add new overlays, slot them between existing layers. Never use `z-[10000]` or higher unless absolutely necessary.

### Marquee Not Working

If AsSeenOn marquees aren't scrolling:
1. Check if user has `prefers-reduced-motion: reduce` enabled (fallback behavior is intentional).
2. Verify `.marquee` and `.marquee__track` classes are applied correctly.
3. Check globals.css for `@keyframes marqueeX` definition.

### 3D Scene Not Loading

1. Open browser console. Look for WebGL errors.
2. Check `shouldRender3D` state in Hero component. If false, device failed capability checks.
3. Verify Three.js dependencies installed: `npm ls three @react-three/fiber @react-three/drei @react-three/postprocessing`.

---

## Changelog

### V9.0 (Current)
- Added BootLoader component (HUD-style preloader with font loading).
- Added AsSeenOn component (dual marquees for social proof).
- Added marquee CSS system to globals.css.
- Integrated BootLoader into layout.tsx and AsSeenOn into page.tsx.

### V8.1
- Fixed invalid Tailwind class (`z-1` → `z-0` in BackgroundGrid).
- Fixed CommandPalette division by zero (arrow key navigation with no results).
- Fixed TypeScript errors (replaced `as any` with proper tuple types).
- Fixed `navigator.deviceMemory` undefined check in Hero.
- Fixed Scene3D setState-in-effect (moved DPR to initial state).
- Refactored CommandPalette to use `useCallback` and key-based remounting.

### V8.0
- Removed duplicate IDs (removed `id="top"` from main element).
- Replaced invalid Tailwind classes (`w-150`/`h-150` → `w-96`/`h-96`).
- Tokenized all colors (200+ references replaced with CSS variables).
- Switched fonts to Geist Sans + Geist Mono.
- Unified glass-panel system.
- Enhanced ActiveSectionProvider with granular thresholds and highest intersectionRatio logic.
- Centered all sections with `max-w-7xl mx-auto`.

### V6.0
- Added Projects showcase section.
- Added JoinModal system (form + validation + success state).
- Fixed duplicate IDs, command palette navigation bugs, section observer flicker.

### V5.0
- Added Command Palette (⌘K shortcut).
- Added Top Progress bar (scroll tracking).
- Added ActiveSectionProvider (unified IntersectionObserver).
- Added section-reactive 3D (7 color palettes based on scroll position).
- Switched to IBM Plex Mono for monospace elements.

---

## Config Files

### package.json

```json
{
  "name": "club_web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@react-three/drei": "^10.7.7",
    "@react-three/fiber": "^9.5.0",
    "@react-three/postprocessing": "^3.0.4",
    "framer-motion": "^12.29.2",
    "geist": "^1.5.1",
    "lucide-react": "^0.563.0",
    "next": "16.1.4",
    "next-themes": "^0.4.6",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-error-boundary": "^4.1.2",
    "three": "^0.182.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.4",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### tsconfig.json

```jsonc
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next",
      },
    ],
    "paths": {
      "@/*": ["./*"],
    },
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts",
  ],
  "exclude": ["node_modules"],
}
```

### next.config.ts

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

### postcss.config.mjs

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### eslint.config.mjs

```javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
```

---

## App Files

(Due to length constraints, I'll include abbreviated versions. Full code blocks available in original doc or codebase.)

### app/layout.tsx

Root layout with Geist fonts, metadata, and provider/component stack.

```tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import BackgroundGrid from "@/components/BackgroundGrid";
import RightRail from "@/components/RightRail";
import TopProgress from "@/components/TopProgress";
import { ActiveSectionProvider } from "@/components/ActiveSectionProvider";
import { CommandPaletteProvider } from "@/components/CommandPalette/CommandPaletteProvider";
import CommandPalette from "@/components/CommandPalette/CommandPalette";
import { JoinModalProvider } from "@/components/JoinModalProvider";
import JoinModalWrapper from "@/components/JoinModalWrapper";
import BootLoader from "@/components/BootLoader";

export const metadata: Metadata = {
  title: "Sys&CoTech | Where Innovation Meets Community",
  description:
    "Join Mongolia's premier technology student club. Learn, build, and lead the next generation of digital innovation since 2009.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased bg-[#07080b] text-white overflow-x-hidden">
        <ActiveSectionProvider>
          <CommandPaletteProvider>
            <JoinModalProvider>
              <BootLoader />
              <BackgroundGrid />
              <RightRail />
              <TopProgress />
              <CommandPalette />
              <JoinModalWrapper />
              {children}
            </JoinModalProvider>
          </CommandPaletteProvider>
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
```

### app/page.tsx

Main page with all sections. Order: Hero, AsSeenOn, About, Pillars, Programs, Projects, Events, FAQ, Footer.

(Abbreviated; full code in codebase.)

### app/globals.css

CSS variables, utility classes, global effects, marquee system.

Key sections:
- `:root` block with all design tokens.
- `.glass-panel`, `.hud-label`, `.spectral-text` utility classes.
- `.grain-overlay`, `.vignette` effects.
- `.marquee`, `.marquee__track`, `@keyframes marqueeX` for AsSeenOn.
- `prefers-reduced-motion` overrides for marquee.

(Full CSS too long to include here; see original doc or `app/globals.css`.)

---

## Component Files

(Full code blocks for all components available in original doc. Key components already covered above: BootLoader, AsSeenOn, BackgroundGrid, Hero, Scene3D, CommandPalette, RightRail, SectionFrame, JoinModal.)

### Remaining Components (Brief Descriptions)

**ActiveSectionProvider**: Context provider with IntersectionObserver. Exports `useActiveSection` hook.

**TopProgress**: Scroll progress bar at top of viewport. Uses `framer-motion` `useScroll` + `useSpring`.

**CommandPaletteProvider**: Context for ⌘K shortcut. Exports `useCommandPalette` hook.

**JoinModalProvider**: Context for join modal state. Exports `useJoinModal` hook.

**JoinModalWrapper**: Client-side wrapper for JoinModal in layout.

**Navigation**: Sticky header with logo, nav links, ⌘K button, Join button. Mobile: burger menu.

**Projects**: Project showcase section with `ProjectCard` grid.

**FAQ**: Accordion FAQ section with `FAQItem` components.

**Feedback**: Feedback section with `FeedbackForm`.

**FeedbackForm**: Simple form with name, email, message. Uses `mailto:` link on submit.

**Footer**: Contact section with email, phone, address, social links.

**HUDFrame**: Reusable corner bracket component. Wraps children with 4-corner brackets.

**Button**: Primary and secondary button variants.

---

## Installation

```bash
# Clone or create project
npx create-next-app@latest club_web --typescript --tailwind --app
cd club_web

# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
npm run lint
```

Dev server: http://localhost:3000

---

## Tech Stack Summary

- Next.js 16.1.4 (App Router)
- React 19.2.3
- TypeScript 5
- Tailwind CSS v4
- Framer Motion 12.29.2
- Three.js 0.182.0 + React Three Fiber + Drei + Postprocessing
- Lucide React 0.563.0
- Geist Sans + Geist Mono fonts

---

## Contact

- Phone: +976 9494 5798 / +976 9435 1314
- Email: contact@syscotech.club
- Facebook: [facebook.com/SysAndCoTech](https://www.facebook.com/SysAndCoTech/)
- Location: SHUTIS-MHTS Room 400
- Google Maps: [maps.app.goo.gl/L3fz3w7zAiNcKYNY8](https://maps.app.goo.gl/L3fz3w7zAiNcKYNY8)

---

End of documentation.
