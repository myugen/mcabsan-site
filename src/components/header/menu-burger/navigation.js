/** @jsx jsx */
import { jsx, css } from "theme-ui"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { Link, useIntl } from "gatsby-plugin-intl"
import ThemeSwitch from "./theme-switch"

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
    alignItems: "flex-end",
    paddingTop: 3,
    right: 0,
  })
)

const Item = styled(motion.li)(
  css({
    listStyleType: "none",
    px: "1rem",
    whiteSpace: "nowrap",
  })
)

const StyledLink = styled(Link)(
  css({
    color: "background",
    textTransform: "uppercase",
    textDecoration: "none",
    "&.active": {
      textDecoration: "line-through",
      fontWeight: "bold",
      "&.active > h2:after, &.active > h2:before": {
        content: '"\\00a0\\00a0"',
      },
    },
  })
)

const AnimatedLink = motion.custom(StyledLink)

export const Navigation = ({ links }) => {
  const intl = useIntl()
  return (
    <Items variants={variantsItems}>
      {links.map(({ key, path }) => (
        <Item
          key={key}
          variants={variantsItem}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatedLink
            activeClassName="active"
            whileHover={{ fontWeight: "bold" }}
            whileTap={{ fontWeight: "bold" }}
            to={path}
          >
            <h2
              sx={{
                marginBottom: 0,
                fontWeight: "inherit",
              }}
            >
              {intl.formatMessage({ id: `menu.${key}` })}
            </h2>
          </AnimatedLink>
        </Item>
      ))}
      <Item
        variants={variantsItem}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ThemeSwitch />
      </Item>
    </Items>
  )
}
