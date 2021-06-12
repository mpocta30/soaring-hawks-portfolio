import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const DoubleColumn = ({ heading, subheading, image, alt }) => {
  return (
    <ContentWrapper>
      <ColumnContainer>
        <TextWrapper>
          <h3>{heading}</h3>
          <p>{subheading}</p>
        </TextWrapper>
      </ColumnContainer>
      <ColumnContainer>
        <ColumnImage src={image} alt={alt} />
      </ColumnContainer>
    </ContentWrapper>
  );
};

export default DoubleColumn;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnContainer = styled.div`
  margin: 2rem;
  position: relative;
  padding-top: 1rem;
  padding-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
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

const ColumnImage = styled.img`
  display: flex;
  border-radius: 10px;
  width: 100%;
  max-width: 350px;
  height: auto;
`;
