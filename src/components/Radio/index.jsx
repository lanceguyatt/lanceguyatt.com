import React from 'react'
import styled from 'styled-components'

import { Box } from '../../primitives'
import sprite from './sprite.svg'

const Wrapper = styled(Box).attrs({
  is: 'input',
  type: 'radio',
  width: '1.7rem',
  height: '1.8rem',
  backgroundImage: `url(${sprite})`,
})`
  &:checked {
    background-position: -1.7rem 0;
  }
`

const Radio = props => <Wrapper {...props} />

export default Radio
