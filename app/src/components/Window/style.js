import React from 'react'
import styled from 'styled-components'

import { Box, Flex } from '../common'

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
  borderBottom: 2,
  borderColor: 'dark',
  height: '2rem',
})``

export const Main = styled(Box).attrs({
  flex: 1,
  bg: 'secondary',
  px: 4,
  py: 5,
  borderColor: 'danger',
})`
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Wrapper = styled(
  /* eslint-disable-next-line */
  ({ name, close, active, zoom, full, free, ...props }) => <Flex {...props} />
).attrs({
  borderTop: 2,
  borderRight: 1,
  borderBottom: 2,
  borderLeft: 1,
  flexDirection: 'column',
  position: 'relative',
  height: '100%',
  width: 1,
})`
  border-top-color: #fff;
  border-right-color: #000;
  border-bottom-color: #000;
  border-left-color: #000;
  overflow: hidden;
  background-color: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.secondary};
  ${props => props.zoom && `width: 50vw; height: 50vh; flex: none;`};

  ${Header} {
    flex: none;
  }
`
