import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Window, Directory } from '../components'

const edgeToArray = data => data.edges.map(edge => edge.node)

const Work = () => (
  <StaticQuery
    query={WorkStaticQuery}
    render={data => {
      const { strapiPage, allStrapiWork } = data
      return (
        <Window {...strapiPage} level1>
          <Directory basepath="/work" list={edgeToArray(allStrapiWork)} />
        </Window>
      )
    }}
  />
)

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
