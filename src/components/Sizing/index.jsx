/* eslint no-shadow: 0 */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Box } from '../../primitives'
import sprite from './sprite.svg'

/* eslint-disable-next-line */
const Wrapper = styled(({ active, ...props }) => <Box {...props} />).attrs({
  is: 'button',
  width: '1.8rem',
  height: '2rem',
  backgroundImage: `url(${sprite})`,
})`
  &:focus,
  &:active {
    background-position: -1.8rem 0;
    background-color: ${props => props.theme.colors.primary};
  }

  ${props =>
    props.active &&
    `
    background-position: -1.8rem 0;
    background-color: ${props.theme.colors.primary};
  `};
`

const Sizing = ({ active, ...props }) => (
  <Wrapper title="Sizing" active={active} {...props} />
)

Sizing.propTypes = {
  active: PropTypes.bool,
}

Sizing.defaultProps = {
  active: false,
}

export default Sizing
