import React from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import { WorkBench as WB } from '../containers'
import { TitleBar } from '../components'
import { Flex } from '../components/common'

const WorkBench = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Flex flexDirection="column" height="100%">
        <TitleBar />
        <Flex flexDirection="column" height="100%" position="relative">
          <WB />
          {children}
        </Flex>
      </Flex>
      <GlobalStyle />
    </>
  </ThemeProvider>
)

WorkBench.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WorkBench
