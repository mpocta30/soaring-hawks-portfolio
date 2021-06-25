import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import PhotoHero from "../components/PhotoHero";
import Services from "../components/Services";
import { useStaticQuery, graphql } from "gatsby";

const services = () => {
  const { allContentfulComponentPage } = useStaticQuery(
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
      }
    `,
  );
  const node = allContentfulComponentPage.edges[0].node;
  const seo = node.sections[0];
  const photoHero = node.sections[1];

  return (
    <Layout>
      <Seo seo={seo} />
      <PhotoHero heading="Services" headerBg={photoHero.headerBg.file.url} />
      <Services heading="" />
    </Layout>
  );
};

export default services;
