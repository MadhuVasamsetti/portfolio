import React, { useEffect, useRef } from "react";
import AOS from "aos";

// Importing necessary styles
import "../styles/aos.css";
import "../styles/Home.css";
import "../styles/Profile.css";
import "../styles/Projects.css";
import "../styles/Journey.css"; // Ensure this is necessary if you're using the Journey component

import Certifications from "../components/Certifications";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Journey from "../components/Journey";
import Contact from "../components/Contact"; // Import the Contact component

const Home = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleShuffle = () => {
      if (skillsRef.current) { // Ensure skillsRef is not null before accessing it
        const cards = skillsRef.current.querySelectorAll(".skill-card");
        cards.forEach((card) => {
          card.classList.add("shuffle-animate");
          setTimeout(() => card.classList.remove("shuffle-animate"), 600);
        });
      }
    };
    

    if (skillsRef.current) {  // Check if the ref is not null before adding event listener
      const section = skillsRef.current;
      section.addEventListener("click", handleShuffle);
      return () => section.removeEventListener("click", handleShuffle);
    }
  }, []);
  

  return (
    <main className="home">
      <section id="home" className="hex-profile-wrapper" data-aos="fade-up">
        <div className="about-image">
          <img src="/profile.jpg" alt="Madhukar Vasamsetti" />
        </div>
        <h1 data-aos="fade-right">Hello, I'm Madhukar</h1>
        <h2 data-aos="fade-left">Full Stack Developer Using React</h2>
        <p className="intro" data-aos="fade-up">
          💻 I'm a passionate Full Stack Developer who vibes with React, Node.js, Express, and MongoDB. I love crafting clean, responsive, and interactive web applications — from sleek frontends to scalable backends, and I get a real kick out of integrating smooth functionality with modern UI/UX.
        </p>
        <p className="intro" data-aos="fade-up" data-aos-delay="200">
          🚀 Off the clock, you’ll find me experimenting with new stacks, building side projects to sharpen my skills, or diving into dev talks and tech trends to stay ahead of the curve.
        </p>
      </section>

      {/* Use the Journey component */}
      <Journey />

      {/* Use the Skills component */}
      <Skills />

      {/* Use the Certifications component */}
      <Certifications />

      {/* Use the Projects component */}
      <Projects /> {/* Adding Projects section */}

      {/* Use the Contact component */}
      <Contact /> {/* Replacing the old contact section with the Contact component */}
    </main>
  );
};

export default Home;
