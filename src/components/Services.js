import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Products from "./Products";
import { GatsbyImage } from "gatsby-plugin-image";
import { Button } from "./Button";
import styled from "styled-components";

const Services = ({ background, animation }) => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      allContentfulService {
        edges {
          node {
            slug
            title
            shortDescription {
              shortDescription
            }
            hero {
              headerBg {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  function getServices(products, animation) {
    const productsArray = [];
    products.forEach((item, index) => {
      productsArray.push(
        <ProductCard
          key={index}
          data-sal={animation}
          data-sal-duration="2000"
          data-sal-delay={(300 + 200 * index).toString()}
          data-sal-easing="ease"
        >
          <ProductImg image={item.node.hero.headerBg.gatsbyImageData} alt={item.title} />
          <ProductInfo>
            <TextWrap>
              <ProductTitle>{item.node.title}</ProductTitle>
              <ProductDescription>{item.node.shortDescription.shortDescription}</ProductDescription>
            </TextWrap>
            <Button to={item.node.slug} primary="true" css={`font-size=14px;`}>
              Learn More
            </Button>
          </ProductInfo>
        </ProductCard>,
      );
    });
    return productsArray;
  }

  return (
    <div>
      <Products
        background={background}
        products={getServices(data.allContentfulService.edges, animation)}
        name="services"
        animation={animation}
      />
    </div>
  );
};

export default Services;

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 60%;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;

  @media screen and (max-width: 768px) {
    padding-top: 1rem;
  }
`;

const ProductImg = styled(GatsbyImage)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`;

const TextWrap = styled.div``;

const ProductTitle = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0.5rem 3rem;
`;

const ProductDescription = styled.p`
  font-style: italic;
  margin: 0.5rem 0 1rem 0;
`;
