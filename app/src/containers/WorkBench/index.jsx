import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Disk, Drive, Flex } from '../../components/common'
import { TitleBar, Window } from '../../components'

const Wrapper = styled(Flex).attrs({
  minHeight: '100vh',
  flexDirection: 'column',
  bg: 'gray.2',
})``

const WorkBench = ({ name, children }) => (
  <Wrapper>
    <TitleBar bg="dark" color="gray.2" borderColor="dark" />
    <Window name={name} close="/kickstart">
      <Flex justifyContent="flex-start">
        <Flex is="nav" flexDirection="column" alignItems="center">
          <Disk name="Ram Disk" to="/ram-disk" />
          <Drive name="Work" to="/work" />
          <Drive name="About" to="/about" />
        </Flex>
      </Flex>
    </Window>
    {/* <Children
      position="absolute"
      top={[22, 600]}
      left={[0, 50]}
      flexDirection="column"
      flex={1}
      border={1}
      right={[0, 'auto']}
      bottom={[0, 'auto']}
      width={[null, 300]}
      height={[null, 400]}
      zIndex={1}
    > */}
    {children}
    {/* </Children> */}
  </Wrapper>
)

WorkBench.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
}

WorkBench.defaultProps = {
  name: 'Workbench',
  children: null,
}

export default WorkBench
