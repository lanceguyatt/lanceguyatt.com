import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'
import { Box } from './index'

const animation = keyframes`
  0% {
    border-color: currentColor;
  }

  100% {
    border-color: transparent;
  }
`

/* eslint-disable-next-line */
const Wrapper = styled(({ name, description, url, ...props }) => (
  <Box {...props} />
)).attrs({
  border: 3,
  maxWidth: '64rem',
  p: 6,
  textAlign: 'center',
})`
  animation: ${animation} 0.75s infinite alternate;
`

const Alert = ({ name, description, url, ...props }) => (
  <Wrapper {...props}>
    <Link to={url}>
      <h2>{name}</h2>
      <p>{description}</p>
    </Link>
  </Wrapper>
)

Alert.propTypes = {
  colors: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
}

Alert.defaultProps = {
  colors: 'danger',
  name: 'Alert name',
  description: 'Alert description',
  url: '/',
}

export default Alert
