module.exports = {
  siteMetadata: {
    title: `Soaring Hawk`,
    description: `The Soaring Hawk Drone Company is an aerial video and photography business, based out of
    Richmond, Virginia.  We specialize in beautiful custom videos and photographs for any commercial or 
    residential property as well as construction sites and other land surveys.  Look through some past projects
    and reach out with your project idea.`,
    url: "https://mpocta30.github.io/soaring-hawks-portfolio",
    image: "/images/real-estate.jpg",
    author: "michaelpocta30@gmail.com",
  },
  pathPrefix: "/soaring-hawks-portfolio",
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "ozl916uy4jos",
        accessToken: "oOgH7wNA2gZDl8_ee64HEYqCQHnH3Ec29MBs61EQ9DU",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/assets/videos`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
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
