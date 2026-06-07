import { timeline } from '../data/timeline';
import './about.css';

const tagColors = {
  Work: 'accent',
  Education: 'warning',
  Project: 'success',
  Certification: 'accent',
};

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          {/* Left — Narrative */}
          <div className="about-narrative reveal-left">
            <span className="section-label">// About</span>
            <h2 className="section-title">Who I Am</h2>

            <div className="about-content">
              <p className="about-hook">
                I'm a full-stack developer and Computer Engineering student who loves turning complex ideas 
                into elegant, working software — from multi-agent AI systems to voice-powered mobile apps.
              </p>
              <p>
                I started programming out of curiosity for how things work under the hood. That curiosity 
                quickly evolved into building real-world applications — from a football companion app with 
                live match data and AI chatbots, to an Android app that narrates the world for visually 
                impaired users using on-device machine learning.
              </p>
              <p>
                <strong>Currently focused on:</strong> multi-agent AI architectures (Google ADK + Gemini), 
                React Native mobile development, and building full-stack applications with real-time data 
                processing.
              </p>
              <p>
                <strong>My approach:</strong> I believe in shipping fast, iterating often, and choosing 
                the right tool for the job. Whether it's scraping the web with Python, building REST APIs 
                with Node.js, or designing voice-driven UX — I care about the end-user experience above all.
              </p>
              <p className="about-human">
                When I'm not coding, you'll find me solving problems on Leetcode, exploring new AI frameworks, 
                or following the latest football matches.
              </p>
            </div>
          </div>

          {/* Right — Timeline */}
          <div className="about-timeline reveal-right">
            <h3 className="timeline-title">My Journey</h3>
            <div className="timeline">
              {timeline.map((item, i) => (
                <div
                  className="timeline-item reveal"
                  key={item.id}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="timeline-marker">
                    <div className="timeline-dot" />
                    {i < timeline.length - 1 && <div className="timeline-line" />}
                  </div>
                  <div className="timeline-card">
                    <span className="timeline-date">{item.dateRange}</span>
                    <h4 className="timeline-role">{item.role}</h4>
                    <span className="timeline-org">{item.org}</span>
                    <p className="timeline-desc">{item.description}</p>
                    <span className={`badge ${tagColors[item.tag] || ''}`}>{item.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
