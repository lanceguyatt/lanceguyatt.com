import React from 'react'
import { Box } from '@theme-ui/components'

import sprite from './sprite.svg'

const Cycle = props => (
  <Box
    as="button"
    aria-label="Cycle"
    variant="iconButton"
    __css={{
      display: 'inline-flex',
      alignItems: 'center',
      p: 0
    }}
    {...props}
  >
    <Box
      sx={{
        backgroundImage: `url(${sprite})`,
        bg: 'red',
        display: 'block',
        width: 16,
        height: 20,
        flex: '0 0 auto'
      }}
    />
    <Box sx={{ textTransform: 'uppercase', ml: 3 }}>Enabled</Box>
  </Box>
)

export default Cycle
