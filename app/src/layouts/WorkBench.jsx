import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { TitleBar, Window } from '../components'
import { Flex, Disk, Drive, Box } from '../components/common'

const Wrapper = styled(Box).attrs({
  position: 'absolute',
  top: '2.2rem',
  right: 0,
  bottom: 0,
  left: 0,
})``

const WorkBench = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <TitleBar />
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
        {children}
      </Wrapper>
      <GlobalStyle />
    </>
  </ThemeProvider>
)

WorkBench.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WorkBench
