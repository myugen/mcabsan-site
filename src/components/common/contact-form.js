/** @jsx jsx */
import { jsx, Input, Textarea, Button, Card, Spinner, Text } from "theme-ui"
import PropTypes from "prop-types"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import RecaptchaBanner from "./recaptcha-banner"

const ContactSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  from: yup.string().email("Invalid email").required("Required"),
  message: yup.string().min(50, "Too Short!").required("Required"),
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

const CustomForm = ({ isSubmitting }) => (
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
      placeholder="Whatever you want ✍️"
      component={StyledTextarea}
    />
    <StyledErrorMessage name="message" />
    <div sx={{ my: 2, display: "flex" }}>
      <Button
        sx={{
          cursor: "pointer",
          color: "text",
          border: "1px solid",
          "&:hover:enabled": {
            backgroundColor: "text",
            color: "background",
            borderColor: "background",
          },
          "&:disabled": {
            cursor: "not-allowed",
          },
        }}
        disabled={isSubmitting}
        type="submit"
      >
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
            <span sx={{ paddingLeft: 1 }}>Send</span>
          </div>
        )}
      </Button>
      <RecaptchaBanner sx={{ marginLeft: 2 }} />
    </div>
  </Form>
)

const ContactForm = ({ onSubmit = () => {} }) => (
  <div>
    <Card sx={{ minWidth: "100%", px: 2 }}>
      <h2>Contact me!</h2>
      <Formik
        initialValues={{
          name: "",
          from: "",
          message: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => <CustomForm isSubmitting={isSubmitting} />}
      </Formik>
    </Card>
  </div>
)

ContactForm.defaultProps = {
  onSubmit: () => {},
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default ContactForm
