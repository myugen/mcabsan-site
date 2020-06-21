/** @jsx jsx */
import { jsx, Container, Link } from "theme-ui"
import PropTypes from "prop-types"

import SocialSpace from "./social-space"

const Footer = ({ location, social }) => (
  <footer>
    <Container p={2} sx={{ textAlign: "center" }}>
      © {new Date().getFullYear()}, Built with 🍌 in <u>{location}</u> using
      {` `}
      <Link href="https://www.gatsbyjs.org">Gatsby</Link>
    </Container>
    <Container px={2}>
      <SocialSpace {...social} />
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
