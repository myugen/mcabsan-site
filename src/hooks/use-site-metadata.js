import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          image
          social {
            twitter {
              user
              url
            }
            github {
              user
              url
            }
          }
          googleFonts
          keywords
        }
      }
    }
  `)
  return site.siteMetadata
}
