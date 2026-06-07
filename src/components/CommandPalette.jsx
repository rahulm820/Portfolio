import { useEffect, useState } from 'react';
import './commandpalette.css';

const actions = [
  { id: 'home', title: 'Go to Home', href: '#home' },
  { id: 'projects', title: 'Go to Projects', href: '#projects' },
  { id: 'contact', title: 'Contact', href: '#contact' },
  { id: 'resume', title: 'Download Resume', href: '/resume.pdf' },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    function onKey(e){
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setOpen(o => !o); }
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const results = actions.filter(a => a.title.toLowerCase().includes(query.toLowerCase()));

  return open ? (
    <div className="cp-overlay" role="dialog" aria-modal="true">
      <div className="cp-box">
        <input autoFocus placeholder="Type a command... (Ctrl/Cmd+K)" value={query} onChange={e=>setQuery(e.target.value)} />
        <ul className="cp-list">
          {results.map(r => (
            <li key={r.id}><a href={r.href} onClick={() => setOpen(false)}>{r.title}</a></li>
          ))}
        </ul>
      </div>
    </div>
  ) : null;
}
