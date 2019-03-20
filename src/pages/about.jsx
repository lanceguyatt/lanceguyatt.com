import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import WorkBench from '../layouts/WorkBench'
import { About } from '../containers'
import { SEO } from '../components'

const AboutPage = ({ data: { strapiPage } }) => (
  <WorkBench>
    <>
      <SEO {...strapiPage} />
      <About active />
    </>
  </WorkBench>
)

AboutPage.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default AboutPage

export const AboutPageQuery = graphql`
  query aboutPageQuery {
    strapiPage(slug: { eq: "/about" }) {
      name
      description
      url: slug
      full
    }
  }
`
