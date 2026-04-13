import Marquee from 'react-fast-marquee'

const words = [
  'Full-Stack Developer',
  '•',
  'System Design',
  '•',
  'Cloud Native',
  '•',
  'Microservices',
  '•',
  'React & Spring Boot',
  '•',
  'Oracle',
  '•',
  'Problem Solver',
  '•',
]

export default function TechMarquee() {
  return (
    <div className="text-marquee">
      <Marquee speed={40} gradient={false}>
        {words.map((w, i) => (
          <span
            key={i}
            className={w === '•' ? 'text-marquee__dot' : 'text-marquee__word'}
          >
            {w}
          </span>
        ))}
      </Marquee>

      <style>{`
        .text-marquee {
          padding: 1.5rem 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        .text-marquee__word {
          font-family: var(--font-display);
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          font-style: italic;
          color: var(--text-muted);
          margin: 0 1.5rem;
          white-space: nowrap;
        }
        .text-marquee__dot {
          color: var(--accent);
          margin: 0 1rem;
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  )
}
