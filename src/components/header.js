/** @jsx jsx */
import { jsx, Styled, Flex, Box, useColorMode } from "theme-ui"
import PropTypes from "prop-types"
import moon from "../assets/moon.png"
import sun from "../assets/sun.png"
import Switch from "../components/switch"

const ThemeSwitch = () => {
  const iconCss = [{ pointerEvents: "none", margin: 4 }]

  const checkedIcon = (
    <img
      alt="moon indicating dark mode"
      src={moon}
      width="16"
      height="16"
      role="presentation"
      css={iconCss}
    />
  )

  const uncheckedIcon = (
    <img
      alt="sun indicating light mode"
      src={sun}
      width="16"
      height="16"
      role="presentation"
      css={iconCss}
    />
  )
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === "dark"

  const toggleColorMode = e => {
    const nextColorMode = isDark ? "light" : "dark"
    setColorMode(nextColorMode)
  }

  return (
    <Switch
      aria-label={isDark ? "off" : "on"}
      checkedIcon={checkedIcon}
      uncheckedIcon={uncheckedIcon}
      checked={isDark}
      onChange={toggleColorMode}
      onColor="#fff"
      boxShadow={isDark ? "inset 0 0 0 1px #fff" : "inset 0 0 0 1px #000"}
    />
  )
}

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
