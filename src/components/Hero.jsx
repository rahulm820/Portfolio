import { useEffect, useRef, useState } from 'react';
import profileImg from '../assets/profile.png';
import resumePdf from '../assets/Rahul Madhawani.pdf';
import './hero.css';

const orbitItems = [
  { id: 'chess', content: '♟️' },
  { id: 'football', content: '⚽' },
  { id: 'books', content: '📚' },
  { id: 'badminton', content: '🏸' },
  { id: 'f1', content: '🏎️' },
  { id: 'cricket', content: '🏏' },
  { id: 'mountains', content: '⛰️' },
  { id: 'cpp', content: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" width="24" height="24" /> },
  { id: 'mysql', content: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" width="24" height="24" /> },
  { id: 'java', content: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" width="24" height="24" /> },
  { id: 'python', content: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" width="24" height="24" /> },
  { id: 'trading', content: '📈' }
];

const roles = [
  'Full-Stack Developer',
  'React Native Engineer',
  'Agentic AI Engineer',
  'Backend Developer',
];

const stats = [
  { value: 4, suffix: '+', label: 'Projects Shipped' },
  { value: 12, suffix: '+', label: 'Technologies' },
  { value: 4, suffix: '+', label: 'Certifications' },
  { value: 8.48, suffix: '', label: 'CGPA' },
];

function useCountUp(target, duration = 1500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const isFloat = target % 1 !== 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(interval); }
      else setCount(isFloat ? parseFloat(start.toFixed(2)) : Math.floor(start));
    }, 16);
    return () => clearInterval(interval);
  }, [started, target, duration, isFloat]);

  return { count, ref };
}

export default function Hero() {
  const roleIdx = useRef(0);
  const charIdx = useRef(0);
  const isDeleting = useRef(false);
  const spanRef = useRef(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    let timeout;

    function tick() {
      const role = roles[roleIdx.current];
      el.textContent = role.slice(0, charIdx.current);

      if (!isDeleting.current) {
        if (charIdx.current < role.length) {
          charIdx.current++;
          timeout = setTimeout(tick, 60);
        } else {
          isDeleting.current = true;
          timeout = setTimeout(tick, 1500);
        }
      } else {
        if (charIdx.current > 0) {
          charIdx.current--;
          timeout = setTimeout(tick, 35);
        } else {
          isDeleting.current = false;
          roleIdx.current = (roleIdx.current + 1) % roles.length;
          timeout = setTimeout(tick, 300);
        }
      }
    }
    tick();
    return () => clearTimeout(timeout);
  }, []);

  const counters = stats.map(s => useCountUp(s.value));

  return (
    <section id="home" className="hero section">
      {/* Ambient gradient blob */}
      <div className="hero-gradient" aria-hidden="true" />
      <div className="hero-gradient-2" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-content">
          {/* Text */}
          <div className="hero-text reveal">
            <span className="section-label">Hi, I'm Rahul Madhawani</span>
            <h1 className="hero-title">
              Building Ideas<br />
              <span className="hero-accent">Into Reality.</span>
            </h1>
            <p className="hero-subtitle">
              I am a <span className="typewriter-text" ref={spanRef} aria-live="polite"></span>
              <span className="typewriter-cursor" aria-hidden="true">|</span>
            </p>
            <div className="hero-cta">
              <a className="btn primary" href="#projects">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                View Projects
              </a>
              <a className="btn" href={resumePdf} target="_blank" rel="noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                Resume
              </a>
              <a className="btn" href="#contact">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                Contact
              </a>
            </div>
          </div>

          {/* Decorative blob (right side) */}
          <div className="hero-visual reveal">
            <div className="hero-blob">
              <img src={profileImg} alt="Rahul Madhawani" className="hero-profile-img" />
            </div>
            <div className="hero-blob-ring" aria-hidden="true">
              {orbitItems.map((item, index) => {
                const angle = (index / orbitItems.length) * 360;
                return (
                  <div
                    key={item.id}
                    className="orbit-skill-wrapper"
                    style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
                  >
                    <div
                      className="orbit-skill-content"
                      style={{ transform: `translateY(-220px) rotate(${angle}deg)` }}
                    >
                      <div className="orbit-skill-badge">
                        {item.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="stats-strip reveal">
          {stats.map((s, i) => (
            <div className="stat-item" key={s.label} ref={counters[i].ref}>
              <span className="stat-value">
                {counters[i].count}{s.suffix}
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator" aria-hidden="true">
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}
