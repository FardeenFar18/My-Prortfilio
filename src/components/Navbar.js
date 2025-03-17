import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span className={isMobileMenuOpen ? "open" : ""}></span>
          <span className={isMobileMenuOpen ? "open" : ""}></span>
          <span className={isMobileMenuOpen ? "open" : ""}></span>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
          {["Home", "About", "Projects", "Skills", "Resume", "Contact"].map((text, index) => {
            const path = text.toLowerCase();
            return (
              <li key={index} className={location.pathname === `/${path}` ? "active" : ""}>
                <Link to={`/${path === "home" ? "" : path}`}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
