/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import PropTypes from "prop-types"
import { useLocation } from "@reach/router"

import { useSiteMetadata } from "hooks"
import Header from "../header"
import Footer from "../footer"
import SiteMetadata from "./site-metadata"

const Layout = ({ children, metadata }) => {
  const siteMetadata = useSiteMetadata()
  const { pathname } = useLocation()
  const seo = { ...siteMetadata, ...metadata, pathname }

  return (
    <Container sx={{ maxWidth: "1200px" }}>
      <SiteMetadata {...seo} />
      <Header title={siteMetadata.title} />
      <main>
        <Container p={4}>{children}</Container>
      </main>
      <Footer location={siteMetadata.location} social={siteMetadata.social} />
    </Container>
  )
}

Layout.defaultProps = {
  metadata: {},
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  metadata: PropTypes.object,
}

export default Layout
