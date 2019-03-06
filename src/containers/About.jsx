import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Window, Directory } from '../components'
import { edgeToArray } from '../utils'

const AboutTemplate = ({ data, active }) => {
  const { strapiPage, allStrapiAbout } = data
  return (
    <Window {...strapiPage} level1 active={active}>
      <Directory basepath="/about" list={edgeToArray(allStrapiAbout)} />
    </Window>
  )
}

AboutTemplate.propTypes = {
  data: PropTypes.shape(),
  active: PropTypes.bool,
}

AboutTemplate.defaultProps = {
  data: null,
  active: false,
}

const About = ({ active }) => (
  <StaticQuery
    query={AboutQuery}
    render={data => <AboutTemplate data={data} active={active} />}
  />
)

About.propTypes = {
  active: PropTypes.bool,
}

About.defaultProps = {
  active: false,
}

export default About

const AboutQuery = graphql`
  query aboutQuery {
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
