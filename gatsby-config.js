require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Patrick Sunico`,
    description: `Patrick Sunico Frontend Developer`,
    author: `Patrick Sunico`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,

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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://gentle-fortress-28010.herokuapp.com`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`experiences`, `portfolios`, `other-projects`],
        singleTypes: [`hero`, `about`],
      },
    },

    // {
    //   resolve: `gatsby-plugin-remote-images`,
    //   options: {
    //     nodeType: "allStrapiPortfolios.edges.node.CardCover.url", // Created Node type name
    //     imagePath: "url", // The image url name in test node type
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
