/** @jsx jsx */
import { jsx, Text } from "theme-ui"

const RecaptchaBanner = props => (
  <Text {...props}>
    {"This site is protected by reCAPTCHA and the Google "}
    <a href="https://policies.google.com/privacy">Privacy Policy</a> {" and "}
    <a href="https://policies.google.com/terms">Terms of Service</a> {" apply."}
  </Text>
)

export default RecaptchaBanner
