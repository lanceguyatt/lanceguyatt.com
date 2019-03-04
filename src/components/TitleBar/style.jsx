import React from 'react'
import styled from 'styled-components'

import { Flex, Box } from '../index'

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
export const Wrapper = styled(({ menu, ...props }) => (
  <Flex {...props} />
)).attrs({
  bg: 'dark',
  alignItems: 'center',
  borderColor: 'dark',
  height: '2.2rem',
  position: 'relative',
})`
  ${props =>
    props.menu
      ? `color: ${props.theme.colors.primary};`
      : `color: ${props.theme.colors.secondary};`}
`
