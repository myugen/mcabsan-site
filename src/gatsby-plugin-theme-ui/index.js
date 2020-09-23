import { toTheme } from "@theme-ui/typography"
import funston from "typography-theme-funston"
import merge from "deepmerge"

const theme = merge(toTheme(funston), {
  initialColorModeName: "dark",
  colors: {
    text: "#fff",
    background: "#0f0f0f",
    primary: "#0f0f0f",
    secondary: "#fff",
    modes: {
      light: {
        text: "#0f0f0f",
        background: "#fff",
        primary: "#fff",
        secondary: "#0f0f0f",
      },
    },
  },
  links: {
    social: {
      color: "text",
    },
  },
  text: {
    title: {
      fontFamily: "Patua One",
    },
  },
  cards: {
    primary: {
      backgroundColor: "secondary",
      padding: 1,
      borderRadius: 2,
      border: "1px solid",
      color: "primary",
      borderColor: "muted",
      maxWidth: "300px",
    },
  },
})

export default theme
