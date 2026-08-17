export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow reveal">Software Developer @ Oracle</p>

          <h1 className="hero-title reveal">
            <span className="hero-title__line">I build systems</span>
            <span className="hero-title__line">
              that <em className="accent-text">scale</em>
            </span>
          </h1>

          <p className="hero-desc reveal">
            Engineering elegance at Oracle — from microservice architectures
            to immersive frontends. Full-stack developer with a passion for
            cloud-native solutions and clean code.
          </p>

          <div className="hero-actions reveal">
            <a href="#projects" className="btn-primary">
              <span>View My Work</span>
            </a>
            <a href="/Harsh_Desai_SDE_1_3YOE.pdf" download className="btn-primary btn-outline">
              <span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:'0.4rem',verticalAlign:'middle'}}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Resume
              </span>
            </a>
            <a href="#contact" className="hero-link">
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          z-index: 1;
        }
        .hero-container {
          position: relative;
          z-index: 2;
          padding-top: 8rem;
          padding-bottom: 4rem;
        }
        .hero-content {
          max-width: 800px;
        }
        .hero-eyebrow {
          font-size: 0.85rem;
          font-weight: 400;
          color: var(--accent);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }
        .hero-title {
          font-size: clamp(3.5rem, 8vw, 7rem);
          font-weight: 400;
          line-height: 1;
          letter-spacing: -0.03em;
          margin-bottom: 2rem;
        }
        .hero-title em {
          font-style: italic;
        }
        .hero-title__line {
          display: block;
        }
        .hero-desc {
          font-size: clamp(1rem, 1.4vw, 1.15rem);
          color: var(--text-muted);
          max-width: 520px;
          line-height: 1.7;
          font-weight: 300;
          margin-bottom: 3rem;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          flex-wrap: wrap;
        }
        .btn-outline {
          background: transparent;
          color: var(--text-muted);
          border-color: var(--border);
        }
        .btn-outline:hover {
          color: var(--bg);
          border-color: var(--accent);
        }
        .hero-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 400;
          color: var(--text-muted);
          transition: color 0.3s;
        }
        .hero-link:hover { color: var(--accent); }

        .hero-scroll-hint {
          position: absolute;
          bottom: 2rem;
          right: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }
        .hero-scroll-hint span {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
          writing-mode: vertical-rl;
        }
        .hero-scroll-line {
          width: 1px;
          height: 50px;
          background: linear-gradient(to bottom, var(--accent), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50% { opacity: 0.3; transform: scaleY(0.5); }
        }

        @media (max-width: 768px) {
          .hero-scroll-hint { display: none; }
        }
      `}</style>
    </section>
  )
}
