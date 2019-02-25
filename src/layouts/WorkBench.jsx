import React from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import { workbench } from '../styles/theme'
import GlobalStyle from '../styles/global'
import { TitleBar } from '../components'

const WorkBench = ({ children }) => (
  <ThemeProvider theme={workbench}>
    <>
      <GlobalStyle />
      <TitleBar />
      {children}
    </>
  </ThemeProvider>
)

WorkBench.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WorkBench
