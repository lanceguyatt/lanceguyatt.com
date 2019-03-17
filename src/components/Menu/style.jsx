/* eslint no-unused-vars: 0 */
import React from 'react'
import styled from 'styled-components'

import { Box } from '../../primitives'
import ghostedImage from './ghosted.svg'

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
  pt: 2,
  height: '1.8rem',
  position: 'relative',
})`
  user-select: none;
  transition: all 0.25s;
`

export const Wrapper = styled(
  ({ name, items, menuListActive, ghosted, ...props }) => <Box {...props} />
).attrs({
  mr: 6,
})`
  outline: 0;

  ${props =>
    props.menuListActive &&
    `${MenuToggle} { 
      background-color: ${props.theme.colors.light};
      color: ${props.theme.colors.primary};
    }
      ${MenuList} {
        opacity: 1;
        visibility: visible;
      }
    `};

  ${MenuToggle} {
    ${props =>
      props.ghosted &&
      `
        pointer-events: none;
        background-color: transparent;
        color: ${props.theme.colors.secondary};

        &::before {
          content: '';
          background-image: url(${ghostedImage});
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
        }
        `};
  }
`
