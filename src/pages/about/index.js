/** @jsx jsx */
import { jsx } from "theme-ui"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { useToasts } from "react-toast-notifications"
import { useIntl } from "gatsby-plugin-intl"

import Layout from "components/layout"
import { ContactForm } from "components/common"
import { api } from "services"

const About = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const { addToast } = useToasts()
  const { formatMessage } = useIntl()
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const token = await executeRecaptcha("homepage")
      const { name, from, message } = values
      const payload = {
        to: {
          name: "Miguel Cabrera",
          address: "me@mcabsan.dev",
        },
        from: {
          name: "Miguel Cabrera",
          address: "me@mcabsan.dev",
        },
        subject: `Contact from ${name}`,
        body: {
          text: `This mail is a contact from ${name}, with address ${from}. And the message is:\n${message}`,
          html: `<p>This mail is a contact from ${name}, with address ${from}. And the message is:</p><p>${message}</p>`,
        },
      }
      const response = await api.post("/api/mail/send", payload, {
        headers: { "X-RECAPTCHA-TOKEN": token },
      })
      console.log(response)
      setSubmitting(false)
      addToast("Email sent successfully! 👌", { appearance: "success" })
      resetForm()
    } catch (e) {
      console.error(e)
      setSubmitting(false)
      addToast("Ooops! It seems something went wrong 😓", {
        appearance: "danger",
      })
    }
  }
  return (
    <Layout metadata={{ title: "About" }}>
      <div>
        <h3>{formatMessage({ id: "page.about.info" })}</h3>
      </div>

      <ContactForm onSubmit={handleSubmit} />
    </Layout>
  )
}

export default About
