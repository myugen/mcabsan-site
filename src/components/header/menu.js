/** @jsx jsx */
import { jsx } from "theme-ui"
import { arrayOf, object } from "prop-types"
import { Link } from "gatsby"

const Menu = ({ links }) => (
  <nav>
    <ul
      sx={{
        display: "flex",
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
              color: "inherit",
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
  links: arrayOf(object),
}

export default Menu
