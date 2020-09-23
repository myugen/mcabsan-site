/** @jsx jsx */
import { css, jsx, Text, Card, Image } from "theme-ui"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import readingTime from "reading-time"

import Layout from "components/layout"
import usePostsData from "hooks/use-posts-data"

const StyledLink = styled(Link)(
  css({
    color: "inherit",
    textDecoration: "none",
  })
)

const Posts = () => {
  const posts = usePostsData() || []
  const NoPosts = () => (
    <div>
      <h3>No posts yet. Stay tuned!!!</h3>
    </div>
  )
  return (
    <Layout metadata={{ title: "Posts" }}>
      {!posts.length && <NoPosts />}
      {!!posts.length && (
        <div
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {posts.map(({ node }) => (
            <Card key={node.code} sx={{ marginBottom: 2 }}>
              <StyledLink to={node.code}>
                <article>
                  <header>
                    <Image src={node.image.url} alt={node.image.alt} />
                    <h2 sx={{ my: 0 }}>
                      <Text variant="title">{node.title}</Text>
                    </h2>
                    <small sx={{ fontSize: 1 }}>
                      {`${node.datetime} · ${readingTime(node.body).text}`}
                    </small>
                  </header>
                  <p sx={{ my: 0 }}>{node.description}</p>
                </article>
              </StyledLink>
            </Card>
          ))}
        </div>
      )}
    </Layout>
  )
}

export default Posts
