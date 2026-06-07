import { useState, useEffect, useRef } from 'react';
import './navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ toggleTheme, theme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const indicatorRef = useRef(null);
  const navLinksRef = useRef(null);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Active section tracker */
  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* Sliding underline indicator */
  useEffect(() => {
    if (!navLinksRef.current || !indicatorRef.current) return;
    const activeLink = navLinksRef.current.querySelector(`a[href="#${activeSection}"]`);
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      indicatorRef.current.style.left = `${offsetLeft}px`;
      indicatorRef.current.style.width = `${offsetWidth}px`;
    }
  }, [activeSection]);

  /* Close mobile menu on anchor click */
  const handleNavClick = () => setMobileOpen(false);

  /* Close on escape */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          {/* Logo */}
          <a href="#home" className="nav-logo" aria-label="Home">
            <span className="logo-mark">R</span>
            <span className="logo-text">Rahul</span>
          </a>

          {/* Desktop nav */}
          <div className="nav-links-wrap" ref={navLinksRef}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link${activeSection === link.href.slice(1) ? ' active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <span className="nav-indicator" ref={indicatorRef} />
          </div>

          {/* Right actions */}
          <div className="nav-actions">
            <span className="open-badge badge success">
              <span className="pulse-dot" />
              Open to Work
            </span>

            <button
              className="kbd-hint"
              onClick={() => {
                const event = new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, bubbles: true });
                window.dispatchEvent(event);
              }}
              aria-label="Open command palette"
            >
              <span className="kbd-key">⌘K</span>
            </button>

            <button
              className="theme-toggle"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              className={`hamburger${mobileOpen ? ' open' : ''}`}
              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-menu-overlay${mobileOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        <div className="mobile-menu-content">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-link"
              style={{ animationDelay: `${i * 60}ms` }}
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
          <div className="mobile-menu-footer">
            <a href="https://github.com/rahulm820" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
            <a href="https://www.linkedin.com/in/rahul-madhawani-b87805259/" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <a href="mailto:rahulmadhawani2004@gmail.com" aria-label="Email">Email</a>
          </div>
        </div>
      </div>
    </>
  );
}
