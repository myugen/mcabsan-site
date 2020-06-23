/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Menu = ({ links }) => (
  <nav>
    <ul style={{ display: "flex", flex: 1 }}>
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
              color: "inherit",
              fontWeight: "bold",
              textTransform: "uppercase",
              textDecoration: "none",
              "&.active,&:hover": {
                textDecoration: "underline",
              },
            }}
            to={link.path}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

Menu.defaultProps = {
  links: [],
}

Menu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
}

export default Menu
