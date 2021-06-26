import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import PhotoHero from "../components/PhotoHero";
import { useStaticQuery, graphql } from "gatsby";
import DoubleColumn, {
  ColumnImage,
  TextWrapper,
  ColumnContainer,
} from "../components/DoubleColumn";
import styled from "styled-components";
import { Button } from "../components/Button";

const services = () => {
  const { allContentfulComponentPage, allContentfulService } = useStaticQuery(
    graphql`
      query {
        allContentfulComponentPage(filter: { title: { eq: "Services" } }) {
          edges {
            node {
              slug
              sections {
                ... on ContentfulComponentSeo {
                  title
                  ogImage {
                    file {
                      url
                    }
                  }
                  description {
                    description
                  }
                  keywords
                }
                ... on ContentfulPhotoHero {
                  title
                  headerBg {
                    file {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        allContentfulService {
          edges {
            node {
              slug
              title
              description {
                description
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
    `,
  );
  const node = allContentfulComponentPage.edges[0].node;
  const seo = node.sections[0];
  const photoHero = node.sections[1];
  const services = allContentfulService.edges;

  const serviceInfo = (service) => {
    return (
      <TextWrapper>
        <h2>{service.node.title}</h2>
        <p>{service.node.description.description}</p>
        <ServiceButton to={service.node.slug} primary="true">
          Learn More
        </ServiceButton>
      </TextWrapper>
    );
  };

  const serviceImage = (service) => {
    return (
      <ColumnImage
        image={service.node.hero.headerBg.gatsbyImageData}
        alt={service.node.title + " Image"}
      />
    );
  };

  function setServices(services) {
    const sections = [];
    services.forEach((item, index) => {
      sections.push(
        <DoubleColumn
          background={index % 2 ? "#efeff2" : "white"}
          flipped={index % 2}
          columnOneContent={serviceInfo(item)}
          columnTwoContent={serviceImage(item)}
        />,
      );
    });
    return sections;
  }

  return (
    <Layout>
      <Seo seo={seo} />
      <PhotoHero heading="Services" headerBg={photoHero.headerBg.file.url} />
      {/* <Services heading="" /> */}
      {setServices(services)}
    </Layout>
  );
};

export default services;

const ServiceButton = styled(Button)`
  display: inline-block;
  font-size=14px;
`;
