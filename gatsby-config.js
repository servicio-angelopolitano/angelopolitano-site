const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Servicio Angelopolitano | Reparación y mantenimiento de línea blanca.`,
    description: `Reparación y mantenimiento profesional de línea blanca, refrigeración y aire acondicionado.`,
    author: `@irvingdc`,
    siteUrl: `https://www.servicioangelopolitano.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.servicioangelopolitano.com",
        sitemap: "https://www.servicioangelopolitano.com/sitemap.xml",
        policy: /*process.env.GATSBY_ACTIVE_ENV === "QA"
            ? [{ userAgent: "*", disallow: ["/"] }]
            : */ [
          { userAgent: "*", allow: "/" },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        images: path.join(__dirname, "src/images"),
        components: path.join(__dirname, "src/components"),
        stylesheets: path.join(__dirname, "src/stylesheets"),
        utils: path.join(__dirname, "src/utils"),
      },
    },
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
      resolve: "gatsby-plugin-less",
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#8dbe40",
          "link-color": "#1890ff",
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-163577683-1",
        head: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`,
  ],
}
