/** @jsx jsx */
import { jsx, Avatar } from "theme-ui"

import me from "assets/me.jpg"
import Layout from "components/layout"

const Home = () => {
  return (
    <Layout metadata={{ title: "Home" }}>
      <div sx={{ textAlign: "center" }}>
        <Avatar src={me} width="256px" height="256px" />
        <h3>Hi! My name is Miguel Cabrera</h3>
        <p>
          I am a passionate fullstack developer, who loves to be involved in the
          whole process of creating software to keep learning and facing new
          challenges every day.
        </p>
      </div>
    </Layout>
  )
}

export default Home
