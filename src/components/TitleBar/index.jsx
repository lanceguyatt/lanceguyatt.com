import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import { Name, Wrapper } from './style'

const TitleBarTemplate = ({
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

TitleBarTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        copyright: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
}

const TitleBar = () => (
  <StaticQuery
    query={TitleBarQuery}
    render={data => <TitleBarTemplate data={data} />}
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
