import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { Loader } from './components/Loader';
import Scene from './components/canvas/Scene';
import Stars from './components/canvas/Stars'; // <-- New 3D Element
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      {/* This is the new structure.
        The Canvas is the main parent.
        ScrollControls wraps everything and syncs the 3D and 2D.
      */}
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <Suspense fallback={<Loader />}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <pointLight position={[-5, -10, -5]} intensity={0.8} />

          {/* pages={6} means we have 6 sections (Hero, About, etc.)
            damping={0.25} gives it a smooth scroll effect
          */}
          <ScrollControls pages={6} damping={0.25}>
            {/* 3D Scene Components */}
            <Scene />
            <Stars />

            {/* This <Scroll> component holds the 2D HTML.
              It's linked to the <ScrollControls> parent.
            */}
            <Scroll html style={{ width: '100%' }}>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Contact />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;