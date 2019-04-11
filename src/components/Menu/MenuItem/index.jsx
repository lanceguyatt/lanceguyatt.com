import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '../../../primitives'
import { MenuItemAction, Wrapper } from './style'

const Shortcut = ({ shortcut }) => (
  <Box is="span" display="block" position="relative" pl="2.5rem" ml="1.2rem">
    <Box
      is="svg"
      width="2.3rem"
      height="1.6rem"
      viewBox="0 0 23 16"
      position="absolute"
      left={0}
      mr="0.3rem"
      top="-0.1rem"
    >
      <g fill="none" fillRule="evenodd">
        <path
          d="M21,2 L23,2 L23,14 L21,14 L21,16 L2,16 L2,14 L0,14 L0,2 L2,2 L2,0 L21,0 L21,2 Z M18,12 L18,10 L18,6 L18,4 L18,2 L14,2 L14,4 L12,4 L12,6 L10,6 L10,8 L8,8 L8,10 L6,10 L6,12 L3,12 L3,14 L9,14 L9,12 L14,12 L14,14 L20,14 L20,12 L18,12 Z M15,10 L11,10 L11,8 L13,8 L13,6 L15,6 L15,10 Z"
          fill="currentColor"
        />
      </g>
    </Box>
    {shortcut}
  </Box>
)

Shortcut.propTypes = {
  shortcut: PropTypes.string,
}

Shortcut.defaultProps = {
  shortcut: null,
}

const MenuItem = props => {
  const { active, name, shortcut, ghosted, subMenu, children } = props
  return (
    <Wrapper is="li">
      <MenuItemAction
        is="button"
        type="button"
        tabIndex={ghosted ? '-1' : null}
        {...ghosted}
        {...props}
      >
        {active && (
          <svg width="13" height="14" viewBox="0 0 13 14">
            <path
              d="M11 2v2h-1v2H9v2H8v2H7v2H6v2H3v-2H2v-2H1V8H0V6h3v2h1v2h2V8h1V6h1V4h1V2h1V0h3v2h-2z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        )}
        {name}
        {subMenu && <div>>></div>}
        {children}
        {shortcut && <Shortcut shortcut={shortcut} />}
      </MenuItemAction>
    </Wrapper>
  )
}

MenuItem.propTypes = {
  // prefix: PropTypes.shape(),
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  shortcut: PropTypes.string,
  ghosted: PropTypes.bool,
  subMenu: PropTypes.bool,
  children: PropTypes.node,
  active: PropTypes.bool,
}

MenuItem.defaultProps = {
  // prefix: null,
  url: '/',
  shortcut: null,
  ghosted: false,
  subMenu: false,
  children: null,
  active: false,
}

export default MenuItem
