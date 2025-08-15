import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img
            src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/logo.svg"
            alt="Shortly logo"
          />
        </Link>
      </div>

      <ul className="navbar__links">
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/resources">Resources</Link></li>
      </ul>

      <div className="navbar__auth">
        <a href="#" className="login">Login</a>
        <a href="#" className="signup">Sign Up</a>
      </div>

      {/* Hamburger icon */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile popup menu */}
      <div className={`navbar__menu-container ${menuOpen ? "open" : ""}`}>
        <ul className="navbar__menu-links">
          <li><Link to="/features" onClick={toggleMenu}>Features</Link></li>
          <li><Link to="/pricing" onClick={toggleMenu}>Pricing</Link></li>
          <li><Link to="/resources" onClick={toggleMenu}>Resources</Link></li>
        </ul>
        <div className="navbar__menu-auth">
          <a href="#" className="login" onClick={toggleMenu}>Login</a>
          <a href="#" className="signup" onClick={toggleMenu}>Sign Up</a>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </nav>
  );
}

export default Navbar;
