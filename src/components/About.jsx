import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container floating">
        {/* Left side - image */}
        <div className="about-image">
          <img src="/profile.jpg" alt="Madhukar Vasamsetti" />
        </div>

        {/* Right side - text */}
        <div className="about-text">
          <h2 className="about-title">So, who am I?</h2>
          <p>
            I’m Madhukar Vasamsetti, a B.Tech student and full stack web developer passionate about building clean, modern web applications using React, Node.js, MongoDB, Spring Boot, and SQL.
          </p>
          <p>
            I specialize in crafting responsive and intuitive user interfaces while also designing scalable and efficient backends. My goal is to blend performance with aesthetics, ensuring seamless experiences across the stack.
          </p>
          <p>
            My expertise spans the React ecosystem, RESTful APIs, and database design, and I enjoy working with modern tools like Tailwind CSS to rapidly develop beautiful and accessible web solutions. I’m always exploring new technologies and frameworks to elevate my craft and deliver impactful projects.
          </p>
          <button className="about-btn" onClick={goToContact}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;