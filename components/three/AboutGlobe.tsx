'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function RotatingGlobe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (globeRef.current) {
      globeRef.current.rotation.y = t * 0.25;
      globeRef.current.rotation.x = Math.sin(t * 0.1) * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.35;
      ringRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <group>
      {/* Wireframe Core Globe */}
      <mesh ref={globeRef} scale={[1.8, 1.8, 1.8]}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshBasicMaterial color="#4A7DB8" wireframe opacity={0.4} transparent />
      </mesh>

      {/* Inner Glowing Sphere */}
      <mesh scale={[1.72, 1.72, 1.72]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial
          color="#72D0E3"
          transmission={0.8}
          roughness={0.2}
          opacity={0.3}
          transparent
        />
      </mesh>

      {/* Orbiting Satellite Nodes (People & Tech) */}
      <group ref={ringRef}>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 2.4;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * radius, Math.sin(angle) * 0.8, Math.sin(angle) * radius]}
            >
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshBasicMaterial color={i % 2 === 0 ? '#2F4A9F' : '#72D0E3'} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

export default function AboutGlobe() {
  return (
    <div className="w-full h-72 sm:h-96 relative pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#72D0E3" />
        <RotatingGlobe />
      </Canvas>
    </div>
  );
}

