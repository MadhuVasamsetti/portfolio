import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Certifications from "./components/Certifications";
import Preloader from "./components/Preloader";

// Wrapper to detect route changes
const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [location]);

  return loading ? <Preloader /> : children;
};

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check if there's a saved theme in localStorage and apply it
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Toggle between dark and light themes
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply the theme to the body element
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <ScrollToTop />
      <div className={`app-wrapper ${theme}`}>
        <NavBar toggleTheme={toggleTheme} currentTheme={theme} />
        <div className="main-content">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/certifications" element={<Certifications />} />
            </Routes>
          </PageWrapper>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
