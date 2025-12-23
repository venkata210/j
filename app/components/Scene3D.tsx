'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

function AnimatedSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 15]} />
        <MeshDistortMaterial
          color="#3b82f6" // blue-500
          attach="material"
          distort={0.4} // Strength of distortion
          speed={2} // Speed of distortion
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={2} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
