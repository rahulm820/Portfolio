import { useState } from 'react';
import { skills, skillCategories, proficiencyLevels } from '../data/skills';
import './skills.css';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? skills
    : skills.filter(s => s.category === activeFilter);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="section-label">// Skills</span>
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">Technologies I work with daily, organized by domain and proficiency.</p>

        {/* Filter tabs */}
        <div className="skill-filters" role="tablist" aria-label="Filter skills">
          {skillCategories.map(cat => (
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

        {/* Bento grid */}
        <div className="skills-grid">
          {filtered.map((skill, i) => (
            <div
              className={`skill-card`}
              key={skill.name}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="skill-card-inner">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-meta">
                  <span className="skill-category-tag">{skill.category}</span>
                  <div className="proficiency-dots" aria-label={`Proficiency: ${skill.proficiency}`}>
                    {[1, 2, 3, 4].map(level => (
                      <span
                        key={level}
                        className={`prof-dot${level <= proficiencyLevels[skill.proficiency] ? ' filled' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency legend */}
        <div className="proficiency-legend">
          {Object.entries(proficiencyLevels).map(([label, level]) => (
            <div className="legend-item" key={label}>
              <div className="legend-dots">
                {[1, 2, 3, 4].map(l => (
                  <span key={l} className={`prof-dot small${l <= level ? ' filled' : ''}`} />
                ))}
              </div>
              <span className="legend-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
