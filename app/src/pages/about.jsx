import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import WorkBench from '../layouts/WorkBench'
import { SEO, About } from '../components'

const AboutPage = ({ data }) => {
  const { strapiPage } = data
  const { name, description, slug } = strapiPage
  return (
    <WorkBench>
      <>
        <SEO title={name} desc={description} pathname={slug} />
        <About {...strapiPage} close="/" />
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
    strapiPage(slug: { eq: "/about" }) {
      name
      description
      slug
      full
    }
  }
`
