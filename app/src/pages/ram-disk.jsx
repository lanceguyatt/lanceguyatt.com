import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Default from '../layouts/Default'
import WorkBench from '../containers/WorkBench'
import { SEO, Window } from '../components'

const RamDiskPage = ({
  data: {
    strapiPage: { name, description, slug, full },
  },
}) => (
  <Default>
    <>
      <SEO title={name} desc={description} pathname={slug} />
      <WorkBench>
        <Window name={name} close="/" full={full} />
      </WorkBench>
    </>
  </Default>
)

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
