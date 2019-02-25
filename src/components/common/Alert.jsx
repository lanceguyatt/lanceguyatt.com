import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { Link } from 'gatsby'

const pulse = keyframes`
  0% {
    border-color: currentColor;
  }

  100% {
    border-color: transparent;
  }
`
const animation = css`
  animation: ${pulse} 0.75s infinite alternate;
`

/* eslint-disable-next-line */
const Wrapper = styled(({ description, url, ...props }) => <Link {...props} />)`
  border: ${props => props.theme.borders[3]};
  border-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.space[6]};
  display: block;
  max-width: 64rem;
  text-align: center;
  ${animation};
`

const Alert = ({ description, url }) => (
  <Wrapper to={url} dangerouslySetInnerHTML={{ __html: description }} />
)

Alert.propTypes = {
  description: PropTypes.string,
  url: PropTypes.string,
}

Alert.defaultProps = {
  description: 'Alert description',
  url: '/',
}

export default Alert
