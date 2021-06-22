import React from "react";
import styled from "styled-components";

const InformationSection = ({ background, animation }) => {
  return (
    <InfoContainer
      background={background}
      data-sal={animation}
      data-sal-duration="2000"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <Heading>Aerial Photography and Video</Heading>
      <Body>
        Our professional drone services ensure the highest quality output for whatever project you
        have in mind. Aerial views help to increase visibility, separate your property from the rest
        of the pack. Contact us today to see how we can accomplish your mission together.
      </Body>
    </InfoContainer>
  );
};

export default InformationSection;

const InfoContainer = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.background};
  width: 100%;
  color: #000;
  padding: 5rem calc((100vw - 1600px) / 2);
  height: 100%;
`;

const Heading = styled.h2`
  font-size: clamp(1.2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 2rem;
`;

const Body = styled.p`
  margin: 0 10em;
  font-size: 20px;
  color: #3b3b3b;

  @media screen and (max-width: 768px) {
    margin: 0 4em;
  }
`;
