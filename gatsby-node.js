const webpack = require("webpack");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
    resolve: {
      fallback: {
        fs: false,
        path: require.resolve("path-browserify"),
      },
    },
    plugins: [
      // fix "process is not defined" error:
      // (do "npm install process" before running the build)
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
    ],
  });
};

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
    query multiQuery {
      projects: allContentfulComponentPage(filter: { child: { eq: "Project" } }) {
        edges {
          node {
            title
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
              ... on ContentfulProject {
                slug
                title
                description {
                  description
                }
                shortName
                photoGallery {
                  photos {
                    gatsbyImageData(width: 1200)
                    title
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
              ... on ContentfulComponentSection {
                columns {
                  ... on ContentfulComponentText {
                    heading
                    text {
                      text
                    }
                  }
                }
              }
              ... on ContentfulPhotoHero {
                headerBg {
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      }
      services: allContentfulComponentPage(filter: { child: { eq: "Service" } }) {
        edges {
          node {
            title
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
              ... on ContentfulComponentSection {
                columns {
                  ... on ContentfulComponentText {
                    heading
                    text {
                      text
                    }
                  }
                }
              }
              ... on ContentfulService {
                title
                hero {
                  headerBg {
                    file {
                      url
                    }
                  }
                }
                projects {
                  hero {
                    headerBg {
                      gatsbyImageData(width: 2500)
                    }
                  }
                  title
                  slug
                  shortDescription {
                    shortDescription
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  // Projects
  data.projects.edges.forEach((edge) => {
    const projectNode = edge.node;
    actions.createPage({
      path: projectNode.slug,
      component: require.resolve(`./src/templates/project-page.js`),
      context: { project: projectNode },
    });
  });

  // Services
  data.services.edges.forEach((edge) => {
    const serviceNode = edge.node;
    actions.createPage({
      path: serviceNode.slug,
      component: require.resolve(`./src/templates/service-page.js`),
      context: { service: serviceNode },
    });
  });
};
