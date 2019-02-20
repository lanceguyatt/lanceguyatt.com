import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Directory from './Directory'

const edgeToArray = data => data.edges.map(edge => edge.node)

const Work = () => (
  <StaticQuery
    query={WorkStaticQuery}
    render={data => (
      <Directory basepath="/work" list={edgeToArray(data.allStrapiWork)} />
    )}
  />
)

export default Work

const WorkStaticQuery = graphql`
  query workStaticQuery {
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
