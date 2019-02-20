import React from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const Default = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      {children}
      <GlobalStyle />
    </>
  </ThemeProvider>
)

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default
