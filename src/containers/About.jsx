import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Window, Directory } from '../components'

const edgeToArray = data => data.edges.map(edge => edge.node)

const About = () => (
  <StaticQuery
    query={AboutStaticQuery}
    render={data => (
      <Window {...data.strapiPage} level1>
        <Directory basepath="/about" list={edgeToArray(data.allStrapiAbout)} />
      </Window>
    )}
  />
)

export default About

const AboutStaticQuery = graphql`
  query aboutStaticQuery {
    strapiPage(slug: { eq: "/about" }) {
      name
      description
      slug
      full
      free
    }

    allStrapiAbout {
      edges {
        node {
          id
          name
          url
        }
      }
    }
  }
`
