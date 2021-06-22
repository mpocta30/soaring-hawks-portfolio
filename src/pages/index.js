import * as React from "react";
import Contact from "../components/Contact";
import VideoHero from "../components/VideoHero";

import Layout from "../components/layout";
import Services from "../components/Services";
import Seo from "../components/seo";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import ContactBg from "../assets/images/email.jpg";
import InformationSection from "../components/InformationSection";
import { useStaticQuery, graphql } from "gatsby";

const IndexPage = () => {
  const { allContentfulComponentPage } = useStaticQuery(
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
                }
                ... on ContentfulComponentSection {
                  columns {
                    heading
                    text {
                      text
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

  return (
    <Layout>
      <Seo title={seo.title} />
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
      <Services background="#efeff2" animation="slide-right" />
      <Stats animation="slide-right" />
      <Contact
        sectionBg={ContactBg}
        title="Get a Quote"
        subtitle="Inasfa reprehenderit in voluptate velit esse cillum reeut cupidatatfug nulla pariatur."
      />
    </Layout>
  );
};

export default IndexPage;
