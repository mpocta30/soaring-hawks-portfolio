import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import PhotoHero from "../components/PhotoHero";
import Contact from "../components/Contact";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

const ContactPage = () => {
  const { allContentfulComponentPage } = useStaticQuery(
    graphql`
      query {
        allContentfulComponentPage(filter: { title: { eq: "Contact Us" } }) {
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
                ... on ContentfulContactForm {
                  id
                  title
                  subTitle
                  pageName
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
  const contactForm = node.sections[2];

  return (
    <Layout>
      <Seo seo={seo} />
      <PhotoHero heading={photoHero.title} headerBg={photoHero.headerBg.file.url} />
      <Contact
        title={contactForm.title}
        subtitle={contactForm.subTitle}
        pageName={contactForm.pageName}
      />
    </Layout>
  );
};

export default ContactPage;

const ContactUsForm = styled(Contact)`
  margin-top: 80px;

  input {
    border: 1px solid #e5e6e9;
  }
`;
