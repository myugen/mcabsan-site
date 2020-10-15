/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import PropTypes from "prop-types"

import { LocaleSwitcher, SocialSpace } from "../common"
import Info from "./info"

const Footer = ({ location, social, languages }) => (
  <footer>
    <Container px={2} paddingTop={2} paddingBottom={1}>
      <SocialSpace {...social} />
    </Container>
    <Container py={1}>
      <LocaleSwitcher languages={languages} />
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
