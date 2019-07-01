import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import { workbench } from '../styles/theme'
import GlobalStyle from '../styles/global'

const Basic = props => {
  const { children } = props
  return (
    <ThemeProvider theme={workbench}>
      <>
        <GlobalStyle />
        <main>
          {children}
        </main>
      </>
    </ThemeProvider>
  )
}

Basic.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Basic
