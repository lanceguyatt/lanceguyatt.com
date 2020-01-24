import React from 'react'
import { Box } from '@theme-ui/components'

import sprite from './sprite.svg'

const Sizing = props => (
  <Box
    as="button"
    __css={{
      width: 18,
      height: 20,
      backgroundImage: `url(${sprite})`,
      '&:focus, &:active': {
        backgroundPosition: '-18px 0'
      }
    }}
    variant="iconButton"
    {...props}
  />
)

export default Sizing
