/* eslint no-unused-vars: 0 */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Box } from '../../primitives'

export const MenuLink = styled(Link)``

export const MenuList = styled(Box).attrs({
  bg: 'dark',
  color: 'secondary',
  p: 2,
  border: 2,
  borderColor: 'secondary',
})`
  ${MenuLink} {
    color: ${props => props.theme.colors.secondary};
    display: flex;
    justify-content: space-between;
    transition-property: background-color, color;
    transition-duration: 0.25s;
    padding: 0.1rem 0.2rem;
    height: 1.8rem;

    &:focus,
    &:hover,
    &:active {
      background-color: ${props => props.theme.colors.light};
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const MenuToggle = styled(Box).attrs({
  display: 'inline-block',
  color: 'secondary',
  px: 3,
  pt: 1,
})``

export const Wrapper = styled(({ active, ...props }) => <Box {...props} />)`
  ${props =>
    props.active &&
    `${MenuToggle} { 
      background-color: ${props.theme.colors.light};
      color: ${props.theme.colors.primary};
    }`};
`
