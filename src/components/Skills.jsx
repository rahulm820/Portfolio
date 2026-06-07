import './skills.css';

const skills = [
  { name: 'JavaScript', size: 'large' },
  { name: 'React', size: 'large' },
  { name: 'Node.js', size: 'medium' },
  { name: 'AWS', size: 'medium' },
  { name: 'Docker', size: 'small' },
  { name: 'PostgreSQL', size: 'small' },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.name} className={`skill-card ${s.size}`}>
              <div className="skill-name">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
