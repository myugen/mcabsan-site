/** @jsx jsx */
import { jsx, Box, Flex, Link, css } from "theme-ui"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import styled from "@emotion/styled"

const StyledDiv = styled(motion.div)(
  css({
    display: "inline-block",
  })
)

const SocialLink = ({ children, href }) => (
  <StyledDiv whileHover={{ scale: "1.1" }} whileTap={{ scale: 0.95 }}>
    <Link variant="social" href={href}>
      {children}
    </Link>
  </StyledDiv>
)

const SocialSpace = ({ twitter, github, linkedin }) => {
  return (
    <Flex sx={{ justifyContent: "center" }}>
      <Box px={1}>
        <SocialLink href={twitter.url}>
          <FontAwesomeIcon icon={faTwitter} />
        </SocialLink>
      </Box>
      <Box px={1}>
        <SocialLink href={github.url}>
          <FontAwesomeIcon icon={faGithub} />
        </SocialLink>
      </Box>
      <Box px={1}>
        <SocialLink href={linkedin.url}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </SocialLink>
      </Box>
    </Flex>
  )
}

SocialSpace.defaultProps = {
  twitter: {},
  github: {},
  linkedin: {},
}

SocialSpace.propTypes = {
  twitter: PropTypes.object.isRequired,
  github: PropTypes.object.isRequired,
  linkedin: PropTypes.object.isRequired,
}

export default SocialSpace
