/** @jsx jsx */
import { jsx, Box, Flex, Link } from "theme-ui"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

const SocialSpace = ({ twitter, github, linkedin }) => {
  return (
    <Flex sx={{ justifyContent: "center" }}>
      <Box px={1}>
        <Link href={twitter.url}>
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </Box>
      <Box px={1}>
        <Link href={github.url}>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </Box>
      <Box px={1}>
        <Link href={linkedin.url}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
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
