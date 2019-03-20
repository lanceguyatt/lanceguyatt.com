import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import WorkBench from '../layouts/WorkBench'
import { Work } from '../containers'
import { SEO } from '../components'

const WorkPage = ({ data }) => {
  const { strapiPage } = data
  const { name, description, url } = strapiPage
  return (
    <WorkBench>
      <>
        <SEO name={name} description={description} url={url} />
        <Work level2 active />
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
      url: slug
    }
  }
`
