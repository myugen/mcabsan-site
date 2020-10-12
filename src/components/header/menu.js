/** @jsx jsx */
import { jsx, css } from "theme-ui"
import { arrayOf, object } from "prop-types"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { Link, useIntl } from "gatsby-plugin-intl"

const Item = styled(motion.li)(
  css({
    listStyleType: "none",
    px: 1,
  })
)

const StyledLink = styled(Link)(
  css({
    color: "inherit",
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

const Menu = ({ links }) => {
  const intl = useIntl()
  return (
    <nav>
      <ul
        sx={{
          display: "flex",
          my: 0,
          px: 0,
          flex: "1",
        }}
      >
        {links.map(({ key, path }) => (
          <Item
            key={key}
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
                  fontWeight: "inherit",
                }}
              >
                {intl.formatMessage({ id: `menu.${key}` })}
              </h2>
            </AnimatedLink>
          </Item>
        ))}
      </ul>
    </nav>
  )
}

Menu.defaultProps = {
  links: [],
}

Menu.propTypes = {
  links: arrayOf(object),
}

export default Menu
