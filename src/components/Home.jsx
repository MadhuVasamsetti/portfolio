import React, { useEffect, useRef } from "react";
import AOS from "aos";

import "../styles/aos.css";
import "../styles/Home.css";
import "../styles/Profile.css";
import "../styles/About.css";
import "../styles/Skills.css";
import "../styles/Projects.css";
import "../styles/Contact.css";

const Home = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Click handler for shuffle animation
    const handleShuffle = () => {
      const cards = skillsRef.current.querySelectorAll(".skill-card");
      cards.forEach((card, index) => {
        card.classList.add("shuffle-animate");
        // Remove class after animation duration
        setTimeout(() => card.classList.remove("shuffle-animate"), 600);
      });
    };

    const section = skillsRef.current;
    section.addEventListener("click", handleShuffle);

    return () => section.removeEventListener("click", handleShuffle);
  }, []);

  return (
    <main className="home">
      {/* Profile Section */}
      <section id="home" className="hex-profile-wrapper" data-aos="fade-up">
        <img
          src="/myphoto.jpg"
          alt="My Profile"
          className="profile-pic"
          data-aos="zoom-in"
        />
        <h1 data-aos="fade-right">Hello, I'm Madhukar</h1>
        <h2 data-aos="fade-left">Frontend Developer Using React</h2>
        <p className="intro" data-aos="fade-up">
          I'm a passionate frontend developer who vibes with <strong>React</strong>. I love
          building clean, responsive, and interactive user interfaces — especially
          when there's some slick 3D magic involved.
        </p>
        <p className="intro" data-aos="fade-up" data-aos-delay="200">
          Off the clock, you’ll find me exploring new frameworks, leveling up
          with side projects, or deep-diving into dev talks and tech trends.
          I’m always curious, always learning, and always creating.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="about-section" data-aos="fade-right">
        <h2>About Me</h2>
       <p>I’m Madhukar Vasamsetti, a B.Tech student and web developer building clean, modern web apps using React, Mongodb,Springboot,Sql.
</p>
        <p>
          I'm a passionate frontend developer focused on building elegant and responsive user interfaces. I aim to blend performance with aesthetics, ensuring every interaction is smooth and intuitive.
        </p>
        <p>
          My expertise lies in the React ecosystem, and I love working with modern CSS frameworks like Tailwind to rapidly develop beautiful and accessible web experiences. I'm always exploring new techniques and tools to enhance my craft.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section" data-aos="fade-left" ref={skillsRef}>
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          <div className="skill-card" data-aos="zoom-in" data-aos-delay="100">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5 / CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>React Three Fiber</li>
              
            </ul>
          </div>
          <div className="skill-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>NoSQL & REST APIs</li>
            </ul>
          </div>
          <div className="skill-card" data-aos="zoom-in" data-aos-delay="300">
            <h3>Tools & Tech</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Netlify / Render</li>
            </ul>
          </div>
          <div className="skill-card" data-aos="zoom-in" data-aos-delay="400">
            <h3>Soft Skills</h3>
            <ul>
              <li>Team Collaboration</li>
              <li>Problem Solving</li>
              <li>Project Planning</li>
              <li>Adaptability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Contact Section */}
      <section id="contact" className="contact-section" data-aos="fade-up">
        <h2>Contact :</h2>
        <p>
          If you'd like to get in touch, feel free to reach out through any of the following platforms:
        </p>
        <ul className="contact-details">
          <li><strong>Email:</strong> vasamsettimadhukar@gmail.com</li>
          <li><strong>Phone:</strong> +91-8688064797</li>
          <li><strong>Location:</strong> Andhra Pradesh, India</li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/MadhuVasamsetti" target="_blank" rel="noreferrer">
              github.com/MadhuVasamsetti
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/madhukar-vasamsetti-a43623330/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/madhu
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
