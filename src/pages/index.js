import * as React from "react";
import Contact from "../components/Contact";
import VideoHero from "../components/VideoHero";

import Layout from "../components/layout";
import Services from "../components/Services";
import Seo from "../components/seo";
import Stats from "../components/Stats";
import InformationSection from "../components/InformationSection";
import { useStaticQuery, graphql } from "gatsby";

const IndexPage = () => {
  const { allContentfulComponentPage, allContentfulImageWithAiTags } = useStaticQuery(
    graphql`
      query {
        allContentfulComponentPage(filter: { title: { eq: "Index" } }) {
          edges {
            node {
              sections {
                ... on ContentfulVideoHero {
                  subHeading
                  heading
                  headerBg {
                    file {
                      url
                    }
                  }
                  buttonSlug
                  buttonText
                }
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
                ... on ContentfulComponentSection {
                  columns {
                    ... on ContentfulComponentText {
                      heading
                      text {
                        text
                      }
                    }
                  }
                }
                ... on ContentfulContactForm {
                  title
                  subTitle
                  pageName
                  background {
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
  const videoHeroNode = node.sections[0];
  const seo = node.sections[1];
  const infoSection = node.sections[2].columns[0];
  const contactForm = node.sections[3];

  return (
    <Layout>
      <Seo seo={seo} />
      <VideoHero
        videoBg={videoHeroNode.headerBg.file.url}
        heading={videoHeroNode.heading}
        subHeading={videoHeroNode.subHeading}
        buttonText={videoHeroNode.buttonText}
        buttonSlug={videoHeroNode.buttonSlug}
      />
      <InformationSection
        heading={infoSection.heading}
        text={infoSection.text.text}
        animation="slide-right"
      />
      <Services heading="services" background="#efeff2" animation="slide-right" />
      <Stats animation="slide-right" />
      <Contact
        title={contactForm.title}
        subtitle={contactForm.subTitle}
        pageName={contactForm.pageName}
        sectionBg={contactForm.background.file.url}
      />
    </Layout>
  );
};

export default IndexPage;
