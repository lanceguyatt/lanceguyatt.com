import React, { useState } from 'react'
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

function Text(props) {
  const [value, setValue] = useState('')

  function handleChange(event) {
    setValue(event.target.value)
  }

  return (
    <Wrapper
      is="input"
      type="text"
      value={value}
      onChange={handleChange}
      spellCheck="false"
      {...props}
    />
  )
}

export default Text
