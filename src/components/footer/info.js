/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import PropTypes from "prop-types"

const Info = ({ location }) => {
  return (
    <div>
      © {new Date().getFullYear()}, Built with 🍻 in {location}
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
