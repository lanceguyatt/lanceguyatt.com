import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Window, Directory } from '../components'

const edgeToArray = data => data.edges.map(edge => edge.node)

const About = ({ active }) => (
  <StaticQuery
    query={AboutStaticQuery}
    render={data => (
      <Window {...data.strapiPage} level1 active={active}>
        <Directory basepath="/about" list={edgeToArray(data.allStrapiAbout)} />
      </Window>
    )}
  />
)

About.propTypes = {
  active: PropTypes.bool,
}

About.defaultProps = {
  active: false,
}

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
