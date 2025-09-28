import React from "react";
import { FaHtml5, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaTools, FaUsers } from "react-icons/fa";
import "../styles/Skills.css";

const skills = [
  {
    icon: <FaReact />,
    category: "Frontend",
    items: ["HTML5 / CSS3", "JavaScript (ES6+)", "React.js", "React Three Fiber"]
  },
  {
    icon: <FaNodeJs />,
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
  },
  {
    icon: <FaTools />,
    category: "Tools & Tech",
    items: ["Git & GitHub", "VS Code", "Postman", "Netlify / Render"]
  },
  {
    icon: <FaUsers />,
    category: "Soft Skills",
    items: ["Team Collaboration", "Problem Solving", "Project Planning", "Adaptability"]
  }
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-header">
        <h2 className="section-title">What I Know ?</h2>
        
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
