import styled from 'styled-components'
import { Link as GastbyLink } from 'gatsby'

import { Box } from '../../primitives'
import sprite from './sprite.svg'

export const Image = styled(Box).attrs({
  width: 85,
  height: 44,
  backgroundImage: `url(${sprite})`,
  backgroundSize: 'cover',
  mb: 3,
  mx: 'auto'
})``

export const Name = styled(Box).attrs({
  textAlign: 'center'
})``

export const Link = styled(GastbyLink)`
  display: block;
  width: 85px;
  margin-bottom: ${props => props.theme.space[4]};

  &:focus,
  &.active {
    ${Image} {
      background-position: -85px 0;
    }
  }
`
