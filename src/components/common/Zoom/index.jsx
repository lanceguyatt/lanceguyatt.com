import React from 'react'
import styled from 'styled-components'

import { Box } from '../index'
import zoom from './zoom.svg'

const Wrapper = styled(Box).attrs({
  is: 'button',
  width: '2.3rem',
  height: '2.2rem',
  backgroundImage: `url(${zoom})`,
})`
  &:active {
    background-color: ${props => props.theme.colors.primary};
    background-position: -2.3rem 0;
  }
`

const Zoom = props => <Wrapper title="Zoom" {...props} />

export default Zoom
