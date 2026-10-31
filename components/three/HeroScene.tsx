'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Low-poly stylized rocket matching Altruisty's logo rocket
function LogoRocket(props: any) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.position.y = Math.sin(t * 1.5) * 0.15 + 0.3;
    group.current.rotation.z = Math.sin(t * 0.8) * 0.05 - 0.2;
    group.current.rotation.y = t * 0.4;
  });

  return (
    <group ref={group} {...props} scale={[0.42, 0.42, 0.42]} rotation={[0.2, 0.4, -0.3]}>
      {/* Rocket Main Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.7, 2.4, 16]} />
        <meshPhysicalMaterial
          color="#FFFFFF"
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      {/* Nose Cone */}
      <mesh position={[0, 1.6, 0]}>
        <coneGeometry args={[0.3, 0.8, 16]} />
        <meshPhysicalMaterial
          color="#2F4A9F"
          roughness={0.15}
          metalness={0.2}
          clearcoat={1}
        />
      </mesh>
      {/* Porthole Window */}
      <mesh position={[0, 0.4, 0.58]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.1, 16]} />
        <meshPhysicalMaterial
          color="#72D0E3"
          transmission={0.8}
          roughness={0.1}
          ior={1.5}
        />
      </mesh>
      {/* Fins */}
      {[-1, 1].map((side) => (
        <mesh key={side} position={[side * 0.8, -0.7, 0]} rotation={[0, 0, side * 0.35]}>
          <boxGeometry args={[0.3, 0.8, 0.08]} />
          <meshPhysicalMaterial color="#4A7DB8" roughness={0.3} />
        </mesh>
      ))}
      {/* Exhaust Flame */}
      <mesh position={[0, -1.5, 0]}>
        <coneGeometry args={[0.35, 0.9, 12]} />
        <meshBasicMaterial color="#72D0E3" wireframe />
      </mesh>
    </group>
  );
}

// Floating Glass / Glossy Shapes
function FloatingObjects() {
  const icosaRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const cubeRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mouseX = state.mouse.x * 0.4;
    const mouseY = state.mouse.y * 0.4;

    if (icosaRef.current) {
      icosaRef.current.rotation.x = t * 0.2 + mouseY;
      icosaRef.current.rotation.y = t * 0.3 + mouseX;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.25 - mouseY;
      torusRef.current.rotation.y = t * 0.35 - mouseX;
    }
    if (cubeRef.current) {
      cubeRef.current.rotation.x = t * 0.3;
      cubeRef.current.rotation.y = t * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.5) * 0.1;
      ringRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <group>
      {/* Glossy Icosahedron (Sky Cyan) */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh ref={icosaRef} position={[-2.4, 1.2, -0.5]} scale={[0.9, 0.9, 0.9]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial
            color="#72D0E3"
            transmission={0.65}
            opacity={0.9}
            roughness={0.15}
            ior={1.45}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>

      {/* Torus Knot (Deep Blue) */}
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8}>
        <mesh ref={torusRef} position={[2.6, -1.0, -0.8]} scale={[0.65, 0.65, 0.65]}>
          <torusKnotGeometry args={[1, 0.32, 80, 16]} />
          <meshPhysicalMaterial
            color="#2F4A9F"
            metalness={0.3}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>

      {/* Glass Cube (Mid Blue) */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={cubeRef} position={[2.2, 1.6, -1.2]} scale={[0.7, 0.7, 0.7]}>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshPhysicalMaterial
            color="#4A7DB8"
            transmission={0.7}
            roughness={0.18}
            ior={1.5}
            clearcoat={1}
          />
        </mesh>
      </Float>

      {/* Cosmic Orbit Ring */}
      <mesh ref={ringRef} position={[0, -0.3, -1.5]} scale={[3.4, 3.4, 3.4]}>
        <torusGeometry args={[1, 0.02, 16, 100]} />
        <meshBasicMaterial color="#72D0E3" wireframe opacity={0.35} transparent />
      </mesh>

      {/* Hero Low-poly Rocket */}
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <LogoRocket position={[-0.4, 0.2, 0.5]} />
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={2.2} color="#FFFFFF" />
        <directionalLight position={[-10, -5, -5]} intensity={1.5} color="#72D0E3" />
        <pointLight position={[0, 4, 2]} intensity={1.8} color="#4A7DB8" />
        <FloatingObjects />
      </Canvas>
    </div>
  );
}

