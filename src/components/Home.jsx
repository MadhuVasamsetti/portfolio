import React, { useEffect, useRef } from "react";
import AOS from "aos";

import "../styles/aos.css";
import "../styles/Home.css";
import "../styles/Profile.css";
import "../styles/Skills.css";
import "../styles/Projects.css";
import "../styles/Contact.css";
import "../styles/Journey.css";

const Home = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleShuffle = () => {
      const cards = skillsRef.current.querySelectorAll(".skill-card");
      cards.forEach((card) => {
        card.classList.add("shuffle-animate");
        setTimeout(() => card.classList.remove("shuffle-animate"), 600);
      });
    };

    const section = skillsRef.current;
    section.addEventListener("click", handleShuffle);
    return () => section.removeEventListener("click", handleShuffle);
  }, []);

  return (
    <main className="home">
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
        </p>
      </section>

      <section id="journey" className="journey-section" data-aos="fade-up">
        <h2 className="journey-title">My Tech Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-tags">
              <span className="tag logic">⚙️ Logic</span>
              <span className="tag debug">🧠 Debugging</span>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="year">2023</h3>
              <h4 className="role">Basics & Layouts</h4>
              <p className="stack"><strong>Stack:</strong> HTML, CSS, Bootstrap</p>
              <p className="description">
                Laid the foundation with static websites and responsive designs.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-tags">
              <span className="tag">🎨 UI/UX</span>
              <span className="tag">⚛️ React Magic</span>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="year">2024</h3>
              <h4 className="role">Dynamic Interfaces</h4>
              <p className="stack"><strong>Stack:</strong> JavaScript, React.js, Tailwind</p>
              <p className="description">
                Built interactive frontends and reusable components.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-tags">
              <span className="tag">💡 Innovation</span>
              <span className="tag">🚀 Performance</span>
              <span className="tag">🧠 Type Safety</span>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="year">2025</h3>
              <h4 className="role">Full-stack & Performance</h4>
              <p className="stack"><strong>Stack:</strong> Next.js, TypeScript, CI/CD</p>
              <p className="description">
                Creating scalable apps with SSR, typed APIs, and seamless deployment pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section" data-aos="fade-left" ref={skillsRef}>
        <h2 className="section-title">Technical Skills</h2>
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
      <section id="contact" className="contact-section" data-aos="fade-up">
        <h2>Contact :</h2>
        <p>
          If you'd like to get in touch, feel free to reach out through any of the following platforms:
        </p>
        <ul className="contact-details">
          <li><strong>Email:</strong> vasamsettimadhukar@gmail.com</li>
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
