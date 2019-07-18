import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Flex } from '../../primitives'

const Wrapper = styled(Flex).attrs({
  bg: 'black',
  colors: 'secondary',
  alignItems: 'flex-start',
  borderColor: 'black',
  height: '2.2rem',
  position: 'relative',
  zIndex: 3,
})``

const MenuBar = props => {
  const { children } = props
  return <Wrapper {...props}>{children}</Wrapper>
}

MenuBar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MenuBar
