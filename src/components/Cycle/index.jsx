import React from 'react'
import { Box } from '@theme-ui/components'

import sprite from './sprite.svg'

const Cycle = props => (
  <Box
    as="button"
    aria-label="Cycle"
    variant="iconButton"
    __css={{
      bg: 'yellow',
      display: 'inline-flex',
      alignItems: 'center'
    }}
    {...props}
  >
    <Box
      sx={{
        backgroundImage: `url(${sprite})`,
        display: 'block',
        width: 20,
        height: 24
      }}
    />
    <Box sx={{ textTransform: 'uppercase', ml: 3 }}>Enabled</Box>
  </Box>
)

export default Cycle
