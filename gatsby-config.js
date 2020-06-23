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
        icon: "static/favicon.png",
        crossOrigin: "anonymous",
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
    title: "Miguel<>Cabrera",
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
