"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { Suspense, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

function OrbitalScene() {
  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.2} />

      {/* Point lights for neon glow effect */}
      <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />

      {/* Main orbital sphere */}
      <Sphere args={[2, 100, 100]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>

      {/* Orbital ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.5, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Particles */}
      <ParticleField />

      {/* Camera controls with subtle drift */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
}

function ParticleField() {
  const particleCount = 100;
  const particles = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i++) {
    particles[i] = (Math.random() - 0.5) * 20;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#06b6d4" transparent opacity={0.6} />
    </points>
  );
}

export default function HeroCinematic() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Scroll-driven animations (disabled if reduced motion preferred)
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* WebGL Canvas Background - Hidden if reduced motion */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0.3]) }}
        >
          <Canvas
            camera={{ position: [0, 0, 8], fov: 45 }}
            gl={{ alpha: true, antialias: true }}
          >
            <Suspense fallback={null}>
              <OrbitalScene />
              <EffectComposer>
                <Bloom
                  luminanceThreshold={0.2}
                  luminanceSmoothing={0.9}
                  intensity={1.5}
                />
                <Noise opacity={0.02} />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />
              </EffectComposer>
            </Suspense>
          </Canvas>
        </motion.div>
      )}

      {/* Static background for reduced motion */}
      {prefersReducedMotion && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />
      )}

      {/* DOM Content Overlay */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center space-y-8"
        style={prefersReducedMotion ? {} : { opacity, scale, y }}
      >
        {/* System Boot Sequence */}
        <motion.div
          className="font-mono text-xs text-cyan-400 mb-4 opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 1,
            delay: prefersReducedMotion ? 0 : 0.5,
          }}
        >
          &gt; SYSTEM ONLINE _ MISSION CONTROL ACTIVE
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-7xl md:text-8xl font-bold tracking-tight"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
        >
          <span className="neon-text">Sys&CoTech</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.8,
            delay: prefersReducedMotion ? 0 : 0.2,
          }}
        >
          Student innovation lab where ideas become reality.
          <br />
          <span className="text-cyan-400">Build. Compete. Ship.</span>
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 pt-8"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.8,
            delay: prefersReducedMotion ? 0 : 0.4,
          }}
        >
          <div className="cinematic-panel px-6 py-4 rounded">
            <div className="text-3xl font-bold text-cyan-400">50+</div>
            <div className="text-sm text-slate-400 font-mono">Members</div>
          </div>
          <div className="cinematic-panel px-6 py-4 rounded">
            <div className="text-3xl font-bold text-purple-400">15+</div>
            <div className="text-sm text-slate-400 font-mono">Wins</div>
          </div>
          <div className="cinematic-panel px-6 py-4 rounded">
            <div className="text-3xl font-bold text-cyan-400">100+</div>
            <div className="text-sm text-slate-400 font-mono">Projects</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.8,
            delay: prefersReducedMotion ? 0 : 0.6,
          }}
        >
          <a
            href="tel:+97694945798"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-black text-lg font-semibold rounded hover:bg-cyan-400 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] group"
          >
            <span>Request Access</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        {!prefersReducedMotion && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2" />
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
