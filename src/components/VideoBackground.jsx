import React from "react";
import "../styles/video.css";

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="video-bg"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay for readability */}
      <div className="video-overlay"></div>
    </div>
  );
};

export default VideoBackground;