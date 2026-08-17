export default function About() {
  return (
    <section id="about" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <p className="section-label reveal">About</p>

        <div className="about-layout">
          <div className="about-text">
            <h2 className="about-heading reveal">
              Turning complex problems into{' '}
              <em className="accent-text">elegant</em> solutions
            </h2>

            <div className="about-story">
              <p className="reveal">
                It started with curiosity — the kind that makes you stay up
                until 3 AM debugging code you wrote for fun. That spark led
                me from tinkering with college projects to engineering
                production-grade systems at <strong>Oracle</strong>.
              </p>
              <p className="reveal">
                Today, I work on the <strong>Oracle Banking Routing Hub</strong> for
                HDFC Bank — architecting systems with zero critical defects at
                launch, migrating 700+ services using Agentic AI, and building
                RBAC systems that secure 15+ screens. My team trusts me with
                the hard problems, and I've earned an{' '}
                <strong>Outstanding (5/5)</strong> performance rating.
              </p>
              <p className="reveal">
                Outside Oracle, I sharpen my craft — 433+ problems on LeetCode,
                open-source side projects, and constant exploration of AI/ML,
                cloud infrastructure, and system design. I believe the best
                engineers never stop being students.
              </p>
            </div>
          </div>

          <div className="about-metrics reveal">
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '5/5', label: 'Performance Rating' },
              { value: '700+', label: 'Services Migrated' },
              { value: '80%', label: 'Debug Time Reduced' },
              { value: '433+', label: 'LeetCode Solved' },
              { value: '557', label: 'Contributions (Last Year)' },
            ].map(m => (
              <div key={m.label} className="metric-card">
                <span className="metric-value">{m.value}</span>
                <span className="metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-layout {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 4rem;
          align-items: start;
        }
        .about-heading {
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          margin-bottom: 2.5rem;
          letter-spacing: -0.02em;
        }
        .about-heading em { font-style: italic; }
        .about-story p {
          color: var(--text-muted);
          line-height: 1.85;
          margin-bottom: 1.5rem;
          font-size: clamp(0.95rem, 1.2vw, 1.05rem);
          font-weight: 300;
        }
        .about-story strong { color: var(--text); font-weight: 500; }

        .about-metrics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .metric-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.75rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          transition: border-color 0.3s, transform 0.3s var(--ease-out-expo);
        }
        .metric-card:hover {
          border-color: var(--accent);
          transform: translateY(-3px);
        }
        .metric-value {
          font-family: var(--font-display);
          font-size: 2rem;
          color: var(--accent);
          line-height: 1;
        }
        .metric-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .about-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .about-metrics {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 480px) {
          .about-metrics {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  )
}
