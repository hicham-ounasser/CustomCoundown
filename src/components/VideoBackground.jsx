import React from "react";
import timeVideo from "../assets/time.mp4";
function VideoBackground() {
  return (
    <div>
      <video className="video-background" loop muted autoPlay>
        <source src={timeVideo} type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
    </div>
  );
}

export default VideoBackground;
