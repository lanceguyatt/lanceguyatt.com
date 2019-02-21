import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Directory from './Directory'
import { Window } from './index'
import { Flex } from './common'

const edgeToArray = data => data.edges.map(edge => edge.node)

const Wrapper = styled(Flex).attrs({
  position: 'absolute',
  top: ['2.2rem', null, '50%'],
  right: [0, null, 'auto'],
  bottom: [0, null, 'auto'],
  left: [0, null, '50%'],
  width: [1, null, 1 / 2],
  height: [null, null, '50rem'],
})`
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    transform: translate(-50%, -50%);
  }
`

const Work = ({ name, full }) => (
  <StaticQuery
    query={WorkStaticQuery}
    render={data => (
      <Wrapper>
        <Window name={name} full={full}>
          <Directory basepath="/work" list={edgeToArray(data.allStrapiWork)} />
        </Window>
      </Wrapper>
    )}
  />
)

Work.propTypes = {
  name: PropTypes.string,
  full: PropTypes.string,
}

Work.defaultProps = {
  name: null,
  full: null,
}

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
