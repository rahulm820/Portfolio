import { useState } from 'react';
import { certifications, certCategories } from '../data/certifications';
import './certifications.css';

export default function Certifications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = certifications.filter(cert => {
    const matchesCategory = activeFilter === 'All' || cert.category === activeFilter;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase())
      || cert.org.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <span className="section-label">// Certifications</span>
        <h2 className="section-title">Credentials</h2>
        <p className="section-subtitle">Validated skills from industry-recognized platforms.</p>

        {/* Search & filter */}
        <div className="cert-controls">
          <div className="cert-search-wrap">
            <svg className="cert-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              className="cert-search"
              type="text"
              placeholder="Search certifications..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              aria-label="Search certifications"
            />
          </div>
          <div className="cert-filters">
            {certCategories.map(cat => (
              <button
                key={cat}
                className={`skill-filter-btn${activeFilter === cat ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="cert-grid">
          {filtered.map((cert, i) => (
            <div
              className="cert-card"
              key={cert.id}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="cert-org-logo" style={{ background: cert.orgColor + '18', color: cert.orgColor }}>
                {cert.orgInitials}
              </div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-org-name">{cert.org}</span>
                <span className="cert-date">{cert.date}</span>
                <span className="cert-id">{cert.credentialId}</span>
              </div>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="btn sm"
                aria-label={`Verify ${cert.title}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Verify
              </a>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="cert-empty">
              No certifications match your search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
