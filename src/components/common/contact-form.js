/** @jsx jsx */
import { jsx, Input, Textarea, Button, Card } from "theme-ui"
import PropTypes from "prop-types"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

const ContactSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  message: yup.string().min(50, "Too Short!").required("Required"),
})

const StyledInput = ({ field, form, ...props }) => {
  return <Input {...field} {...props} my={2} />
}

const StyledTextarea = ({ field, form, ...props }) => {
  return <Textarea {...field} {...props} rows="6" my={2} />
}

const ContactForm = ({ onSubmit = () => {} }) => (
  <div>
    <Card sx={{ minWidth: "100%", px: 2 }}>
      <h2>Contact me!</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Field name="name" placeholder="John Doe" component={StyledInput} />
          <ErrorMessage name="name" />
          <Field
            name="email"
            placeholder="john@doe.com"
            component={StyledInput}
          />
          <ErrorMessage name="email" />
          <Field
            name="message"
            placeholder="Whatever you want ✍️"
            component={StyledTextarea}
          />
          <ErrorMessage name="message" />
          <div sx={{ my: 2 }}>
            <Button
              sx={{
                cursor: "pointer",
                color: "text",
                border: "1px solid",
                "&:hover": {
                  backgroundColor: "text",
                  color: "background",
                  borderColor: "background",
                },
              }}
              type="submit"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              <span sx={{ paddingLeft: 1 }}>Send</span>
            </Button>
          </div>
        </Form>
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
