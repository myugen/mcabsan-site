/** @jsx jsx */
import { jsx, Link, useColorMode } from "theme-ui"
import { useIntl } from "gatsby-plugin-intl"

import moon from "assets/moon.png"
import sun from "assets/sun.png"

const ThemeSwitch = () => {
  const iconCss = [
    { pointerEvents: "none", margin: 4, verticalAlign: "middle" },
  ]

  const { formatMessage } = useIntl()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === "dark"

  const toggleColorMode = () => {
    const nextColorMode = isDark ? "light" : "dark"
    setColorMode(nextColorMode)
  }
  const themeLabel = formatMessage({ id: `theme.${isDark ? "light" : "dark"}` })

  return (
    <Link
      sx={{
        textDecoration: "none",
        color: "background",
        cursor: "pointer",
      }}
      onClick={toggleColorMode}
    >
      <div sx={{ textAlign: "right", marginTop: "1.25em" }}>
        <img
          alt={
            isDark ? "moon indicating dark mode" : "sun indicating light mode"
          }
          src={isDark ? sun : moon}
          width="16"
          height="16"
          role="presentation"
          css={iconCss}
        />
        {formatMessage(
          { id: "menu.theme" },
          { theme: themeLabel.toLowerCase() }
        )}
      </div>
    </Link>
  )
}

export default ThemeSwitch
