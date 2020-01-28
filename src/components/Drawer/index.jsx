import React from 'react'
import { Box } from '@theme-ui/components'

import sprite from './sprite.svg'

const Drawer = props => {
  return (
    <Box
      __css={{
        width: 65,
        height: 38,
        backgroundImage: `url(${sprite})`,
        backgroundSize: 'cover'
      }}
      {...props}
    />
  )
}

export default Drawer
