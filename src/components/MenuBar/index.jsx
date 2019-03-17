import React from 'react'
import PropTypes from 'prop-types'

import { Menu } from '../index'
import { Wrapper } from './style'
import { workbench, window, icons, tools } from './data'

const MenuBar = () => (
  <Wrapper>
    <Menu {...workbench} />
    <Menu {...window} />
    <Menu {...icons} />
    <Menu {...tools} />
  </Wrapper>
)

MenuBar.propTypes = {
  active: PropTypes.bool,
}

MenuBar.defaultProps = {
  active: false,
}

export default MenuBar
