import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.2rem' }}>
            Harsh Desai
          </span>
          <p className="footer__copy">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="footer__right">
          <a href="https://github.com/harshdesai695" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={18} /></a>
          <a href="https://linkedin.com/in/harshdesaihd" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={18} /></a>
          <a href="https://leetcode.com/u/Harsh_Desai/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><SiLeetcode size={18} /></a>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 2.5rem 0;
          border-top: 1px solid var(--border);
          position: relative;
          z-index: 1;
        }
        .footer__inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer__left { display: flex; align-items: center; gap: 1.5rem; }
        .footer__copy { font-size: 0.8rem; color: var(--text-muted); font-weight: 300; }
        .footer__right { display: flex; gap: 1.5rem; }
        .footer__right a {
          color: var(--text-muted);
          transition: color 0.3s;
          display: flex;
        }
        .footer__right a:hover { color: var(--accent); }

        @media (max-width: 600px) {
          .footer__inner { flex-direction: column; text-align: center; }
          .footer__left { flex-direction: column; gap: 0.5rem; }
        }
      `}</style>
    </footer>
  )
}
