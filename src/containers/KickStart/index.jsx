import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

import { Wrapper, AmigaTick, DiskDrive, FloppyDisk } from './style'
import { Box } from '../../primitives'

const KickStartTemplate = ({ data }) => {
  const { site } = data
  const { siteMetadata } = site
  const { copyrightYear, author } = siteMetadata
  return (
    <Wrapper>
      <Box width="18rem" ml={[null, null, 6]} mb={6}>
        <Link to="/">
          <AmigaTick />
          2.0 Roms (37.350)
          <br />
          {`Copyright © 2000-${copyrightYear}`}
          <br />
          {author}, Inc.
          <br />
          All Rights Reserved
        </Link>
      </Box>

      <Box
        height="16.9rem"
        width="15.6rem"
        mr={[null, null, 6]}
        mb={[null, null, 6]}
        position="relative"
      >
        <Link to="/">
          <DiskDrive>
            <g fill="none" fillRule="evenodd">
              <path fill="#E0A080" d="M0 0h156v38H0z" />
              <path fill="#000" d="M25 28h8v2h-8zM8 6h140v8H8z" />
              <path
                d="M118 22h1v8h-1v-8zm1 0h24v2h-24v-2zm23 2h1v2h-1v-2z"
                fill="#AD7967"
              />
            </g>
          </DiskDrive>
          <FloppyDisk>
            <g fill="none" fillRule="evenodd">
              <path d="M18 2V0h16v41h2v1H16v-2h-2V2h4z" fill="#202060" />
              <path
                d="M128 6V4h2v2h2v2h2v112H0V4h2V2h2V0h10v40h2v2h86v-1h2V2h2V0h20v2h2v4zm0 2h4z"
                fill="#203080"
              />
              <path
                d="M16 54v-2h104v2h2v66H14V54h2zM4 110h6v4H4z"
                fill="#202060"
              />
              <path d="M102 41v1H36v-1h-2V0h70v41h-2z" fill="#948976" />
              <path fill="#202060" d="M75 8h14v30H75z" />
              <path d="M18 58v-4h100v4h2v62H16V58h2z" fill="#FFF" />
              <path
                d="M6 8V6h2v2h1v2h1v2H8v4H6v-4H4v-2h1V8h1z"
                fill="#202060"
              />
            </g>
          </FloppyDisk>
        </Link>
      </Box>
    </Wrapper>
  )
}

KickStartTemplate.propTypes = {
  data: PropTypes.shape().isRequired,
}

const KickStart = () => (
  <StaticQuery
    query={KickStartStaticQuery}
    render={data => <KickStartTemplate data={data} />}
  />
)

export default KickStart

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
