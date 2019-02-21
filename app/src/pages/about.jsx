import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Default from '../layouts/Default'
import WorkBench from '../containers/WorkBench'
import { SEO, TitleBar, About } from '../components'

const AboutPage = ({ data }) => {
  const { strapiPage } = data
  const { name, description, slug } = strapiPage
  return (
    <Default>
      <>
        <SEO title={name} desc={description} pathname={slug} />
        <TitleBar />
        <WorkBench />
        <About {...strapiPage} close="/" />
      </>
    </Default>
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
