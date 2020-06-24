/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import { Link } from "gatsby"
import { string, object, arrayOf } from "prop-types"

import ThemeSwitch from "./theme-switch"
import Menu from "./menu"
import MenuBurger from "./menu-burger"

const Header = ({ title, menuLinks }) => {
  return (
    <header>
      <Flex
        p={2}
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Box>
          <Link
            sx={{
              color: "inherit",
              textDecoration: "none",
            }}
            to="/"
          >
            <h1 sx={{ my: "0px" }}>{title}</h1>
          </Link>
        </Box>
        <Box sx={{ display: ["none", "block", "block"] }}>
          <Menu links={menuLinks} />
        </Box>
        <Box sx={{ display: ["none", "block", "block"] }}>
          <div>
            <ThemeSwitch />
          </div>
        </Box>
        <Box sx={{ display: ["block", "none", "none"] }}>
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
