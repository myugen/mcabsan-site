import { toTheme } from "@theme-ui/typography"
import funston from "typography-theme-funston"
import merge from "deepmerge"

const theme = merge(toTheme(funston), {
  initialColorModeName: "dark",
  colors: {
    text: "#fff",
    background: "#000",
    primary: "#639",
    secondary: "#ff6347",
    modes: {
      light: {
        text: "#000",
        background: "#fff",
      },
    },
  },
  /*fonts: {
      body: "'Patua One', sans-serif",
      heading: "'Cabin Condensed', sans-serif",
      monospace: "'Jetbrains Mono', monospace",
    },
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    fontSize: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],*/
})

export default theme
