/** @jsx jsx */
import { jsx, css } from "theme-ui"
import { arrayOf, object } from "prop-types"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { Link } from "gatsby"

const Item = styled(motion.li)(
  css({
    listStyleType: "none",
    px: "1rem",
  })
)

const StyledLink = styled(Link)(
  css({
    color: "inherit",
    textTransform: "uppercase",
    textDecoration: "none",
    "&.active": {
      textDecoration: "underline",
      fontWeight: "bold",
    },
  })
)

const AnimatedLink = motion.custom(StyledLink)

const Menu = ({ links }) => (
  <nav>
    <ul
      sx={{
        display: "flex",
        flex: "1",
      }}
    >
      {links.map(link => (
        <Item
          key={link.name}
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
    </ul>
  </nav>
)

Menu.defaultProps = {
  links: [],
}

Menu.propTypes = {
  links: arrayOf(object),
}

export default Menu
