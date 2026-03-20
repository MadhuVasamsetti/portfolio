import React, { useState } from "react";
import "../styles/Projects.css";

const allProjects = [
  {
    img: "/myportfolio.jpg",
    title: "3D Portfolio",
    desc: "An immersive 3D portfolio website showcasing my work.",
    link: "https://madhuvasamsettiportfolio.vercel.app/",
    category: "Web"
  },
  {
    img: "/hms.jpg",
    title: "Hospital Management System",
    desc: "A full-stack hospital system with appointments, patients & billing.",
    category: "Fullstack"
  },
  {
    img: "/lms.jpg",
    title: "Learning Management System",
    desc: "A modern LMS with interactive courses, progress tracking & clean UI.",
    category: "Fullstack"
  },
  {
    img: "/stopwatch.jpg",
    title: "Stop Watch",
    desc: "A stylish stopwatch with start, stop & reset features.",
    link: "https://madhustopwatch.vercel.app/",
    category: "Mini"
  }
];

const categories = ["All", "Web", "Fullstack", "Mini"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title" data-aos="fade-up">✨ My Creative </h2>

      {/* Filter Buttons */}
      <div className="filter-bar" data-aos="fade-up" data-aos-delay="100">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="projects-grid">
        {filteredProjects.map((p, idx) => (
          <div
            key={idx}
            className="project-card"
            style={{ animationDelay: `${idx * 0.2}s` }}
            data-aos="fade-up"
          >
            <div className="card-content">
              <img src={p.img} alt={p.title} className="project-image" />
              <div className="card-info">
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">{p.desc}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-btn"
                  >
                    Visit Site
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
