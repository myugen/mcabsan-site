/** @jsx jsx */
import { jsx } from "theme-ui"
import { changeLocale, useIntl } from "gatsby-plugin-intl"

const LocaleSwitcher = ({ languages = [] }) => {
  const { locale } = useIntl()
  return (
    <div sx={{ display: "flex", justifyContent: "center", cursor: "pointer" }}>
      {languages.map(({ key, name }) => (
        <span
          key={key}
          sx={{
            px: 1,
            textTransform: "uppercase",
            borderBottom: theme =>
              key === locale ? `2px solid ${theme.colors.text}` : "none",
          }}
          role="button"
          onClick={() => {
            changeLocale(key)
          }}
        >
          {name}
        </span>
      ))}
    </div>
  )
}

export default LocaleSwitcher
