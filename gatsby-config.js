module.exports = {
  siteMetadata: {
    title: `CyberBrain`,
    description: `Cyberbrain is a development lab that builds innovative apps for writing.`,
    author: `@underlost`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require(`node-sass`),
        precision: 8,
        includePaths: [`${__dirname}/src/sass/site.scss`],
        sourceComments: true,
        sourceMap: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cyberbrain`,
        short_name: `cyberbrain`,
        start_url: `/`,
        background_color: `#F8F8F2`,
        theme_color: `#575558`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
