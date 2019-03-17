/* eslint no-unused-vars: 0 */
import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const menuItem = css`
  color: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  transition-property: background-color, color;
  transition-duration: 0.25s;
  padding: 0.1rem 0.2rem;
  height: 1.8rem;
  min-width: 100%;

  &:focus,
  &:hover,
  &:active {
    background-color: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.primary};
  }
`

export const MenuItemButton = styled.button`
  ${menuItem}
`

export const MenuItemLink = styled(Link)`
  ${menuItem}
`
