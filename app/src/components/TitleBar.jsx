import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Flex, Box } from './common'
import website from '../../config/website'

const Inner = styled(Box)`
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
`
const Wrapper = styled(Flex)``

const TitleBar = ({ children, ...props }) => (
  <Wrapper
    height="2.2rem"
    alignItems="center"
    borderTop="0.2rem"
    borderBottom="0.2rem"
    {...props}
  >
    <Inner mx={3} flex={1} lineHeight={1}>
      {children}
    </Inner>
  </Wrapper>
)

TitleBar.propTypes = {
  children: PropTypes.string,
}

TitleBar.defaultProps = {
  children: `Lance Guyatt, Web Developer. ${website.copyright}`,
}

export default TitleBar
