/** @jsx jsx */
import { jsx, Image, Text } from "theme-ui"
import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import readingTime from "reading-time"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "components/layout"

const Post = ({ data }) => {
  const { formatMessage, formatDate } = useIntl()
  const post = data.datoCmsPost
  const { title, image, datetime, bodyNode, seo } = post
  const { body } = bodyNode.childMdx
  const formattedDate = formatDate(datetime, {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  const formattedReadingTime = formatMessage(
    { id: "common.reading_time" },
    { minute: Math.ceil(readingTime(body).minutes.toFixed(2)) }
  )
  return (
    <Layout metadata={{ title: `Post - ${seo.title}` }}>
      <article>
        <header>
          <h2 sx={{ my: 0 }}>
            <Text variant="title">{title}</Text>
          </h2>
          <small
            sx={{ fontSize: 0 }}
          >{`${formattedDate} · ${formattedReadingTime}`}</small>
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
      datetime
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
