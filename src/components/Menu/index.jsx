import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { MenuToggle, MenuList, Wrapper } from './style'

class Menu extends Component {
  state = {
    menuListActive: false,
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

  showMenuList = () => {
    this.setState({ menuListActive: true })
  }

  hideMenuList = () => {
    this.setState({ menuListActive: false })
  }

  render() {
    const { menuListActive } = this.state
    const { name, children, ghosted } = this.props
    return (
      <Wrapper
        onMouseEnter={this.showMenuList}
        onMouseLeave={this.hideMenuList}
        onFocus={this.showMenuList}
        menuListActive={menuListActive}
        tabIndex={!ghosted ? 0 : null}
        type="button"
        role="button"
        {...ghosted}
        {...this.props}
      >
        <MenuToggle>{name}</MenuToggle>
        {children && <MenuList is="nav">{children}</MenuList>}
      </Wrapper>
    )
  }
}

export default Menu
