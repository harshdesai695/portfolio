import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useAnimations() {
  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach(el => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return
    }

    // Small delay to ensure DOM is ready after loader
    const timer = setTimeout(() => {
      // Hero staggered reveal (no scroll trigger)
      const heroEls = document.querySelectorAll('.hero-content .reveal')
      if (heroEls.length) {
        gsap.fromTo(heroEls,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
        )
      }

      // General scroll-triggered reveals
      gsap.utils.toArray('.reveal').forEach(el => {
        // Skip hero elements already animated
        if (el.closest('.hero-content')) return

        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Experience entries stagger
      const expEntries = gsap.utils.toArray('.exp-entry')
      if (expEntries.length) {
        gsap.fromTo(expEntries,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: {
              trigger: expEntries[0],
              start: 'top 85%',
            },
          }
        )
      }

      // Metric cards stagger
      const metricCards = gsap.utils.toArray('.metric-card')
      if (metricCards.length) {
        gsap.fromTo(metricCards,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out',
            scrollTrigger: {
              trigger: metricCards[0],
              start: 'top 88%',
            },
          }
        )
      }

      ScrollTrigger.refresh()
    }, 100)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])
}
