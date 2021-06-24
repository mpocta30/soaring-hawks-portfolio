import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import PhotoHero from "../components/PhotoHero";
import DoubleColumn, { ColumnImage, TextWrapper } from "../components/DoubleColumn";
import Services from "../components/Services";
import Contact from "../components/Contact";
import { useStaticQuery, graphql } from "gatsby";

const companyInfo = (columnInfo) => {
  return (
    <TextWrapper>
      <h3>{columnInfo.heading}</h3>
      <p>{columnInfo.text.text}</p>
    </TextWrapper>
  );
};

const companyImage = (columnInfo) => {
  console.log(columnInfo.img.gatsbyImageData);
  return <ColumnImage image={columnInfo.img.gatsbyImageData} alt={columnInfo.altText.altText} />;
};

const about = () => {
  const { allContentfulComponentPage } = useStaticQuery(
    graphql`
      query {
        allContentfulComponentPage(filter: { title: { eq: "About Us" } }) {
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
                ... on ContentfulComponentSection {
                  columns {
                    ... on ContentfulComponentText {
                      heading
                      text {
                        text
                      }
                    }
                    ... on ContentfulComponentPhoto {
                      id
                      altText {
                        altText
                      }
                      img {
                        gatsbyImageData
                      }
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
  const companySection = node.sections[2];
  const contactForm = node.sections[3];

  return (
    <Layout>
      <Seo seo={seo} />
      <PhotoHero heading={photoHero.title} headerBg={photoHero.headerBg.file.url} />
      <DoubleColumn
        background="white"
        columnOneContent={companyInfo(companySection.columns[0])}
        columnTwoContent={companyImage(companySection.columns[1])}
      />
      <Services heading="Services" />
      <Contact
        title={contactForm.title}
        subtitle={contactForm.subTitle}
        pageName={contactForm.pageName}
      />
    </Layout>
  );
};

export default about;
