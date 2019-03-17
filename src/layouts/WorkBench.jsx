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
    execute: false,
    about: false,
    quit: false,
  }

  toggleMenuBar = e => {
    e.preventDefault()
    this.setState(prevState => ({
      menuBarActive: !prevState.menuBarActive,
    }))
  }

  closeMenuBar = () => {
    this.setState({ menuBarActive: false })
  }

  openExecute = () => {
    this.setState({ execute: true })
  }

  closeExecute = () => {
    this.setState({
      menuBarActive: false,
      execute: false,
    })
  }

  openAbout = () => {
    this.setState({ about: true })
  }

  closeAbout = () => {
    this.setState({
      menuBarActive: false,
      about: false,
    })
  }

  openQuit = () => {
    this.setState({ quit: true })
  }

  closeQuit = () => {
    this.setState({
      menuBarActive: false,
      quit: false,
    })
  }

  init = () => {
    document.addEventListener('contextmenu', this.toggleMenuBar)
    document.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        this.closeMenuBar()
      }
    })
  }

  componentDidMount = () => {
    this.init()
  }

  render() {
    const { children } = this.props
    const { menuBarActive, execute, about, quit } = this.state
    return (
      <ThemeProvider theme={workbench}>
        <Wrapper>
          <GlobalStyle />
          {menuBarActive ? (
            <MenuBar>
              <Menu name="Workbench">
                <MenuItem name="Backdrop..." shortcut="B" ghosted />
                <MenuItem
                  name="Execute command..."
                  shortcut="E"
                  onClick={() => this.openExecute()}
                />
                <MenuItem name="Redraw All" ghosted />
                <MenuItem name="Update All" ghosted />
                <MenuItem name="Last Message" ghosted />
                <MenuItem
                  name="About..."
                  shortcut="A"
                  onClick={() => this.openAbout()}
                />
                <MenuItem
                  name="Quit..."
                  shortcut="Q"
                  onClick={() => this.openQuit()}
                />
              </Menu>
              <Menu name="Window">
                <MenuItem name="New Drawer" shortcut="N" />
                <MenuItem name="Open Parent" />
                <MenuItem name="Close" shortcut="K" />
                <MenuItem name="Update" />
                <MenuItem name="Select Contents" shortcut="A" />
                <MenuItem name="Clean Up" />
                <MenuItem name="Snapshot" />
                <MenuItem name="Show" />
                <MenuItem name="View By" />
              </Menu>
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

          <Requester
            show={execute}
            name="Execute a File"
            actions={
              <Flex justifyContent="space-between">
                <Action name="OK" url="/kickstart" />
                <Action name="CANCEL" onClick={() => this.closeExecute()} />
              </Flex>
            }
          >
            Enter Command and its Arguments:
          </Requester>

          <Requester
            show={about}
            name="Workbench"
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
                <Action name="OK" onClick={() => this.closeAbout()} />
              </Box>
            }
          />

          <Requester
            show={quit}
            name="Quit Workbench Request"
            description="Do you really want to quit workbench?"
            width="21rem"
            actions={
              <Flex justifyContent="space-between">
                <Action name="OK" url="/kickstart" />
                <Action name="CANCEL" onClick={() => this.closeQuit()} />
              </Flex>
            }
          />
        </Wrapper>
      </ThemeProvider>
    )
  }
}

WorkBench.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WorkBench
