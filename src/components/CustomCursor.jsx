import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const ringRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const ring = ringRef.current
    const dot = dotRef.current
    if (!ring || !dot) return

    let mx = 0, my = 0, cx = 0, cy = 0
    let rafId

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`
    }

    const loop = () => {
      cx += (mx - cx) * 0.1
      cy += (my - cy) * 0.1
      ring.style.transform = `translate(${cx - 18}px, ${cy - 18}px)`
      rafId = requestAnimationFrame(loop)
    }

    const grow = () => {
      ring.style.width = '56px'
      ring.style.height = '56px'
      ring.style.borderColor = 'var(--accent)'
      ring.style.opacity = '0.4'
    }

    const shrink = () => {
      ring.style.width = '36px'
      ring.style.height = '36px'
      ring.style.borderColor = 'rgba(255,255,255,0.15)'
      ring.style.opacity = '0.25'
    }

    const bindHovers = () => {
      document.querySelectorAll('a, button, .project-card, .skill-pill, .metric-card, .exp-entry__content').forEach(el => {
        el.addEventListener('mouseenter', grow)
        el.addEventListener('mouseleave', shrink)
      })
    }

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(loop)
    bindHovers()

    // Rebind on DOM changes (for dynamically rendered elements)
    const observer = new MutationObserver(bindHovers)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
      <style>{`
        @media (pointer: fine) {
          .cursor-ring {
            position: fixed;
            top: 0; left: 0;
            width: 36px; height: 36px;
            border: 1px solid rgba(255,255,255,0.15);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10001;
            opacity: 0.25;
            transition: width 0.3s var(--ease-out-expo), height 0.3s var(--ease-out-expo),
                        border-color 0.3s, opacity 0.3s;
            mix-blend-mode: difference;
          }
          .cursor-dot {
            position: fixed;
            top: 0; left: 0;
            width: 8px; height: 8px;
            background: var(--accent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10002;
          }
          * { cursor: none !important; }
        }
        @media (pointer: coarse) {
          .cursor-ring, .cursor-dot { display: none; }
        }
      `}</style>
    </>
  )
}
