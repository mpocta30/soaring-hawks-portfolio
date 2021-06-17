import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Gallery from "@browniebroke/gatsby-image-gallery";

const PhotoGallery = ({ pageContext }) => {
  const project = pageContext.project;
  const data = useStaticQuery(graphql`
    query ImagesForGallery {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              thumb: gatsbyImageData(width: 270, height: 270, placeholder: BLURRED)
              full: gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  function getGallery(data, name) {
    console.log(name);
    const reg = RegExp(project.name);
    const edges = data.allFile.edges.filter((image) => reg.test(image.node.relativePath));
    const images = edges.map(({ node }) => node.childImageSharp);

    return <Gallery images={images} />;
  }

  return (
    <Layout>
      <h1>{project.title}</h1>
      <p>{project.subtitle}</p>
      {getGallery(data, project.name)}
    </Layout>
  );
};

export default PhotoGallery;
