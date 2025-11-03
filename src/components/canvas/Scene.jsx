import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, useScroll } from '@react-three/drei';

export default function Scene() {
  const meshRef = useRef();
  const scroll = useScroll();

  useFrame((state, delta) => {
    if (meshRef.current) {
      const offset = scroll.offset;
      meshRef.current.rotation.y = offset * Math.PI * 2;
      meshRef.current.rotation.x = offset * Math.PI * 0.5;
      meshRef.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <>
      <mesh ref={meshRef} position={[0, -0.5, 0]}>
        <Icosahedron args={[2, 0]}>
          <meshStandardMaterial
            color="#a3a8ff" 
            wireframe={false} 
            roughness={0.3} 
            metalness={0.7} 
          />
        </Icosahedron>
      </mesh>
    </>
  );
}