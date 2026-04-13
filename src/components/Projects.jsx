const projects = [
  {
    id: 1,
    title: 'MyKart',
    subtitle: 'Gaming E-Commerce Platform',
    description:
      'Full-stack microservices e-commerce platform for gaming products. 7 Spring Boot services, JWT security, API Gateway, Redis caching, and a React SPA.',
    tech: ['React 18', 'Spring Boot', 'MongoDB', 'Redis', 'Eureka', 'Docker'],
    github: 'https://github.com/harshdesai695/MyKart-Frontend',
    accent: '#818cf8',
  },
  {
    id: 2,
    title: 'JSON Visualizer',
    subtitle: 'Developer Productivity Tool',
    description:
      'Interactive JSON parsing, tree view rendering, and beautification tool. Helps developers debug and understand complex JSON structures instantly.',
    tech: ['JavaScript', 'React', 'CSS3', 'Tree Algorithms'],
    live: 'https://visualizerjson.netlify.app/',
    accent: '#c084fc',
  },
  {
    id: 3,
    title: 'SysBlueprint',
    subtitle: 'System Design Platform',
    description:
      'System design learning and visualization platform. Explore architecture patterns, scalability strategies, and real-world system designs.',
    tech: ['TypeScript', 'React', 'MDX', 'System Design'],
    live: 'https://sysblueprints.netlify.app/',
    accent: '#fb923c',
  },
  {
    id: 4,
    title: 'Nova Assistant',
    subtitle: 'AI-Powered Assistant',
    description:
      'Conversational AI assistant built with Python and LangChain. Features context-aware responses, memory management, and tool integrations.',
    tech: ['Python', 'LangChain', 'OpenAI API', 'AI/ML'],
    github: 'https://github.com/harshdesai695/nova-assistant',
    accent: '#34d399',
  },
  {
    id: 5,
    title: 'Budget Tracker',
    subtitle: 'Mobile Finance App',
    description:
      'Cross-platform mobile app for personal finance tracking. Clean architecture with real-time expense categorization and monthly insights.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Mobile Dev'],
    github: 'https://github.com/harshdesai695/budget_tracker',
    accent: '#f472b6',
  },
  {
    id: 6,
    title: 'Portfolio',
    subtitle: '3D Interactive Website',
    description:
      'This portfolio — built with React, Three.js, and GSAP. Features a 3D interactive scene, scroll-driven animations, and a custom cursor.',
    tech: ['React 19', 'Three.js', 'GSAP', 'Tailwind CSS'],
    live: 'https://harshdesaiportfolio.netlify.app/',
    accent: '#818cf8',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <p className="section-label reveal">Selected Work</p>
        <h2 className="projects-heading reveal">
          Things I've <em className="accent-text">built</em>
        </h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="project-card reveal"
              style={{ '--card-accent': p.accent }}
            >
              <div className="project-card__top">
                <span className="project-card__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="project-card__links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} GitHub`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live demo`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  )}
                </div>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__subtitle">{p.subtitle}</p>
                <p className="project-card__desc">{p.description}</p>
              </div>

              <div className="project-card__tags">
                {p.tech.map(t => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .projects-heading {
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          letter-spacing: -0.02em;
          margin-bottom: 3rem;
        }
        .projects-heading em { font-style: italic; }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 380px), 1fr));
          gap: 1.5rem;
        }

        .project-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          transition: border-color 0.4s, transform 0.4s var(--ease-out-expo);
          position: relative;
          overflow: hidden;
        }
        .project-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--card-accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s var(--ease-out-expo);
        }
        .project-card:hover {
          border-color: color-mix(in srgb, var(--card-accent) 25%, transparent);
          transform: translateY(-6px);
        }
        .project-card:hover::before { transform: scaleX(1); }

        .project-card__top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .project-card__num {
          font-family: var(--font-display);
          font-size: 0.9rem;
          font-style: italic;
          color: var(--text-muted);
        }
        .project-card__links {
          display: flex;
          gap: 0.75rem;
        }
        .project-card__links a {
          color: var(--text-muted);
          transition: color 0.3s;
          display: flex;
        }
        .project-card__links a:hover { color: var(--card-accent); }

        .project-card__title {
          font-family: var(--font-body);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--card-accent);
        }
        .project-card__subtitle {
          font-size: 0.88rem;
          color: var(--text);
          font-weight: 400;
          margin-top: 0.15rem;
        }
        .project-card__desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.7;
          font-weight: 300;
          margin-top: 0.5rem;
        }
        .project-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: auto;
        }
        .project-tag {
          padding: 0.25rem 0.7rem;
          border: 1px solid var(--border);
          border-radius: 100px;
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 400;
        }

        @media (max-width: 600px) {
          .project-card { padding: 1.5rem; }
        }
      `}</style>
    </section>
  )
}
