import React from "react"
import PropTypes from "prop-types"
import { Container } from "theme-ui"

const Footer = ({ location }) => (
  <footer>
    <Container p={2} sx={{ textAlign: "center" }}>
      © {new Date().getFullYear()}, Built with 🍌 in <u>{location}</u> using
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
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
