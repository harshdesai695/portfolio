import { useState, Suspense, lazy } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import useLenis from './hooks/useLenis'
import useAnimations from './hooks/useAnimations'

const Scene3D = lazy(() => import('./components/Scene3D'))

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useLenis()
  useAnimations()

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      <div className="noise-overlay" />
      <CustomCursor />

      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      <Navbar />

      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
