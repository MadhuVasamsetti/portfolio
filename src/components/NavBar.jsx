import React, { useState } from "react";
import "../styles/nav.css";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Brand + Hamburger */}
      <div className="nav-left">
        <div className="brand-name">
          <span role="img" aria-label="smile">😉</span>
          <span className="first-name">Madhukar</span>
          <span className="last-name">Vasamsetti</span>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>

      {/* Center Section */}
      <div className={`nav-center ${menuOpen ? "show" : ""}`}>
        <ul className="nav-links" onClick={closeMenu}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="nav-icons">
          <a href="https://github.com/MadhuVasamsetti" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/madhukar-vasamsetti-a43623330/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
        <div className="resume-button">
          <a href="/Madhu_Resume.pdf" className="resume-link" target="_blank" rel="noreferrer" download>
            <FiDownload style={{ marginRight: "6px", verticalAlign: "middle" }} />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
