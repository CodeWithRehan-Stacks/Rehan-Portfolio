import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GlowingOrb } from './GlowingOrb';
import { FloatingParticles } from './FloatingParticles';

export function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      className="w-full h-full"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <GlowingOrb />
        <FloatingParticles />
      </Suspense>
    </Canvas>
  );
}
