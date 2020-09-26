/** @jsx jsx */
import { jsx, Button } from "theme-ui"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)
  const onScroll = () => {
    setVisible(document.documentElement.scrollTop > 20)
  }
  useEffect(() => {
    document.addEventListener("scroll", onScroll)
    // Remove listener on unmount
    return () => document.removeEventListener("scroll", onScroll)
  }, [])
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    visible && (
      <Button
        onClick={goTop}
        sx={{
          position: "fixed",
          right: [2, 4],
          borderRadius: "50%",
          bottom: [2, 3],
          backgroundColor: "text",
          color: "background",
          cursor: "pointer",
          width: "50px",
          height: "50px",
          p: 0,
        }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>
    )
  )
}

export default ScrollToTop
