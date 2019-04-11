import React from 'react'
import styled from 'styled-components'

import { Box, Flex } from '../../primitives'
import window from './window.svg'
import bg from './bg.svg'
import border from './border.svg'

export const Name = styled(Box).attrs({
  px: 3,
  flex: 1,
})`
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
`

export const TitleBar = styled(Flex).attrs({
  alignItems: 'center',
  height: '1.8rem',
  position: 'absolute',
  top: '-2rem',
  right: '-0.4rem',
  left: '-0.4rem',
})``

export const Main = styled(Flex).attrs({
  flexDirection: 'column',
  flex: 1,
  p: 4,
})``

/* eslint-disable-next-line */
export const Wrapper = styled(({ name, show, special, ...props }) => (
  <Box {...props} />
)).attrs({
  position: 'relative',
})`
  border-style: solid;
  border-width: 2.2rem 0.4rem 0.4rem 0.4rem;
  border-image: url(${window}) 22 4 4 4 stretch;
  background-color: ${props => props.theme.colors.primary};
  outline: 0;

  ${props =>
    props.special
      ? `${Main} {
      background-color: ${props.theme.colors.light};
      background-image: url(${bg});

      p {
        background-color: ${props.theme.colors.secondary};
        border-style: solid;
        border-width: 0.2rem 0.1rem;
        border-image: url(${border}) 2 1 2 1 stretch;
        padding: ${props.theme.space[5]};
        margin-bottom: ${props.theme.space[4]};
      }
    }`
      : `${Main} { background-color: ${props.theme.colors.secondary}; }`};
`
