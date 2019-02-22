import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import WorkBench from '../layouts/WorkBench'
import { SEO, Window } from '../components'

const RamDiskPage = ({ data }) => {
  const { strapiPage } = data
  const { name, description, slug } = strapiPage
  return (
    <WorkBench>
      <>
        <SEO title={name} desc={description} pathname={slug} />
        <Window {...data.strapiPage} level1 />
      </>
    </WorkBench>
  )
}

RamDiskPage.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default RamDiskPage

export const RamDiskPageQuery = graphql`
  query ramDiskageQuery {
    strapiPage(slug: { eq: "/ram-disk" }) {
      name
      description
      slug
      full
    }
  }
`
