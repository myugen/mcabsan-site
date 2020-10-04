/** @jsx jsx */
import { jsx, Image, Text } from "theme-ui"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import readingTime from "reading-time"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "components/layout"

const Post = ({ data }) => {
  const post = data.datoCmsPost
  const { title, image, datetime, bodyNode, seo } = post
  const { body } = bodyNode.childMdx
  const readingTimeText = readingTime(body).text
  return (
    <Layout metadata={{ title: `Post - ${seo.title}` }}>
      <article>
        <header>
          <h2 sx={{ my: 0 }}>
            <Text variant="title">{title}</Text>
          </h2>
          <small sx={{ fontSize: 1 }}>
            {`${datetime} · ${readingTimeText}`}
          </small>
          <Image src={image.url} alt={image.alt} />
        </header>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($code: String!) {
    datoCmsPost(code: { eq: $code }) {
      code
      title
      datetime(formatString: "MMMM DD, YYYY")
      description
      image {
        url
        alt
      }
      bodyNode {
        id
        childMdx {
          body
        }
      }
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
`

Post.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Post
