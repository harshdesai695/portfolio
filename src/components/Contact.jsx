import { useState } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const socials = [
  { name: 'GitHub', url: 'https://github.com/harshdesai695', icon: FaGithub },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/harshdesaihd', icon: FaLinkedinIn },
  { name: 'LeetCode', url: 'https://leetcode.com/u/Harsh_Desai/', icon: SiLeetcode },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:harshdesai.hd123@gmail.com?subject=${encodeURIComponent(`Portfolio: ${form.name}`)}&body=${encodeURIComponent(form.message)}%0A%0AFrom:%20${encodeURIComponent(form.email)}`
    window.open(mailto, '_blank')
  }

  return (
    <section id="contact" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <p className="section-label reveal">Contact</p>
        <h2 className="contact-heading reveal">
          Let's build something <br />
          <em className="accent-text">together</em>
        </h2>
        <p className="contact-sub reveal">
          Have a project in mind, want to collaborate, or just want to connect?
          I'm always open to interesting conversations and opportunities.
        </p>

        <div className="contact-grid">
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required autoComplete="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required autoComplete="email" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project..." rows="5" value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              <span>Send Message →</span>
            </button>
          </form>

          <div className="contact-sidebar reveal">
            <div className="contact-info-card">
              <h3>Let's connect</h3>
              <p>Based in <strong>Pune, India</strong></p>
              <p>Working at <strong>Oracle</strong></p>

              <a href="mailto:harshdesai.hd123@gmail.com" className="contact-email">
                harshdesai.hd123@gmail.com
              </a>

              <div className="contact-socials">
                {socials.map(s => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="contact-social" aria-label={s.name}>
                    <s.icon size={18} />
                    <span>{s.name}</span>
                    <span className="contact-social__arrow">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-availability">
              <span className="availability-dot" />
              <span>Open to opportunities & collaborations</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-heading {
          font-size: clamp(2.5rem, 5vw, 4rem);
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }
        .contact-heading em { font-style: italic; }
        .contact-sub {
          font-size: clamp(1rem, 1.3vw, 1.1rem);
          color: var(--text-muted);
          max-width: 550px;
          line-height: 1.7;
          font-weight: 300;
          margin-bottom: 3.5rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .form-group label {
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--text-muted);
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.9rem 1.1rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          color: var(--text);
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 300;
          outline: none;
          transition: border-color 0.3s;
          resize: vertical;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--accent);
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(119,119,119,0.5);
        }

        .contact-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .contact-info-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 2.5rem;
        }
        .contact-info-card h3 {
          font-family: var(--font-display);
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .contact-info-card p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          font-weight: 300;
        }
        .contact-info-card strong { color: var(--text); font-weight: 500; }
        .contact-email {
          display: block;
          margin-top: 1.25rem;
          font-size: 0.9rem;
          color: var(--accent);
          font-weight: 400;
          transition: opacity 0.3s;
        }
        .contact-email:hover { opacity: 0.7; }

        .contact-socials {
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .contact-social {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.8rem 1rem;
          border: 1px solid var(--border);
          border-radius: 12px;
          font-size: 0.88rem;
          transition: all 0.3s var(--ease-out-expo);
        }
        .contact-social:hover {
          border-color: var(--accent);
          transform: translateX(4px);
        }
        .contact-social__arrow {
          margin-left: auto;
          color: var(--text-muted);
          transition: transform 0.3s, color 0.3s;
        }
        .contact-social:hover .contact-social__arrow {
          transform: translateX(4px);
          color: var(--accent);
        }

        .contact-availability {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 300;
        }
        .availability-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #34d399;
          flex-shrink: 0;
          position: relative;
        }
        .availability-dot::after {
          content: "";
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: #34d399;
          opacity: 0.3;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.6); opacity: 0; }
        }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
