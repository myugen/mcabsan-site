/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import { Link } from "gatsby"
import { string, object, arrayOf } from "prop-types"
import { motion } from "framer-motion"

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
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              sx={{
                color: "inherit",
                textDecoration: "none",
              }}
              to="/"
            >
              <h1 sx={{ my: "0px" }}>{title}</h1>
            </Link>
          </motion.div>
        </Box>
        <Box sx={{ display: ["none", "block", "block"] }}>
          <Menu links={menuLinks} />
        </Box>
        <Box sx={{ display: ["none", "block", "block"] }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <ThemeSwitch />
          </motion.div>
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
