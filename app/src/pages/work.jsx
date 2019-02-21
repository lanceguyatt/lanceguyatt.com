import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Default from '../layouts/Default'
import WorkBench from '../containers/WorkBench'
import { SEO, TitleBar, Work } from '../components'

const WorkPage = ({ data }) => {
  const { strapiPage } = data
  const { name, description, slug } = strapiPage
  return (
    <Default>
      <>
        <SEO title={name} desc={description} pathname={slug} />
        <TitleBar />
        <WorkBench />
        <Work {...strapiPage} />
      </>
    </Default>
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
