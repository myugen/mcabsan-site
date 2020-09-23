/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// Initialize dotenv
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
  debug: process.env.NODE_ENV === "development",
})

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Miguel Cabrera",
        short_name: "mcabsan",
        start_url: "/",
        background_color: "#0f0f0f",
        theme_color: "#0f0f0f",
        display: "standalone",
        icon: "static/favicon.png",
        crossOrigin: "anonymous",
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: process.env.GATSBY_DATO_API_KEY,

        // The project environment to read from. Defaults to the primary environment:
        environment: "main",

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,

        // Custom API base URL (most don't need this)
        // apiUrl: 'https://site-api.datocms.com',

        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        localeFallbacks: {
          es: ["en"],
        },
      },
    },
    {
      resolve: "gatsby-alias-imports",
      options: {
        pages: "src/pages",
        components: "src/components",
        hooks: "src/hooks",
        assets: "src/assets",
      },
    },
  ],
  siteMetadata: {
    title: "<MiguelCabrera />",
    menuLinks: [
      {
        name: "Posts",
        path: "/posts",
      },
      {
        name: "About",
        path: "/about",
      },
    ],
    author: "Miguel Cabrera",
    location: "Canary Islands",
    description: "A space where organize Miguel's ideas",
    siteUrl: "https://mcabsan.dev",
    image: "/images/logo.jpg",
    social: {
      twitter: {
        user: "@mcabsan",
        url: "https://twitter.com/mcabsan",
      },
      github: {
        user: "Myugen",
        url: "https://github.com/Myugen",
      },
      linkedin: {
        user: "Miguel Ignacio Cabrera San Gil",
        url: "https://linkedin.com/in/miguel-cabrera-san-gil",
      },
    },
    googleFonts: ["Patua One", "Cabin Condensed"],
    keywords: [
      "Miguel Cabrera",
      "Dev",
      "Blog",
      "JavaScript",
      "JS",
      "TypeScript",
      "TS",
    ],
  },
}
