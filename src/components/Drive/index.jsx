import React from 'react'
import { Box } from '@theme-ui/components'

import sprite from './sprite.svg'

const Drive = props => (
  <Box
    __css={{
      width: 85,
      height: 44,
      backgroundImage: `url(${sprite})`,
      backgroundSize: 'cover'
    }}
    {...props}
  />
)

export default Drive
