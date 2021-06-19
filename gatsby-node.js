// const path = require("path");
// const getBaseUrl = require("./src/utils/getBaseUrl");
// const { defaultLang, langTextMap = {} } = require("./config/site");

// /**
//  * add fileName to node for markdown files
//  */
// exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === "MarkdownRemark") {
//     const fileName = path.basename(node.fileAbsolutePath, ".md");
//     createNodeField({
//       node,
//       name: "fileName",
//       value: fileName,
//     });

//     createNodeField({
//       node,
//       name: "directoryName",
//       value: path.basename(path.dirname(node.fileAbsolutePath)),
//     });
//   }
// };

// /**
//  * define nullable items
//  */
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;
//   const typeDefs = [
//     "type MarkdownRemark implements Node { frontmatter: Frontmatter }",
//     `type Frontmatter {
//       anchor: String
//       jumpToAnchor: String
//       jumpToAnchorText: String
//       social: Social
//       services: [Service]
//       teamMember: [TeamMember]
//     }`,
//     `type TeamMember {
//       social: Social
//     }`,
//     `type Service {
//       iconName: String
//       imageFileName: String
//       header: String
//       content: String
//     }`,
//     `
//     type Social {
//       twitter: String
//       facebook: String
//       linkedin: String
//       medium: String
//       github: String
//     }
//     `,
//   ];

//   createTypes(typeDefs);
// };

// /**
//  * generate i18n top pages
//  */
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query ProjectsQuery {
      allContentfulProject {
        edges {
          node {
            slug
            title
            description {
              description
            }
            shortName
            images {
              title
              img {
                gatsbyImageData
                file {
                  url
                }
              }
              altText {
                altText
              }
            }
            hero {
              headerBg {
                file {
                  url
                }
              }
            }
            video {
              videoUrl
              title
            }
          }
        }
      }
    }
  `);

  data.allContentfulProject.edges.forEach((edge) => {
    const node = edge.node;
    actions.createPage({
      path: node.slug,
      component: require.resolve(`./src/templates/photo-gallery.js`),
      context: { project: node },
    });
  });
};
