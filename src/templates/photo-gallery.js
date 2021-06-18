import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Gallery from "@browniebroke/gatsby-image-gallery";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const PhotoGallery = ({ pageContext }) => {
  const project = pageContext.project;
  const data = useStaticQuery(graphql`
    query ImagesForGallery {
      allProjectsJson {
        edges {
          node {
            title
            images {
              alt
              img {
                childrenImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    }
  `);

  function getGallery(data, title) {
    console.log(title, data.allProjectsJson.edges);
    const reg = RegExp(title);
    const edges = data.allProjectsJson.edges.filter((project) => title == project.node.title);

    // const images = edges.map(({ node }) => node.img.childImageSharp);

    const GalleryImg = styled(GatsbyImage)`
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);

      &:hover {
        filter: blur(4px);
        transition: all ease 0.5s;
        cursor: pointer;
      }

      &:nth-child(6n + 3) {
        grid-column: span 1;
        grid-row: span 2;
      }

      &:nth-child(6n + 2),
      &:nth-child(6n + 5),
      &:nth-child(6n + 6) {
        grid-column: span 2;
        grid-row: span 2;
      }
    `

    const galleryArray = []
    edges[0].node.images.forEach((item, index) => {
      galleryArray.push(
        <GalleryImg
          key={index}
          image={item.img.childrenImageSharp[0].gatsbyImageData}
          alt={item.alt}
        />
      )
    })
    
    console.log(galleryArray);
    return galleryArray;
  }

  return (
    <Layout>
      <h1>{project.title}</h1>
      <p>{project.subtitle}</p>
      <GalleryContainer>
        {getGallery(data, project.title)}
      </GalleryContainer>
    </Layout>
  );
};

export default PhotoGallery;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 16vw;
  grid-gap: 0.5em;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1600px) / 2);
  margin: 0 2rem;
  color: white;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`