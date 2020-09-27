/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "components/layout"
import { ContactForm } from "components/common"

const About = () => {
  return (
    <Layout metadata={{ title: "About" }}>
      <div>
        <h3>This is About info!</h3>
      </div>
      <ContactForm
        onSubmit={values => {
          console.log(values)
        }}
      />
    </Layout>
  )
}

export default About
