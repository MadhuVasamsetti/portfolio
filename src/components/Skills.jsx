import React, { useEffect, useRef } from "react";

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
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
  );
};

export default Skills;
