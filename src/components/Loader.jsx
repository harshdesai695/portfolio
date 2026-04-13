import { useEffect, useState, useRef, useCallback } from 'react'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [text, setText] = useState('Initializing')
  const containerRef = useRef(null)

  const words = ['Initializing', 'Loading assets', 'Preparing scene', 'Almost there']

  const stableOnComplete = useCallback(() => {
    onComplete?.()
  }, [onComplete])

  useEffect(() => {
    let current = 0
    let wordIdx = 0

    const interval = setInterval(() => {
      current += Math.random() * 8 + 2
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        setTimeout(() => {
          const el = containerRef.current
          if (el) {
            el.style.clipPath = 'inset(0 0 100% 0)'
            el.style.transition = 'clip-path 0.9s cubic-bezier(0.65, 0, 0.35, 1)'
          }
          setTimeout(stableOnComplete, 900)
        }, 500)
      }

      const newWordIdx = Math.min(Math.floor(current / 30), words.length - 1)
      if (newWordIdx !== wordIdx) {
        wordIdx = newWordIdx
        setText(words[wordIdx])
      }
      setProgress(Math.round(current))
    }, 60)

    return () => clearInterval(interval)
  }, [stableOnComplete])

  return (
    <div ref={containerRef} className="loader">
      <div className="loader__inner">
        <p className="loader__text">{text}</p>
        <div className="loader__bar-track">
          <div className="loader__bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="loader__bottom">
          <span className="loader__name">Harsh Desai</span>
          <span className="loader__pct">{progress}%</span>
        </div>
      </div>

      <style>{`
        .loader {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: var(--bg);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 3rem;
          clip-path: inset(0 0 0 0);
        }
        .loader__inner {
          width: 100%;
          max-width: 500px;
        }
        .loader__text {
          font-family: var(--font-display);
          font-size: clamp(1rem, 2vw, 1.3rem);
          font-style: italic;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        .loader__bar-track {
          height: 1px;
          background: rgba(255,255,255,0.1);
          border-radius: 1px;
          overflow: hidden;
        }
        .loader__bar-fill {
          height: 100%;
          background: var(--accent);
          transition: width 0.1s linear;
        }
        .loader__bottom {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
        }
        .loader__name {
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .loader__pct {
          font-size: 0.8rem;
          font-variant-numeric: tabular-nums;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  )
}
