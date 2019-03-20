import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box } from '../../../primitives'

const Wrapper = styled(Box).attrs({
  border: 2,
  borderColor: 'secondary',
  bg: 'black',
  p: 2,
  color: 'secondary',
  position: 'absolute',
  minWidth: '10rem',
  left: '100%',
  top: 0,
})``

class SubMenu extends Component {
  state = {
    subMenuActive: false,
  }

  render() {
    const { subMenuActive } = this.state
    const { children } = this.props
    return (
      <Wrapper is="ul" {...subMenuActive}>
        {children}
      </Wrapper>
    )
  }
}

SubMenu.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SubMenu
