import React, { Component } from 'react'
import styled from 'styled-components'

import { Box } from '../../primitives'
import image from './image.svg'

const Wrapper = styled(Box).attrs({
  border: 2,
  height: '2.2rem',
  p: 2,
})`
  border-image: url(${image}) 2;

  &::-webkit-slider-runnable-track {
  }

  &::-webkit-slider-thumb {
    height: 1.4rem;
    width: 1rem;
    background-color: ${props => props.theme.colors.dark};
    appearance: none;
  }
`

class Slider extends Component {
  state = {
    value: 50,
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  render() {
    const { value } = this.state
    return (
      <Wrapper
        is="input"
        type="range"
        value={value}
        onChange={this.handleChange}
        {...this.props}
      />
    )
  }
}

export default Slider
