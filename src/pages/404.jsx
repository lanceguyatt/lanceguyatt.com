import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Default from '../layouts/Default'
import GuruMeditation from '../containers/GuruMeditation'
import { SEO } from '../components'

const GuruMeditationPage = ({
  data: {
    strapiPage: { name, description, url },
  },
}) => (
  <Default>
    <>
      <SEO name={name} description={description} url={url} />
      <GuruMeditation />
    </>
  </Default>
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
