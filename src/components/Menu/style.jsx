/* eslint no-unused-vars: 0 */
import React from 'react'
import styled from 'styled-components'

import { Box } from '../../primitives'

export const MenuList = styled(Box).attrs({
  bg: 'dark',
  color: 'secondary',
  p: 2,
  border: 2,
  borderColor: 'secondary',
  position: 'absolute',
  zIndex: 1,
  top: '1.8rem',
})`
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.25s;
  will-change: opacity;
`

export const MenuToggle = styled(Box).attrs({
  display: 'inline-block',
  color: 'secondary',
  px: 3,
  pt: 1,
  height: '1.8rem',
})`
  user-select: none;
  transition: all 0.25s;
`

export const Wrapper = styled(({ name, items, menuActive, ...props }) => (
  <Box {...props} />
)).attrs({
  mr: 6,
})`
  ${props =>
    props.menuActive &&
    `${MenuToggle} { 
      background-color: ${props.theme.colors.light};
      color: ${props.theme.colors.primary};
    }
      ${MenuList} {
        opacity: 1;
        visibility: visible;
      }
    `};
`
