import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Default from '../layouts/Default'
import KickStart from '../containers/KickStart'
import { SEO } from '../components'

const KickStartPage = ({ data: { strapiPage } }) => (
  <Default>
    <>
      <SEO
        title={strapiPage.name}
        desc={strapiPage.description}
        pathname={strapiPage.slug}
      />
      <KickStart />
    </>
  </Default>
)

KickStartPage.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default KickStartPage

export const KickStartPageQuery = graphql`
  query kickStartPageQuery {
    strapiPage(slug: { eq: "/kickstart" }) {
      name
      description
      slug
    }
  }
`
