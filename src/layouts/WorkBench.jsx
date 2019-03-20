import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import { Box, Flex } from '../primitives'
import { workbench } from '../styles/theme'
import GlobalStyle from '../styles/global'
import { WorkBench as WB } from '../containers'
import { Action, MenuBar, Requester, Text, TitleBar } from '../components'
import SubMenu, { SubMenuItem } from '../components/SubMenu'
import Menu, { MenuItem } from '../components/Menu'

const Wrapper = styled(Box)``

class WorkBench extends Component {
  state = {
    menuBarActive: false,
    backdrop: true,
    execute: false,
    about: false,
    quit: false,
  }

  menuBarToggle = e => {
    e.preventDefault()
    this.setState(prevState => ({
      menuBarActive: !prevState.menuBarActive,
    }))
  }

  backdropToggle = () => {
    this.setState(prevState => ({ backdrop: !prevState.backdrop }))
    this.menuBarClose()
  }

  menuBarClose = () => {
    this.setState({ menuBarActive: false })
  }

  executeOpen = () => {
    this.setState({ execute: true })
  }

  executeClose = () => {
    this.setState({
      menuBarActive: false,
      execute: false,
    })
  }

  aboutOpen = () => {
    this.setState({ about: true })
  }

  aboutClose = () => {
    this.setState({
      menuBarActive: false,
      about: false,
    })
  }

  quitOpen = () => {
    this.setState({ quit: true })
  }

  quitClose = () => {
    this.setState({
      menuBarActive: false,
      quit: false,
    })
  }

  componentDidMount = () => {
    this.init()
  }

  componentWillUnMount = () => {
    this.init()
  }

  init = () => {
    document.addEventListener('contextmenu', this.menuBarToggle)
    document.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        this.menuBarClose()
      }
    })
  }

  render() {
    const { children } = this.props
    const { menuBarActive, backdrop, execute, about, quit } = this.state
    return (
      <ThemeProvider theme={workbench}>
        <Wrapper>
          <GlobalStyle />
          {menuBarActive ? (
            <MenuBar>
              <Menu name="Workbench">
                <MenuItem
                  name="Backdrop..."
                  shortcut="B"
                  active={!backdrop}
                  onClick={this.backdropToggle}
                />
                <MenuItem
                  name="Execute command..."
                  shortcut="E"
                  onClick={this.executeOpen}
                />
                <MenuItem name="Redraw All" ghosted />
                <MenuItem name="Update All" ghosted />
                <MenuItem name="Last Message" ghosted />
                <MenuItem
                  name="About..."
                  shortcut="?"
                  onClick={this.aboutOpen}
                />
                <MenuItem name="Quit..." shortcut="Q" onClick={this.quitOpen} />
              </Menu>
              <Menu name="Window">
                <MenuItem name="New Drawer" shortcut="N" ghosted />
                <MenuItem name="Open Parent" />
                <MenuItem name="Close" shortcut="K" />
                <MenuItem name="Update" />
                <MenuItem name="Select Contents" shortcut="A" />
                <MenuItem name="Clean Up" />
                <MenuItem name="Snapshot" subMenu>
                  <SubMenu>
                    <SubMenuItem name="Window" />
                    <SubMenuItem name="All" />
                  </SubMenu>
                </MenuItem>
                <MenuItem name="Show" subMenu>
                  <SubMenu>
                    <SubMenuItem name="Only Icons" active />
                    <SubMenuItem name="All Files" />
                  </SubMenu>
                </MenuItem>
                <MenuItem name="View By" subMenu>
                  <SubMenu>
                    <SubMenuItem name="Icon" active />
                    <SubMenuItem name="Name" />
                    <SubMenuItem name="Date" />
                    <SubMenuItem name="Size" />
                  </SubMenu>
                </MenuItem>
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
              <Menu name="Tools">
                <MenuItem name="Reset WB" />
              </Menu>
            </MenuBar>
          ) : (
            <TitleBar />
          )}

          <WB active backdrop={backdrop} />

          {children}

          <Requester name="Execute a File" width="40rem" show={execute}>
            <>
              <Box mb={4}>Enter Command and its Arguments:</Box>
              <Flex alignItems="center" mb={4}>
                <Box flex="none" color="light" mr={4}>
                  Command:
                </Box>
                <Text autoFocus flex="auto" />
              </Flex>
              <Flex justifyContent="space-between">
                <Action name="Ok" onClick={this.executeClose} />
                <Action name="Cancel" onClick={this.executeClose} />
              </Flex>
            </>
          </Requester>

          <Requester name="Workbench" width="25.8rem" special show={about}>
            <>
              <p>
                Kickstart version 37.350
                <br />
                Workbench version 37.67
                <br />
                <br />
                Copyright &copy; 2000-2019
                <br />
                Lance Guyatt, Inc.
                <br />
                All Rights Reserved
              </p>
              <Box mx="auto">
                <Action name="OK" onClick={this.aboutClose} />
              </Box>
            </>
          </Requester>

          <Requester
            name="Quit Workbench Request"
            width="21rem"
            special
            show={quit}
          >
            <>
              <p>Do you really want to quit workbench?</p>
              <Flex justifyContent="space-between">
                <Action name="Ok" url="/kickstart" />
                <Action name="Cancel" onClick={this.quitClose} />
              </Flex>
            </>
          </Requester>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

WorkBench.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WorkBench
