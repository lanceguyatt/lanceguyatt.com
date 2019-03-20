import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Box } from '../../../primitives'
import { Wrapper } from './style'

class MenuItem extends Component {
  state = {
    menuItemActive: false,
  }

  menuItemOpen = () => {
    this.setState({ menuItemActive: true })
  }

  menuItemClose = () => {
    this.setState({ menuItemActive: false })
  }

  render() {
    const { menuItemActive } = this.state
    const { name, shortcut, ghosted, subMenu, children } = this.props
    return (
      <li>
        <Wrapper
          type="button"
          role="button"
          onMouseEnter={this.menuItemOpen}
          onMouseLeave={this.menuItemClose}
          tabIndex={!ghosted ? 0 : null}
          menuItemActive={menuItemActive}
          {...ghosted}
          {...this.props}
        >
          {name}
          {subMenu && <div>>></div>}
          {children}
          {shortcut && (
            <Box position="relative" pl="2.5rem" ml="1.2rem">
              <Box
                is="svg"
                width="2.3rem"
                height="1.6rem"
                viewBox="0 0 23 16"
                position="absolute"
                left={0}
                top="-0.1rem"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M21,2 L23,2 L23,14 L21,14 L21,16 L2,16 L2,14 L0,14 L0,2 L2,2 L2,0 L21,0 L21,2 Z M18,12 L18,10 L18,6 L18,4 L18,2 L14,2 L14,4 L12,4 L12,6 L10,6 L10,8 L8,8 L8,10 L6,10 L6,12 L3,12 L3,14 L9,14 L9,12 L14,12 L14,14 L20,14 L20,12 L18,12 Z M15,10 L11,10 L11,8 L13,8 L13,6 L15,6 L15,10 Z"
                    fill="currentColor"
                  />
                </g>
              </Box>
              {shortcut}
            </Box>
          )}
        </Wrapper>
      </li>
    )
  }
}

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  shortcut: PropTypes.string,
  ghosted: PropTypes.bool,
  subMenu: PropTypes.bool,
  children: PropTypes.node,
}

MenuItem.defaultProps = {
  url: '/',
  shortcut: null,
  ghosted: false,
  subMenu: false,
  children: null,
}

export default MenuItem
