import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import { WorkBench as WB } from '../containers'
import { TitleBar } from '../components'
import { Box } from '../components/common'

class WorkBench extends Component {
  state = {
    height: '100vh',
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  updateDimensions = () => {
    this.setState({ height: window.innerHeight })
  }

  render() {
    const { height } = this.state
    const { children } = this.props
    return (
      <ThemeProvider theme={theme}>
        <>
          <Box height={height}>
            <TitleBar />
            <Box height="calc(100% - 2.2rem)" position="relative">
              <WB />
              {children}
            </Box>
          </Box>
          <GlobalStyle />
        </>
      </ThemeProvider>
    )
  }
}

WorkBench.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WorkBench
