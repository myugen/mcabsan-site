import { toTheme } from "@theme-ui/typography"
import funston from "typography-theme-funston"
import merge from "deepmerge"

const theme = merge(toTheme(funston), {
  initialColorModeName: "dark",
  colors: {
    text: "#fff",
    background: "#0f0f0f",
    primary: "#639",
    secondary: "#ff6347",
    modes: {
      light: {
        text: "#0f0f0f",
        background: "#fff",
      },
    },
  },
  links: {
    social: {
      color: "text",
    },
  },
})

export default theme
