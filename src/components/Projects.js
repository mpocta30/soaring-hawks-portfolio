import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Products from "./Products";

const Projects = ({ background, animation }) => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allContentfulProject {
        edges {
          node {
            slug
            title
            hero {
              headerBg {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div>
      <Products
        background={background}
        products={data.allContentfulProject.edges}
        name="projects"
        animation={animation}
      />
    </div>
  );
};

export default Projects;
