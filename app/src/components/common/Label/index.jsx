import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box } from '../index'

const Wrapper = styled(Box)`
  user-select: none;
`

const Label = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
)

Label.propTypes = {
  children: PropTypes.node,
}

Label.defaultProps = {
  children: null,
}

export default Label
