import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import WorkBench from '../layouts/WorkBench'
import { About } from '../containers'
import { SEO } from '../components'

const AboutPage = ({ data }) => {
  const { contentfulPage } = data
  const { meta } = contentfulPage
  return (
    <WorkBench>
      <>
        <SEO {...meta} url="/about" />
        <About active />
      </>
    </WorkBench>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape().isRequired
}

export default AboutPage

export const AboutPageQuery = graphql`
  query aboutPageQuery {
    contentfulPage(id: { eq: "cfe45b2f-f19e-5d09-a940-924cfe08fd4c" }) {
      ...page
      meta {
        ...meta
      }
    }
  }
`
