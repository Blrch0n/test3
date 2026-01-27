# Complete Code Files - Sys&CoTech Landing Page

**Last Updated:** January 27, 2026  
**Version:** V4.1 - Complete ChainGPT Visual Language with Full Documentation  
**Author:** GitHub Copilot (Claude Sonnet 4.5)

---

## 📋 Document Overview

This comprehensive document contains **all complete code files** for the Sys&CoTech landing page. Each file is fully documented with:

- Complete, copy-paste ready code
- Detailed descriptions of functionality
- Key features and implementation notes
- Dependencies and relationships

You can use this as a single source of truth for the entire project.

---

## 🎯 Latest Updates (V4.1)

### Complete Visual Restyle - ChainGPT Aesthetic ✨

**Major Changes:**

- Complete redesign matching ChainGPT's dark futuristic grid-based visual language
- All Sys&CoTech content preserved and enhanced
- Premium Web3 aesthetic with technical precision
- Performance-optimized 3D graphics with adaptive rendering

### New Components 🆕

1. **BackgroundGrid.tsx**: Full-page grid overlay with dual-layer pattern (24px + 96px grids), radial mask fading
2. **SectionFrame.tsx**: Modular panel wrapper with 1px dividers, corner brackets, and optional index column
3. **RightRail.tsx**: Vertical navigation rail with scroll-tracking dots, section labels, and MENU indicator

### Updated Components 🔄

1. **globals.css**: New design tokens for borders, panels, and HUD typography
2. **layout.tsx**: Global BackgroundGrid and RightRail integration
3. **Navigation.tsx**: Thin 1px borders, centered links, glass panel CTA button
4. **Hero.tsx**: Corner brackets on headline, minimal HUD frames, cleaner CTAs
5. **Scene3D.tsx**: Performance-optimized 3D with bloom and vignette effects
6. **Cards.tsx**: Corner brackets on all card types, glass morphism, subtle hover effects
7. **FAQ.tsx**: HUD-style labels and section headers
8. **Button.tsx**: No framer-motion dependency, pure CSS transitions
9. **Footer.tsx**: Contact information with glassmorphism styling
10. **page.tsx**: All sections properly structured with consistent spacing

### Visual Design System ✅

✓ **Full-page grid overlay** - Visible everywhere, not just hero  
✓ **Modular framed panels** - 1px dividers with corner brackets  
✓ **HUD micro-typography** - Monospace labels with increased letter spacing  
✓ **Thin 1px borders** - Technical precision throughout  
✓ **Glass morphism** - Backdrop-blur with subtle inner glow  
✓ **Right-side navigation rail** - Vertical dots with scroll tracking  
✓ **Reduced glow intensity** - Subtle, professional accents  
✓ **Increased whitespace** - Improved readability and breathing room  
✓ **Corner brackets** - On hero headline, cards, and key UI elements  
✓ **Film grain overlay** - Cinematic texture effect  
✓ **Radial vignette** - Darker corners for depth

---

## 📦 Project Stack

### Core Technologies

- **Next.js 16.1.4** - React framework with App Router and RSC
- **React 19.2.3** - Latest React with improved performance
- **TypeScript 5** - Full type safety across the project
- **Tailwind CSS v4** - Utility-first CSS with new @import syntax
- **Framer Motion 12.29.2** - Smooth scroll animations and transitions

### 3D Graphics

- **Three.js 0.182.0** - WebGL 3D library
- **@react-three/fiber 9.5.0** - React renderer for Three.js
- **@react-three/drei 10.7.7** - Useful helpers and abstractions
- **@react-three/postprocessing 3.0.4** - Post-processing effects (Bloom, Vignette)

### UI & Icons

- **Lucide React 0.563.0** - Modern, customizable icon library
- **Inter Font** - Primary typography via next/font/google

### Development Tools

- **ESLint 9** - Code linting with Next.js config
- **PostCSS** - CSS processing for Tailwind

---

## 📁 Complete File Structure

```
club_web/
├── app/
│   ├── layout.tsx                 # Root layout with BackgroundGrid & RightRail
│   ├── page.tsx                   # Main landing page with all sections
│   └── globals.css                # Global styles with ChainGPT design tokens
├── components/
│   ├── BackgroundGrid.tsx         # Full-page grid overlay (dual-layer)
│   ├── SectionFrame.tsx           # Modular section wrapper with index
│   ├── RightRail.tsx              # Vertical navigation with scroll tracking
│   ├── Navigation.tsx             # Sticky header with glass CTA
│   ├── Hero.tsx                   # Hero section with 3D scene
│   ├── Scene3D.tsx                # Three.js 3D visualization
│   ├── Cards.tsx                  # ValueCard, PillarCard, ProgramCard, EventCard
│   ├── FAQ.tsx                    # FAQ accordion with SectionHeader
│   ├── HUDFrame.tsx               # Reusable corner bracket component
│   ├── Button.tsx                 # Primary & secondary button variants
│   └── Footer.tsx                 # Contact section with social links
├── public/
│   └── texture/                   # (Texture assets directory)
├── package.json                   # Project dependencies
├── tsconfig.json                  # TypeScript configuration
├── next.config.ts                 # Next.js configuration
├── postcss.config.mjs             # PostCSS configuration
├── eslint.config.mjs              # ESLint configuration
└── next-env.d.ts                  # Next.js TypeScript definitions
```

---

## 📖 Table of Contents

### 1. [Configuration Files](#1-configuration-files)

