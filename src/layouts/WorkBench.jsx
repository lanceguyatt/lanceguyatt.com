import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import { Box, Flex } from '../primitives'
import { workbench } from '../styles/theme'
import GlobalStyle from '../styles/global'
import { WorkBench as WB } from '../containers'
import { Action, MenuBar, Requester, Text, TitleBar } from '../components'
import SubMenu, { SubMenuItem } from '../components/SubMenu'
import Menu, { MenuItem } from '../components/Menu'

function WorkBench({ children }) {
  const [menuBar, setMenuBar] = useState(false)
  const [backdrop, setBackdrop] = useState(true)
  const [execute, setExecute] = useState(false)
  const [about, setAbout] = useState(false)
  const [quit, setQuit] = useState(false)
  const [viewBy, setViewBy] = useState('icons')

  function menuBarClose() {
    setMenuBar(false)
  }

  function menuBarToggle(e) {
    e.preventDefault()
    setMenuBar(menuBar === false && true)
  }

  function backdropToggle() {
    setBackdrop(backdrop === false && true)
    // localStorage.setItem('backdrop', backdrop)
    setMenuBar(false)
  }

  function executeOpen() {
    setExecute(true)
  }

  function executeClose() {
    setMenuBar(false)
    setExecute(false)
  }

  function aboutOpen() {
    setAbout(true)
  }

  function aboutClose() {
    setMenuBar(false)
    setAbout(false)
  }

  function quitOpen() {
    setQuit(true)
  }

  function quitClose() {
    setMenuBar(false)
    setQuit(false)
  }

  useEffect(() => {
    document.addEventListener('contextmenu', menuBarToggle)
    document.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        menuBarClose()
      }
    })
  })

  return (
    <ThemeProvider theme={workbench}>
      <>
        <GlobalStyle />
        <header>
          {menuBar ? (
            <MenuBar is="nav" aria-label="Workbench menu">
              <Menu id="workbench" name="Workbench">
                <MenuItem
                  name="Backdrop..."
                  shortcut="B"
                  active={!backdrop}
                  onClick={backdropToggle}
                />
                <MenuItem
                  name="Execute command..."
                  shortcut="E"
                  onClick={executeOpen}
                />
                <MenuItem name="Redraw All" ghosted />
                <MenuItem name="Update All" ghosted />
                <MenuItem name="Last Message" ghosted />
                <MenuItem name="About..." shortcut="?" onClick={aboutOpen} />
                <MenuItem name="Quit..." shortcut="Q" onClick={quitOpen} />
              </Menu>
              <Menu id="window" name="Window">
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
                    <SubMenuItem
                      name="Icon"
                      active
                      onClick={() => setViewBy('icon')}
                    />
                    <SubMenuItem
                      name="Name"
                      onClick={() => setViewBy('name')}
                    />
                    <SubMenuItem
                      name="Date"
                      onClick={() => setViewBy('date')}
                    />
                    <SubMenuItem
                      name="Size"
                      onClick={() => setViewBy('size')}
                    />
                  </SubMenu>
                </MenuItem>
              </Menu>
              <Menu id="icons" name="Icons">
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
              <Menu id="tools" name="Tools">
                <MenuItem name="Reset WB" />
              </Menu>
            </MenuBar>
          ) : (
            <TitleBar />
          )}
        </header>
        <main>
          <WB active backdrop={backdrop} view={viewBy} />
          {children}
        </main>

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
              <Action name="Ok" onClick={executeClose} />
              <Action name="Cancel" onClick={executeClose} />
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
              <Action name="OK" onClick={aboutClose} />
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
              <Action name="Cancel" onClick={quitClose} />
            </Flex>
          </>
        </Requester>
      </>
    </ThemeProvider>
  )
}

WorkBench.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WorkBench
