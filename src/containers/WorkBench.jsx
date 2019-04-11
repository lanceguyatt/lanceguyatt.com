import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Box, Flex } from '../primitives'
import { Window, Disk, Drive } from '../components'

const WorkBench = ({ active, backdrop }) => (
  <StaticQuery
    query={WorkBenchQuery}
    render={data =>
      backdrop ? (
        <Window {...data.strapiPage} level0 active={active} close="/kickstart">
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

const WorkBenchQuery = graphql`
  query workBenchQuery {
    strapiPage(slug: { eq: "/" }) {
      name
      description
      slug
      full
      free
    }
  }
`
