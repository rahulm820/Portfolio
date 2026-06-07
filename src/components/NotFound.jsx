import { Link } from 'react-router-dom';
import './notfound.css';

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound-content">
        <span className="notfound-code">404</span>
        <h2 className="notfound-title">Page not found</h2>
        <p className="notfound-desc">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Return Home
        </Link>
      </div>
    </div>
  );
}
