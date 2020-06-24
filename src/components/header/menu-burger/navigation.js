/** @jsx jsx */
import { jsx, css } from "theme-ui"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import ThemeSwitch from "../theme-switch"

const variantsItems = {
  open: {
    visibility: "visible",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    visibility: "hidden",
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const variantsItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const Items = styled(motion.ul)(
  css({
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    paddingTop: 3,
    right: 0,
  })
)

const Item = styled(motion.li)(
  css({
    listStyleType: "none",
    px: "1rem",
  })
)

const StyledLink = styled(Link)(
  css({
    color: "background",
    textTransform: "uppercase",
    textDecoration: "none",
    "&.active": {
      textDecoration: "underline",
      fontWeight: "bold",
    },
  })
)

const AnimatedLink = motion.custom(StyledLink)

export const Navigation = ({ links }) => (
  <Items variants={variantsItems}>
    {links.map(link => (
      <Item
        key={link.name}
        variants={variantsItem}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatedLink
          activeClassName="active"
          whileHover={{ fontWeight: "bold" }}
          whileTap={{ fontWeight: "bold" }}
          to={link.path}
        >
          <h2
            sx={{
              fontWeight: "inherit",
            }}
          >
            {link.name}
          </h2>
        </AnimatedLink>
      </Item>
    ))}
    <Item
      key="switch"
      variants={variantsItem}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div sx={{ my: 2, justifyContent: "flex-end", display: "flex" }}>
        <ThemeSwitch />
      </div>
    </Item>
  </Items>
)
