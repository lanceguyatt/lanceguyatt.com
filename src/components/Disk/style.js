import styled from 'styled-components'
import { Link as GastbyLink } from 'gatsby'

import { Box } from '../../primitives'
import sprite from './sprite.svg'

export const Image = styled(Box).attrs({
  width: '4.3rem',
  height: '4.6rem',
  backgroundImage: `url(${sprite})`,
  backgroundSize: 'cover',
  mb: 3,
  mx: 'auto',
})``

export const Name = styled(Box).attrs({
  textAlign: 'center',
})``

export const Link = styled(GastbyLink)`
  display: block;
  width: 10rem;
  margin-bottom: ${props => props.theme.space[4]};

  &:focus,
  &.active {
    ${Image} {
      background-position: -4.3rem 0;
    }
  }
`
