import React from 'react'
import styled from 'styled-components'

import { Box, Flex } from '../../primitives'
import sprite from './sprite.svg'

const Wrapper = styled(Box).attrs({
  backgroundImage: `url(${sprite})`,
  backgroundSize: 'cover',
  display: 'block',
  width: '2rem',
  height: '2.4rem',
})``

const Cycle = props => (
  <Flex {...props} style={{ textTransform: 'uppercase' }}>
    <Wrapper is="button" type="button" aria-label="Cycle" />
    <Box>Enabled</Box>
  </Flex>
)

export default Cycle
