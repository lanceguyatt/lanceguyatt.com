import styled from 'styled-components'

import { Flex, Box } from '../index'

export const Name = styled(Box).attrs({
  mx: 3,
  flex: 1,
})`
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
`
export const Wrapper = styled(Flex).attrs({
  bg: 'dark',
  color: 'secondary',
  borderColor: 'dark',
  height: '2.2rem',
  alignItems: 'center',
  borderTop: 2,
  borderBottom: 2,
})``
