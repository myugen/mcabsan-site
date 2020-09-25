/** @jsx jsx */
import { jsx, Button } from "theme-ui"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

const ScrollTo = ({ to }) => {
  const [visible, setVisible] = useState(false)
  const onScroll = () => {
    setVisible(to.current.scrollTop > 20)
  }
  useEffect(() => {
    document.addEventListener("scroll", onScroll)
    // Remove listener on unmount
    return () => document.removeEventListener("scroll", onScroll)
  }, [])
  const goTo = () => {
    console.log(to)
    to.current.scrollIntoView({ behavior: "smooth" })
  }
  return (
    visible && (
      <Button
        onClick={goTo}
        sx={{
          position: "fixed",
          right: 4,
          borderRadius: "50%",
          bottom: 3,
          backgroundColor: "text",
          color: "background",
          cursor: "pointer",
          width: "60px",
          height: "60px",
          p: 0,
        }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>
    )
  )
}

export default ScrollTo
