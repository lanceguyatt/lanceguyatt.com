import styled from 'styled-components'
import { Link as GastbyLink } from 'gatsby'

import { Box } from '../index'
import sprite from './sprite.svg'

export const Image = styled(Box).attrs({
  width: '6.6rem',
  height: '3.8rem',
  backgroundImage: `url(${sprite})`,
  backgroundSize: 'cover',
  mb: 4,
  mx: 'auto',
})``

export const Name = styled(Box).attrs({
  textAlign: 'center',
})``

export const Link = styled(GastbyLink)`
  display: block;
  width: 8rem;
  margin-left: ${props => props.theme.space[3]};
  margin-right: ${props => props.theme.space[3]};
  margin-bottom: ${props => props.theme.space[4]};

  &:focus,
  &.active {
    ${Image} {
      background-position: -6.5rem 0;
    }
  }
`
