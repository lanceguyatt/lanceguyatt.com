import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './style'

const MenuBar = props => {
  const { children } = props
  return <Wrapper {...props}>{children}</Wrapper>
}

MenuBar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MenuBar
