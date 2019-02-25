import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { kickstart } from '../styles/theme'
import KickStart from '../containers/KickStart'
import { SEO } from '../components'

const KickStartPage = ({
  data: {
    strapiPage: { name, description, url, image },
  },
}) => (
  <ThemeProvider theme={kickstart}>
    <>
      <GlobalStyle />
      <SEO
        name={name}
        description={description}
        url={url}
        image={image.childImageSharp.fixed.src}
      />
      <KickStart />
    </>
  </ThemeProvider>
)

KickStartPage.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default KickStartPage

export const KickStartPageQuery = graphql`
  query kickStartPageQuery {
    strapiPage(slug: { eq: "/kickstart" }) {
      name
      description
      url: slug
      ...shareImage
    }
  }
`
