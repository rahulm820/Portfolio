import { useEffect, useState, useRef, useCallback } from 'react';
import './commandpalette.css';

const actions = [
  { id: 'home', title: 'Go to Home', href: '#home', icon: '🏠', category: 'Navigation' },
  { id: 'about', title: 'Go to About', href: '#about', icon: '👤', category: 'Navigation' },
  { id: 'skills', title: 'Go to Skills', href: '#skills', icon: '⚡', category: 'Navigation' },
  { id: 'projects', title: 'Go to Projects', href: '#projects', icon: '📂', category: 'Navigation' },
  { id: 'open-source', title: 'Go to Open Source', href: '#open-source', icon: '🌿', category: 'Navigation' },
  { id: 'certifications', title: 'Go to Certifications', href: '#certifications', icon: '🏆', category: 'Navigation' },
  { id: 'contact', title: 'Go to Contact', href: '#contact', icon: '✉️', category: 'Navigation' },
  { id: 'resume', title: 'Download Resume', href: '/Rahul Madhawani.pdf', icon: '📄', category: 'Actions', external: true },
  { id: 'theme', title: 'Toggle Theme', icon: '🌓', category: 'Actions', action: 'toggleTheme' },
  { id: 'github', title: 'Open GitHub', href: 'https://github.com/rahulm820', icon: '🔗', category: 'Social', external: true },
  { id: 'linkedin', title: 'Open LinkedIn', href: 'https://www.linkedin.com/in/rahul-madhawani-b87805259/', icon: '🔗', category: 'Social', external: true },
];

export default function CommandPalette({ toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Fuzzy search
  const results = actions.filter(a =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  // Keyboard open/close
  useEffect(() => {
    function onKey(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(o => !o);
        setQuery('');
        setSelectedIdx(0);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Focus input on open
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIdx(0);
  }, [query]);

  const executeAction = useCallback((action) => {
    if (action.action === 'toggleTheme' && toggleTheme) {
      toggleTheme();
    } else if (action.href) {
      if (action.external) {
        window.open(action.href, '_blank', 'noreferrer');
      } else {
        window.location.hash = action.href;
      }
    }
    setOpen(false);
    setQuery('');
  }, [toggleTheme]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIdx(i => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIdx(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIdx]) {
      e.preventDefault();
      executeAction(results[selectedIdx]);
    }
  };

  // Scroll selected into view
  useEffect(() => {
    if (listRef.current) {
      const selectedEl = listRef.current.children[selectedIdx];
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIdx]);

  if (!open) return null;

  // Group results by category
  const grouped = {};
  results.forEach(r => {
    if (!grouped[r.category]) grouped[r.category] = [];
    grouped[r.category].push(r);
  });

  let flatIdx = -1;

  return (
    <div className="cp-overlay" role="dialog" aria-modal="true" aria-label="Command palette" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
      <div className="cp-box" onKeyDown={handleKeyDown}>
        <div className="cp-search-wrap">
          <svg className="cp-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            ref={inputRef}
            className="cp-input"
            placeholder="Type a command..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Search commands"
          />
          <kbd className="cp-kbd">ESC</kbd>
        </div>

        <div className="cp-list" ref={listRef} role="listbox">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category}>
              <div className="cp-category">{category}</div>
              {items.map(item => {
                flatIdx++;
                const idx = flatIdx;
                return (
                  <button
                    key={item.id}
                    className={`cp-item${idx === selectedIdx ? ' selected' : ''}`}
                    onClick={() => executeAction(item)}
                    role="option"
                    aria-selected={idx === selectedIdx}
                    onMouseEnter={() => setSelectedIdx(idx)}
                  >
                    <span className="cp-item-icon">{item.icon}</span>
                    <span className="cp-item-title">{item.title}</span>
                    {item.action === 'toggleTheme' && <span className="cp-item-hint">Toggle</span>}
                    {item.external && <span className="cp-item-hint">↗</span>}
                  </button>
                );
              })}
            </div>
          ))}
          {results.length === 0 && (
            <div className="cp-empty">No results found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
