import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, RoundedBox, Text } from '@react-three/drei'
import * as THREE from 'three'

/* ═══════════════════════════════════════════
   BACKGROUND ATMOSPHERE — Wireframe shapes,
   particles, grid (always visible)
   ═══════════════════════════════════════════ */

function FloatingShape({ position, geometry, color, speed = 1 }) {
  const ref = useRef()

  useFrame(({ clock, pointer }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime() * speed
    ref.current.rotation.x = t * 0.3
    ref.current.rotation.y = t * 0.2
    ref.current.position.x = position[0] + Math.sin(t * 0.5) * 0.4
    ref.current.position.y = position[1] + Math.cos(t * 0.4) * 0.25
    ref.current.position.x += pointer.x * 0.12
    ref.current.position.y += pointer.y * 0.08
  })

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.25}>
      <mesh ref={ref} position={position}>
        {geometry === 'icosahedron' && <icosahedronGeometry args={[1, 1]} />}
        {geometry === 'octahedron' && <octahedronGeometry args={[0.8]} />}
        {geometry === 'torus' && <torusGeometry args={[0.7, 0.2, 12, 24]} />}
        {geometry === 'dodecahedron' && <dodecahedronGeometry args={[0.7]} />}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.1}
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </Float>
  )
}

function Particles({ count = 300 }) {
  const ref = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 24
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 18 - 4
    }
    return arr
  }, [count])

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.015
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#818cf8" transparent opacity={0.35} sizeAttenuation />
    </points>
  )
}

function GridFloor() {
  return (
    <gridHelper
      args={[30, 30, '#1a1a2e', '#1a1a2e']}
      position={[0, -3.5, 0]}
    />
  )
}

/* ═══════════════════════════════════════════
   DEVELOPER WORKSPACE — Monitor, keyboard,
   coffee mug, floating code brackets
   ═══════════════════════════════════════════ */

function Monitor() {
  const groupRef = useRef()

  useFrame(({ pointer }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.08, 0.03)
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -pointer.y * 0.04, 0.03)
    }
  })

  return (
    <group ref={groupRef} position={[0, 0.8, 0]}>
      {/* Bezel */}
      <RoundedBox args={[2.4, 1.5, 0.08]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </RoundedBox>
      {/* Screen glow */}
      <mesh position={[0, 0, 0.05]}>
        <planeGeometry args={[2.2, 1.3]} />
        <meshStandardMaterial color="#0f0f1a" emissive="#818cf8" emissiveIntensity={0.15} />
      </mesh>
      {/* Code lines */}
      {[-0.4, -0.2, 0, 0.2, 0.4].map((y, i) => (
        <mesh key={i} position={[-0.3 + i * 0.12, y, 0.06]}>
          <planeGeometry args={[0.5 + Math.random() * 0.9, 0.04]} />
          <meshBasicMaterial color={i % 2 === 0 ? '#818cf8' : '#c084fc'} transparent opacity={0.45 + Math.random() * 0.3} />
        </mesh>
      ))}
      {/* Stand */}
      <mesh position={[0, -0.95, -0.05]}>
        <boxGeometry args={[0.12, 0.4, 0.12]} />
        <meshStandardMaterial color="#2a2a3a" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0, -1.18, 0.1]}>
        <boxGeometry args={[0.8, 0.04, 0.4]} />
        <meshStandardMaterial color="#2a2a3a" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  )
}

function Keyboard() {
  return (
    <group position={[0, -0.35, 0.8]}>
      <RoundedBox args={[1.6, 0.06, 0.5]} radius={0.02} smoothness={4}>
        <meshStandardMaterial color="#1a1a2e" metalness={0.6} roughness={0.3} />
      </RoundedBox>
      {[0.12, 0, -0.12].map((z, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <mesh key={`${row}-${col}`} position={[-0.56 + col * 0.16, 0.04, z]}>
            <boxGeometry args={[0.12, 0.02, 0.09]} />
            <meshStandardMaterial color="#252535" metalness={0.5} roughness={0.4} />
          </mesh>
        ))
      )}
    </group>
  )
}

function CoffeeMug() {
  return (
    <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.15}>
      <group position={[1.6, -0.2, 0.3]}>
        <mesh>
          <cylinderGeometry args={[0.12, 0.1, 0.25, 16]} />
          <meshStandardMaterial color="#2a2a3a" metalness={0.3} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.11, 0.11, 0.02, 16]} />
          <meshStandardMaterial color="#3a2010" />
        </mesh>
        <mesh position={[0.15, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.07, 0.02, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#2a2a3a" metalness={0.3} roughness={0.5} />
        </mesh>
        <SteamParticles position={[0, 0.2, 0]} />
      </group>
    </Float>
  )
}

