import React from "react"
import { useColorMode } from "theme-ui"

import moon from "assets/moon.png"
import sun from "assets/sun.png"
import Switch from "../common/switch"

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

export default ThemeSwitch
