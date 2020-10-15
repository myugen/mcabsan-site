/** @jsx jsx */
import { jsx, Avatar } from "theme-ui"
import { useIntl } from "gatsby-plugin-intl"

import me from "assets/me.jpg"
import Layout from "components/layout"

const Home = () => {
  const { formatMessage } = useIntl()
  return (
    <Layout metadata={{ title: "Home" }}>
      <div sx={{ textAlign: "center" }}>
        <Avatar src={me} width="256px" height="256px" />
        <h3 sx={{ variant: "text.title" }}>
          {formatMessage({ id: "page.home.whoami.title" })}
        </h3>
        <p>{formatMessage({ id: "page.home.whoami.description" })}</p>
      </div>
    </Layout>
  )
}

export default Home
