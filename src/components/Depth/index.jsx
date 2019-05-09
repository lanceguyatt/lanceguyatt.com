import React from 'react'
import styled from 'styled-components'

import { Box } from '../../primitives'
import sprite from './sprite.svg'

const Wrapper = styled(Box).attrs({
  width: '2.3rem',
  height: '2.2rem',
  backgroundImage: `url(${sprite})`,
})`
  &:active {
    background-position: -2.3rem 0;
  }
`

const Depth = props => (
  <Wrapper is="button" type="button" aria-label="Depth" {...props} />
)

export default Depth
