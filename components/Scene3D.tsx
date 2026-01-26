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
