import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@theme-ui/components'

import selected from './selected.svg'
import unselected from './unselected.svg'
import ghosted from './ghosted.svg'

const APPEARANCES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  LINK: 'link'
}

const propTypes = {
  appearance: PropTypes.oneOf(Object.values(APPEARANCES)),
  children: PropTypes.node.isRequired,
  external: PropTypes.bool
}

const defaultProps = {
  appearance: APPEARANCES.PRIMARY,
  external: false
}

const Button = props => {
  const { appearance, children, external, ...other } = props
  let externalAction

  if (external) {
    externalAction = 'target="_blank"'
  }

  return (
    <Box
      as="button"
      __themeKey="buttons"
      __css={{
        appearance: 'none',
        display: 'inline-block',
        height: 24,
        fontFamily: 'inherit',
        fontSize: 'body',
        lineHeight: 'body',
        textAlign: 'center',
        borderRadius: 0,
        borderWidth: 2,
        borderStyle: 'solid',
        borderImage: `url(${unselected}) 2 stretch`,
        textDecoration: 'none',
        verticalAlign: 'top',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        px: 12,
        py: 1,
        outline: 0,
        position: 'relative',
        '&:focus, &:active': {
          borderImage: `url(${selected}) 2 stretch`
        },
        '&[disabled]': {
          pointerEvents: 'none',
          '&::before': {
            content: '""',
            background: `url(${ghosted})`,
            position: 'absolute',
            top: -2,
            right: 1,
            bottom: -2,
            left: -1,
            zIndex: 1,
            width: 'calc(100% + 0.2rem)'
          }
        }
      }}
      {...externalAction}
      variant={appearance}
      {...other}
    >
      {children}
    </Box>
  )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
