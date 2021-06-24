import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import DoubleColumn from "./DoubleColumn";
import { FaCamera, FaVideo } from "react-icons/fa";

const sectionInfo = (heading, description, icon) => {
  return (
    <ContentWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <h3>{heading}</h3>
      <p>{description}</p>
    </ContentWrapper>
  );
};

const IconSection = ({ background }) => {
  const { allContentfulComponentSection } = useStaticQuery(
    graphql`
      query {
        allContentfulComponentSection(filter: { heading: { eq: "Camera & Video Icon" } }) {
          edges {
            node {
              heading
              columns {
                ... on ContentfulComponentText {
                  text {
                    text
                  }
                  heading
                }
              }
            }
          }
        }
      }
    `,
  );
  const node = allContentfulComponentSection.edges[0].node;
  const camera = node.columns[0];
  const video = node.columns[1];

  return (
    <DoubleColumn
      background={background}
      columnOneContent={sectionInfo(camera.heading, camera.text.text, <FaCamera />)}
      columnTwoContent={sectionInfo(video.heading, video.text.text, <FaVideo />)}
    />
  );
};

export default IconSection;

const ContentWrapper = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
  }
`;

const IconWrapper = styled.div`
  background-color: #263b46;
  position: relative;
  border: none;
  margin: auto;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  border-radius: 50%;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: clamp(3.5rem, 6vw, 6rem);
  width: clamp(3.5rem, 6vw, 6rem);
  height: clamp(3.5rem, 6vw, 5rem);
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  > svg {
    position: absolute;
    margin: 0;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;
