import React from "react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { ToastProvider } from "react-toast-notifications"

export const wrapRootElement = ({ element }) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
    >
      <ToastProvider autoDismiss placement="bottom-center">
        {element}
      </ToastProvider>
    </GoogleReCaptchaProvider>
  )
}
