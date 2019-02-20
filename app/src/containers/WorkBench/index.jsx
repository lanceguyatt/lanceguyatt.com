import React from 'react'
import styled from 'styled-components'

import { Disk, Drive, Flex } from '../../components/common'
import { TitleBar, Window } from '../../components'

const Wrapper = styled(Flex).attrs({
  minHeight: '100vh',
  flexDirection: 'column',
  bg: 'gray.2',
})``

const WorkBench = () => (
  <Wrapper>
    <TitleBar bg="dark" color="gray.2" borderColor="dark" />
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
