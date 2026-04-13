import {
  SiReact, SiSpringboot, SiDocker, SiKubernetes, SiMongodb, SiPostgresql,
  SiPython, SiJavascript, SiTypescript, SiNodedotjs, SiRedis, SiApachekafka,
  SiGit, SiFlutter, SiGraphql, SiElasticsearch, SiMysql, SiJenkins,
  SiTailwindcss, SiExpress
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa'

const categories = [
  {
    title: 'Languages',
    items: [
      { icon: FaJava, name: 'Java' },
      { icon: SiPython, name: 'Python' },
      { icon: SiJavascript, name: 'JavaScript' },
      { icon: SiTypescript, name: 'TypeScript' },
      { name: 'SQL', text: '🗃️' },
      { name: 'Dart', text: '🎯' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { icon: SiReact, name: 'React' },
      { icon: SiFlutter, name: 'Flutter' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
      { name: 'HTML/CSS', text: '🎨' },
      { icon: SiGraphql, name: 'GraphQL' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { icon: SiSpringboot, name: 'Spring Boot' },
      { icon: SiNodedotjs, name: 'Node.js' },
      { icon: SiExpress, name: 'Express.js' },
      { name: 'REST APIs', text: '⚡' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { icon: SiMongodb, name: 'MongoDB' },
      { icon: SiMysql, name: 'MySQL' },
      { icon: SiPostgresql, name: 'PostgreSQL' },
      { icon: SiRedis, name: 'Redis' },
      { icon: SiElasticsearch, name: 'Elasticsearch' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    items: [
      { icon: SiDocker, name: 'Docker' },
      { icon: SiKubernetes, name: 'Kubernetes' },
      { icon: FaAws, name: 'AWS' },
      { name: 'Azure', text: '☁️' },
      { icon: SiJenkins, name: 'Jenkins' },
      { name: 'ArgoCD', text: '🔄' },
    ],
  },
  {
    title: 'Tools & AI',
    items: [
      { icon: SiApachekafka, name: 'Kafka' },
      { icon: SiGit, name: 'Git' },
      { name: 'ELK Stack', text: '📊' },
      { name: 'LangChain', text: '🔗' },
      { name: 'OpenAI API', text: '🤖' },
      { name: 'JIRA', text: '📋' },
    ],
  },
]

function SkillPill({ icon: Icon, name, text }) {
  return (
    <div className="skill-pill">
      {Icon ? <Icon size={16} /> : <span style={{ fontSize: '0.9rem' }}>{text}</span>}
      <span>{name}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <p className="section-label reveal">Tech Stack</p>
        <h2 className="skills-heading reveal">
          Tools of <em className="accent-text">the trade</em>
        </h2>

        <div className="skills-grid">
          {categories.map(cat => (
            <div key={cat.title} className="skill-category reveal">
              <h3 className="skill-category__title">{cat.title}</h3>
              <div className="skill-category__pills">
                {cat.items.map(item => (
                  <SkillPill key={item.name} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-heading {
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          margin-bottom: 3rem;
          letter-spacing: -0.02em;
        }
        .skills-heading em { font-style: italic; }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
          gap: 1.25rem;
        }
        .skill-category {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 2rem;
          transition: border-color 0.3s;
        }
        .skill-category:hover {
          border-color: rgba(129, 140, 248, 0.2);
        }
        .skill-category__title {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent);
          margin-bottom: 1rem;
        }
        .skill-category__pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          border: 1px solid var(--border);
          border-radius: 100px;
          font-size: 0.82rem;
          font-weight: 400;
          color: var(--text-muted);
          transition: all 0.3s var(--ease-out-expo);
        }
        .skill-pill:hover {
          color: var(--accent);
          border-color: var(--accent);
          background: rgba(129, 140, 248, 0.06);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  )
}
