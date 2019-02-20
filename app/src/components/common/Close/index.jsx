import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import sprite from './sprite.svg'

/* eslint-disable-next-line */
const Wrapper = styled(({ name, ...props }) => <Link {...props} />)`
  display: inline-block;
  width: 2rem;
  height: 2.2rem;
  background-image: url(${sprite});
  background-size: cover;

  &:focus,
  &:active {
    background-position: -2rem 0;
  }
`

const Close = ({ name, to, ...props }) => (
  <Wrapper title={name} to={to} {...props} />
)

Close.propTypes = {
  name: PropTypes.string,
  to: PropTypes.string,
}

Close.defaultProps = {
  name: 'Close',
  to: '/',
}

export default Close
