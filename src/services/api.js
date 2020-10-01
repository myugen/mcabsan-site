import axios from "axios"
import { graphql } from "gatsby"
import { environment } from "utils"

const { isDev, port } = environment
console.log("ENV", port)
const { site } = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          path
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
`
export default axios.create({
  baseURL: isDev ? `http://localhost:${port}` : site.siteMetadata.siteUrl,
})
