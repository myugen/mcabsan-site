/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import { arrayOf, object } from "prop-types"
import { Link } from "gatsby"

import ThemeSwitch from "./theme-switch"

const Burger = ({ open, setOpen }) => (
  <button
    onClick={() => setOpen(!open)}
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      width: "2rem",
      height: "2rem",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      padding: "0",
      zIndex: 10000,

      "&:focus": {
        outline: "none",
      },
    }}
  >
    <div
      sx={{
        width: "2rem",
        height: "0.25rem",
        backgroundColor: open ? "background" : "text",
        borderRadius: "10px",
        transition: "all 0.3s linear",
        position: "relative",
        transformOrigin: "1px",
        zIndex: 10,
        transform: open ? "translateY(1px) rotate(45deg)" : "none",
      }}
    />
    <div
      sx={{
        width: "2rem",
        height: "0.25rem",
        backgroundColor: open ? "background" : "text",
        borderRadius: "10px",
        transition: "all 0.3s linear",
        position: "relative",
        transformOrigin: "1px",
        zIndex: 10,
        opacity: open ? "0" : "1",
      }}
    />
    <div
      sx={{
        width: "2rem",
        height: "0.25rem",
        backgroundColor: open ? "background" : "text",
        borderRadius: "10px",
        transition: "all 0.3s linear",
        position: "relative",
        transformOrigin: "1px",
        zIndex: 10,
        transform: open ? "translateY(-1px) rotate(-45deg)" : "none",
      }}
    />
  </button>
)

const SideMenu = ({ links, open }) => {
  return (
    <div
      sx={{
        display: "flex",
        visibility: open ? "visible" : "hidden",
        flexDirection: "column",
        position: "absolute",
        right: 0,
        zIndex: 10,
        transition: open ? "visibility .3s linear .2s" : "visibility .1 linear",
      }}
    >
      <nav>
        <ul
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "1",
          }}
        >
          {links.map(link => (
            <li
              key={link.name}
              sx={{
                listStyleType: "none",
                px: "1rem",
              }}
            >
              <Link
                activeClassName="active"
                sx={{
                  color: "background",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "font-weight .4s ease-in-out",

                  "&.active": {
                    textDecoration: "underline",
                    fontWeight: "bold",
                  },

                  "&:hover": {
                    fontWeight: "bold",
                  },
                }}
                to={link.path}
              >
                <h2
                  sx={{
                    fontWeight: "inherit",
                  }}
                >
                  {link.name}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div sx={{ alignSelf: "flex-end", px: "1rem" }}>
        <ThemeSwitch />
      </div>
    </div>
  )
}

const MenuBackground = ({ open }) => (
  <div
    sx={{
      position: "absolute",
      top: 0,
      right: 0,
      width: open ? "300px" : 0,
      height: open ? "450px" : 0,
      margin: "2rem 1rem 0 20px",
      backgroundColor: "text",
      borderRadius: "50%",
      transition: "all .3s ease",
      transform: open ? "translate(40%,-30%)" : "none",
    }}
  ></div>
)

const MenuBurger = ({ links }) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Burger open={open} setOpen={setOpen} />
      <SideMenu links={links} open={open} />
      <MenuBackground open={open} />
    </div>
  )
}

MenuBurger.defaultProps = {
  links: [],
}

MenuBurger.propTypes = {
  links: arrayOf(object),
}

export default MenuBurger
