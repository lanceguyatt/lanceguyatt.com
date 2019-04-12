import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import WorkBench from '../layouts/WorkBench'
import { Work } from '../containers'
import { SEO } from '../components'

const WorkPage = ({ data }) => {
  const { contentfulPage } = data
  const { meta } = contentfulPage
  return (
    <WorkBench>
      <>
        <SEO {...meta} url="/work" />
        <Work active />
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
    contentfulPage(id: { eq: "2cf1d118-a26d-57e4-8a8b-4fa3008561ec" }) {
      ...page
      meta {
        ...meta
      }
    }
  }
`
