import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact"); // 👈 replace with your contact page route
  };

  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <div className="about-container">
        {/* Left side - text */}
        <div className="about-text">
          <h2 className="about-title">So, who am I?</h2>
          <p>
            I’m Madhukar Vasamsetti, a B.Tech student and web developer building clean,
            modern web apps using React, MongoDB, Spring Boot, and SQL.
          </p>
          <p>
            I'm a passionate frontend developer focused on building elegant and responsive
            user interfaces. I aim to blend performance with aesthetics, ensuring every
            interaction is smooth and intuitive.
          </p>
          <p>
            My expertise lies in the React ecosystem, and I love working with modern CSS
            frameworks like Tailwind to rapidly develop beautiful and accessible web
            experiences. I'm always exploring new techniques and tools to enhance my craft.
          </p>
          <button className="about-btn" onClick={goToContact}>
            Contact Me
          </button>
        </div>

        {/* Right side - image */}
        <div className="about-image">
          <img src="/profile.jpg" alt="Madhukar Vasamsetti" />
        </div>
      </div>
    </section>
  );
};

export default About;
