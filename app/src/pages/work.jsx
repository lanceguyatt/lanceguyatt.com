import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import WorkBench from '../layouts/WorkBench'
import { SEO, Work } from '../components'

const WorkPage = ({ data }) => {
  const { strapiPage } = data
  const { name, description, slug } = strapiPage
  return (
    <WorkBench>
      <>
        <SEO title={name} desc={description} pathname={slug} />
        <Work {...strapiPage} level2 />
      </>
    </WorkBench>
  )
}

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
