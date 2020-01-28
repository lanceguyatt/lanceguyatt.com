import React from 'react'
import { Box } from '@theme-ui/components'

import sprite from './sprite.svg'

const Input = props => {
  return (
    <Box
      as="input"
      type="text"
      __css={{
        bg: 'transparent',
        borderWidth: 2,
        height: 24,
        fontFamily: 'inherit',
        fontSize: 'inherit',
        lineHeight: '20px',
        p: 2,
        borderImage: `url(${sprite}) 2`
      }}
      {...props}
    />
  )
}

export default Input
