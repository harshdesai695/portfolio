const milestones = [
  {
    period: 'June 2023 — Present',
    role: 'Software Developer',
    company: 'Oracle',
    description:
      'Working on the Oracle Banking Routing Hub (OBRH) for HDFC Bank — a critical middleware platform routing financial transactions across banking systems.',
    achievements: [
      'Architected OBRH with 0 critical defects at production launch',
      'Migrated 700+ REST/SOAP services using Agentic AI automation',
      'Built RBAC system securing 15+ admin screens',
      'Reduced debug time by 80% via ELK Stack monitoring pipeline',
      'Improved codebase performance by 75% through Redis caching & optimized XML parsing',
      'Received Outstanding (5/5) performance rating',
    ],
    tech: ['Java', 'Spring Boot', 'Oracle DB', 'ELK Stack', 'Redis', 'Docker'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <p className="section-label reveal">Experience</p>
        <h2 className="exp-heading reveal">
          Where I've <em className="accent-text">made impact</em>
        </h2>

        <div className="exp-timeline">
          {milestones.map((m, i) => (
            <article key={i} className="exp-entry reveal">
              <div className="exp-entry__marker">
                <div className="exp-entry__dot" />
                {i < milestones.length - 1 && <div className="exp-entry__line" />}
              </div>

              <div className="exp-entry__content">
                <div className="exp-entry__head">
                  <div>
                    <h3 className="exp-entry__role">{m.role}</h3>
                    <p className="exp-entry__company">{m.company}</p>
                  </div>
                  <span className="exp-entry__period">{m.period}</span>
                </div>

                <p className="exp-entry__desc">{m.description}</p>

                <ul className="exp-entry__achievements">
                  {m.achievements.map((a, j) => (
                    <li key={j}>
                      <span className="exp-check">↗</span>
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="exp-entry__tags">
                  {m.tech.map(t => (
                    <span key={t} className="exp-tag">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .exp-heading {
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          margin-bottom: 3.5rem;
          letter-spacing: -0.02em;
        }
        .exp-heading em { font-style: italic; }

        .exp-timeline {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .exp-entry {
          display: flex;
          gap: 2rem;
        }
        .exp-entry__marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 0.4rem;
          flex-shrink: 0;
        }
        .exp-entry__dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid var(--accent);
          background: var(--bg);
          flex-shrink: 0;
        }
        .exp-entry__line {
          width: 1px;
          flex: 1;
          background: var(--border);
          margin-top: 0.5rem;
        }
        .exp-entry__content {
          flex: 1;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 2.5rem;
          transition: border-color 0.3s;
        }
        .exp-entry__content:hover {
          border-color: rgba(129, 140, 248, 0.2);
        }
        .exp-entry__head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .exp-entry__role {
          font-family: var(--font-body);
          font-size: 1.25rem;
          font-weight: 600;
        }
        .exp-entry__company {
          font-size: 1rem;
          color: var(--accent);
          font-weight: 400;
          margin-top: 0.2rem;
        }
        .exp-entry__period {
          font-size: 0.8rem;
          color: var(--text-muted);
          white-space: nowrap;
        }
        .exp-entry__desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
          font-weight: 300;
          margin-bottom: 1.5rem;
        }
        .exp-entry__achievements {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }
        .exp-entry__achievements li {
          font-size: 0.9rem;
          color: var(--text-muted);
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
          font-weight: 300;
        }
        .exp-check {
          color: var(--accent);
          font-size: 0.8rem;
          flex-shrink: 0;
        }
        .exp-entry__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .exp-tag {
          padding: 0.3rem 0.8rem;
          border: 1px solid var(--border);
          border-radius: 100px;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 400;
        }

        @media (max-width: 600px) {
          .exp-entry__marker { display: none; }
          .exp-entry { gap: 0; }
          .exp-entry__content { padding: 1.5rem; }
        }
      `}</style>
    </section>
  )
}
