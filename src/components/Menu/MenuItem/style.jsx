/* eslint no-unused-vars: 0 */
import React from 'react'
import styled, { css } from 'styled-components'

import { Flex } from '../../../primitives'
import ghostedImage from './ghosted.svg'

export const Wrapper = styled(
  ({ ghosted, subMenu, menuItemActive, ...props }) => <Flex {...props} />
).attrs({
  color: 'secondary',
  justifyContent: 'space-between',
  py: 2,
  px: 1,
  height: '1.8rem',
  minWidth: '100%',
  position: 'relative',
  variant: 'menuItem',
})`
  transition-property: background-color, color;
  transition-duration: 0.25s;
  outline: 0;

  ul {
    visibility: hidden;
    opacity: 0;
  }

  ${props =>
    props.ghosted &&
    `
    pointer-events: none;

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

  ${props =>
    props.menuItemActive &&
    `
      ul {
        visibility: visible;
        opacity: 1;
      }
    `};
`
