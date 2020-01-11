import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Box } from '@theme-ui/components'

import sprite from './sprite.svg'

const propTypes = {
  to: PropTypes.string
}

const defaultProps = {
  to: '/'
}

export default function Close({ to, ...props }) {
  return (
    <Box
      as={Link}
      __css={{
        display: 'inline-block',
        width: 20,
        height: 22,
        backgroundImage: `url(${sprite})`,
        '&:focus, &:active': {
          backgroundPosition: '-20px 0'
        }
      }}
      to={to}
      aria-label="Close this window"
      {...props}
    />
  )
}

Close.propTypes = propTypes
Close.defaultProps = defaultProps
