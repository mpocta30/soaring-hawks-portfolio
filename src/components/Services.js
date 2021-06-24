import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Products from "./Products";

const Services = ({ heading, background, animation }) => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      allContentfulService {
        edges {
          node {
            slug
            title
            shortDescription {
              shortDescription
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
  `);

  return (
    <div>
      <Products
        background={background}
        products={data.allContentfulService.edges}
        name={heading}
        animation={animation}
      />
    </div>
  );
};

export default Services;