function SteamParticles({ position }) {
  const ref = useRef()
  const count = 8

  const data = useMemo(() => {
    const offsets = []
    for (let i = 0; i < count; i++) {
      offsets.push({
        x: (Math.random() - 0.5) * 0.08,
        z: (Math.random() - 0.5) * 0.08,
        speed: 0.3 + Math.random() * 0.3,
        phase: Math.random() * Math.PI * 2,
      })
    }
    return offsets
  }, [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const children = ref.current.children
    const t = clock.getElapsedTime()
    for (let i = 0; i < children.length; i++) {
      const d = data[i]
      const yOff = ((t * d.speed + d.phase) % 1) * 0.3
      children[i].position.set(d.x + Math.sin(t + d.phase) * 0.02, yOff, d.z)
      children[i].material.opacity = 0.15 * (1 - yOff / 0.3)
    }
  })

  return (
    <group ref={ref} position={position}>
      {data.map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.01, 4, 4]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
        </mesh>
      ))}
    </group>
  )
}

function FloatingBrackets() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (groupRef.current) groupRef.current.rotation.y = clock.getElapsedTime() * 0.04
  })

  const brackets = [
    { char: '</', pos: [-3, 2.2, -3], color: '#818cf8', size: 0.45 },
    { char: '/>', pos: [3.2, 2.5, -2.5], color: '#c084fc', size: 0.4 },
    { char: '{ }', pos: [-2.5, -1, -2.5], color: '#818cf8', size: 0.35 },
    { char: '()', pos: [3, -0.5, -3], color: '#c084fc', size: 0.3 },
    { char: '=>', pos: [0.5, 3.2, -4], color: '#fb923c', size: 0.35 },
  ]

  return (
    <group ref={groupRef}>
      {brackets.map((b, i) => (
        <Float key={i} speed={0.5 + i * 0.15} rotationIntensity={0.15} floatIntensity={0.4}>
          <Text
            position={b.pos}
            fontSize={b.size}
            color={b.color}
            font="https://fonts.gstatic.com/s/jetbrainsmono/v20/tDbY2o-flEEny0FZhsfKu5WU4xD-IQ-PuZJJXxfpAO-.woff2"
            anchorX="center"
            anchorY="middle"
            material-transparent
            material-opacity={0.3}
          >
            {b.char}
          </Text>
        </Float>
      ))}
    </group>
  )
}

/* ═══════════════════════════════════════════
   COMBINED SCENE
   ═══════════════════════════════════════════ */

function SceneContent() {
  const { camera } = useThree()
  const initialY = useRef(camera.position.y)

  useFrame(() => {
    const scrollPct = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, initialY.current - scrollPct * 2.5, 0.03)
  })

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 8, 5]} intensity={0.45} color="#e0e0ff" />
      <pointLight position={[-4, 3, 2]} color="#818cf8" intensity={0.3} />
      <pointLight position={[3, -1, -3]} color="#c084fc" intensity={0.2} />

      {/* === Background atmosphere === */}
      <FloatingShape position={[-4, 2, -5]} geometry="icosahedron" color="#818cf8" speed={0.5} />
      <FloatingShape position={[4.5, -1.5, -6]} geometry="octahedron" color="#c084fc" speed={0.7} />
      <FloatingShape position={[-3, -2.5, -4.5]} geometry="torus" color="#818cf8" speed={0.4} />
      <FloatingShape position={[3.5, 3, -7]} geometry="dodecahedron" color="#c084fc" speed={0.6} />

      <Particles count={250} />
      <GridFloor />

      {/* === Developer workspace (right side, slightly forward) === */}
      <group position={[1.2, -0.3, -0.5]} scale={0.95}>
        <Monitor />
        <Keyboard />
        <CoffeeMug />
      </group>

      {/* === Floating code brackets (surrounding everything) === */}
      <FloatingBrackets />
    </>
  )
}

export default function Scene3D() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0.5, 6], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        style={{ pointerEvents: 'auto' }}
        frameloop="demand"
      >
        <FrameLoop />
        <SceneContent />
      </Canvas>
    </div>
  )
}

function FrameLoop() {
  useFrame(({ invalidate }) => invalidate())
  return null
}
