import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Default from '../layouts/Default'
import WorkBench from '../containers/WorkBench'
import { SEO, Window, About } from '../components'

const AboutPage = ({
  data: {
    strapiPage: { name, description, slug, full },
  },
}) => (
  <Default>
    <>
      <SEO title={name} desc={description} pathname={slug} />
      <WorkBench>
        <Window name={name} close="/" full={full}>
          <About />
        </Window>
      </WorkBench>
    </>
  </Default>
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
      slug
      full
    }
  }
`
