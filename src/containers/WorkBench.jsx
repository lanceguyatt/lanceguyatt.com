import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Window } from '../components'
import { Flex, Disk, Drive } from '../components/common'

const WorkBench = ({ active }) => (
  <StaticQuery
    query={WorkBenchQuery}
    render={data => (
      <Window {...data.strapiPage} level0 active={active} close="/kickstart">
        <Flex is="nav" flexDirection="column">
          <Disk name="Ram Disk" to="/ram-disk" />
          <Drive name="Work" to="/work" />
          <Drive name="About" to="/about" />
        </Flex>
      </Window>
    )}
  />
)

WorkBench.propTypes = {
  active: PropTypes.bool,
}

WorkBench.defaultProps = {
  active: false,
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
