import React from "react"
import PropTypes from "prop-types"
import ReactSwitch from "react-switch"

export const Switch = props => <ReactSwitch {...props} />

Switch.defaultProps = {
  checkedIcon: false,
  uncheckedIcon: false,
  height: 24,
  width: 48,
  handleDiameter: 24,
  offColor: "#000",
  onColor: "#000",
  onHandleColor: "#000",
  boxShadow: "inset 0 0 0 1px #000",
  "aria-label": "none",
  onChange: e => e,
}

Switch.propTypes = {
  checkedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  uncheckedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  checked: PropTypes.bool.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  handleDiameter: PropTypes.number,
  offColor: PropTypes.string,
  onColor: PropTypes.string,
  onHandleColor: PropTypes.string,
  boxShadow: PropTypes.string,
  "aria-label": PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Switch
