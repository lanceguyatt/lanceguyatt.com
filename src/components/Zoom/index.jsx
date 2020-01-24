import React from 'react'
import { Box } from '@theme-ui/components'

import sprite from './sprite.svg'

const Zoom = props => (
  <Box
    as="button"
    aria-label="Zoom"
    __css={{
      width: 23,
      height: 22,
      backgroundImage: `url(${sprite})`,
      '&:focus, &:active': {
        backgroundPosition: '-23px 0'
      }
    }}
    variant="iconButton"
    {...props}
  />
)

export default Zoom
