import { useEffect, useRef } from 'react';
import './hero.css';

export default function Hero() {
  const roles = ['Software Engineer', 'Backend Systems Developer', 'Cloud Infrastructure Engineer', 'Full-Stack Developer'];
  const idx = useRef(0);
  const spanRef = useRef(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    let i = 0;
    let forward = true;
    let timeout;

    function tick() {
      const role = roles[idx.current];
      el.textContent = role.slice(0, i);
      if (forward) {
        if (i < role.length) { i++; timeout = setTimeout(tick, 70); }
        else { forward = false; timeout = setTimeout(tick, 1200); }
      } else {
        if (i > 0) { i--; timeout = setTimeout(tick, 40); }
        else { forward = true; idx.current = (idx.current + 1) % roles.length; timeout = setTimeout(tick, 200); }
      }
    }

    tick();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="hero section">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="muted">Hi, I'm</p>
          <h1 className="hero-title">Your Name — Building Systems That Scale.</h1>
          <p className="hero-role">I am a <span ref={spanRef} aria-live="polite"></span></p>
          <div className="cta-row">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            <a className="btn" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}
