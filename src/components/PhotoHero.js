import React from "react";
import styled from "styled-components";

const PhotoHero = ({ heading, headerBg }) => {
  return (
    <HeroContainer headerBg={headerBg}>
      <HeroContent>
        <HeroItems>
          <HeroH1>{heading}</HeroH1>
        </HeroItems>
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
    url(${(props) => props.headerBg}) no-repeat center;
  background-size: cover;
  height: 60vh;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

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

const HeroContent = styled.div`
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
