import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import WorkBench from '../layouts/WorkBench'
import { SEO, Window } from '../components'

const RamDiskPage = ({ data }) => {
  const { strapiPage } = data
  const { name, description, url, full } = strapiPage
  return (
    <WorkBench>
      <>
        <SEO name={name} description={description} url={url} />
        <Window {...data.strapiPage} level1 active full={full} />
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
      url: slug
      full
    }
  }
`
