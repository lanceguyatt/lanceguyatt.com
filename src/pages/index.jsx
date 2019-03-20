import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import WorkBench from '../layouts/WorkBench'
import { SEO } from '../components'

const Index = ({
  data: {
    strapiPage: { description, url, image },
  },
}) => (
  <WorkBench>
    <>
      <SEO
        index
        description={description}
        url={url}
        image={image.childImageSharp.fixed.src}
      />
    </>
  </WorkBench>
)

Index.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default Index

export const IndexQuery = graphql`
  fragment shareImage on StrapiPage {
    image {
      childImageSharp {
        fixed(width: 1200, height: 628) {
          src
        }
      }
    }
  }

  query indexQuery {
    strapiPage(slug: { eq: "/" }) {
      name
      description
      url: slug
      ...shareImage
    }
  }
`
