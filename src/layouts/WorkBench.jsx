import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import { workbench } from '../styles/theme'
import GlobalStyle from '../styles/global'
import { TitleBar, MenuBar } from '../components'

class WorkBench extends Component {
  state = {
    menuBarActive: false,
  }

  handleClick = e => {
    if (e.nativeEvent.which === 1) {
      this.setState({ menuBarActive: false })
    } else if (e.nativeEvent.which === 3) {
      e.preventDefault()
      this.setState({ menuBarActive: true })
    }
  }

  render() {
    const { children } = this.props
    const { menuBarActive } = this.state
    return (
      <ThemeProvider theme={workbench}>
        <div onClick={this.handleClick} onContextMenu={this.handleClick}>
          <GlobalStyle />
          {menuBarActive ? <MenuBar /> : <TitleBar />}
          {children}
        </div>
      </ThemeProvider>
    )
  }
}

WorkBench.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WorkBench
