import React, { useState } from 'react'
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
    background-color: ${props => props.theme.colors.black};
    appearance: none;
  }
`

function Slider(props) {
  const [value, setValue] = useState(50)

  function handleChange(event) {
    setValue(event.target.value)
  }

  return (
    <Wrapper
      is="input"
      type="range"
      value={value}
      onChange={handleChange}
      {...props}
    />
  )
}

export default Slider
