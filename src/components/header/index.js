/** @jsx jsx */
import { jsx, Styled, Flex, Box } from "theme-ui"
import PropTypes from "prop-types"

import ThemeSwitch from "./theme-switch"




const Header = ({ title }) => {
  return (
    <header>
      <Flex sx={{ alignItems: "center" }}>
        <Box p={2} sx={{ flex: "1 1 auto" }}>
          <Styled.h1 sx={{ mb: "0px" }}>{title}</Styled.h1>
        </Box>
        <Box p={2}>
          <Styled.div>
            <ThemeSwitch />
          </Styled.div>
        </Box>
      </Flex>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
