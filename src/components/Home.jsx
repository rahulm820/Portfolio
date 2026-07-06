import { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import OpenSource from './OpenSource';
import Certifications from './Certifications';
import Contact from './Contact';
import Footer from './Footer';
import CommandPalette from './CommandPalette';

export default function Home({ toggleTheme, theme }) {
  /* Scroll reveal observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    );

    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealEls.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Accessibility: skip to content */}
      <a className="skip-to-content" href="#home">
        Skip to content
      </a>

      {/* Noise overlay texture */}
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar toggleTheme={toggleTheme} theme={theme} />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <OpenSource />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <CommandPalette toggleTheme={toggleTheme} />
    </>
  );
}
