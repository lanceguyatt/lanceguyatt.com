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
  data: PropTypes.shape().isRequired,
}

export default AboutPage

export const AboutPageQuery = graphql`
  query aboutPageQuery {
    contentfulPage(contentful_id: { eq: "1xyHHtEi6tG2h8ixLvv0a0" }) {
      ...page
      meta {
        ...meta
      }
    }
  }
`
