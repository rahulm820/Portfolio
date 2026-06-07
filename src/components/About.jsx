import './about.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-left">
          <h2>About Me</h2>
          <p>Hook: I'm a systems-minded engineer who cares about reliability and maintainability.</p>
          <p>Background: I started programming because I enjoyed solving puzzles and building tools to automate work.</p>
          <p>Current Focus: Distributed systems, cloud infrastructure, and scalable APIs.</p>
        </div>
        <div className="about-right">
          <h3>Timeline</h3>
          <ol className="timeline">
            <li><strong>2022–Present</strong> — Senior Engineer at Acme Corp</li>
            <li><strong>2019–2022</strong> — Backend Engineer at Example Inc.</li>
            <li><strong>2016–2019</strong> — B.S. in Computer Science</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
