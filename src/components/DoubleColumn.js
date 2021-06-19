import React from "react";
import styled from "styled-components";

const DoubleColumn = ({ background, columnOneContent, columnTwoContent }) => {
  return (
    <ContentWrapper background={background}>
      <ColumnContainer>{columnOneContent}</ColumnContainer>
      <ColumnContainer>{columnTwoContent}</ColumnContainer>
    </ContentWrapper>
  );
};

export default DoubleColumn;

const ContentWrapper = styled.div`
  background-color: ${(props) => props.background};
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

export const TextWrapper = styled.div`
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

export const ColumnImage = styled.img`
  display: flex;
  border-radius: 10px;
  width: 100%;
  max-width: 350px;
  height: auto;
`;
