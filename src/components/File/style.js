import styled from 'styled-components'

import { Box } from '../../primitives'
import sprite from './sprite.svg'

export const Image = styled(Box).attrs({
  width: 46,
  height: 62,
  backgroundImage: `url(${sprite})`,
  backgroundSize: 'cover',
  mb: 3,
  mx: 'auto'
})``

export const Name = styled(Box).attrs({
  textAlign: 'center'
})``

export const Link = styled(Box).attrs({
  is: 'a',
  target: '_blank',
  rel: 'noopener noreferrer',
  display: 'block',
  mb: 4,
  width: '10rem'
})`
  &:focus,
  &:active {
    ${Image} {
      background-position: -4.6rem 0;
    }
  }
`
