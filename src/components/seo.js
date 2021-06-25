/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ title, description, lang, meta, seo }) {
  const { site, allContentfulComponentPhoto } = useStaticQuery(
    graphql`
      query seoQuery {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl: url
            defaultImage: image
            author
          }
        }
        allContentfulComponentPhoto(filter: { title: { eq: "OG Image" } }) {
          edges {
            node {
              img {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `,
  );

  const metaTitle = seo?.title || title || site.siteMetadata.title;
  const metaDescription =
    seo?.description.description || description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const defaultImage =
    seo?.ogImage.file.url || `${allContentfulComponentPhoto.edges[0].node.img.file.url}`;
  const defaultKeyWords = seo?.keywords || "";

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: defaultKeyWords,
        },
        {
          property: `og:image`,
          content: defaultImage,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: defaultImage,
        },
      ].concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default Seo;
