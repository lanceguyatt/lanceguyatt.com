import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Window, Directory } from '../components'
import { edgeToArray } from '../utils'

const AboutQuery = graphql`
  query aboutQuery {
    contentfulPage(id: { eq: "790a38a5-2cff-5c43-aaed-7477aaa53409" }) {
      ...page
    }

    allContentfulAbout {
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

const AboutTemplate = ({ data, active }) => {
  const { contentfulPage, allContentfulAbout } = data
  return (
    <Window {...contentfulPage} level1 active={active}>
      <Directory basepath="/about" list={edgeToArray(allContentfulAbout)} />
    </Window>
  )
}

AboutTemplate.propTypes = {
  data: PropTypes.shape().isRequired,
  active: PropTypes.bool,
}

AboutTemplate.defaultProps = {
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
