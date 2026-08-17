import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav ref={navRef} className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__progress" style={{ width: `${scrollProgress}%` }} />
        <div className="nav__inner container">
          <a href="#" className="nav__logo">
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.4rem' }}>
              Harsh
            </span>
          </a>

          <ul className="nav__links">
            {navLinks.map(l => (
              <li key={l.href}><a href={l.href} className="nav__link">{l.label}</a></li>
            ))}
          </ul>

          <a href="#contact" className="btn-primary nav__cta">
            <span>Let's Talk</span>
          </a>

          <a href="/Harsh_Desai_SDE_1_3YOE.pdf" download className="nav__resume" aria-label="Download resume">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </a>

          <button
            className={`nav__burger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.25rem 0;
          transition: all 0.4s var(--ease-out-expo);
        }
        .nav--scrolled {
          padding: 0.6rem 0;
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }
        .nav__progress {
          position: absolute;
          top: 0;
          left: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.1s linear;
        }
        .nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav__links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }
        .nav__link {
          font-size: 0.85rem;
          font-weight: 400;
          color: var(--text-muted);
          transition: color 0.3s;
          position: relative;
        }
        .nav__link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent);
          transition: width 0.3s var(--ease-out-expo);
        }
        .nav__link:hover { color: var(--text); }
        .nav__link:hover::after { width: 100%; }
        .nav__cta {
          padding: 0.5rem 1.5rem;
          font-size: 0.8rem;
        }
        .nav__resume {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border);
          color: var(--text-muted);
          transition: all 0.3s;
        }
        .nav__resume:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .nav__burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          width: 26px;
        }
        .nav__burger span {
          display: block;
          width: 100%;
          height: 1.5px;
          background: var(--text);
          border-radius: 2px;
          transition: all 0.3s;
          transform-origin: center;
        }
        .nav__burger.active span:nth-child(1) { transform: rotate(45deg) translate(4px, 4px); }
        .nav__burger.active span:nth-child(2) { opacity: 0; }
        .nav__burger.active span:nth-child(3) { transform: rotate(-45deg) translate(4px, -4px); }

        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 99;
          background: var(--bg);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateX(100%);
          transition: transform 0.5s var(--ease-out-expo);
        }
        .mobile-menu.active { transform: translateX(0); }
        .mobile-menu ul {
          list-style: none;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .mobile-menu a {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 7vw, 4rem);
          color: var(--text);
          transition: color 0.3s;
        }
        .mobile-menu a:hover { color: var(--accent); }

        @media (max-width: 768px) {
          .nav__links, .nav__cta, .nav__resume { display: none; }
          .nav__burger { display: flex; }
        }
      `}</style>
    </>
  )
}
