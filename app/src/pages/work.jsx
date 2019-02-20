import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Default from '../layouts/Default'
import WorkBench from '../containers/WorkBench'
import { SEO, Window, Work } from '../components'

const WorkPage = ({
  data: {
    strapiPage: { name, description, slug, full },
  },
}) => (
  <Default>
    <>
      <SEO title={name} desc={description} pathname={slug} />
      <WorkBench>
        <Window name={name} close="/" full={full}>
          <Work />
        </Window>
      </WorkBench>
    </>
  </Default>
)

WorkPage.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default WorkPage

export const WorkPageQuery = graphql`
  query workPageQuery {
    strapiPage(slug: { eq: "/work" }) {
      name
      description
      slug
      full
    }
  }
`
