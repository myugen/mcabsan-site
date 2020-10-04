import { toTheme } from "@theme-ui/typography"
import funston from "typography-theme-funston"
import nightOwl from "@theme-ui/prism/presets/night-owl.json"
import github from "@theme-ui/prism/presets/github.json"
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
      text: {
        info: {
          color: "#4986FF",
        },
        success: {
          color: "#31E08B",
        },
        warning: {
          color: "#FFE62D",
        },
        danger: {
          color: "#FF6668",
        },
      },
      styles: {
        code: {
          ...github,
        },
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
    info: {
      color: "#3670F7",
    },
    success: {
      color: "#35BA50",
    },
    warning: {
      color: "#DD9F02",
    },
    danger: {
      color: "#FC4484",
    },
  },
  forms: {
    input: {
      fontFamily: "Cabin Condensed",
    },
    textarea: {
      fontFamily: "Cabin Condensed",
    },
  },
  cards: {
    primary: {
      backgroundColor: "secondary",
      borderRadius: 6,
      padding: 1,
      border: "1px solid",
      color: "primary",
      borderColor: "muted",
      maxWidth: "300px",
    },
  },
  styles: {
    code: {
      ...nightOwl,
    },
  },
})

export default theme
