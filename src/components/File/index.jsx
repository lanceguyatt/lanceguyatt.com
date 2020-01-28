import React from 'react'
import { Box } from '@theme-ui/components'

import sprite from './sprite.svg'

const File = props => (
  <Box
    __css={{
      width: 46,
      height: 62,
      backgroundImage: `url(${sprite})`,
      backgroundSize: 'cover'
    }}
    {...props}
  />
)

export default File
