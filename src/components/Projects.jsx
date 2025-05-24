import React from "react";

const Projects = () => (
  <section id="projects" className="projects-section" data-aos="fade-up">
    <h2>Projects</h2>
    <div className="projects-list">
      <div className="project-card" data-aos="flip-left">
        <h3>Stop Watch</h3>
        <p>
          This stopwatch was built using HTML for the structure, CSS for
          styling the interface, and JavaScript to handle the timing logic
          and user interactions like start, stop, and reset.
        </p>
      </div>
      <div className="project-card" data-aos="flip-left" data-aos-delay="200">
        <h3>Hospital Management System</h3>
        <p>
          A responsive and modular hospital management system built using
          React for frontend and Node.js with MongoDB for backend, enabling
          appointment booking, patient records, pharmacy management, and billing workflows.
        </p>
      </div>
      <div className="project-card" data-aos="flip-left" data-aos-delay="400">
        <h3>Content Management System</h3>
        <p>
          A full-stack CMS built with React, Express.js, and MongoDB that allows
          users to create, edit, manage, and publish dynamic web content with
          role-based access control and authentication.
        </p>
      </div>
    </div>
  </section>
);

export default Projects;
