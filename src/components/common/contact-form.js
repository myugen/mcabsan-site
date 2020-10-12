/** @jsx jsx */
import { jsx, Input, Textarea, Button, Card, Spinner, Text } from "theme-ui"
import PropTypes from "prop-types"
import { useIntl } from "gatsby-plugin-intl"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

import RecaptchaBanner from "./recaptcha-banner"

const contactSchema = formatMessage =>
  yup.object().shape({
    name: yup
      .string()
      .min(2, formatMessage({ id: "validation.min" }))
      .max(50, formatMessage({ id: "validation.max" }))
      .required(formatMessage({ id: "validation.required" })),
    from: yup
      .string()
      .email(formatMessage({ id: "validation.mail" }))
      .required(formatMessage({ id: "validation.required" })),
    message: yup
      .string()
      .min(50, formatMessage({ id: "validation.min" }))
      .required(formatMessage({ id: "validation.required" })),
  })

const StyledInput = ({ field, form, ...props }) => {
  return <Input {...field} {...props} my={2} />
}

const StyledTextarea = ({ field, form, ...props }) => {
  return <Textarea {...field} {...props} rows="6" my={2} />
}

const StyledErrorMessage = ({ name, sx, ...rest }) => (
  <ErrorMessage
    name={name}
    render={msg => (
      <Text variant="danger" {...rest}>
        {msg}
      </Text>
    )}
  />
)

const CustomForm = ({ isSubmitting }) => {
  const { formatMessage } = useIntl()
  return (
    <Form>
      <Field
        name="name"
        type="text"
        placeholder="John Doe"
        component={StyledInput}
      />
      <StyledErrorMessage name="name" />
      <Field
        name="from"
        type="email"
        placeholder="john@doe.com"
        component={StyledInput}
      />
      <StyledErrorMessage name="from" />
      <Field
        name="message"
        placeholder={formatMessage({
          id: "common.contact.message.placeholder",
        })}
        component={StyledTextarea}
      />
      <StyledErrorMessage name="message" />
      <div sx={{ my: 2, display: "flex", flexDirection: ["column", "row"] }}>
        <Button variant="secondary" disabled={isSubmitting} type="submit">
          {isSubmitting ? (
            <Spinner
              sx={{
                color: "text",
                width: "3em",
                height: "1em",
                verticalAlign: "middle",
              }}
            />
          ) : (
            <div>
              <FontAwesomeIcon icon={faPaperPlane} />
              <span sx={{ paddingLeft: 1 }}>
                {formatMessage({ id: "common.contact.send" })}
              </span>
            </div>
          )}
        </Button>
        <RecaptchaBanner sx={{ marginLeft: [0, 2], marginTop: [2, 0] }} />
      </div>
    </Form>
  )
}

const ContactForm = ({ onSubmit = () => {} }) => {
  const { formatMessage } = useIntl()
  return (
    <div>
      <Card sx={{ minWidth: "100%", px: 2 }}>
        <h2>{formatMessage({ id: "common.contact.title" })}</h2>
        <Formik
          initialValues={{
            name: "",
            from: "",
            message: "",
          }}
          validationSchema={contactSchema(formatMessage)}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => <CustomForm isSubmitting={isSubmitting} />}
        </Formik>
      </Card>
    </div>
  )
}

ContactForm.defaultProps = {
  onSubmit: () => {},
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default ContactForm
