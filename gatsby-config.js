/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-theme-ui"],
  siteMetadata: {
    title: "Mcabsan's blog",
    author: "Miguel Cabrera",
    description: "A space where orgnize Miguel's ideas",
    siteUrl: "https://mcabsan.dev",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/mcabsan",
      },
      {
        name: "github",
        url: "https://github.com/Myugen",
      },
    ],
  },
}
