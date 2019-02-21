import React from 'react'
import styled from 'styled-components'

import { Window } from '../../components'
import { Disk, Drive, Flex } from '../../components/common'

const Wrapper = styled(Flex).attrs({
  flexDirection: 'column',
  position: 'absolute',
  top: '2.2rem',
  left: 0,
  right: 0,
  bottom: 0,
})``

const WorkBench = () => (
  <Wrapper>
    <Window name="Workbench" close="/kickstart">
      <Flex justifyContent="flex-start">
        <Flex is="nav" flexDirection="column" alignItems="center">
          <Disk name="Ram Disk" to="/ram-disk" />
          <Drive name="Work" to="/work" />
          <Drive name="About" to="/about" />
        </Flex>
      </Flex>
    </Window>
  </Wrapper>
)

export default WorkBench
