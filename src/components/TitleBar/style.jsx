import React from 'react'
import styled from 'styled-components'

import { Box, Flex } from '../../primitives'

export const Name = styled(Box).attrs({
  px: 3,
  flex: 1,
})`
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
`
/* eslint-disable-next-line */
export const Wrapper = styled(({ data, ...props }) => (
  <Flex {...props} />
)).attrs({
  bg: 'black',
  color: 'secondary',
  alignItems: 'center',
  borderColor: 'black',
  height: '2.2rem',
  position: 'relative',
})``
