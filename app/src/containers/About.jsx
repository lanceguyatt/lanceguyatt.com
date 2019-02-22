import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Directory from '../components/Directory'
import { Window } from '../components/index'
import { Flex } from '../components/common'

const edgeToArray = data => data.edges.map(edge => edge.node)

const Wrapper = styled(Flex).attrs({
  position: 'absolute',
  top: [0, null, '50%'],
  right: [0, null, 'auto'],
  bottom: [0, null, 'auto'],
  left: [0, null, '50%'],
  width: [1, null, 1 / 2],
  height: [null, null, '50rem'],
  zIndex: 1,
})`
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    transform: translate(-50%, -50%);
  }
`

const About = () => (
  <StaticQuery
    query={AboutStaticQuery}
    render={data => (
      <Wrapper>
        <Window {...data.strapiPage}>
          <Directory
            basepath="/about"
            list={edgeToArray(data.allStrapiAbout)}
          />
        </Window>
      </Wrapper>
    )}
  />
)

About.propTypes = {
  name: PropTypes.string,
  full: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

About.defaultProps = {
  name: null,
  full: null,
}

export default About

const AboutStaticQuery = graphql`
  query aboutStaticQuery {
    strapiPage(slug: { eq: "/about" }) {
      name
      description
      slug
      full
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
