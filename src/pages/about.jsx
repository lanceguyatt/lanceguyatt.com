import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import WorkBench from '../layouts/WorkBench'
import { WorkBench as WB, About } from '../containers'
import { SEO } from '../components'

const AboutPage = ({ data: { strapiPage } }) => (
  <WorkBench>
    <>
      <SEO {...strapiPage} />
      <WB />
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
