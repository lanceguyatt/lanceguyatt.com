import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box } from '../../primitives'

const Wrapper = styled(Box)``

const Label = ({ children, ...props }) => (
  <Wrapper is="label" {...props}>
    {children}
  </Wrapper>
)

Label.propTypes = {
  children: PropTypes.node,
}

Label.defaultProps = {
  children: null,
}

export default Label
