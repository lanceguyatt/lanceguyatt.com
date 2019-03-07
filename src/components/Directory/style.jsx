import React from 'react'
import styled from 'styled-components'

import { Flex } from '../../primitives'

/* eslint-disable-next-line */
export const Wrapper = styled(({ basepath, list, ...props }) => (
  <Flex {...props} />
)).attrs({
  mx: -2,
  flexWrap: 'wrap',
})`
  a {
    margin-left: ${props => props.theme.space[3]};
    margin-right: ${props => props.theme.space[3]};
    margin-bottom: ${props => props.theme.space[4]};
  }
`
