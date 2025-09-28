import React from "react";

// Importing icon libraries (for visual enhancement)
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Correct import for GitHub, LinkedIn, and Email icons

// Importing CSS for the contact component
import "../styles/Contact.css"; // Ensure this path is correct

const Contact = () => (
  <section id="contact" className="contact-section" data-aos="fade-up">
    <h2 className="contact-title">Let's Connect</h2>
    <p className="contact-intro">
      I'd love to hear from you! Feel free to reach out to me through any of the following platforms:
    </p>

    <ul className="contact-details">
      <li className="contact-item">
        <FaEnvelope className="contact-icon" />
        <strong>Email:</strong>{" "}
        <a href="mailto:vasamsettimadhukar@gmail.com" className="contact-link">
          vasamsettimadhukar@gmail.com
        </a>
      </li>

      <li className="contact-item">
        <span role="img" aria-label="Location">📍</span> <strong>Location:</strong> Andhra Pradesh, India
      </li>

      <li className="contact-item">
        <FaGithub className="contact-icon" />
        <strong>GitHub:</strong>{" "}
        <a
          href="https://github.com/MadhuVasamsetti"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          github.com/MadhuVasamsetti
        </a>
      </li>

      <li className="contact-item">
        <FaLinkedin className="contact-icon" />
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/madhukar-vasamsetti-a43623330/"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          linkedin.com/madhu
        </a>
      </li>
    </ul>
  </section>
);

export default Contact;
