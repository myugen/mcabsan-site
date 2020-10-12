/** @jsx jsx */
import { jsx, Text } from "theme-ui"
import { useIntl } from "gatsby-plugin-intl"

const RecaptchaBanner = props => {
  const { formatMessage } = useIntl()
  return (
    <Text {...props}>
      {`${formatMessage({ id: "common.recaptcha.partial_one" })} `}
      <a href="https://policies.google.com/privacy">{`${formatMessage({
        id: "common.recaptcha.link_one",
      })}`}</a>
      {` ${formatMessage({ id: "common.recaptcha.partial_two" })} `}
      <a href="https://policies.google.com/terms">{`${formatMessage({
        id: "common.recaptcha.link_two",
      })}`}</a>
      {` ${formatMessage({ id: "common.recaptcha.partial_three" })}`}
    </Text>
  )
}

export default RecaptchaBanner
