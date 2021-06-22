import React from "react";

import Layout from "../components/layout";
import styled from "styled-components";
import PhotoHero from "../components/PhotoHero";
import IconSection from "../components/IconSection";
import InformationSection from "../components/InformationSection";
import Seo from "../components/seo";
import Products from "../components/Products";
import { GatsbyImage } from "gatsby-plugin-image";
import { Button } from "../components/Button";

function getProjects(products, animation) {
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
        <ProductImg image={item.hero.headerBg.gatsbyImageData} alt={item.title} />
        <ProductInfo>
          <TextWrap>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductDescription>{item.shortDescription.shortDescription}</ProductDescription>
          </TextWrap>
          <Button to={item.slug} primary="true" css={`font-size=14px;`}>
            Learn More
          </Button>
        </ProductInfo>
      </ProductCard>,
    );
  });
  return productsArray;
}

const ServicePage = ({ pageContext }) => {
  const service = pageContext.service;
  const seo = service.sections[0];
  const infoSection = service.sections[1].columns[0];
  const serviceInfo = service.sections[2];
  const projects = serviceInfo.projects;

  return (
    <Layout>
      <Seo title={seo.title}></Seo>
      <PhotoHero heading={serviceInfo.title} headerBg={serviceInfo.hero.headerBg.file.url} />
      <InformationSection heading={infoSection.heading} text={infoSection.text.text} />
      <IconSection background="#efeff2" />
      <Products background="white" products={getProjects(projects, "")} name="projects" />
    </Layout>
  );
};

export default ServicePage;

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
