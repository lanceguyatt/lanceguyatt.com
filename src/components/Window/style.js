import styled from 'styled-components'

import { Box, Flex } from '../../primitives'

export const Name = styled(Box).attrs({
  px: '1rem',
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
  bg: 'secondary',
  flex: 1,
  py: 5,
  px: 4,
})`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  min-height: min-content;

  &::-webkit-scrollbar {
    display: none;
  }
`
