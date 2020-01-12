import React from 'react'
import { Box } from '@theme-ui/components'

import sprite from './sprite.svg'

function Depth(props) {
  return (
    <Box
      as="button"
      type="button"
      aria-label="Depth"
      __css={{
        width: 23,
        height: 22,
        backgroundImage: `url(${sprite})`,
        '&:active, &:focus': {
          backgroundPosition: '-23px 0'
        }
      }}
      variant="iconButton"
      {...props}
    />
  )
}

export default Depth