- [1.1 package.json](#11-packagejson)
- [1.2 tsconfig.json](#12-tsconfigjson)
- [1.3 next.config.ts](#13-nextconfigts)
- [1.4 postcss.config.mjs](#14-postcssconfigmjs)
- [1.5 eslint.config.mjs](#15-eslintconfigmjs)
- [1.6 next-env.d.ts](#16-next-envdts)

### 2. [App Files](#2-app-files)

- [2.1 app/layout.tsx](#21-applayouttsx)
- [2.2 app/page.tsx](#22-apppagetsx)
- [2.3 app/globals.css](#23-appglobalscss)

### 3. [Component Files](#3-component-files)

- [3.1 components/BackgroundGrid.tsx](#31-componentsbackgroundgridtsx)
- [3.2 components/SectionFrame.tsx](#32-componentssectionframetsx)
- [3.3 components/RightRail.tsx](#33-componentsrightrailtsx)
- [3.4 components/Navigation.tsx](#34-componentsnavigationtsx)
- [3.5 components/Hero.tsx](#35-componentsherotsx)
- [3.6 components/Scene3D.tsx](#36-componentsscene3dtsx)
- [3.7 components/Cards.tsx](#37-componentscardstsx)
- [3.8 components/FAQ.tsx](#38-componentsfaqtsx)
- [3.9 components/HUDFrame.tsx](#39-componentshudframetsx)
- [3.10 components/Button.tsx](#310-componentsbuttontsx)
- [3.11 components/Footer.tsx](#311-componentsfootertsx)

### 4. [Installation & Setup](#4-installation--setup)

### 5. [Key Features](#5-key-features)

### 6. [Design Tokens Reference](#6-design-tokens-reference)

---

# 1. Configuration Files

## 1.1 package.json

**File Path:** `/package.json`

**Description**: Defines project dependencies, scripts, and metadata. Includes all necessary packages for Next.js 16, React 19, Tailwind CSS v4, Framer Motion, Three.js, and TypeScript.

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

**Key Dependencies Explained**:

### Production Dependencies

| Package                       | Version | Purpose                                                          |
| ----------------------------- | ------- | ---------------------------------------------------------------- |
| `next`                        | 16.1.4  | React framework with App Router, RSC, and built-in optimizations |
| `react`                       | 19.2.3  | UI library with improved concurrent features                     |
| `react-dom`                   | 19.2.3  | React DOM renderer                                               |
| `@react-three/fiber`          | 9.5.0   | React renderer for Three.js (3D graphics)                        |
| `@react-three/drei`           | 10.7.7  | Helper components for R3F (Camera, Environment, etc.)            |
| `@react-three/postprocessing` | 3.0.4   | Post-processing effects (Bloom, Vignette)                        |
| `three`                       | 0.182.0 | WebGL 3D library                                                 |
| `framer-motion`               | 12.29.2 | Animation library for smooth transitions                         |
| `lucide-react`                | 0.563.0 | Icon library (500+ icons)                                        |
| `next-themes`                 | 0.4.6   | Theme management (if needed for dark mode toggle)                |
| `react-error-boundary`        | 4.1.2   | Error boundaries for React components                            |
| `geist`                       | 1.5.1   | Vercel's Geist font family                                       |

### Dev Dependencies

| Package                | Version | Purpose                     |
| ---------------------- | ------- | --------------------------- |
| `typescript`           | ^5      | Type-safe JavaScript        |
| `@types/node`          | ^20     | Node.js type definitions    |
| `@types/react`         | ^19     | React type definitions      |
| `@types/react-dom`     | ^19     | React DOM type definitions  |
| `tailwindcss`          | ^4      | Utility-first CSS framework |
| `@tailwindcss/postcss` | ^4      | Tailwind PostCSS plugin     |
| `eslint`               | ^9      | Code linting                |
| `eslint-config-next`   | 16.1.4  | ESLint rules for Next.js    |

---

## 1.2 tsconfig.json

**File Path:** `/tsconfig.json`

**Description**: TypeScript compiler configuration with strict type-checking, modern ES features, and path aliases for clean imports.

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

**Key Configuration Options**:

- **target**: `ES2017` - Compiles to ECMAScript 2017 (async/await support)
- **strict**: `true` - Enables all strict type-checking options
- **jsx**: `react-jsx` - Uses React 19's automatic JSX runtime (no need to import React)
- **moduleResolution**: `bundler` - Uses bundler resolution strategy for imports
- **paths**: `@/*` maps to root directory for clean imports (e.g., `@/components/Button`)
- **incremental**: `true` - Faster subsequent builds by caching
- **skipLibCheck**: `true` - Skips type checking of declaration files for faster builds

---

## 1.3 next.config.ts

**File Path:** `/next.config.ts`

**Description**: Next.js configuration file for customizing build behavior, webpack settings, and runtime options.

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

**Notes**:

- Currently using default Next.js configuration
- Can be extended with:
  - `images`: Image optimization settings
  - `webpack`: Custom webpack configuration
  - `redirects`: URL redirects
  - `headers`: Custom HTTP headers
  - `experimental`: Feature flags

---

## 1.4 postcss.config.mjs

**File Path:** `/postcss.config.mjs`

**Description**: PostCSS configuration for processing CSS with Tailwind CSS v4.

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

**Notes**:

- Tailwind CSS v4 uses the new `@tailwindcss/postcss` plugin
- PostCSS processes CSS files during build
- Automatically includes autoprefixer for browser compatibility

---

## 1.5 eslint.config.mjs

**File Path:** `/eslint.config.mjs`

**Description**: ESLint configuration with Next.js recommended rules for code quality and best practices.

```javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
```

**Key Features**:

- **nextVitals**: Core Web Vitals rules for performance
- **nextTs**: TypeScript-specific rules
- **globalIgnores**: Excludes build output from linting

---

## 1.6 next-env.d.ts

**File Path:** `/next-env.d.ts`

**Description**: Auto-generated TypeScript definitions for Next.js. **Do not edit this file manually.**

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```

**Purpose**: Provides TypeScript with Next.js-specific type definitions for Images, Links, routing, and more.

---

# 2. App Files

## 2.1 app/layout.tsx

**File Path:** `/app/layout.tsx`

**Description**: Root layout component that wraps all pages. Includes global components like `BackgroundGrid` and `RightRail`, sets up Inter font, and defines site metadata.

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundGrid from "@/components/BackgroundGrid";
import RightRail from "@/components/RightRail";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sys&CoTech | Where Innovation Meets Community",
  description:
    "Join Mongolia's premier technology student club. Learn, build, and lead the next generation of digital innovation since 2009.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <BackgroundGrid />
        <RightRail />

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
```

**Key Features**:

1. **Font Loading**: Inter font loaded via `next/font/google` with swap display strategy
2. **Global Components**:
   - `BackgroundGrid`: Full-page grid overlay (fixed position, z-index 1)
   - `RightRail`: Vertical navigation (fixed position, z-index 40)
3. **Metadata**: SEO-friendly title and description
4. **Z-Index Layering**: Children wrapped in `z-10` div to ensure proper stacking
5. **suppressHydrationWarning**: Prevents hydration warnings from theme toggles

---

## 2.2 app/page.tsx

**File Path:** `/app/page.tsx`

**Description**: Main landing page with all sections: Hero, About, Pillars, Programs, Events, FAQ, and Footer. Each section uses appropriate components and follows the ChainGPT design system.

```tsx
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionFrame from "@/components/SectionFrame";
import { SectionHeader } from "@/components/FAQ";
import {
  ValueCard,
  PillarCard,
  ProgramCard,
  EventCard,
} from "@/components/Cards";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import {
  Layers,
  Palette,
  Code2,
  Users,
  GraduationCap,
  Zap,
  BookOpen,
  Lightbulb,
  Trophy,
  Calendar,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sys&CoTech | Where Innovation Meets Community",
  description:
    "Join Mongolia's premier technology student club. Learn, build, and lead the next generation of digital innovation since 2009.",
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="relative overflow-hidden">
          <SectionFrame index="01" className="py-24 md:py-32" showTopDivider>
            {/* Background Effects - subtle */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D4FF] opacity-[0.02] blur-[160px] rounded-full" />
            </div>

            <div className="relative">
              <SectionHeader
                eyebrow="WHO WE ARE"
                title="United by Passion, Driven by Innovation"
                subtitle="Since 2009, Sys&CoTech has been empowering students to master cutting-edge technologies and shape the future."
              />

              <div className="grid md:grid-cols-3 gap-5 mb-20">
                <ValueCard
                  icon={<Layers className="w-5 h-5 text-[#00D4FF]" />}
                  title="Learn Together"
                  description="Master new technologies through hands-on collaboration and peer-to-peer teaching."
                  delay={0}
                />
                <ValueCard
                  icon={<Palette className="w-5 h-5 text-[#5B5FFF]" />}
                  title="Design Excellence"
                  description="Awaken inner creativity through digital design and visual innovation."
                  delay={0.08}
                />
                <ValueCard
                  icon={<Code2 className="w-5 h-5 text-[#E94FFF]" />}
                  title="Engineer Mindset"
                  description="Solve complex problems with competitive programming and algorithmic thinking."
                  delay={0.16}
                />
              </div>

              {/* Stats Strip */}
              <div className="relative group flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 p-10 md:p-12 rounded-xl bg-white/[0.02] border border-white/8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/5 via-[#5B5FFF]/5 to-[#E94FFF]/5 opacity-30" />
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
                    13+
                  </div>
                  <div className="text-white/50 text-sm">Active Members</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-white/8" />
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
                    36+
                  </div>
                  <div className="text-white/50 text-sm">Total Members</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-white/8" />
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
                    36+
                  </div>
                  <div className="text-white/50 text-sm">Projects Built</div>
                </div>
              </div>
            </div>
          </SectionFrame>
        </section>

        {/* Pillars Section */}
        <section id="pillars" className="relative overflow-hidden">
          <SectionFrame index="02" className="py-24 md:py-32" showTopDivider>
            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#5B5FFF] opacity-[0.02] blur-[180px] rounded-full" />
            </div>

            <div className="relative">
              <SectionHeader
                eyebrow="OUR CORE"
                title="Six Pillars of Excellence"
                subtitle="Principles that guide every project, event, and lesson we create."
              />

              <div className="grid md:grid-cols-3 gap-5">
                <PillarCard
                  icon={<BookOpen className="w-5 h-5 text-[#00D4FF]" />}
                  title="Learning New Technologies"
                  description="Master emerging tools and frameworks to stay ahead of the curve."
                  delay={0}
                />
                <PillarCard
                  icon={<Palette className="w-5 h-5 text-[#5B5FFF]" />}
                  title="Design Creation"
                  description="Awaken inner artistry through digital design and visual excellence."
                  delay={0.08}
                />
                <PillarCard
                  icon={<Code2 className="w-5 h-5 text-[#9B4FFF]" />}
                  title="Engineering Mindset"
                  description="Solve complex problems with competitive programming expertise."
                  delay={0.16}
                />
                <PillarCard
                  icon={<Users className="w-5 h-5 text-[#E94FFF]" />}
                  title="Leadership & Responsibility"
                  description="Mentor peers and lead by example in all initiatives."
                  delay={0.24}
                />
                <PillarCard
                  icon={<GraduationCap className="w-5 h-5 text-[#FFAA00]" />}
                  title="Education"
                  description="Share knowledge within the club and beyond our community."
                  delay={0.32}
                />
                <PillarCard
                  icon={<Zap className="w-5 h-5 text-[#00D4FF]" />}
                  title="Innovation"
                  description="Always think, always create, always evolve forward."
                  delay={0.4}
                />
              </div>
            </div>
          </SectionFrame>
        </section>

        {/* Programs Section */}
        <section id="programs" className="relative overflow-hidden">
          <SectionFrame index="03" className="py-24 md:py-32" showTopDivider>
            {/* Centered Glow */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-[800px] h-[800px] bg-[#00D4FF] opacity-[0.015] blur-[220px] rounded-full" />
            </div>

            <div className="relative">
              <SectionHeader
                eyebrow="TRAINING"
                title="Master the Fundamentals"
                subtitle="Student-led training programs designed for real-world impact."
              />

              <div className="grid md:grid-cols-2 gap-5">
                <ProgramCard
                  number="01"
                  title="Programming Fundamentals"
                  description="Build problem-solving foundations with C language. Learn core concepts through hands-on practice."
                  delay={0}
                />
                <ProgramCard
                  number="02"
                  title="Object-Oriented Programming"
                  description="Master OOP patterns with Java. Practical implementation of real-world design principles."
                  delay={0.08}
                />
                <ProgramCard
                  number="03"
                  title="UI/UX Design"
                  description="Design theory and tools for digital products. Master Figma, principles, and user-centered design."
                  delay={0.16}
                />
                <ProgramCard
                  number="04"
                  title="Web Development"
                  description="Full-stack technologies from client to server. HTML, CSS, JavaScript, Node.js, and modern frameworks."
                  delay={0.24}
                />
              </div>
            </div>
          </SectionFrame>
        </section>

        {/* Events Section */}
        <section id="events" className="relative overflow-hidden">
          <SectionFrame index="04" className="py-24 md:py-32" showTopDivider>
            {/* Diagonal Gradients */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#9B4FFF] opacity-[0.02] blur-[180px] rounded-full" />
            </div>

            <div className="relative">
              <SectionHeader
                eyebrow="ACTIVITIES"
                title="We Build Together"
                subtitle="Annual competitions and community events that define us."
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <EventCard
                  year="17 Years"
                  icon={<Trophy className="w-8 h-8 text-[#00D4FF]" />}
                  title="Competitive Programming Contest"
                  description="Annual algorithm competition testing problem-solving skills."
                  delay={0}
                />
                <EventCard
                  year="10 Years"
                  icon={<Lightbulb className="w-8 h-8 text-[#5B5FFF]" />}
                  title="Dev Hackathon"
                  description="48-hour innovation sprint to build the next big idea."
                  delay={0.08}
                />
                <EventCard
                  year="Ongoing"
                  icon={<Calendar className="w-8 h-8 text-[#9B4FFF]" />}
                  title="Training Sessions"
                  description="Weekly workshops for students and club members."
                  delay={0.16}
                />
                <EventCard
                  year="Ongoing"
                  icon={<Clock className="w-8 h-8 text-[#E94FFF]" />}
                  title="Collaborative Events"
                  description="Partnerships with clubs and sponsors like Golomt Bank."
                  delay={0.24}
                />
              </div>
            </div>
          </SectionFrame>
        </section>

        <FAQ />
        <Footer />
      </main>
    </>
  );
}
```

**Section Breakdown**:

1. **Navigation**: Fixed sticky header
2. **Hero**: Full-screen hero with 3D scene
3. **About (01)**: Value cards + stats strip
4. **Pillars (02)**: Six core principles
5. **Programs (03)**: Four training programs
6. **Events (04)**: Four event types
7. **FAQ**: Accordion with frequently asked questions
8. **Footer**: Contact information and links

**Design Patterns**:

- All sections wrapped in `SectionFrame` with index numbers
- Consistent spacing: `py-24 md:py-32`
- Subtle background glows for depth
- Staggered animations with `delay` props
- Grid layouts for responsive design

---

## 2.3 app/globals.css

**File Path:** `/app/globals.css`

**Description**: Global stylesheet with Tailwind CSS v4, custom design tokens, utility classes, and ChainGPT-inspired aesthetic styling.

```css
@import "tailwindcss";

@layer base {
  :root {
    /* ChainGPT-inspired Web3 Premium Tokens */
    --bg-base: #07080b;
    --bg-surface: rgba(255, 255, 255, 0.03);
    --bg-surface-hover: rgba(255, 255, 255, 0.05);
    --bg-surface-active: rgba(255, 255, 255, 0.08);

    /* 1px borders - matching ChainGPT */
    --border-line: rgba(255, 255, 255, 0.08);
    --border-line-hover: rgba(255, 255, 255, 0.14);
    --border-accent: rgba(91, 95, 255, 0.3);
    --border-glow: rgba(91, 95, 255, 0.5);

    /* Glass panel system */
    --panel-bg: rgba(255, 255, 255, 0.03);
    --panel-border: rgba(255, 255, 255, 0.08);
    --panel-glow: rgba(91, 95, 255, 0.15);

    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.72);
    --text-muted: rgba(255, 255, 255, 0.48);
    --text-mono: rgba(255, 255, 255, 0.4);

    /* Accent gradient system */
    --accent-cyan: #00d4ff;
    --accent-blue: #5b5fff;
    --accent-violet: #9b4fff;
    --accent-pink: #e94fff;
    --accent-amber: #ffaa00;

    --gradient-primary: linear-gradient(
      135deg,
      #00d4ff 0%,
      #5b5fff 50%,
      #9b4fff 100%
    );
    --gradient-accent: linear-gradient(
      90deg,
      #00d4ff 0%,
      #5b5fff 50%,
      #9b4fff 100%
    );

    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.12);
    --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.16);
    --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.24);
    --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.32);
    --shadow-glow: 0 0 24px rgba(91, 95, 255, 0.4);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #07080b;
    color: var(--text-primary);
    font-family:
      Inter,
      system-ui,
      -apple-system,
      sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
  }

  /* Film grain overlay */
  body::before {
    content: "";
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.015;
    pointer-events: none;
    z-index: 2;
    mix-blend-mode: soft-light;
  }

  /* Vignette effect */
  body::after {
    content: "";
    position: fixed;
    inset: 0;
    background: radial-gradient(
      ellipse at center,
      transparent 0%,
      transparent 50%,
      rgba(7, 8, 11, 0.4) 100%
    );
    pointer-events: none;
    z-index: 2;
  }

  * {
    border-color: var(--border-line);
  }

  /* HUD Label typography */
  .hud-label {
    font-family: "IBM Plex Mono", "SF Mono", Consolas, monospace;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-mono);
  }

  /* Typography Scale (Premium Web3) */
  h1 {
    font-size: 4rem;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  h2 {
    font-size: 3rem;
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: -0.015em;
  }

  h3 {
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  h4 {
    font-size: 1.5rem;
    line-height: 1.4;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.375rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    h4 {
      font-size: 1.25rem;
    }
  }

  /* Smooth Scrolling */
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}

@layer utilities {
  /* Spectral gradient text */
  .spectral-text {
    background: linear-gradient(
      90deg,
      #00d4ff 0%,
      #5b5fff 25%,
      #9b4fff 50%,
      #e94fff 75%,
      #ffaa00 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Grid background with subtle lines */
  .grid-bg {
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 48px 48px;
  }

  /* Gradient mask (fade to bottom) */
  .mask-gradient-to-b {
    mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
  }

  /* Radial gradient from center */
  .bg-radial-gradient {
    background: radial-gradient(
      ellipse at center,
      var(--tw-gradient-from) 0%,
      var(--tw-gradient-via) 50%,
      var(--tw-gradient-to) 100%
    );
  }

  /* Premium glass panel */
  .glass-panel {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid var(--panel-border);
    box-shadow:
      inset 0 1px 0 0 rgba(255, 255, 255, 0.04),
      0 8px 32px rgba(0, 0, 0, 0.3);
  }

  /* HUD border glow effect */
  .hud-border {
    position: relative;
  }

  .hud-border::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(0, 212, 255, 0.5),
      rgba(91, 95, 255, 0.5),
      rgba(155, 79, 255, 0.3)
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .hud-border:hover::before {
    opacity: 1;
  }

  /* Corner brackets (for HUD frames) */
  .corner-brackets {
    position: relative;
  }

  .corner-brackets::before,
  .corner-brackets::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border: 1px solid rgba(91, 95, 255, 0.3);
    transition: border-color 0.3s ease;
  }

  .corner-brackets::before {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
  }

  .corner-brackets::after {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
  }

  .corner-brackets:hover::before,
  .corner-brackets:hover::after {
    border-color: rgba(91, 95, 255, 0.6);
  }

  /* Glow utilities */
  .glow-cyan {
    box-shadow:
      0 0 40px rgba(0, 212, 255, 0.3),
      0 0 80px rgba(0, 212, 255, 0.15);
  }

  .glow-blue {
    box-shadow:
      0 0 40px rgba(91, 95, 255, 0.3),
      0 0 80px rgba(91, 95, 255, 0.15);
  }

  .glow-violet {
    box-shadow:
      0 0 40px rgba(155, 79, 255, 0.3),
      0 0 80px rgba(155, 79, 255, 0.15);
  }

  .glow-pink {
    box-shadow:
      0 0 40px rgba(233, 79, 255, 0.3),
      0 0 80px rgba(233, 79, 255, 0.15);
  }

  /* Inset glow for cards */
  .inset-glow {
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.08);
  }

  /* Hover lift animation */
  .hover-lift {
    transition:
      transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
      border-color 0.3s ease;
  }

  .hover-lift:hover {
    transform: translateY(-2px);
    border-color: var(--border-line-hover);
  }

  /* HUD frame lines */
  .hud-frame-line-h {
    position: absolute;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(91, 95, 255, 0.3) 50%,
      transparent 100%
    );
  }

  .hud-frame-line-v {
    position: absolute;
    width: 1px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(91, 95, 255, 0.3) 50%,
      transparent 100%
    );
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  body::before,
  body::after {
    display: none;
  }
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0.02);
}

::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.15);
}
```

**Key CSS Features**:

### Design Tokens (CSS Custom Properties)

| Category   | Variable          | Value                    | Purpose                |
| ---------- | ----------------- | ------------------------ | ---------------------- |
| Background | `--bg-base`       | `#07080b`                | Main background color  |
| Borders    | `--border-line`   | `rgba(255,255,255,0.08)` | Thin 1px borders       |
| Glass      | `--panel-bg`      | `rgba(255,255,255,0.03)` | Glass panel background |
| Accents    | `--accent-cyan`   | `#00d4ff`                | Cyan accent color      |
| Accents    | `--accent-blue`   | `#5b5fff`                | Blue accent color      |
| Accents    | `--accent-violet` | `#9b4fff`                | Violet accent color    |

### Utility Classes

- `.spectral-text`: Multi-color gradient text
- `.glass-panel`: Frosted glass effect with backdrop blur
- `.hud-border`: Animated border glow on hover
- `.corner-brackets`: Corner bracket decorations
- `.hover-lift`: Lift animation on hover
- `.glow-cyan/blue/violet/pink`: Color-specific glow effects

### Global Effects

- **Film Grain**: SVG noise overlay for texture (opacity: 0.015)
- **Vignette**: Radial gradient darkening corners
- **Smooth Scroll**: Native smooth scrolling with 80px offset
- **Custom Scrollbar**: Subtle scrollbar styling

---

# 3. Component Files

## 3.1 components/BackgroundGrid.tsx

**File Path:** `/components/BackgroundGrid.tsx`

**Description**: Full-page fixed grid overlay with dual-layer pattern (24px fine grid + 96px major grid) and radial mask fading. Visible on all pages.

```tsx
"use client";

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      {/* Major + minor grid (crisper + more "technical") */}
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

      {/* Subtle vignette (keeps corners darker like references) */}
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
```

**Key Features**:

- **Fixed positioning**: Always visible, doesn't scroll with content
- **Dual-layer grid**: 24px fine grid + 96px major grid for depth
- **Radial mask**: Fades grid towards edges (visible 55% in center)
- **Vignette overlay**: Darkens corners for cinematic effect
- **z-index: 1**: Behind all content but above body background
- **pointer-events-none**: Doesn't interfere with user interactions

**Visual Effect**: Creates a subtle technical/architectural feel reminiscent of CAD software or futuristic HUDs.

---

## 3.2 components/SectionFrame.tsx

**File Path:** `/components/SectionFrame.tsx`

**Description**: Modular section wrapper component with optional index column, corner brackets, and dividers. Used for About, Pillars, Programs, and Events sections.

```tsx
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
          {/* Left index rail */}
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

          {/* Content column with vertical divider */}
          <div className="relative lg:border-l lg:border-white/8 lg:pl-10">
            {/* Corner brackets (subtle, 1px) */}
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
```

**Key Features**:

- **Index Rail**: Left column showing section number (01, 02, 03, 04)
- **Sticky Index**: Index sticks to top when scrolling
- **Corner Brackets**: Subtle 8x8px brackets at all four corners
- **Vertical Divider**: 1px border-left separating index from content
- **Horizontal Dividers**: Optional top/bottom dividers
- **Responsive**: Index rail hidden on mobile, visible on lg screens

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | required | Section content |
| `index` | string | optional | Section number (e.g., "01") |
| `className` | string | `""` | Additional CSS classes |
| `showTopDivider` | boolean | `true` | Show top 1px divider |
| `showBottomDivider` | boolean | `false` | Show bottom 1px divider |

---

## 3.3 components/RightRail.tsx

**File Path:** `/components/RightRail.tsx`

**Description**: Vertical navigation rail on the right side with scroll-tracking dots, active section indicator, and MENU label.

```tsx
"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "INTRO" },
  { id: "about", label: "ABOUT" },
  { id: "pillars", label: "CORE" },
  { id: "programs", label: "TRAINING" },
  { id: "events", label: "EVENTS" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "CONTACT" },
];

export default function RightRail() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -50% 0px",
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const currentSectionLabel =
    sections.find((s) => s.id === activeSection)?.label || "INTRO";

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-6 pointer-events-none">
      {/* Section indicator */}
      <div className="flex flex-col items-center gap-3 mb-2">
        <div className="text-[9px] font-mono text-white/40 tracking-[0.25em] uppercase rotate-180 [writing-mode:vertical-lr]">
          {currentSectionLabel}
        </div>
        <div className="w-px h-8 bg-gradient-to-b from-white/10 to-transparent" />
      </div>

      {/* Dot markers */}
      <div className="flex flex-col items-center gap-3">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group pointer-events-auto"
            aria-label={section.label}
          >
            <div
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-[#5B5FFF] scale-150 shadow-[0_0_12px_rgba(91,95,255,0.8)]"
                  : "bg-white/20 hover:bg-white/40 hover:scale-125"
              }`}
            />
          </a>
        ))}
      </div>

      {/* MENU label */}
      <div className="flex flex-col items-center gap-3 mt-2">
        <div className="w-px h-8 bg-gradient-to-t from-white/10 to-transparent" />
        <div className="text-[9px] font-mono text-white/30 tracking-[0.25em] uppercase rotate-180 [writing-mode:vertical-lr]">
          MENU
        </div>
      </div>
    </div>
  );
}
```

**Key Features**:

- **Scroll Tracking**: Uses IntersectionObserver to track visible section
- **Active Indicator**: Active dot is larger, blue, with glow effect
- **Vertical Text**: Section label and MENU rotated 180deg vertical
- **Smooth Transitions**: 300ms transition for dot states
- **Accessible**: Includes aria-labels for screen readers
- **Responsive**: Hidden on screens < xl (1280px)

**Positioning**:

- Fixed right side, vertically centered
- 32px from right edge (`right-8`)
- z-index 40 (above most content, below modals)

**Interaction States**:

- **Active**: Scale 1.5x, blue glow, `#5B5FFF` color
- **Inactive**: White 20% opacity
- **Hover**: White 40% opacity, scale 1.25x

---

## 3.4 components/Navigation.tsx

**File Path:** `/components/Navigation.tsx`

**Description**: Fixed sticky navigation header with logo, nav links, CTA button, and mobile menu.

```tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#pillars", label: "Pillars" },
  { href: "#programs", label: "Programs" },
  { href: "#events", label: "Events" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-[rgba(7,8,11,0.95)] backdrop-blur-2xl border-b border-white/8"
            : "bg-transparent border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo with HUD accent */}
            <a
              href="#top"
              className="flex items-center gap-2.5 text-base font-semibold text-white hover:opacity-80 transition-opacity group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#5B5FFF] group-hover:shadow-[0_0_8px_rgba(91,95,255,0.8)] transition-shadow" />
              <span className="tracking-tight">Sys&CoTech</span>
            </a>

            {/* Desktop Nav Links - centered */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] font-medium text-white/50 hover:text-white transition-colors duration-200 relative group py-2"
                  >
                    {link.label}
                    <span className="absolute -bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-[#5B5FFF] to-[#00D4FF] group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button - updated to match ChainGPT style */}
            <a
              href="#contact"
              className="hidden md:flex items-center justify-center px-5 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-white font-medium text-sm hover:border-[#5B5FFF]/40 hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(91,95,255,0.2)] transition-all duration-200 relative overflow-hidden group"
            >
              <span className="relative z-10">Join Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 via-[#5B5FFF]/10 to-[#9B4FFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-[#07080B]/95 backdrop-blur-xl" />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-20 mx-6 p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className="block py-3 text-lg font-medium text-white hover:text-[#00D4FF] transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="mt-6 block text-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#00D4FF] via-[#5B5FFF] to-[#9B4FFF] text-white font-semibold"
              >
                Join Us
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

**Key Features**:

- **Scroll-based styling**: Background blur and border on scroll (after 80px)
- **Pulsing logo dot**: Blue dot with glow on hover
- **Gradient underline**: Animated gradient underline on link hover
- **Glass CTA**: Glass panel button with gradient overlay on hover
- **Mobile menu**: Full-screen overlay with staggered animation
- **Framer Motion**: Smooth entry/exit animations

**Layout**:

- Height: 64px (h-16)
- Max width: 7xl container
- Fixed positioning with z-index 50
- Horizontal padding: 24px (px-6) on mobile, 48px (px-12) on desktop

---

## 3.5 components/Hero.tsx

**File Path:** `/components/Hero.tsx`

**Description**: Full-screen hero section with 3D scene, corner brackets on headline, and dual CTA buttons.

```tsx
"use client";

import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoad3D, setShouldLoad3D] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      const lowPower =
        (navigator as any).deviceMemory < 4 ||
        navigator.hardwareConcurrency < 4;
      setIsMobile(mobile || lowPower);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Lazy load 3D only when section is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isMobile) {
          setShouldLoad3D(true);
        }
      },
      { threshold: 0.1 },
    );

    const heroElement = document.getElementById("hero");
    if (heroElement) observer.observe(heroElement);

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, [isMobile]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge Pill */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md border border-white/10 bg-white/[0.02] text-[11px] font-mono uppercase tracking-wider text-white/60 backdrop-blur-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#5B5FFF] animate-pulse shadow-[0_0_8px_rgba(91,95,255,0.8)]" />
              <span>Est. 2009</span>
            </motion.div>

            {/* Headline with corner brackets and gradient underline */}
            <motion.div
              variants={itemVariants}
              className="relative corner-brackets pb-2"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                Where Innovation
                <br />
                Meets{" "}
                <span className="relative inline-block">
                  <span className="spectral-text">Community</span>
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#00D4FF] via-[#5B5FFF] to-[#9B4FFF] rounded-full opacity-50" />
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-white/60 leading-relaxed max-w-lg"
            >
              Join Mongolia&apos;s premier technology student club. Learn,
              build, and lead the next generation of digital innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-white/10 bg-gradient-to-r from-[#00D4FF]/10 via-[#5B5FFF]/10 to-[#9B4FFF]/10 text-white font-semibold text-sm hover:border-[#5B5FFF]/40 hover:shadow-[0_0_24px_rgba(91,95,255,0.3)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Join the Club</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/20 via-[#5B5FFF]/20 to-[#9B4FFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-white/10 bg-white/[0.02] text-white font-semibold text-sm hover:border-white/20 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Explore Programs</span>
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-2"
            >
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#5B5FFF]/50 to-transparent" />
              <div className="text-[10px] text-white/30 font-mono uppercase tracking-[0.2em]">
                SCROLL TO EXPLORE
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              <div className="absolute top-0 left-0 w-16 h-[1px] bg-gradient-to-r from-[#5B5FFF]/40 to-transparent" />
              <div className="absolute top-0 left-0 w-[1px] h-16 bg-gradient-to-b from-[#5B5FFF]/40 to-transparent" />
              <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-gradient-to-l from-[#5B5FFF]/40 to-transparent" />
              <div className="absolute bottom-0 right-0 w-[1px] h-16 bg-gradient-to-t from-[#5B5FFF]/40 to-transparent" />

              <div className="relative rounded-2xl glass-panel overflow-hidden h-full border border-white/8">
                {isMobile ? (
                  <div className="w-full h-full flex items-center justify-center p-12">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 2, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative w-full h-full"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-48 h-48">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#5B5FFF] opacity-30 blur-3xl" />
                          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#5B5FFF] to-[#9B4FFF] opacity-40 blur-2xl" />
                          <div className="absolute inset-16 rounded-full bg-[#00D4FF] opacity-60" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  /* Desktop: 3D Scene */
                  shouldLoad3D && (
                    <Suspense
                      fallback={
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-12 h-12 border border-[#5B5FFF] border-t-transparent rounded-full animate-spin" />
                        </div>
                      }
                    >
                      <Scene3D />
                    </Suspense>
                  )
                )}

                {/* Overlay UI Card (Tooltip) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute bottom-4 left-4 right-4 glass-panel rounded-lg p-3 border-l border-l-[#00D4FF]/40"
                >
                  <div className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-1.5 animate-pulse shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
                    <div>
                      <div className="text-xs font-semibold text-white mb-0.5">
                        Interactive 3D Experience
                      </div>
                      <div className="text-[10px] text-white/50">
                        Move your mouse to explore
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em]">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={14} className="opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
```

**Key Features**:

1. **Performance Optimization**:
   - Lazy loads 3D scene only when visible
   - Checks device memory and CPU cores
   - Falls back to animated gradient on mobile/low-power devices

2. **Animations**:
   - Staggered entrance with Framer Motion
   - Corner brackets on headline
   - Gradient underline on "Community"
   - Hover lift on CTA buttons

3. **3D Scene**:
   - Dynamic import with SSR disabled
   - Suspense boundary with loading spinner
   - Overlay UI card with pulse indicator

4. **Responsive**:
   - 2-column grid on desktop
   - Single column stack on mobile
   - Font sizes scale with viewport

---

## 3.6 components/Scene3D.tsx

**File Path:** `/components/Scene3D.tsx`

**Description**: Interactive 3D visualization using Three.js with React Three Fiber. Features geometric shapes with bloom and vignette post-processing effects.

```tsx
"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  AdaptiveDpr,
  PerformanceMonitor,
} from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

function GeometricModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.08;
      meshRef.current.position.y = Math.sin(t * 0.6) * 0.12;
    }

    if (coreRef.current) {
      coreRef.current.rotation.y = -t * 0.15;
      const material = coreRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.45 + Math.sin(t * 2) * 0.18;
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#5B5FFF"
          metalness={0.95}
          roughness={0.06}
          envMapIntensity={2}
          emissive="#5B5FFF"
          emissiveIntensity={0.25}
        />
      </mesh>

      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial
          color="#00D4FF"
          metalness={0.9}
          roughness={0.12}
          transparent
          opacity={0.9}
          emissive="#00D4FF"
          emissiveIntensity={0.5}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#E94FFF"
          metalness={1}
          roughness={0}
          emissive="#E94FFF"
          emissiveIntensity={0.55}
        />
      </mesh>

      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 2.2;
        const colors = ["#00D4FF", "#5B5FFF", "#9B4FFF"] as const;
        const color = colors[i % colors.length];

        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * 0.2,
              Math.sin(angle) * radius,
            ]}
          >
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={1.1}
            />
          </mesh>
        );
      })}
    </>
  );
}

function Model() {
  const groupRef = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const container = document.getElementById("hero");
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      target.current = { x: y * 0.1, y: x * 0.15 };
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (!groupRef.current) return;

    current.current.x += (target.current.x - current.current.x) * 0.05;
    current.current.y += (target.current.y - current.current.y) * 0.05;

    groupRef.current.rotation.x = current.current.x;
    groupRef.current.rotation.y = current.current.y + t * 0.08;
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <GeometricModel />
    </group>
  );
}

function Scene({ onDprChange }: { onDprChange: (dpr: number) => void }) {
  const { camera } = useThree();

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      if (progress < 0.3) camera.position.y = progress * 0.2;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [camera]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#00D4FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#E94FFF" />
      <pointLight position={[0, 0, -5]} intensity={2} color="#5B5FFF" />
      <spotLight
        position={[0, 5, 0]}
        intensity={1}
        color="#5B5FFF"
        angle={0.6}
        penumbra={1}
      />

      <Model />
      <Environment preset="city" />

      <EffectComposer>
        <Bloom
          intensity={0.55}
          luminanceThreshold={0.32}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <Vignette eskil={false} offset={0.12} darkness={0.5} />
      </EffectComposer>

      <PerformanceMonitor
        onIncline={() => onDprChange(2)}
        onDecline={() => onDprChange(1)}
      />
      <AdaptiveDpr pixelated />
    </>
  );
}

export default function Scene3D() {
  const [dpr, setDpr] = useState(1.5);

  useEffect(() => {
    const maxDpr = Math.min(2, window.devicePixelRatio || 1);
    setDpr(window.innerWidth < 768 ? 1 : maxDpr);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas
        dpr={dpr}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        shadows={false}
        frameloop="always"
      >
        <Scene onDprChange={setDpr} />
      </Canvas>
    </div>
  );
}
```

**Key Features**:

- **Geometric Shapes**: Icosahedron (outer), smaller icosahedron (core), torus ring, 12 orbiting spheres
- **Mouse Parallax**: Smooth mouse tracking with lerped rotation
- **Scroll Effect**: Camera moves on scroll (first 30% of page)
- **Emissive Materials**: All shapes emit light for neon aesthetic
- **Post-Processing**: Bloom effect for glow, vignette for depth
- **Performance Optimizations**:
  - AdaptiveDpr: Adjusts pixel ratio based on performance
  - PerformanceMonitor: Detects performance issues and adjusts quality
  - No antialiasing: Saves GPU resources
  - High-performance power preference

**3D Objects**:

1. **Outer Icosahedron**: Blue (#5B5FFF), metallic, rotating slowly
2. **Core Icosahedron**: Cyan (#00D4FF), pulsing emissive intensity
3. **Torus Ring**: Pink (#E94FFF), horizontal orientation
4. **Orbiting Spheres**: 12 spheres in circular pattern, alternating colors

---

## 3.7 components/Cards.tsx

**File Path:** `/components/Cards.tsx`

**Description**: Collection of card components with corner brackets, glass morphism, and hover effects. Includes ValueCard, PillarCard, ProgramCard, and EventCard.

```tsx
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
      {/* Corner brackets */}
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
```

**Card Types & Features**:

1. **Base Card Component**:
   - Glass panel background
   - 4 corner brackets (16x16px)
   - Hover lift animation (-2px translateY)
   - Intersection Observer for scroll animations
   - Corner brackets glow blue on hover

2. **ValueCard** (About section):
   - Icon container with cyan glow on hover
   - Title changes to cyan on hover
   - Used for: Learn Together, Design Excellence, Engineer Mindset

3. **PillarCard** (Pillars section):
   - Icon container with blue glow on hover
   - Icon scales up 1.05x on hover
   - Title changes to blue on hover
   - Used for: 6 core pillars

4. **ProgramCard** (Programs section):
   - Large background number (watermark)
   - "Learn More" CTA button
   - Minimum height: 240px
   - Used for: 4 training programs

5. **EventCard** (Events section):
   - Year badge at top
   - Large icon container (56x56px)
   - Violet accent color
   - Used for: 4 event types

---

## 3.8 components/FAQ.tsx

**File Path:** `/components/FAQ.tsx`

**Description**: FAQ section with animated accordion and reusable SectionHeader component.

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  delay?: number;
}

function FAQItem({ question, answer, delay = 0 }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-white/8 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <h4 className="text-lg md:text-xl font-semibold pr-4 group-hover:text-[#00D4FF] transition-colors">
          {question}
        </h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-white/70 leading-relaxed">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const faqData = [
    {
      question: "How do I join the club?",
      answer:
        "Simply attend one of our open events or contact us directly through Facebook or phone. We welcome all students interested in technology, regardless of skill level.",
    },
    {
      question: "Are there requirements (year, major, age)?",
      answer:
        "No strict requirements! We welcome students from all years and majors. Passion for learning technology is the only prerequisite.",
    },
    {
      question: "What are the benefits of membership?",
      answer:
        "Access to training programs, mentorship opportunities, networking with industry professionals, participation in competitions, and hands-on project experience.",
    },
    {
      question: "How do I enroll in training programs?",
      answer:
        "Training enrollment opens at the start of each semester. Follow our Facebook page or contact us to get notified when registration begins.",
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about joining Sys&CoTech."
        />

        <div className="mt-16 rounded-2xl bg-white/4 border border-white/8 p-6 md:p-8">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-center max-w-3xl mx-auto mb-20"
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-white/10 bg-white/[0.02] text-[11px] font-mono uppercase tracking-[0.2em] text-white/50 mb-6 backdrop-blur-sm">
          <div className="w-1 h-1 rounded-full bg-[#5B5FFF]" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">
        {title}
      </h2>
      <p className="text-base md:text-lg text-white/55 leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
}
```

**Key Features**:

**FAQ Component**:

- Accordion interface with smooth height transitions
- Chevron icon rotates 180deg when open
- Staggered entrance animations (50ms delay between items)
- Glass panel container
- 4 FAQ items pre-populated

**SectionHeader Component** (Reusable):

- Optional eyebrow label with blue dot
- Centered layout with max-width 3xl
- Fade-in animation on scroll
- Used across all major sections
- Monospace uppercase eyebrow text

---

## 3.9 components/HUDFrame.tsx

**File Path:** `/components/HUDFrame.tsx`

**Description**: Reusable corner bracket component for HUD-style framing effects.

```tsx
"use client";

import { ReactNode } from "react";

interface HUDFrameProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "compact";
}

export function HUDFrame({
  children,
  className = "",
  variant = "default",
}: HUDFrameProps) {
  const lineLength = variant === "compact" ? "w-12 h-12" : "w-20 h-20";
  const thickness =
    variant === "compact" ? "h-[1px] w-[1px]" : "h-[2px] w-[2px]";

  return (
    <div className={`relative ${className}`}>
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 pointer-events-none">
        <div
          className={`absolute top-0 left-0 ${lineLength.split(" ")[0]} ${thickness.split(" ")[0]} bg-gradient-to-r from-[#5B5FFF] to-transparent`}
        />
        <div
          className={`absolute top-0 left-0 ${thickness.split(" ")[1]} ${lineLength.split(" ")[1]} bg-gradient-to-b from-[#5B5FFF] to-transparent`}
        />
      </div>

      <div className="absolute top-0 right-0 pointer-events-none">
        <div
          className={`absolute top-0 right-0 ${lineLength.split(" ")[0]} ${thickness.split(" ")[0]} bg-gradient-to-l from-[#5B5FFF] to-transparent`}
        />
        <div
          className={`absolute top-0 right-0 ${thickness.split(" ")[1]} ${lineLength.split(" ")[1]} bg-gradient-to-b from-[#5B5FFF] to-transparent`}
        />
      </div>

      <div className="absolute bottom-0 left-0 pointer-events-none">
        <div
          className={`absolute bottom-0 left-0 ${lineLength.split(" ")[0]} ${thickness.split(" ")[0]} bg-gradient-to-r from-[#5B5FFF] to-transparent`}
        />
        <div
          className={`absolute bottom-0 left-0 ${thickness.split(" ")[1]} ${lineLength.split(" ")[1]} bg-gradient-to-t from-[#5B5FFF] to-transparent`}
        />
      </div>

      <div className="absolute bottom-0 right-0 pointer-events-none">
        <div
          className={`absolute bottom-0 right-0 ${lineLength.split(" ")[0]} ${thickness.split(" ")[0]} bg-gradient-to-l from-[#5B5FFF] to-transparent`}
        />
        <div
          className={`absolute bottom-0 right-0 ${thickness.split(" ")[1]} ${lineLength.split(" ")[1]} bg-gradient-to-t from-[#5B5FFF] to-transparent`}
        />
      </div>

      {children}
    </div>
  );
}
```

**Features**:

- **Two variants**: Default (80x80px) and compact (48x48px)
- **Gradient lines**: Fade from blue to transparent
- **Corner positioning**: L-shaped brackets at all 4 corners
- **Pointer-events-none**: Doesn't interfere with interactions
- **Flexible**: Can wrap any content

**Usage Example**:

```tsx
<HUDFrame variant="compact">
  <div className="p-4">Content here</div>
</HUDFrame>
```

---

## 3.10 components/Button.tsx

**File Path:** `/components/Button.tsx`

**Description**: Reusable button component with primary and secondary variants. No Framer Motion dependency.

```tsx
"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
  href?: string;
  className?: string;
}

export function Button({
  variant = "primary",
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-8 py-3.5 rounded-2xl font-semibold text-base transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080B]";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#00D4FF] via-[#5B5FFF] to-[#9B4FFF] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(91,95,255,0.6),inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "glass-panel text-white border border-white/10 hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {variant === "secondary" && (
          <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-[#00D4FF]/20 via-[#5B5FFF]/20 to-[#9B4FFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {variant === "secondary" && (
        <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-[#00D4FF]/20 via-[#5B5FFF]/20 to-[#9B4FFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
```

**Features**:

- **Primary variant**: Gradient background, inset glow, blue shadow on hover
- **Secondary variant**: Glass panel, gradient overlay on hover
- **Hover effects**: Lift animation (-0.5px), enhanced glow
- **Focus states**: Blue focus ring for accessibility
- **Flexible**: Works as link (href) or button
- **Pure CSS**: No animation library dependencies

---

## 3.11 components/Footer.tsx

**File Path:** `/components/Footer.tsx`

**Description**: Footer section with contact information, social links, and navigation.

```tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Facebook, MapPin, Phone } from "lucide-react";
import { SectionHeader } from "./FAQ";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="GET IN TOUCH"
          title="Join Our Community"
          subtitle="Reach out with questions or come visit us on campus."
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 md:gap-12 mt-16"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold text-white/90">Contact</h4>
            <div className="space-y-4">
              <a
                href="tel:+97694945798"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <Phone size={18} />
                </div>
                <span>+976 9494 5798</span>
              </a>
              <a
                href="tel:+97694351314"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <Phone size={18} />
                </div>
                <span>+976 9435 1314</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10">
                  <MapPin size={18} />
                </div>
                <span>SHUTIS-MHTS Room 400</span>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <a
                href="https://www.facebook.com/SysAndCoTech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:-translate-y-1 hover:border-[#00D4FF] transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://goo.gl/maps/Qwv3RYvybs8YqJsS8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:-translate-y-1 hover:border-[#00D4FF] transition-all"
                aria-label="Location"
              >
                <MapPin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold text-white/90">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About" },
                { href: "#programs", label: "Programs" },
                { href: "#events", label: "Events" },
                { href: "#faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Policies */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold text-white/90">
              Club Policies
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Member Rights
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Club Rules
                </a>
              </li>
              <li>
                <a
                  href="https://hackathon.syscotech.club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Dev Hackathon
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50"
        >
          <p>&copy; 2026 Sys&CoTech. All rights reserved.</p>
          <p>Built with passion by the community.</p>
        </motion.div>
      </div>
    </section>
  );
}
```

**Features**:

- **3-column layout**: Contact, Quick Links, Policies
- **Contact information**: 2 phone numbers, address
- **Social links**: Facebook and Google Maps location
- **Hover effects**: Icons lift on hover, links slide right
- **Bottom bar**: Copyright and attribution
- **Staggered animations**: 100ms delay between columns

---

# 4. Installation & Setup

## Prerequisites

- **Node.js**: Version 18 or higher
- **npm**: Version 9 or higher (or yarn/pnpm)
- **Git**: For version control

## Step-by-Step Installation

### 1. Clone or Create Project

```bash
# If starting fresh
npx create-next-app@latest club_web --typescript --tailwind --app
cd club_web

# Or clone existing repository
git clone <repository-url>
cd club_web
```

### 2. Install Dependencies

```bash
npm install
```

This will install all dependencies listed in package.json:

- Next.js 16, React 19, TypeScript
- Tailwind CSS v4
- Framer Motion
- Three.js ecosystem
- Lucide React icons
- All dev dependencies

### 3. Create Project Structure

Ensure your project has this structure:

```bash
mkdir -p app components public/texture
```

### 4. Copy All Files

Copy all files from this document into their respective locations:

- Configuration files (package.json, tsconfig.json, etc.) → root directory
- App files → `app/` directory
- Component files → `components/` directory

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for Production

```bash
npm run build
npm start
```

Production build will be optimized and created in `.next/` directory.

---

## Troubleshooting

### Issue: Module not found errors

**Solution**: Run `npm install` again to ensure all dependencies are installed.

### Issue: TypeScript errors

**Solution**: Ensure `tsconfig.json` is properly configured and run `npm run build` to see detailed errors.

### Issue: 3D scene not loading

**Solution**: Check browser console for WebGL errors. Ensure your browser supports WebGL 2.

### Issue: Slow performance

**Solution**: The 3D scene automatically adapts to device performance. On low-end devices, it falls back to animated gradients.

---

# 5. Key Features

## Visual Features ✨

### Design System

- **ChainGPT-inspired aesthetic**: Dark futuristic grid-based visual language
- **Full-page grid overlay**: Dual-layer 24px + 96px grid with radial fade
- **Glass morphism**: Frosted glass panels with backdrop blur
- **HUD elements**: Corner brackets, monospace labels, technical precision
- **Film grain overlay**: Subtle texture for cinematic feel
- **Radial vignette**: Darker corners for depth

### Color Palette

| Color  | Hex       | Usage                                  |
| ------ | --------- | -------------------------------------- |
| Cyan   | `#00D4FF` | Primary accent, value cards, links     |
| Blue   | `#5B5FFF` | Navigation, active states, main accent |
| Violet | `#9B4FFF` | Event cards, gradient midpoint         |
| Pink   | `#E94FFF` | Event cards, gradient endpoint         |
| Amber  | `#FFAA00` | Education pillar, gradient accent      |

## Performance Optimizations ⚡

### 3D Graphics

- **Lazy loading**: Scene3D only loads when hero section is visible
- **Device detection**: Checks memory and CPU cores
- **Mobile fallback**: Animated gradients on mobile/low-power devices
- **Adaptive DPR**: Adjusts pixel ratio based on performance
- **Performance monitoring**: Automatically reduces quality if needed

### Loading Strategy

- **Dynamic imports**: 3D scene loaded on-demand
- **Suspense boundaries**: Smooth loading states
- **Font optimization**: Inter font with swap display strategy
- **Image optimization**: Next.js automatic image optimization

### Animations

- **Intersection Observer**: Animations trigger when elements enter viewport
- **Reduced motion**: Respects user's motion preferences
- **Hardware acceleration**: CSS transforms for smooth animations
- **Staggered animations**: Sequential entrance effects

## Accessibility ♿

- **Semantic HTML**: Proper heading hierarchy, landmarks
- **ARIA labels**: Screen reader support for navigation
- **Focus states**: Visible focus indicators on all interactive elements
- **Keyboard navigation**: Full keyboard support
- **Color contrast**: WCAG AA compliant text contrast
- **Reduced motion**: Animations disabled for users with motion sensitivity

## Responsive Design 📱

### Breakpoints

- **Mobile**: < 768px (single column, simplified navigation)
- **Tablet**: 768px - 1024px (2 columns, burger menu)
- **Desktop**: 1024px - 1280px (full layout)
- **Large**: > 1280px (right rail visible, index rails)

### Mobile Optimizations

- **Touch targets**: Minimum 44x44px
- **Simplified 3D**: Falls back to gradients
- **Collapsed navigation**: Burger menu with full-screen overlay
- **Stacked layouts**: Single column on mobile
- **Optimized typography**: Smaller font sizes on mobile

---

# 6. Design Tokens Reference

## CSS Custom Properties

### Colors

```css
/* Base */
--bg-base: #07080b; /* Main background */
--bg-surface: rgba(255, 255, 255, 0.03); /* Surface background */
--bg-surface-hover: rgba(255, 255, 255, 0.05);
--bg-surface-active: rgba(255, 255, 255, 0.08);

/* Borders */
--border-line: rgba(255, 255, 255, 0.08); /* Standard 1px borders */
--border-line-hover: rgba(255, 255, 255, 0.14);
--border-accent: rgba(91, 95, 255, 0.3); /* Blue accent border */
--border-glow: rgba(91, 95, 255, 0.5); /* Glowing border */

/* Glass Panels */
--panel-bg: rgba(255, 255, 255, 0.03);
--panel-border: rgba(255, 255, 255, 0.08);
--panel-glow: rgba(91, 95, 255, 0.15);

/* Text */
--text-primary: #ffffff; /* Primary text */
--text-secondary: rgba(255, 255, 255, 0.72); /* Secondary text */
--text-muted: rgba(255, 255, 255, 0.48); /* Muted text */
--text-mono: rgba(255, 255, 255, 0.4); /* Monospace labels */

/* Accents */
--accent-cyan: #00d4ff;
--accent-blue: #5b5fff;
--accent-violet: #9b4fff;
--accent-pink: #e94fff;
--accent-amber: #ffaa00;

/* Shadows */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.12);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.16);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.24);
--shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.32);
--shadow-glow: 0 0 24px rgba(91, 95, 255, 0.4);
```

## Utility Classes

| Class                         | Purpose                                 |
| ----------------------------- | --------------------------------------- |
| `.spectral-text`              | Multi-color gradient text               |
| `.glass-panel`                | Frosted glass effect with backdrop blur |
| `.hud-border`                 | Animated gradient border on hover       |
| `.corner-brackets`            | Corner bracket decorations              |
| `.hover-lift`                 | Lift animation on hover (-2px)          |
| `.glow-cyan/blue/violet/pink` | Color-specific glow effects             |
| `.inset-glow`                 | Subtle inset highlight                  |
| `.grid-bg`                    | 48px grid background                    |
| `.mask-gradient-to-b`         | Fade to transparent gradient mask       |

## Typography Scale

| Element | Desktop Size  | Mobile Size     | Line Height | Weight |
| ------- | ------------- | --------------- | ----------- | ------ |
| h1      | 4rem (64px)   | 2.375rem (38px) | 1.1         | 700    |
| h2      | 3rem (48px)   | 2rem (32px)     | 1.2         | 600    |
| h3      | 2rem (32px)   | 1.5rem (24px)   | 1.3         | 600    |
| h4      | 1.5rem (24px) | 1.25rem (20px)  | 1.4         | 600    |
| body    | 1rem (16px)   | 1rem (16px)     | 1.6         | 400    |

## Spacing System

Standard spacing scale used throughout the project:

| Token   | Value | Usage                       |
| ------- | ----- | --------------------------- |
| `gap-3` | 12px  | Small gaps between elements |
| `gap-5` | 20px  | Card grids, medium gaps     |
| `gap-8` | 32px  | Navigation links            |
| `p-6`   | 24px  | Card padding                |
| `py-24` | 96px  | Section padding (mobile)    |
| `py-32` | 128px | Section padding (desktop)   |
| `px-6`  | 24px  | Container padding (mobile)  |
| `px-12` | 48px  | Container padding (desktop) |

---

## Project Summary

### Tech Stack

✅ Next.js 16 + React 19 + TypeScript  
✅ Tailwind CSS v4 with custom design tokens  
✅ Framer Motion for animations  
✅ Three.js + React Three Fiber for 3D  
✅ Lucide React for icons

### Visual Style

✅ ChainGPT-inspired dark futuristic aesthetic  
✅ Full-page grid overlay (dual-layer)  
✅ Glass morphism with backdrop blur  
✅ HUD elements (corner brackets, monospace labels)  
✅ Film grain + vignette overlays  
✅ Premium Web3 design system

### Performance

✅ Lazy loaded 3D scene  
✅ Device capability detection  
✅ Adaptive DPR and performance monitoring  
✅ Mobile fallbacks  
✅ Optimized animations with Intersection Observer

### Accessibility

✅ Semantic HTML  
✅ ARIA labels  
✅ Focus indicators  
✅ Keyboard navigation  
✅ Reduced motion support

### Components

✅ 11 fully documented components  
✅ All components TypeScript typed  
✅ Reusable card variants  
✅ Modular section framing  
✅ Scroll-tracking navigation

---

**Document Version:** 4.1  
**Last Updated:** January 27, 2026  
**Total Components:** 11  
**Total Lines of Code:** ~3,500+  
**Completion Status:** 100% ✅

---

**End of Documentation**

For questions or support, contact Sys&CoTech:

- Phone: +976 9494 5798 / +976 9435 1314
- Facebook: [facebook.com/SysAndCoTech](https://www.facebook.com/SysAndCoTech/)
- Location: SHUTIS-MHTS Room 400
