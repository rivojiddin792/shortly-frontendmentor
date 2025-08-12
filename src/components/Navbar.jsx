import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

function Navbar() {
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
    </nav>
  );
}

export default Navbar;
