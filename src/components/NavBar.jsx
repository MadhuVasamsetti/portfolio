import React, { useState } from "react";
import "../styles/nav.css";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = ({ toggleTheme, currentTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="brand-name-container">
          <Link to="/" className="brand-name">Madhukar Vasamsetti</Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>

      <div className={`nav-center ${menuOpen ? "show" : ""}`}>
        <ul className="nav-links" onClick={closeMenu}>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/certifications">Certifications</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-icons">
          <a href="https://github.com/MadhuVasamsetti" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/madhukar-vasamsetti-a43623330/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/madhuuu._.08?igsh=MXhvNmFwcWtndm1hNg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>

        {/* Theme toggle button */}
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {currentTheme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>

        
       <div className="resume-button">
  <a href="/resume.pdf" className="resume-link" target="_blank" rel="noreferrer" download>
    <FiDownload style={{ marginRight: "6px", verticalAlign: "middle" }} />
    Resume
  </a>
</div>



        
      </div>
    </nav>
  );
};

export default NavBar;
