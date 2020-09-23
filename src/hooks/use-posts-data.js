import { graphql, useStaticQuery } from "gatsby"

export default function usePostsData() {
  const { allDatoCmsPost } = useStaticQuery(graphql`
    query PostsQuery {
      allDatoCmsPost(
        filter: { stage: { eq: "publish" } }
        sort: { fields: [datetime], order: DESC }
      ) {
        edges {
          node {
            code
            title
            datetime(formatString: "MMMM DD, YYYY")
            description
            image {
              url
              alt
            }
            body
            seo {
              title
              description
              image {
                url
                mimeType
              }
              twitterCard
            }
          }
        }
      }
    }
  `)

  return allDatoCmsPost.edges
}
