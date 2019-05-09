import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { guruMeditation } from '../styles/theme'
import GuruMeditation from '../containers/GuruMeditation'
import { SEO } from '../components'

const GuruMeditationPage = ({ data }) => {
  const { contentfulPage } = data
  const { meta, name } = contentfulPage

  return (
    <ThemeProvider theme={guruMeditation}>
      <>
        <GlobalStyle />
        <SEO {...meta} url="/404" />
        <main>
          <article hidden>
            <header>
              <h1>{name}</h1>
            </header>
            <p>{meta.description}</p>
          </article>
          <GuruMeditation />
        </main>
      </>
    </ThemeProvider>
  )
}

GuruMeditationPage.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default GuruMeditationPage

export const GuruMeditationPageQuery = graphql`
  query guruMeditationPageQuery {
    contentfulPage(id: { eq: "69f9f631-d866-5bf0-a7f3-99b7e062748c" }) {
      ...page
      meta {
        ...meta
      }
    }
  }
`
