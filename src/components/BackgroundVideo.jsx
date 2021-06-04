import React from "react";
import VideoBG from "../../content/assets/videos/header-bg-1080.mp4";

import "./BackgroundVideo.scss";

const BackgroundVideo = () => {
  return (
    <video className="bg-video" width="100%" height="100%" loop muted autoPlay>
      <source src={VideoBG} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
