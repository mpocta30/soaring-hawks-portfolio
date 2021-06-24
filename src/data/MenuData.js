import { useStaticQuery, graphql } from "gatsby";

function getServices() {
  const { allContentfulService } = useStaticQuery(
    graphql`
      query HeaderServicesQuery {
        allContentfulService {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `,
  );
  return allContentfulService.edges;
}

export const menuData = () => {
  return [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/services", children: getServices() },
    { title: "Contact", link: "/contact-us" },
  ];
};
