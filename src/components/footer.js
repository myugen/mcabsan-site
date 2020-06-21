/** @jsx jsx */
import { jsx, Container, Link } from "theme-ui"
import PropTypes from "prop-types"

import SocialSpace from "./social-space"

const Info = ({ location }) => {
  return (
    <div>
      © {new Date().getFullYear()}, Built with 🍌 in <u>{location}</u> using
      {` `}
      <Link href="https://www.gatsbyjs.org">Gatsby</Link>
    </div>
  )
}

const Footer = ({ location, social }) => (
  <footer>
    <Container px={2} paddingTop={2} paddingBottom={1}>
      <SocialSpace {...social} />
    </Container>
    <Container
      px={2}
      paddingBottom={2}
      paddingTop={1}
      sx={{ textAlign: "center" }}
    >
      <Info location={location} />
    </Container>
  </footer>
)

Footer.defaultProps = {
  location: "",
}

Footer.propTypes = {
  location: PropTypes.string,
}

export default Footer
