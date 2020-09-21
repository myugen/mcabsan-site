/** @jsx jsx */
import { jsx, Flex, Box, css } from "theme-ui"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { string, object, arrayOf } from "prop-types"
import { motion } from "framer-motion"

import ThemeSwitch from "./theme-switch"
import Menu from "./menu"
import MenuBurger from "./menu-burger"

const StyledDiv = styled(motion.div)(
  css({
    display: "inline-box",
  })
)

const Header = ({ title, menuLinks }) => {
  return (
    <header>
      <Flex
        px={2}
        py={[2, 0, 0]}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          flex: "1 2 auto",
        }}
      >
        <Box sx={{ display: "inline-block" }}>
          <StyledDiv
            sx={{ paddingLeft: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              sx={{
                color: "inherit",
                textDecoration: "none",
              }}
              to="/"
            >
              <h1 sx={{ my: "0" }}>{title}</h1>
            </Link>
          </StyledDiv>
        </Box>
        <Box sx={{ display: "inline-block" }}>
          <StyledDiv
            sx={{ paddingRight: [0, "1rem"] }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ThemeSwitch />
          </StyledDiv>
          <nav sx={{ display: ["none", "inline-block", "inline-block"] }}>
            <Menu links={menuLinks} />
          </nav>
        </Box>
        <Box sx={{ display: ["inline-block", "none", "none"] }}>
          <MenuBurger links={menuLinks} />
        </Box>
      </Flex>
    </header>
  )
}

Header.defaultProps = {
  menuLinks: [],
}

Header.propTypes = {
  title: string.isRequired,
  menuLinks: arrayOf(object),
}

export default Header
