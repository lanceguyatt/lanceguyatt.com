import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MenuItem from '../MenuItem'
import { MenuToggle, MenuList, Wrapper } from './style'

class Menu extends Component {
  state = {
    menuActive: false,
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    items: PropTypes.array,
  }

  static defaultProps = {
    items: null,
  }

  showMenu = () => {
    this.setState({ menuActive: true })
  }

  hideMenu = () => {
    this.setState({ menuActive: false })
  }

  render() {
    const { menuActive } = this.state
    const { name, items } = this.props
    return (
      <Wrapper
        onMouseEnter={this.showMenu}
        onMouseLeave={this.hideMenu}
        menuActive={menuActive}
        {...this.props}
      >
        <MenuToggle tabIndex={0}>{name}</MenuToggle>
        {items && (
          <MenuList is="nav">
            {items.map(item => (
              <MenuItem key={item.name} {...item} />
            ))}
          </MenuList>
        )}
      </Wrapper>
    )
  }
}

export default Menu
