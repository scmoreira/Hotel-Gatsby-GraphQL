require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Gatsby Hotel`,
    description: `Web created with Gatsby and GraphQL.`,
    author: `SCM`,
    lang: `en`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Hotel`,
        short_name: `GH`,
        description: `Web created with Gatsby and GraphQL.`,
        lang: `en`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`,
        background_color: `#663399`,
        theme_color: `#663399`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATOCMS_API_KEY,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
