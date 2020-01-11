import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Box, Flex } from '@theme-ui/components'

import { Window, Disk, Drive } from '../components'

const WorkBenchQuery = graphql`
  query workBenchQuery {
    contentfulPage(id: { eq: "faa63991-cf4d-50e6-926f-86475620b3d9" }) {
      ...page
    }
  }
`

const WorkBenchTemplate = ({ data, active }) => {
  const { contentfulPage } = data
  return (
    <Window {...contentfulPage} level0 active={active} close="/kickstart">
      <nav>
        <Disk as={Link} to="/ram-disk">
          Ram Disk
        </Disk>
        <Drive name="Work" to="/work" />
        <Drive name="About" to="/about" />
      </nav>
    </Window>
  )
}

WorkBenchTemplate.propTypes = {
  data: PropTypes.shape().isRequired,
  active: PropTypes.bool,
  backdrop: PropTypes.bool
}

WorkBenchTemplate.defaultProps = {
  active: false,
  backdrop: false
}

const WorkBench = ({ active, backdrop }) => (
  <StaticQuery
    query={WorkBenchQuery}
    render={data => (
      <WorkBenchTemplate data={data} active={active} backdrop={backdrop} />
    )}
  />
)

WorkBench.propTypes = {
  active: PropTypes.bool,
  backdrop: PropTypes.bool
}

WorkBench.defaultProps = {
  active: false,
  backdrop: true
}

export default WorkBench
