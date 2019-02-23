import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

const Facebook = ({
  title,
  description,
  url,
  image,
  type,
  siteName,
  locale,
}) => (
  <Helmet>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content={1200} />
    <meta property="og:image:height" content={628} />
    <meta property="og:type" content={type} />
    {siteName && <meta property="og:site_name" content={siteName} />}
    <meta property="og:locale" content={locale} />
    <meta property="fb:app_id" content="148190791903784" />
  </Helmet>
)

export default Facebook

Facebook.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string,
  siteName: PropTypes.string,
  locale: PropTypes.string.isRequired,
}

Facebook.defaultProps = {
  type: 'website',
  siteName: null,
}
