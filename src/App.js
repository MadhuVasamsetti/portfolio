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
    // Show preloader whenever location changes (including first load)
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200); // preloader duration
    return () => clearTimeout(timer);
  }, [location]);

  // Always render preloader first
  return loading ? <Preloader /> : children;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div
        className="app-wrapper"
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <NavBar />
        <div className="main-content" style={{ flex: 1 }}>
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
