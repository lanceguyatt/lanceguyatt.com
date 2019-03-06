import React from 'react'
import styled from 'styled-components'

import { Box } from '../../primitives'
import sprite from './sprite.svg'

const Wrapper = styled(Box).attrs({
  is: 'button',
  width: '2.3rem',
  height: '2.2rem',
  backgroundImage: `url(${sprite})`,
})`
  &:focus,
  &:active {
    background-position: -2.3rem 0;
    background-color: ${props => props.theme.colors.primary};
  }
`

const Depth = props => <Wrapper title="Depth" {...props} />

export default Depth
