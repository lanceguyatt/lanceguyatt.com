import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Box } from '../../primitives'
import { MenuToggle, MenuLink, MenuList, Wrapper } from './style'

const Shortcut = props => {
  const { letter } = props
  return (
    <Box position="relative" pl="2.5rem" ml="1.2rem">
      <Box
        is="svg"
        width="2.3rem"
        height="1.6rem"
        viewBox="0 0 23 16"
        position="absolute"
        left={0}
        top="0"
      >
        <g fill="none" fillRule="evenodd">
          <path
            d="M21,2 L23,2 L23,14 L21,14 L21,16 L2,16 L2,14 L0,14 L0,2 L2,2 L2,0 L21,0 L21,2 Z M18,12 L18,10 L18,6 L18,4 L18,2 L14,2 L14,4 L12,4 L12,6 L10,6 L10,8 L8,8 L8,10 L6,10 L6,12 L3,12 L3,14 L9,14 L9,12 L14,12 L14,14 L20,14 L20,12 L18,12 Z M15,10 L11,10 L11,8 L13,8 L13,6 L15,6 L15,10 Z"
            fill="currentColor"
          />
        </g>
      </Box>
      {letter}
    </Box>
  )
}

Shortcut.propTypes = {
  letter: PropTypes.string.isRequired,
}

class Menu extends Component {
  state = {
    active: false,
  }

  showNav = () => {
    this.setState({ active: true })
  }

  hideNav = () => {
    this.setState({ active: false })
  }

  render() {
    const { active } = this.state
    return (
      <Wrapper
        onMouseLeave={this.hideNav}
        onMouseEnter={this.showNav}
        active={active}
        {...this.props}
      >
        <MenuToggle tabIndex={0}>Workbench</MenuToggle>
        <MenuList is="nav" display={active ? 'block' : 'none'}>
          <MenuLink to="/">
            Backdrop... <Shortcut letter="B" />
          </MenuLink>
          <MenuLink to="/">
            Execute Command... <Shortcut letter="E" />
          </MenuLink>
          <MenuLink to="/">Redraw All</MenuLink>
          <MenuLink to="/">Update All</MenuLink>
          <MenuLink to="/">Last Message</MenuLink>
          <MenuLink to="/about">About...</MenuLink>
          <MenuLink to="/kickstart">
            Quit... <Shortcut letter="Q" />
          </MenuLink>
        </MenuList>
      </Wrapper>
    )
  }
}

export default Menu
