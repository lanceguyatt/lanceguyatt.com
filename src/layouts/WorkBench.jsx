import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import { Box, Flex } from '../primitives'
import { workbench } from '../styles/theme'
import GlobalStyle from '../styles/global'
import {
  TitleBar,
  MenuBar,
  Menu,
  MenuItem,
  Requester,
  Action,
} from '../components'

const Wrapper = styled(Box)``

class WorkBench extends Component {
  state = {
    menuBarActive: false,
    quitWorkbench: false,
  }

  handleRightClick = e => {
    e.preventDefault()
    this.setState(prevState => ({
      menuBarActive: !prevState.menuBarActive,
    }))
  }

  closeMenuBar = () => {
    this.setState({ menuBarActive: false })
  }

  handleQuit = () => {
    this.setState({ quitWorkbench: true })
  }

  handleAbout = () => {
    this.setState({ about: true })
  }

  quit = () => {
    this.setState({
      menuBarActive: false,
      quitWorkbench: false,
    })
  }

  about = () => {
    this.setState({
      menuBarActive: false,
      about: false,
    })
  }

  init = () => {
    document.addEventListener('contextmenu', this.handleRightClick)
    document.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        this.closeMenuBar()
      }
    })
  }

  componentDidMount = () => {
    this.init()
  }

  componentWillUnMount = () => {
    this.init()
  }

  render() {
    const { children } = this.props
    const { menuBarActive, quitWorkbench, about } = this.state
    return (
      <ThemeProvider theme={workbench}>
        <Wrapper>
          <GlobalStyle />
          {menuBarActive ? (
            <MenuBar>
              <Menu name="Workbench">
                <MenuItem name="Backdrop..." shortcut="B" ghosted />
                <MenuItem name="Execute command..." shortcut="E" ghosted />
                <MenuItem name="Redraw All" ghosted />
                <MenuItem name="Update All" ghosted />
                <MenuItem name="Last Message" ghosted />
                <MenuItem
                  name="About..."
                  shortcut="A"
                  onClick={e => {
                    e.preventDefault()
                    this.handleAbout()
                  }}
                />
                <MenuItem
                  name="Quit..."
                  shortcut="Q"
                  onClick={this.handleQuit}
                />
              </Menu>
              <Menu name="Window" ghosted />
              <Menu name="Icons">
                <MenuItem name="Open" shortcut="O" ghosted />
                <MenuItem name="Copy" shortcut="C" ghosted />
                <MenuItem name="Rename..." shortcut="R" ghosted />
                <MenuItem name="Information..." shortcut="I" ghosted />
                <MenuItem name="Snapshot" shortcut="S" ghosted />
                <MenuItem name="UnSnapshot" shortcut="U" ghosted />
                <MenuItem name="Leave Out" shortcut="L" ghosted />
                <MenuItem name="Put Away" shortcut="P" ghosted />
                <div>...............</div>
                <MenuItem name="Delete..." ghosted />
                <MenuItem name="Format Disk..." ghosted />
                <MenuItem name="Empty Trash" ghosted />
              </Menu>
              <Menu name="Tools" ghosted />
            </MenuBar>
          ) : (
            <TitleBar />
          )}
          {children}
          {about && (
            <Requester
              width="25.8rem"
              description={`
                <p>
                  Kickstart version 37.350
                  <br />
                  Workbench version 37.67
                </p>
                <p>
                  Copyright &copy; 2000-2019
                  <br />
                  Lance Guyatt, Inc.
                  <br />
                  All Rights Reserved
                </p>
              `}
              actions={
                <Box mx="auto">
                  <Action name="OK" onClick={this.about} />
                </Box>
              }
            />
          )}
          {quitWorkbench && (
            <Requester
              width="21rem"
              description="Do you really want to quit workbench?"
              actions={
                <Flex justifyContent="space-between">
                  <Action name="OK" url="/kickstart" />
                  <Action name="CANCEL" onClick={this.quit} />
                </Flex>
              }
            />
          )}
        </Wrapper>
      </ThemeProvider>
    )
  }
}

WorkBench.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WorkBench
