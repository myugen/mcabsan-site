import { toTheme } from "@theme-ui/typography"
import funston from "typography-theme-funston"
import nightOwl from "@theme-ui/prism/presets/night-owl.json"
import merge from "deepmerge"

const theme = merge(toTheme(funston), {
  initialColorModeName: "dark",
  colors: {
    text: "#fff",
    background: "#0f0f0f",
    primary: "#0f0f0f",
    secondary: "#fff",
    info: "#3670F7",
    success: "#35BA50",
    warning: "#DD9F02",
    danger: "#FC4484",
    white: "#fff",
    modes: {
      light: {
        text: "#0f0f0f",
        background: "#fff",
        primary: "#fff",
        secondary: "#0f0f0f",
        info: "#4986FF",
        success: "#31E08B",
        warning: "#FFE62D",
        danger: "#FF6668",
      },
    },
  },
  links: {
    social: {
      color: "text",
    },
  },
  text: {
    body: {
      fontFamily: "body",
    },
    title: {
      fontFamily: "Patua One",
    },
    info: {
      color: "info",
    },
    success: {
      color: "success",
    },
    warning: {
      color: "warning",
    },
    danger: {
      color: "danger",
    },
  },
  buttons: {
    principal: {
      cursor: "pointer",
      backgroundColor: "text",
      color: "backgroung",
      border: "1px solid",
      fontFamily: "body",
      "&:hover:enabled": {
        backgroundColor: "background",
        color: "text",
        borderColor: "text",
      },
      "&:disabled": {
        cursor: "not-allowed",
      },
    },
    secondary: {
      cursor: "pointer",
      color: "text",
      border: "1px solid",
      fontFamily: "body",
      "&:hover:enabled": {
        backgroundColor: "text",
        color: "background",
        borderColor: "background",
      },
      "&:disabled": {
        cursor: "not-allowed",
      },
    },
    info: {
      cursor: "pointer",
      color: "white",
      border: "1px solid",
      borderColor: "white",
      backgroundColor: "info",
      fontFamily: "body",
      "&:hover:enabled": {
        backgroundColor: "white",
        color: "info",
        borderColor: "info",
      },
      "&:disabled": {
        cursor: "not-allowed",
      },
    },
    success: {
      cursor: "pointer",
      color: "white",
      border: "1px solid",
      borderColor: "white",
      backgroundColor: "success",
      fontFamily: "body",
      "&:hover:enabled": {
        backgroundColor: "white",
        color: "success",
        borderColor: "success",
      },
      "&:disabled": {
        cursor: "not-allowed",
      },
    },
    warning: {
      cursor: "pointer",
      color: "white",
      border: "1px solid",
      borderColor: "white",
      backgroundColor: "warning",
      fontFamily: "body",
      "&:hover:enabled": {
        backgroundColor: "white",
        color: "warning",
        borderColor: "warning",
      },
      "&:disabled": {
        cursor: "not-allowed",
      },
    },
    danger: {
      cursor: "pointer",
      color: "white",
      border: "1px solid",
      borderColor: "white",
      backgroundColor: "danger",
      fontFamily: "body",
      "&:hover:enabled": {
        backgroundColor: "white",
        color: "danger",
        borderColor: "danger",
      },
      "&:disabled": {
        cursor: "not-allowed",
      },
    },
  },
  forms: {
    input: {
      fontFamily: "body",
    },
    textarea: {
      fontFamily: "body",
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
    pre: {
      overflowX: "scroll",
    },
  },
})
console.log("theme", theme)
export default theme
