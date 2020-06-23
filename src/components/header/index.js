/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import ThemeSwitch from "./theme-switch"
import Menu from "./menu"

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
        <Box>
          <Menu links={menuLinks} />
        </Box>
        <Box>
          <div>
            <ThemeSwitch />
          </div>
        </Box>
      </Flex>
    </header>
  )
}

Header.defaultProps = {
  menuLinks: [],
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  menuLinks: PropTypes.arrayOf(PropTypes.object),
}

export default Header
