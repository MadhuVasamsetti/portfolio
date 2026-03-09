import React, { useEffect, useRef } from "react";
import "../styles/Cursor.css";

const Cursor = () => {
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trails = trailRefs.current;

    // Create trailing dots (3 dots)
    const sizes = [14, 10, 6]; // Big to small
    for (let i = 0; i < sizes.length; i++) {
      const dot = document.createElement("div");
      dot.className = "trail-dot";
      dot.style.width = `${sizes[i]}px`;
      dot.style.height = `${sizes[i]}px`;
      document.body.appendChild(dot);
      trails.push(dot);
    }

    let mouseX = 0;
    let mouseY = 0;
    let trailX = Array(trails.length).fill(0);
    let trailY = Array(trails.length).fill(0);

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursor) cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animateTrail = () => {
      trails.forEach((dot, i) => {
        const speed = 0.1 + i * 0.05; // slower for smaller dots
        trailX[i] += (mouseX - trailX[i]) * speed;
        trailY[i] += (mouseY - trailY[i]) * speed;
        dot.style.transform = `translate3d(${trailX[i]}px, ${trailY[i]}px, 0)`;
        dot.style.opacity = `${1 - i / trails.length}`; // fades toward tail
      });
      requestAnimationFrame(animateTrail);
    };

    animateTrail();
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      trails.forEach((dot) => dot.remove());
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default Cursor;