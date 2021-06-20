import * as React from "react";
import Contact from "../components/Contact";
import VideoHero from "../components/VideoHero";

import Layout from "../components/layout";
import Services from "../components/Services";
import Seo from "../components/seo";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import ContactBg from "../assets/images/email.jpg";
import Projects from "../components/Projects";
import { useStaticQuery, graphql } from "gatsby";

const IndexPage = () => {
  const { allContentfulVideoHero } = useStaticQuery(
    graphql`
      query {
        allContentfulVideoHero(filter: { title: { regex: "/Home Page/" } }) {
          edges {
            node {
              headerBg {
                file {
                  url
                }
              }
              buttonSlug
              buttonText
              heading
              subHeading
            }
          }
        }
      }
    `,
  );
  const node = allContentfulVideoHero.edges[0].node;

  return (
    <Layout>
      <Seo title="Aerial Photography and Video" />
      <VideoHero
        videoBg={node.headerBg.file.url}
        heading={node.heading}
        subHeading={node.subHeading}
        buttonText={node.buttonText}
        buttonSlug={node.buttonSlug}
      />
      <div>
        <Projects animation="slide-right" />
      </div>

      <Testimonials background="#efeff2" animation="slide-right" />
      <Stats animation="slide-right" />
      <Services background="#efeff2" animation="slide-right" />
      <Contact
        sectionBg={ContactBg}
        title="Get a Quote"
        subtitle="Inasfa reprehenderit in voluptate velit esse cillum reeut cupidatatfug nulla pariatur."
      />
    </Layout>
  );
};

export default IndexPage;
