import React from "react"
import PropTypes from "prop-types"
import { Container } from "theme-ui"
import { useLocation } from "@reach/router"

import useSiteMetadata from "../hooks/use-site-metadata"
import SiteMetadata from "./site-metadata"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const siteMetadata = useSiteMetadata()
  const { pathname } = useLocation()

  return (
    <>
      <SiteMetadata pathname={pathname} {...siteMetadata} />
      <Header title={siteMetadata.title} />
      <main>
        <Container p={4}>{children}</Container>
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
