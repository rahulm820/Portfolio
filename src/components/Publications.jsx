import { publications } from '../data/publications';
import './publications.css';

export default function Publications() {
  return (
    <section id="publications" className="section publications">
      <div className="container">
        <span className="section-label">// Publications</span>
        <h2 className="section-title">Research</h2>
        <p className="section-subtitle">Peer-reviewed papers and conference publications.</p>

        <div className="pub-list">
          {publications.map((pub, i) => (
            <article
              className="pub-card"
              key={pub.id}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="pub-meta">
                <span className="pub-venue">{pub.venue}</span>
                <span className="pub-date">{pub.date}</span>
              </div>
              <h3 className="pub-title">{pub.title}</h3>
              <p className="pub-authors">
                {pub.authors.map((author, idx) => (
                  <span key={author} className={author === 'Rahul Madhawani' ? 'pub-self' : undefined}>
                    {author}{idx < pub.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
              <p className="pub-desc">{pub.description}</p>
              <div className="pub-footer">
                <div className="pub-tags">
                  {pub.tags.map(tag => (
                    <span className="pub-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn sm"
                  aria-label={`Read ${pub.title}`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Read
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
