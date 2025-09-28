import React, { useEffect, useState } from "react";
import "../styles/Preloader.css";

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return oldProgress + 1;
      });
    }, 15); // speed of progress bar
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="preloader">
      <div className="preloader-inner">
        <h1 className="preloader-title">
          Madhu's <span>Portfolio</span>
        </h1>
        <div className="preloader-bar-container">
          <div
            className="preloader-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="preloader-text">{progress}%</p>
      </div>
    </div>
  );
};

export default Preloader;
