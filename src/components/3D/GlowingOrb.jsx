import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';

export function GlowingOrb() {
  const meshRef = useRef(null);
  const lightRef = useRef(null);

  useFrame(({ mouse }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
      meshRef.current.position.x = mouse.x * 0.2;
      meshRef.current.position.y = mouse.y * 0.2;
    }
  });

  return (
    <>
      <pointLight ref={lightRef} position={[0, 0, 10]} intensity={2} color="#0ea5e9" />
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <MeshDistortMaterial
          color="#0ea5e9"
          speed={2}
          distort={0.3}
          emissive="#0284c7"
          emissiveIntensity={0.5}
        />
      </mesh>

      <mesh position={[0, 0, 0]} scale={1.8}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial
          transparent
          opacity={0.1}
          color="#0ea5e9"
          wireframe
        />
      </mesh>
    </>
  );
}
