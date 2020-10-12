import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          menuLinks {
            key
            path
          }
          languages {
            key
            name
          }
          description
          author
          location
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
            linkedin {
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
