/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { Global } from "@emotion/core"
import PropTypes from "prop-types"
import { useLocation } from "@reach/router"

import { useSiteMetadata } from "hooks"
import Header from "../header"
import Footer from "../footer"
import SiteMetadata from "./site-metadata"
import { ScrollToTop } from "../common"

const Layout = ({ children, metadata }) => {
  const siteMetadata = useSiteMetadata()
  const { pathname } = useLocation()
  const seo = { ...siteMetadata, ...metadata, pathname }

  const { title, menuLinks, location, social, languages } = siteMetadata

  return (
    <Container sx={{ maxWidth: "1200px" }}>
      <Global
        styles={{
          ".grecaptcha-badge": { visibility: "hidden" },
          "@font-face": {
            fontFamily: "JetBrains Mono",
            src: `url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/fonts/web/JetBrainsMono-Regular.eot') format('embedded-opentype'),
                  url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/fonts/web/JetBrainsMono-Regular.woff2') format('woff2'),
                  url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/fonts/web/JetBrainsMono-Regular.woff') format('woff'),
                  url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/fonts/ttf/JetBrainsMono-Regular.ttf') format('truetype')`,
            fontWeight: "normal",
            fontStyle: "normal",
          },
          body: {
            textRendering: "optimizeLegibility",
          },
        }}
      />
      <SiteMetadata {...seo} />
      <Header title={title} menuLinks={menuLinks} />
      <main>
        <Container p={3}>{children}</Container>
      </main>
      <Footer location={location} social={social} languages={languages} />
      <ScrollToTop />
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
