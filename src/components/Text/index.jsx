import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Box } from '../../primitives'
import image from './image.svg'

const Wrapper = styled(Box).attrs({
  border: 2,
  height: '2.4rem',
  lineHeight: '2rem',
  p: 2,
})`
  border-image: url(${image}) 2;
`

class Text extends Component {
  state = {
    value: '',
  }

  render = () => {
    const { value } = this.state
    return (
      <Wrapper is="input" type="text" value={value} readOnly {...this.props} />
    )
  }
}

Text.propTypes = {
  value: PropTypes.string,
}

Text.defaultProps = {
  value: '',
}

export default Text
