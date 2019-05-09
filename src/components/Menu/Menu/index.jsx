import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { MenuToggle, MenuList, Wrapper } from './style'

class Menu extends Component {
  state = {
    menuActive: false,
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.node,
    ghosted: PropTypes.bool,
  }

  static defaultProps = {
    children: null,
    ghosted: false,
  }

  menuOpen = () => {
    this.setState({ menuActive: true })
  }

  menuClose = () => {
    this.setState({ menuActive: false })
  }

  render = () => {
    const { menuActive } = this.state
    const { id, name, children, ghosted } = this.props
    return (
      <Wrapper
        onMouseEnter={this.menuOpen}
        onMouseLeave={this.menuClose}
        onFocus={this.menuOpen}
        onBlur={this.menuClose}
        menuActive={menuActive}
        // tabIndex={!ghosted ? -1 : 0}
        role="menu"
        aria-labelledby={id}
        {...ghosted}
      >
        <MenuToggle type="button" role="button" id={id} tabIndex={0}>
          {name}
        </MenuToggle>
        {children && <MenuList is="ul">{children}</MenuList>}
      </Wrapper>
    )
  }
}

export default Menu
