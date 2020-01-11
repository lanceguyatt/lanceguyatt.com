import React from 'react'
import { Box, Flex } from '@theme-ui/components'
import { CSSTransition } from 'react-css-transition'

import toastyImage from './toasty.png'

export const Wrapper = props => (
  <Flex
    __css={{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      bg: 'text',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
    }}
    {...props}
  />
)

export const Toasty = props => (
  <Box
    as={CSSTransition}
    __css={{
      backgroundImage: `url(${toastyImage})`,
      backgroundSize: 'cover',
      position: 'absolute',
      right: -200,
      bottom: 0,
      size: 200,
    }}
    {...props}
  />
)
