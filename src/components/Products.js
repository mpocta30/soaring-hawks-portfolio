import React from "react";
import styled from "styled-components";

const Products = ({ background, products, name, animation }) => {
  return (
    <div>
      <ProductsContainer id={name} background={background}>
        <ProductsHeading
          style={{ textTransform: "capitalize" }}
          data-sal={animation}
          data-sal-duration="2000"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          {name}
        </ProductsHeading>
        <ProductsWrapper>{products}</ProductsWrapper>
      </ProductsContainer>
    </div>
  );
};

export default Products;

const ProductsContainer = styled.div`
  background-color: ${(props) => props.background};
  min-height: 100vh;
  padding: 5rem calc((100vw - 1600px) / 2);
  color: black;
`;

const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 6vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
  color: #000;
`;

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
  }
`;
