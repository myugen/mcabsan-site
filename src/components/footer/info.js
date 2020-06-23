/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import PropTypes from "prop-types"

const Info = ({ location }) => {
  return (
    <div>
      © {new Date().getFullYear()}, Built with 🍌 in <u>{location}</u> using
      {` `}
      <Link href="https://www.gatsbyjs.org">Gatsby</Link>
    </div>
  )
}

Info.defaultProps = {
  location: "",
}

Info.propTypes = {
  location: PropTypes.string.isRequired,
}

export default Info
