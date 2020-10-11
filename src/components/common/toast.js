/** @jsx jsx */
import { jsx, Button } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const snackStates = {
  entering: { transform: "translate3d(0, 120%, 0) scale(0.9)" },
  entered: { transform: "translate3d(0, 0, 0) scale(1)" },
  exiting: { transform: "translate3d(0, 120%, 0) scale(0.9)" },
  exited: { transform: "translate3d(0, 120%, 0) scale(0.9)" },
}
const Toast = ({
  children,
  transitionDuration,
  transitionState,
  onDismiss,
  appearance,
}) => {
  return (
    <div
      sx={{
        alignItems: "center",
        backgroundColor: appearance,
        borderRadius: 2,
        boxShadow: `
            0px 3px 5px -1px rgba(0, 0, 0, 0.2),
            0px 6px 10px 0px rgba(0, 0, 0, 0.14),
            0px 1px 18px 0px rgba(0, 0, 0, 0.12)`,
        color: "#fff",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        fontFamily: "Roboto",
        minWidth: 288,
        maxWidth: 568,
        padding: "6px 24px",
        pointerEvents: "initial",
        transitionProperty: `transform`,
        transitionDuration: `${transitionDuration}ms`,
        transitionTimingFunction: `cubic-bezier(0.2, 0, 0, 1)`,
        transformOrigin: "bottom",
        zIndex: 2,
        ...snackStates[transitionState],
      }}
    >
      <div sx={{ fontSize: "0.875rem", padding: "8px 0", fontFamily: "body" }}>
        {children}
      </div>
      <Button onClick={onDismiss} variant={appearance} sx={{ py: 0, px: 1 }}>
        <FontAwesomeIcon icon={faTimes} />
        <span sx={{ paddingLeft: 1 }}>Close</span>
      </Button>
    </div>
  )
}

export default Toast
