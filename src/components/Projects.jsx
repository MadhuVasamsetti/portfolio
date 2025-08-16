import React from "react";
import "../styles/Projects.css";

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="projects-title">Featured Projects</h2>

    <div className="projects-grid">
      <div className="project-card">
        <img src="/myportfolio.jpg" alt="3D Portfolio" className="project-image" />
        <h3 className="project-name">3D Portfolio</h3>
        <p className="project-desc">An immersive 3D portfolio website showcasing my work.</p>
      </div>

      <div className="project-card">
        <img src="/hms.jpg" alt="Hospital Management" className="project-image" />
        <h3 className="project-name">Hospital Management System</h3>
        <p className="project-desc">A full-stack hospital system with appointments, patients & billing.</p>
      </div>

      <div className="project-card">
        <img src="/lms.jpg" alt="CMS" className="project-image" />
        <h3 className="project-name">Content Management System</h3>
        <p className="project-desc">A CMS with authentication & role-based access.</p>
      </div>

      <div className="project-card">
        <img src="/stopwatch.jpg" alt="Stopwatch" className="project-image" />
        <h3 className="project-name">Stop Watch</h3>
        <p className="project-desc">A stylish stopwatch with start, stop & reset features.</p>
      </div>
    </div>
  </section>
);

export default Projects;
