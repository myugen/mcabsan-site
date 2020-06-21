/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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
        background_color: "#000",
        theme_color: "#000",
        display: "standalone",
        icon: "src/assets/me.jpg",
        crossOrigin: "anonymous",
      },
    },
  ],
  siteMetadata: {
    title: "Miguel<>Cabrera",
    author: "Miguel Cabrera",
    description: "A space where organize Miguel's ideas",
    siteUrl: "https://mcabsan.dev",
    image: "/assets/me.jpg",
    social: {
      twitter: {
        user: "@mcabsan",
        url: "https://twitter.com/mcabsan",
      },
      github: {
        user: "Myugen",
        url: "https://github.com/Myugen",
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
