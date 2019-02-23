import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import { Flex, Box } from './common'

const Name = styled(Box).attrs({
  mx: 3,
  flex: 1,
  lineHeight: 1,
})`
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
`
const Wrapper = styled(Flex).attrs({
  bg: 'dark',
  color: 'secondary',
  borderColor: 'dark',
  height: '2.2rem',
  alignItems: 'center',
  borderTop: 2,
  borderBottom: 2,
})``

const TitleBar = ({
  data: {
    site: {
      siteMetadata: { title, copyright },
    },
  },
}) => (
  <Wrapper>
    <Name>
      {title} {copyright}
    </Name>
  </Wrapper>
)

export default props => (
  <StaticQuery
    query={TitleBarQuery}
    render={data => <TitleBar data={data} />}
  />
)

TitleBar.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        copyright: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
}

const TitleBarQuery = graphql`
  query titleBarQuery {
    site {
      siteMetadata {
        title
        copyright
      }
    }
  }
`
