// Journey.jsx

import React from "react";
import "../styles/Journey.css";

const Journey = () => {
  return (
    <section id="journey" className="journey-section">

      <h2 className="journey-title" data-aos="fade-up">
        My Tech Journey
      </h2>

      <div className="timeline">

        {/* 2023 */}

        <div
          className="timeline-item"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <div className="timeline-tags">
              <span className="tag">⚙️ Logic</span>
              <span className="tag">🧠 Debugging</span>
            </div>

            <h3 className="year">2023</h3>

            <h4 className="role">Basics & Layouts</h4>

            <p className="stack">
              <strong>Stack:</strong> HTML, CSS, Bootstrap
            </p>

            <p className="description">
              Laid the foundation with static websites and responsive design principles.
            </p>

          </div>
        </div>

        {/* 2024 */}

        <div
          className="timeline-item"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <div className="timeline-tags">
              <span className="tag">🎨 UI/UX</span>
              <span className="tag">⚛️ React Magic</span>
            </div>

            <h3 className="year">2024</h3>

            <h4 className="role">Dynamic Interfaces</h4>

            <p className="stack">
              <strong>Stack:</strong> JavaScript, React.js
            </p>

            <p className="description">
              Developed dynamic front-end interfaces and reusable React components.
            </p>

          </div>
        </div>

        {/* 2025 */}

        <div
          className="timeline-item"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <div className="timeline-tags">
              <span className="tag">💡 Innovation</span>
              <span className="tag">🚀 Performance</span>
            </div>

            <h3 className="year">2025</h3>

            <h4 className="role">Full Stack Development</h4>

            <p className="stack">
              <strong>Stack:</strong> MongoDB, Express, React, Node.js
            </p>

            <p className="description">
              Building scalable full-stack applications using the MERN stack with modern UI.
            </p>

          </div>
        </div>

      </div>

    </section>
  );
};

export default Journey;