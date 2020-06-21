import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const SiteMetadata = ({
  pathname,
  article,
  title,
  author,
  description,
  siteUrl,
  image,
  social,
  googleFonts,
  keywords,
}) => {
  const url = `${siteUrl}${pathname}`
  const imageUrl = `${siteUrl}${image}`
  const canRenderOgArticleMeta = article ? true : null
  const canRenderTwitterMeta = !!social.twitter ? true : null

  return (
    <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <meta name="docsearch:version" content="2.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join()} />
      <meta name="author" content={author}></meta>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      {googleFonts.map(font => (
        <link
          rel="stylesheet"
          key={font}
          href={`https://fonts.googleapis.com/css?family=${font}:400,700&display=swap`}
        />
      ))}

      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      {canRenderOgArticleMeta && <meta property="og:type" content="article" />}

      {canRenderTwitterMeta && (
        <meta name="twitter:card" content="summary_large_image" />
      )}
      {canRenderTwitterMeta && (
        <meta name="twitter:creator" content={social.twitter.user} />
      )}
      {canRenderTwitterMeta && <meta name="twitter:title" content={title} />}
      {canRenderTwitterMeta && (
        <meta name="twitter:description" content={description} />
      )}
      {canRenderTwitterMeta && <meta name="twitter:image" content={imageUrl} />}
    </Helmet>
  )
}

SiteMetadata.defaultProps = {
  pathname: "",
  article: false,
  title: "",
  author: "",
  description: "",
  siteUrl: "",
  image: "",
  social: {},
  googleFonts: [],
  keywords: [],
}

SiteMetadata.propTypes = {
  pathname: PropTypes.string.isRequired,
  article: PropTypes.bool,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
  image: PropTypes.string,
  social: PropTypes.object,
  googleFonts: PropTypes.arrayOf(PropTypes.string),
  keywords: PropTypes.arrayOf(PropTypes.string),
}

export default SiteMetadata
