import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

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

const TitleBar = () => (
  <StaticQuery
    query={TitleBarQuery}
    render={data => {
      const { site } = data
      const { siteMetadata } = site
      const { title, copyright } = siteMetadata
      return (
        <Wrapper>
          <Name>
            {title} {copyright}
          </Name>
        </Wrapper>
      )
    }}
  />
)

export default TitleBar

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
