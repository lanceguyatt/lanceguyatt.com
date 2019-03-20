import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import { Name, Wrapper } from './style'
import { Depth } from '../index'

const TitleBarTemplate = props => {
  const { data } = props
  const { site } = data
  const { siteMetadata } = site
  return (
    <Wrapper>
      <Name>
        {siteMetadata.title}. Copyright © 2000-{siteMetadata.copyrightYear} All
        Rights Reserved
      </Name>
      <Depth bg="secondary" />
    </Wrapper>
  )
}

TitleBarTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        copyrightYear: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
}

const TitleBar = props => (
  <StaticQuery
    query={TitleBarQuery}
    render={data => <TitleBarTemplate data={data} {...props} />}
  />
)

export default TitleBar

const TitleBarQuery = graphql`
  query titleBarQuery {
    site {
      siteMetadata {
        title
        copyrightYear
      }
    }
  }
`
