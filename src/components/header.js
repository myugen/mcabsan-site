import React from "react"
import PropTypes from "prop-types"
import { Styled, useColorMode } from "theme-ui"
import moon from "../../assets/moon.png"
import sun from "../../assets/sun.png"
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
    console.log(nextColorMode)
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
    />
  )
}

const Header = ({ title }) => {
  return (
    <header>
      <Styled.h1>{title}</Styled.h1>
      <ThemeSwitch />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
