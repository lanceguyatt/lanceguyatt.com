import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { guruMeditation } from '../styles/theme'

import GuruMeditation from '../containers/GuruMeditation'
import { SEO } from '../components'

const GuruMeditationPage = ({
  data: {
    strapiPage: { name, description, url },
  },
}) => (
  <ThemeProvider theme={guruMeditation}>
    <>
      <SEO name={name} description={description} url={url} />
      <GuruMeditation />
      <GlobalStyle />
    </>
  </ThemeProvider>
)

GuruMeditationPage.propTypes = {
  data: PropTypes.shape({
    strapiPage: PropTypes.object.isRequired,
  }).isRequired,
}

export default GuruMeditationPage

export const GuruMeditationPageQuery = graphql`
  query guruMeditationPageQuery {
    strapiPage(slug: { eq: "/404" }) {
      name
      description
      url: slug
    }
  }
`
