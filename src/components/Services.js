import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Products from "./Products";

const Services = ({ background, animation }) => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      allContentfulService {
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
        products={data.allContentfulService.edges}
        name="services"
        animation={animation}
      />
    </div>
  );
};

export default Services;
