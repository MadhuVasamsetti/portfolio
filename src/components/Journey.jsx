// Journey.jsx
import React from "react";
import "../styles/Journey.css"; // Assuming you have separate styles for this component

const Journey = () => {
  return (
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
  );
};

export default Journey;
