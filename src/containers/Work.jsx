import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Window, Directory } from '../components'

const edgeToArray = data => data.edges.map(edge => edge.node)

const Work = ({ active }) => (
  <StaticQuery
    query={WorkStaticQuery}
    render={data => (
      <Window {...data.strapiPage} active={active} level1>
        <Directory basepath="/work" list={edgeToArray(data.allStrapiWork)} />
      </Window>
    )}
  />
)

Work.propTypes = {
  active: PropTypes.bool,
}

Work.defaultProps = {
  active: false,
}

export default Work

const WorkStaticQuery = graphql`
  query workStaticQuery {
    strapiPage(slug: { eq: "/work" }) {
      name
      description
      slug
      full
      free
    }

    allStrapiWork(sort: { fields: [datePublished], order: DESC }) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`
