import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Button } from "../components/Button";

function getProducts(products, animation) {
  const productsArray = [];
  products.forEach((item, index) => {
    productsArray.push(
      <ProductCard
        key={index}
        data-sal={animation}
        data-sal-duration="1000"
        data-sal-delay={(300 + 200 * index).toString()}
        data-sal-easing="ease"
        numColumns={products.length == 1 ? "max-width: 75%" : ""}
      >
        <a href={item.slug}>
          <ProductImg image={item.image} alt={item.title} />
        </a>
        <ProductInfo>
          <TextWrap>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductDescription>{item.description}</ProductDescription>
          </TextWrap>
          <ProductButton to={item.slug} primary="true">
            Learn More
          </ProductButton>
        </ProductInfo>
      </ProductCard>,
    );
  });
  return productsArray;
}

function createProductObj(products) {
  const productsArray = [];
  products.forEach((item, index) => {
    const productObj = {};
    productObj["image"] = item.node.hero.headerBg.gatsbyImageData;
    productObj["title"] = item.node.title;
    productObj["description"] = item.node.shortDescription.shortDescription;
    productObj["slug"] = item.node.slug;

    productsArray.push(productObj);
  });
  return productsArray;
}

const Products = ({ background, products, name, animation }) => {
  return (
    <div>
      <ProductsContainer id={name} background={background}>
        <ProductsHeading
          style={{ textTransform: "capitalize" }}
          data-sal={animation}
          data-sal-duration="1000"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          {name}
        </ProductsHeading>
        <ProductsWrapper numColumns={products.length >= 4 ? 4 : products.length % 4}>
          {getProducts(createProductObj(products), animation)}
        </ProductsWrapper>
      </ProductsContainer>
    </div>
  );
};

export default Products;

const ProductsContainer = styled.div`
  background-color: ${(props) => props.background};
  padding: 5rem calc((100vw - 1600px) / 2);
  color: black;
`;

const ProductsHeading = styled.div`
  font-size: clamp(1.5rem, 6vw, 2.5rem);
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #000;
`;

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.numColumns}, 1fr);
  grid-gap: 3rem;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 5rem;
  }

  @media screen and (max-width: 767px) {
    padding: 0;
  }
`;

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;

  @media screen and (min-width: 769px) {
    ${(props) => props.numColumns};
  }

  @media screen and (max-width: 768px) {
    padding-top: 1rem;
    text-align: center;
  }

  @media screen and (max-width: 400px) {
    min-height: 450px;
  }
`;

const ProductImg = styled(GatsbyImage)`
  height: 55%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(100%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(130%);
  }

  @media screen and (max-width: 768px) {
    max-width: 80%;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    display: block;
  }
`;

const TextWrap = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: clamp(1.2rem, 5vw, 2rem);
  margin: 0.5rem 3rem;
`;

const ProductDescription = styled.p`
  font-style: italic;
  margin: 0.5rem 0 1rem 0;
`;

const ProductButton = styled(Button)`
  display: inline-block;
  margin-top: 1rem;
  font-size=14px;
`;
