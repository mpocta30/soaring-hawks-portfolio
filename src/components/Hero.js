import React from "react";
import styled from "styled-components";
import Video from "../assets/videos/drone-bg.mp4";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroConetent>
        <HeroItems>
          <HeroH1>Soaring Hawk</HeroH1>
          <HeroP>Aerial Photography and Video</HeroP>
          <HeroButton to="services" smooth={true} spy={true} offset={-80} duration={1000}>
            Learn More
          </HeroButton>
          {/* <Button big="true" to="/#services">
            Learn More
          </Button> */}
        </HeroItems>
      </HeroConetent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: white;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

const HeroConetent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: white;
  line-height: 1.1;
  font-weight: bold;
`;

const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`;

const HeroP = styled.p`
  font-size: clamp(1rem, 2vw, 2rem);
  margin-bottom: 2rem;
  font-weight: 400;
`;

const HeroButton = styled(Link)`
  position: relative;
  overflow: hidden;
  background: none;
  border: 2px solid #ffffff;
  border-radius: 0rem;
  color: #ffffff;
  padding: clamp(8px, 3vw, 16px) clamp(32px, 3vw, 40px);
  font-size: clamp(12px, 3vw, 20px);
  /* min-width: 100px; */
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.08s ease-in;
  -o-transition: 0.08s ease-in;
  -ms-transition: 0.08s ease-in;
  -moz-transition: 0.08s ease-in;
  -webkit-transition: 0.08s ease-in;

  &:hover {
    color: #263b46;
  }

  &:before {
    content: "";
    position: absolute;
    background: #ffffff;
    top: 0;
    left: 0;
    right: 0;
    bottom: 100%;
    z-index: -1;
    -webkit-transition: bottom 0.25s ease-in;
  }

  &:hover:before {
    bottom: 0;
  }
`;
