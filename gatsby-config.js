require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Soaring Hawk`,
    description: `The Soaring Hawk Drone Company is an aerial video and photography business, based out of
    Richmond, Virginia.  We specialize in beautiful custom videos and photographs for any commercial or 
    residential property as well as construction sites and other land surveys.  Look through some past projects
    and reach out with your project idea.`,
    url: process.env.SITE_URL,
    siteUrl: process.env.SITE_URL,
    image: "/images/soaring_hawk.png",
    author: "michaelpocta30@gmail.com",
  },
  pathPrefix: process.env.PATH_PREFIX,
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-YFPD9KQ2MQ", // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `soaring-hawk-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#263b46`,
        theme_color: `#263b46`,
        display: `minimal-ui`,
        icon: `src/assets/images/drone-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
};
