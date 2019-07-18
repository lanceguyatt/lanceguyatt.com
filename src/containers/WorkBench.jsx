import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Box, Flex } from '../primitives'
import { Window, Disk, Drive } from '../components'

const WorkBenchQuery = graphql`
  query workBenchQuery {
    contentfulPage(id: { eq: "faa63991-cf4d-50e6-926f-86475620b3d9" }) {
      ...page
    }
  }
`

const WorkBenchTemplate = ({ data, active, backdrop }) => {
  const { contentfulPage } = data
  return backdrop ? (
    <Window {...contentfulPage} level0 active={active} close="/kickstart">
      <Flex is="nav" flexDirection="column">
        <Disk name="Ram Disk" to="/ram-disk" />
        <Drive name="Work" to="/work" />
        <Drive name="About" to="/about" />
      </Flex>
    </Window>
  ) : (
    <Box
      bg="secondary"
      p={4}
      position="absolute"
      top="2.2rem"
      right={0}
      bottom={0}
      left={0}
    >
      <Flex is="nav" flexDirection="column">
        <Disk name="Ram Disk" to="/ram-disk" />
        <Drive name="Work" to="/work" />
        <Drive name="About" to="/about" />
      </Flex>
    </Box>
  )
}

WorkBenchTemplate.propTypes = {
  data: PropTypes.shape().isRequired,
  active: PropTypes.bool,
  backdrop: PropTypes.bool,
}

WorkBenchTemplate.defaultProps = {
  active: false,
  backdrop: false,
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
  backdrop: PropTypes.bool,
}

WorkBench.defaultProps = {
  active: false,
  backdrop: true,
}

export default WorkBench
