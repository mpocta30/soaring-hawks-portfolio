import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Button } from "./Button";
import { ImLocation } from "react-icons/im";

const Services = ({ background }) => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      allContentfulService {
        edges {
          node {
            slug
            title
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

  function getServices(data) {
    const servicesArray = [];
    data.allContentfulService.edges.forEach((item, index) => {
      servicesArray.push(
        <ProductCard key={index}>
          <ProductImg image={item.node.hero.headerBg.gatsbyImageData} alt={item.node.title} />
          <ProductInfo>
            <TextWrap>
              <ImLocation />
              <ProductTitle>{item.node.title}</ProductTitle>
            </TextWrap>
            <Button
              to={item.node.slug}
              primary="true"
              round="true"
              css={`position: absolute; top: 420px; font-size=14px;`}
            >
              View Service
            </Button>
          </ProductInfo>
        </ProductCard>,
      );
    });
    return servicesArray;
  }

  return (
    <div>
      <ProductsContainer id="services" background={background}>
        <ProductsHeading>Services</ProductsHeading>
        <ProductsWrapper>{getServices(data)}</ProductsWrapper>
      </ProductsContainer>
    </div>
  );
};

export default Services;

const ProductsContainer = styled.div`
  background-color: ${(props) => props.background};
  min-height: 100vh;
  padding: 5rem calc((100vw - 1600px) / 2);
  color: white;
`;

const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`;

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
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
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`;

const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`;
