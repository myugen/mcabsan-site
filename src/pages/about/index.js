/** @jsx jsx */
import { jsx } from "theme-ui"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

import Layout from "components/layout"
import { ContactForm } from "components/common"
import { api } from "services"

const About = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("Contact form -> submit")
      const token = await executeRecaptcha("homepage")
      console.log("reCAPTCHA executed", token)
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
    } catch (e) {
      console.error(e)
      setSubmitting(false)
    }
  }
  return (
    <Layout metadata={{ title: "About" }}>
      <div>
        <h3>This is About info!</h3>
      </div>
      <ContactForm onSubmit={handleSubmit} />
    </Layout>
  )
}

export default About
