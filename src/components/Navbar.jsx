import { NavLink } from 'react-router-dom'

function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="main-header">
      <div className="container header-flex">

        <div className="logo-area">
           <img
              src="/logo.jpg"
              alt="Logo CSE"
              className="navbar-logo"
           />

  <div>
    <h1 style={{ color: '#2e7d32' }}>
      Club Science et Environnement
    </h1>
    <p>CSE</p>
  </div>
</div>

       <div className="nav-right">
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                Présentation
              </NavLink>
            </li>
            <li>
              <NavLink to="/membres" className={({ isActive }) => isActive ? 'active' : ''}>
                Membres
              </NavLink>
            </li>
            <li>
              <NavLink to="/evenements" className={({ isActive }) => isActive ? 'active' : ''}>
                Événements
              </NavLink>
            </li>
            <li>
              <NavLink to="/adhesion" className={({ isActive }) => isActive ? 'active' : ''}>
                Adhésion
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
          {darkMode ? "☀️" : "🌙"}
          </button>
       </div>
      </div>
    </header>
  )
}

export default Navbar
