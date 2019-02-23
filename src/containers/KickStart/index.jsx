import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

import { Wrapper, Tick, DiskDrive, FloppyDisk } from './style'
import { Box } from '../../components/common'

const KickStart = ({ data }) => {
  const { site } = data
  const { siteMetadata } = site
  const { copyrightYear, author } = siteMetadata
  return (
    <Wrapper>
      <Box width="18rem" ml={[null, null, 6]} mb={6}>
        <Link to="/">
          <Tick alt="Amiga Tick logo" />
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
              <path
                d="M102 41h32v1h-32v-1zm20 13h12v66h-12V54zM4 0h10v2H4V0zM2 2h12v2H2V2zM0 4h14v116H0V4zm14 36h2v14h-2V40zm2 2h118v10H16V42zm104 10h14v2h-14v-2zM104 2h2v39h-2V2zm2-2h20v41h-20V0zm20 2h2v39h-2V2zm2 2h2v37h-2V4zm2 2h2v35h-2V6zm2 2h2v33h-2V8z"
                fill="#203080"
              />
              <path
                d="M16 40h18v2H16v-2zm18 1h2v1h-2v-1zM14 2h20v38H14V2zm4-2h16v2H18V0zm-4 54h108v66H14V54zm2-2h104v2H16v-2zM4 110h6v4H4z"
                fill="#202060"
              />
              <path d="M102 41h2V0H34v41h2v1h66v-1z" fill="#948976" />
              <path fill="#000" d="M75 8h14v30H75z" />
              <path d="M16 58h104v62H16V58zm2-4h100v4H18v-4z" fill="#fff" />
              <path
                d="M6 12h2v4H6v-4zm-2-2h6v2H4v-2zm1-2h4v2H5V8zm1-2h2v2H6V6z"
                fill="#000"
              />
            </g>
          </FloppyDisk>
        </Link>
      </Box>
    </Wrapper>
  )
}

KickStart.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default props => (
  <StaticQuery
    query={KickStartStaticQuery}
    render={data => <KickStart data={data} />}
  />
)

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
