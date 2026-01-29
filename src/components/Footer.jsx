import React from "react";
import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>Madhukar Vasamsetti</h2>
          
          <p>
            I'm a passionate developer creating modern web experiences. Let's
            connect and build something amazing together!
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:youremail@example.com">madhuvasamsetti@gmail.com</a></p>
          <div className="social-icons">
            <a href="https://github.com/MadhuVasamsetti" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/madhukar-vasamsetti-a43623330/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com/Madhu-Vasamsetti" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="mailto:madhukarvasamsetti@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
