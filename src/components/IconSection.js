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

const IconSection = () => {
  const { allContentfulIconSection } = useStaticQuery(
    graphql`
      query {
        allContentfulIconSection {
          edges {
            node {
              columnOneHeading
              columnOneDescription {
                columnOneDescription
              }
              columnTwoHeading
              columnTwoDescription {
                columnTwoDescription
              }
            }
          }
        }
      }
    `,
  );
  const node = allContentfulIconSection.edges[0].node;

  return (
    <DoubleColumn
      background="white"
      columnOneContent={sectionInfo(
        node.columnOneHeading,
        node.columnOneDescription.columnOneDescription,
        <FaCamera />,
      )}
      columnTwoContent={sectionInfo(
        node.columnTwoHeading,
        node.columnTwoDescription.columnTwoDescription,
        <FaVideo />,
      )}
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
  font-size: 40px;
  line-height: 75px;
  width: 75px;
  height: 75px;
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
