import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box } from '../../../primitives'

const Wrapper = styled(Box).attrs({
  color: 'secondary',
  py: 2,
  px: 1,
  height: '1.8rem',
  position: 'relative',
  variant: 'menuItem',
})`
  transition-property: background-color, color;
  transition-duration: 0.25s;
`

const SubMenuItem = props => {
  const { children } = props
  return (
    <li>
      <Wrapper type="button" role="button" {...props}>
        {children}
      </Wrapper>
    </li>
  )
}

SubMenuItem.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SubMenuItem
