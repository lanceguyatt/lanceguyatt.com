import React from 'react'
import styled from 'styled-components'

import { Box, Flex } from '../../primitives'

/* eslint-disable-next-line */
export const Foo = styled(({ basepath, list, ...props }) => (
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

export const Wrapper = styled(Box)`
  table {
    margin: -0.2rem;
  }

  th {
    display: none;
  }

  th,
  td {
    padding: 0.2rem;
  }
`
