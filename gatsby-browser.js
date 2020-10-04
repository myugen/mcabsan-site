import React from "react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { MDXProvider } from "@mdx-js/react"

export const wrapRootElement = ({ element }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITE_KEY}>
      {element}
    </GoogleReCaptchaProvider>
  )
}
