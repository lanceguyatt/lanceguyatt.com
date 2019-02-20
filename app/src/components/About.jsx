import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Directory from './Directory'

const edgeToArray = data => data.edges.map(edge => edge.node)

const Wrapper = ({ data: { allStrapiAbout } }) => (
  <Directory basepath="/about" list={edgeToArray(allStrapiAbout)} />
)

Wrapper.propTypes = {
  data: PropTypes.shape().isRequired,
}

const About = props => (
  <StaticQuery
    query={AboutStaticQuery}
    render={data => <Wrapper data={data} {...props} />}
  />
)

export default About

const AboutStaticQuery = graphql`
  query aboutStaticQuery {
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
