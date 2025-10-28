import React, { useEffect } from "react";
import "../styles/certifications.css";

const Certifications = () => {
  const certs = [
    {
      id: 1,
      name: "Microsoft Azure Fundamentals",
      meta: "Issued by Microsoft",
      image: "/Azure.png",
      link: "/Azure.png",
    },
    {
      id: 2,
      name: "Six Sigma Certification",
      meta: "Issued by Six Sigma Institute",
      image: "/sixsigma.png",
      link: "/sixsigma.png",
    },
    {
      id: 3,
      name: "Scrum Fundamentals Certification",
      meta: "Issued by Scrum Institute",
      image: "/scrumfundamentals.jpg",
      link: "/scrumfundamentals.jpg",
    },
    {
      id: 4,
      name: "Python Basic Certification",
      meta: "Issued by HackerRank",
      image: "/pythonbasic.png",
      link: "/pythonbasic.png",
    },
    {
      id: 5,
      name: "Web Application Technologies and Django",
      meta: "Issued by Coursera",
      image: "/Coursera.png",  // Image path for the Coursera certification
      link: "/Coursera.png",   // Link to the certificate, can be a PDF or direct link
    },
    {
    id: 6,
    name: "Oracle Certified Foundations Associate",
    meta: "Issued by Oracle University",
    image: "/oracle.jpg",  // Image path for Oracle certification
    link: "/oracle.jpg",  // Link to the certificate image
  }
  ];

  // Scroll-triggered fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".cert-card").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="certs-section">
      <div className="certs-container">
        <h2 className="certs-title">Certifications</h2>
        <div className="certs-grid">
          {certs.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="card-border"></div>
              <div className="cert-image-wrap">
                <img src={cert.image} alt={cert.name} className="cert-image" />
              </div>
              <div className="cert-body">
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-meta">{cert.meta}</p>
                <div className="cert-actions">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn view-btn"
                  >
                    View
                  </a>
                  <a href={cert.link} download className="btn download-btn">
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
