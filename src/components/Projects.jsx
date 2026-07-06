import { useState } from 'react';
import { projects, projectCategories } from '../data/projects';
import './projects.css';

const statusStyle = {
  Live: 'success',
  WIP: 'warning',
  Archived: '',
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="section-label">// Projects</span>
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle">A selection of projects I've built — from scalable APIs to full-stack applications.</p>

        {/* Filter */}
        <div className="project-filters" role="tablist" aria-label="Filter projects">
          {projectCategories.map(cat => (
            <button
              key={cat}
              className={`skill-filter-btn${activeFilter === cat ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat)}
              role="tab"
              aria-selected={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((project, i) => (
            <article
              key={project.id}
              className={`project-card${project.featured ? ' featured' : ''}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Colored top accent */}
              <div className="project-card-accent" aria-hidden="true" />

              <header className="project-header">
                <div className="project-title-row">
                  <h3 className="project-name">{project.title}</h3>
                  <div className="project-badges">
                    {project.hackathon && (
                      <span className="badge badge-hackathon">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                        Hackathon
                      </span>
                    )}
                    {project.status && (
                      <span className={`badge ${statusStyle[project.status] || ''}`}>
                        {project.status === 'Live' && <span className="pulse-dot" />}
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>
              </header>

              <p className="project-desc">{project.description}</p>

              {project.metrics && (
                <div className="project-metric">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  {project.metrics}
                </div>
              )}

              <div className="project-tech">
                {project.tech.map(t => (
                  <span className="tech-chip" key={t}>{t}</span>
                ))}
              </div>

              <div className="project-actions">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link" aria-label={`${project.title} on GitHub`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-link" aria-label={`${project.title} live demo`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
