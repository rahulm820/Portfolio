import { useState } from 'react';
import { Smartphone, Network, Bot, Boxes, Globe, MessageSquareText, Cloud } from 'lucide-react';
import { skills, skillCategories } from '../data/skills';
import './skills.css';

const lucideMap = { Smartphone, Network, Bot, Boxes, Globe, MessageSquareText, Cloud };

function SkillIcon({ skill }) {
  if (skill.iconType === 'lucide') {
    const Icon = lucideMap[skill.icon];
    return Icon ? <Icon className="skill-logo skill-logo-lucide" strokeWidth={1.6} aria-hidden="true" /> : null;
  }
  const src = skill.iconType === 'simple'
    ? `https://cdn.simpleicons.org/${skill.icon}${skill.iconColor ? `/${skill.iconColor}` : ''}`
    : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}.svg`;
  return <img src={src} alt="" className="skill-logo" loading="lazy" width="40" height="40" />;
}

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

        {/* Icon grid */}
        <div className="skills-grid">
          {filtered.map((skill, i) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{ animationDelay: `${i * 45}ms` }}
              title={skill.name}
            >
              <div className="skill-icon-wrap">
                <SkillIcon skill={skill} />
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
