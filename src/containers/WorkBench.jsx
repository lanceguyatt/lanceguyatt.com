import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Window } from '../components'
import { Flex, Disk, Drive } from '../components/common'

const WorkBench = () => (
  <StaticQuery
    query={WorkBenchQuery}
    render={data => {
      const { strapiPage } = data
      return (
        <Window {...strapiPage} close="/kickstart">
          <Flex is="nav" flexDirection="column">
            <Disk name="Ram Disk" to="/ram-disk" />
            <Drive name="Work" to="/work" />
            <Drive name="About" to="/about" />
          </Flex>
        </Window>
      )
    }}
  />
)

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
