import React from "react"
import PropTypes from "prop-types"
import { Styled, Flex, Box, useColorMode, Avatar } from "theme-ui"
import moon from "../assets/moon.png"
import sun from "../assets/sun.png"
import me from "../assets/me.jpg"
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
        <Box p={2}>
          <Avatar src={me} />
        </Box>
        <Box p={2} sx={{ flex: "1 1 auto", alignSelf: "center" }}>
          <Styled.h1 sx={{ marginBottom: 0 }}>{title}</Styled.h1>
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
