import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import { Styled } from 'theme-ui'
import { Box } from '@theme-ui/components'

import { Wrapper, AmigaTick, DiskDrive, FloppyDisk } from './style'

const KickStartStaticQuery = graphql`
  query kickstartStaticQuery {
    site {
      siteMetadata {
        author
        copyrightYear
      }
    }
  }
`

const KickStartTemplate = ({ data }) => {
  const { site } = data
  const { siteMetadata } = site
  const { copyrightYear, author } = siteMetadata
  return (
    <Wrapper as="main">
      <Box __css={{ width: 180, ml: [null, null, 6], mb: 6 }}>
        <AmigaTick />
        <Styled.p>
          2.0 Roms (37.350)
          <br />
          {`Copyright © 2000-${copyrightYear}`}
        </Styled.p>
        <Styled.h1>{author}, Inc.</Styled.h1>
        <Styled.p>All Rights Reserved</Styled.p>
      </Box>

      <Box
        __css={{
          height: 169,
          width: 156,
          mr: [null, null, 6],
          mb: [null, null, 6],
          position: 'relative'
        }}
      >
        <Link to="/" aria-label="Return to Workbench">
          <DiskDrive />
          <FloppyDisk />
        </Link>
      </Box>
    </Wrapper>
  )
}

KickStartTemplate.propTypes = {
  data: PropTypes.shape().isRequired
}

const KickStart = () => (
  <StaticQuery
    query={KickStartStaticQuery}
    render={data => <KickStartTemplate data={data} />}
  />
)

export default KickStart
