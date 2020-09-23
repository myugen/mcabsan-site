const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query PostsQuery {
      allDatoCmsPost(
        filter: { stage: { eq: "publish" } }
        sort: { fields: [datetime], order: DESC }
      ) {
        edges {
          node {
            code
          }
        }
      }
    }
  `)
  result.data.allDatoCmsPost.edges.forEach(({ node }) => {
    createPage({
      path: `/posts/${node.code}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        code: node.code,
      },
    })
  })
}
