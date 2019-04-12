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
    contentfulPage(id: { eq: "790a38a5-2cff-5c43-aaed-7477aaa53409" }) {
      ...page
      meta {
        ...meta
      }
    }
  }
`
