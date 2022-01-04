import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const DoubleColumn = ({ background, flipped, columnOneContent, columnTwoContent }) => {
  return flipped ? (
    <ContentWrapper background={background}>
      <FlippedColumnOneContainer>{columnOneContent}</FlippedColumnOneContainer>
      <ColumnContainer>{columnTwoContent}</ColumnContainer>
    </ContentWrapper>
  ) : (
    <ContentWrapper background={background}>
      <ColumnOneContainer>{columnOneContent}</ColumnOneContainer>
      <ColumnContainer>{columnTwoContent}</ColumnContainer>
    </ContentWrapper>
  );
};

export default DoubleColumn;

const ContentWrapper = styled.div`
  background-color: ${(props) => props.background};
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5rem 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnContainer = styled.div`
  margin: 2rem 4rem;
  position: relative;
  padding-top: 1rem;
  padding-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 0;
    margin: 2rem 0rem;
  }
`;

const ColumnOneContainer = styled(ColumnContainer)`
  @media screen and (max-width: 768px) {
    order: 2;
  }
`;

const FlippedColumnOneContainer = styled(ColumnContainer)`
  order: 2;
`;

export const TextWrapper = styled.div`
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 2rem);
  }

  p {
    color: #3b3b3b;
    margin-bottom: 2rem;
    font-size: clamp(1rem, 1.5vw, 1.5rem);
  }
`;

export const ColumnImage = styled(GatsbyImage)`
  display: flex;
  border-radius: 10px;
  width: 100%;
  max-width: 550px;
  height: auto;
`;

export const ColumnImageVertical = styled(GatsbyImage)`
  display: flex;
  border-radius: 10px;
  height: 100%;
  max-height: 550px;
  width: auto;
`;
