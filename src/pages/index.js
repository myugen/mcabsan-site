/** @jsx jsx */
import { jsx, Avatar } from "theme-ui"

import Layout from "../components/layout"
import me from "../assets/me.jpg"

const Home = () => {
  return (
    <Layout>
      <div sx={{ textAlign: "center" }}>
        <Avatar src={me} width="256px" height="256px" />
        <h3>Hi! My name is Miguel Ignacio Cabrera San Gil</h3>
      </div>
    </Layout>
  )
}

export default Home
