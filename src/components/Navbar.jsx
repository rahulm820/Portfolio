import "./navbar.css";

export default function Navbar({ toggleTheme, theme }) {
  return (
    <div className="nav-bar">
      <div className="heading">
        Portfolio
      </div>

      <div className="list-items">
        <button>Home</button>
        <button>About Me</button>
        <button>Projects</button>
        <button>Skills</button>
        <button
          className="theme-toggle"
          aria-label="Toggle theme"
          onClick={() => typeof toggleTheme === 'function' && toggleTheme()}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </div>
  );
}
