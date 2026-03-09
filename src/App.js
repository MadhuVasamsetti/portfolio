// App.jsx

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import VideoBackground from "./components/VideoBackground";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";

import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Cursor from "./components/Cursor"; // Custom cursor

/* =======================================
   PAGE WRAPPER (handles route changes)
======================================= */
const PageWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return children; // No preloader
};

/* =======================================
   MAIN APP
======================================= */
function App() {
  /* ===== INIT AOS ANIMATIONS ===== */
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />

      {/* ===== CUSTOM MOUSE CURSOR ===== */}
      <Cursor />

      <div className="app-wrapper">
        {/* ===== VIDEO BACKGROUND ===== */}
        <VideoBackground />

        {/* ===== NAVBAR ===== */}
        <NavBar />

        {/* ===== PAGE CONTENT ===== */}
        <div className="main-content">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageWrapper>
        </div>

        {/* ===== FOOTER ===== */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;