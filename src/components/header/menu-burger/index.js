/** @jsx jsx */
import { jsx, css } from "theme-ui"
import styled from "@emotion/styled"
import { useRef } from "react"
import { arrayOf, object } from "prop-types"
import { motion, useCycle } from "framer-motion"

import { useDimensions } from "hooks"
import MenuToggle from "./menu-toggle"
import { Navigation } from "./navigation"

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at ${300 - 40}px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(25px at ${300 - 40}px 40px)`,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const MenuBackground = styled(motion.div)(
  css({
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: "300px",
    backgroundColor: "text",
  })
)

const Burger = styled(motion.nav)(
  css({
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  })
)

const MenuBurger = ({ links }) => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)
  return (
    <Burger
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <MenuBackground variants={sidebar} />
      <Navigation links={links} />
      <MenuToggle toggle={() => toggleOpen()} />
    </Burger>
  )
}

MenuBurger.defaultProps = {
  links: [],
}

MenuBurger.propTypes = {
  links: arrayOf(object),
}

export default MenuBurger
