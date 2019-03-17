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

export const Header = styled(Flex).attrs({
  alignItems: 'center',
  height: '1.8rem',
  position: 'absolute',
  top: '-2rem',
  right: '-0.4rem',
  left: '-0.4rem',
})``

export const Main = styled(Flex).attrs({
  flexDirection: 'column',
  bg: 'light',
  flex: 1,
  p: '0.4rem',
  backgroundImage: `url(${bg})`,
})``
export const Inner = styled(Box).attrs({
  p: '2.4rem',
  mb: '0.4rem',
  bg: 'secondary',
})`
  border-style: solid;
  border-width: 0.2rem 0.1rem;
  border-image: url(${border}) 2 1 2 1 stretch;
`

/* eslint-disable-next-line */
export const Wrapper = styled(({ name, description, actions, show, ...props }) => <Flex {...props} />).attrs({
  flexDirection: 'column',
  position: 'relative',
})`
  border-style: solid;
  border-width: 2.2rem 0.4rem 0.4rem 0.4rem;
  border-image: url(${window}) 22 4 4 4 stretch;
  background-color: ${props => props.theme.colors.primary};
`
