import React from "react";
import styled from "styled-components";
import EmailBg from "../assets/images/email.jpg";

const PhotoHero = ({ heading }) => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroH1>{heading}</HeroH1>
      </HeroContent>
    </HeroContainer>
  );
};

export default PhotoHero;

const HeroContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${EmailBg}) no-repeat center;
  background-size: cover;
  height: 60vh;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  height: calc(60vh - 80px);
  max-height: 100%;
`;

const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
`;
