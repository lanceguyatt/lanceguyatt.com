import React, { Component } from 'react'
import styled from 'styled-components'

import { Box } from '../../primitives'
import sprite from './sprite.svg'

const Wrapper = styled(Box).attrs({
  border: 2,
  height: '2.4rem',
  lineHeight: '2rem',
  p: 2,
})`
  border-image: url(${sprite}) 2;
`

class Text extends Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  render() {
    const { value } = this.state
    return (
      <Wrapper
        is="input"
        type="text"
        value={value}
        onChange={this.handleChange}
        spellCheck="false"
        {...this.props}
      />
    )
  }
}

export default Text
