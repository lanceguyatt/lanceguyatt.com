import React from 'react'
import styled from 'styled-components'

import { Flex, Box } from './common'
import website from '../../config/website'

const Name = styled(Box).attrs({
  mx: 3,
  flex: 1,
  lineHeight: 1,
})`
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
`
const Wrapper = styled(Flex).attrs({
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bg: 'dark',
  color: 'secondary',
  borderColor: 'dark',
  height: '2.2rem',
  alignItems: 'center',
  borderTop: 2,
  borderBottom: 2,
})``

const TitleBar = () => (
  <Wrapper>
    <Name>{`Lance Guyatt, Web Developer. ${website.copyright}`}</Name>
  </Wrapper>
)

export default TitleBar
