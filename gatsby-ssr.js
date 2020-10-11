import React from "react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { ToastProvider } from "react-toast-notifications"
import { Toast } from "./src/components/common"

export const wrapRootElement = ({ element }) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
    >
      {element}
    </GoogleReCaptchaProvider>
  )
}

export const wrapPageElement = ({ element }) => (
  <ToastProvider autoDismiss placement="bottom-center" components={{ Toast }}>
    {element}
  </ToastProvider>
)
