import { contributions } from '../data/contributions';
import './opensource.css';

export default function OpenSource() {
  return (
    <section id="open-source" className="section open-source">
      <div className="container">
        <span className="section-label">// Open Source</span>
        <h2 className="section-title">Open Source Contributions</h2>
        <p className="section-subtitle">Pull requests merged into projects I don't own — giving back to the tools I build with.</p>

        <div className="oss-list">
          {contributions.map((c, i) => (
            <article
              key={c.id}
              className="oss-card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="oss-card-accent" aria-hidden="true" />

              <header className="oss-header">
                <a href={c.prUrl} target="_blank" rel="noreferrer" className="oss-repo" aria-label={`${c.repo} repository`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  {c.repo}
                </a>
                <span className="badge badge-merged">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>
                  {c.status}
                  {c.pr && <span className="oss-pr-num">#{c.pr}</span>}
                </span>
              </header>

              {c.repoDescription && (
                <p className="oss-repo-desc">{c.repoDescription}</p>
              )}

              <h3 className="oss-title">{c.title}</h3>
              <p className="oss-desc">{c.description}</p>

              <div className="oss-tech">
                {c.tech.map(t => (
                  <span className="tech-chip" key={t}>{t}</span>
                ))}
              </div>

              <div className="oss-actions">
                <a href={c.prUrl} target="_blank" rel="noreferrer" className="project-link" aria-label={`View pull request ${c.pr} on GitHub`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  View Pull Request
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
