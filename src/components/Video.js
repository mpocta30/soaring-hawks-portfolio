import React from "react";
import styled from "styled-components";

const Video = ({ videoSrcURL, videoTitle }) => (
  <StyledVideo>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      width="560"
      height="315"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </StyledVideo>
);

export default Video;

const StyledVideo = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  z-index: 10;

  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
