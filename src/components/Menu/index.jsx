import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Box } from '../../primitives'
// import Flex from '../Flex'

const MenuLink = styled(Link)``

const MenuList = styled(Box).attrs({
  bg: 'dark',
  color: 'secondary',
  p: 2,
  border: 2,
  borderColor: 'secondary',
})`
  a {
    color: ${props => props.theme.colors.secondary};
    display: block;
    transition-property: background-color, color;
    transition-duration: 0.25s;
    padding: 0 2px;

    svg {
      background: lime;
    }

    &:focus,
    &:hover,
    &:active {
      background-color: ${props => props.theme.colors.light};
      color: ${props => props.theme.colors.primary};
    }
  }
`

const Wrapper = styled(Box).attrs({})`
  > div {
    color: red;
    padding: 0 0.4rem;
    display: block;

    &:hover,
    &:focus,
    &:active {
      background-color: ${props => props.theme.colors.light};
    }
  }
`

class Menu extends Component {
  state = {
    active: false,
  }

  componentDidMount = () => {
    this.init()
  }

  componentWillUnMount = () => {
    this.init()
  }

  init = () => {
    document.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        this.setState({ active: false })
      }
    })
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
      <Wrapper {...this.props} onMouseLeave={this.hideNav} active={active}>
        <div onMouseEnter={this.showNav}>Lance Guyatt - Web Developer</div>
        <MenuList is="nav" display={active ? 'block' : 'none'}>
          <MenuLink to="/">Backdrop...</MenuLink>
          <MenuLink to="/">Execute Command...</MenuLink>
          <MenuLink to="/">Redraw All</MenuLink>
          <MenuLink to="/">Update All</MenuLink>
          <MenuLink to="/">Last Message</MenuLink>
          <MenuLink to="/about">About</MenuLink>
          <MenuLink to="/kickstart">
            Quit...
            <Box is="svg" width="23px" height="16px" viewBox="0 0 23 16" mr={3}>
              <g fill="none" fillRule="evenodd">
                <path
                  d="M21,2 L23,2 L23,14 L21,14 L21,16 L2,16 L2,14 L0,14 L0,2 L2,2 L2,0 L21,0 L21,2 Z M18,12 L18,10 L18,6 L18,4 L18,2 L14,2 L14,4 L12,4 L12,6 L10,6 L10,8 L8,8 L8,10 L6,10 L6,12 L3,12 L3,14 L9,14 L9,12 L14,12 L14,14 L20,14 L20,12 L18,12 Z M15,10 L11,10 L11,8 L13,8 L13,6 L15,6 L15,10 Z"
                  fill="currentColor"
                />
              </g>
            </Box>
            Q
          </MenuLink>
        </MenuList>
      </Wrapper>
    )
  }
}

export default Menu
