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
})

export default theme
