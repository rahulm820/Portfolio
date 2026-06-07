
import Navbar from "./Navbar";
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import CommandPalette from './CommandPalette';

export default function Home({ toggleTheme, theme }) {
    return (
        <>
            <a id="top" href="#top" style={{position:'absolute',left:-9999,top:-9999}}>skip</a>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
            <CommandPalette />
        </>
    );
}
