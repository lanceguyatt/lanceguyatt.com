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
    contentfulPage(contentful_id: { eq: "4W0j6CDUm05JH6MvkzwI0Y" }) {
      ...page
      meta {
        ...meta
      }
    }
  }
`
