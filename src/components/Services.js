import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Products from "./Products";

function getServices(products) {
  const productsArray = [];
  products.forEach((item, index) => {
    const productObj = {};
    productObj["image"] = item.node.hero.headerBg.gatsbyImageData;
    productObj["title"] = item.node.title;
    productObj["description"] = item.node.shortDescription.shortDescription;
    productObj["slug"] = item.node.slug;

    productsArray.push(productObj);
  });
  return productsArray;
}

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
        products={getServices(data.allContentfulService.edges)}
        name={heading}
        animation={animation}
      />
    </div>
  );
};

export default Services;
