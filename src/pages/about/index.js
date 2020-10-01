/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "components/layout"
import { ContactForm } from "components/common"
import { email } from "services"

const About = () => {
  return (
    <Layout metadata={{ title: "About" }}>
      <div>
        <h3>This is About info!</h3>
      </div>
      <ContactForm
        onSubmit={(values, { setSubmitting }) => {
          const { name, from, message } = values
          const { sendMail } = email
          sendMail({
            to: "me@mcabsan.dev",
            from,
            subject: `Contact from ${name}`,
            body: message,
          })
            .then(() => {
              console.log("email sent succeed")
              setSubmitting(false)
            })
            .catch(e => {
              console.error("email sent error", e)
              setSubmitting(false)
            })
        }}
      />
    </Layout>
  )
}

export default About
