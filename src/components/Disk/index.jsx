import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@theme-ui/components'

import sprite from './sprite.svg'

const propTypes = {
  children: PropTypes.node.isRequired
}

export default function Disk({ children, ...props }) {
  return (
    <Box
      {...props}
      __css={{
        display: 'block',
        textDecoration: 'none'
      }}
    >
      <Box
        __css={{
          width: 43,
          height: 46,
          backgroundImage: `url(${sprite})`,
          backgroundSize: 'cover',
          mb: 3,
          mx: 'auto'
        }}
      />
      <Box __css={{ textAlign: 'center' }}>{children}</Box>
    </Box>
  )
}

Disk.propTypes = propTypes
