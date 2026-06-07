import './projects.css';

const projects = [
  { title: 'Project Alpha', desc: 'Scalable API platform', tech: ['Node.js','Postgres'], github: '#' },
  { title: 'Project Beta', desc: 'Realtime analytics', tech: ['Python','Redis'], github: '#' },
  { title: 'Project Gamma', desc: 'CLI tooling', tech: ['Go'], github: '#' },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              <header>
                <h3>{p.title}</h3>
                <span className="status">Live</span>
              </header>
              <p>{p.desc}</p>
              <div className="tech">{p.tech.join(' • ')}</div>
              <div className="project-actions"><a href={p.github}>GitHub</a></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
