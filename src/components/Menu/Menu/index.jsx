import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { MenuToggle, MenuList, Wrapper } from './style'

class Menu extends Component {
  state = {
    menuActive: false,
  }

  static propTypes = {
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
    const { name, children, ghosted } = this.props
    return (
      <Wrapper
        onMouseEnter={this.menuOpen}
        onMouseLeave={this.menuClose}
        onFocus={this.menuOpen}
        menuActive={menuActive}
        tabIndex={!ghosted ? 0 : null}
        type="button"
        role="button"
        {...ghosted}
      >
        <MenuToggle type="button" role="button">
          {name}
        </MenuToggle>
        {children && <MenuList is="ul">{children}</MenuList>}
      </Wrapper>
    )
  }
}

export default Menu
