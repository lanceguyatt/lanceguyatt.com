/* eslint no-unused-vars: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { Link } from 'gatsby'
import { position } from 'polished'

import { Box } from '../primitives'

const pulse = keyframes`
  0% {
    border-color: inherit;
  }

  100% {
    border-color: transparent;
  }
`

const animation = css`
  animation: ${pulse} 0.75s infinite alternate;
`

const Wrapper = styled(({ alert, ...props }) => <Box {...props} />).attrs({
  border: 3,
  borderColor: 'primary',
  color: 'primary',
  p: 6,
  maxWidth: '64rem',
  textAlign: 'center',
})`
  ${animation};

  a {
    display: block;
    ${position('absolute', 0)};
  }
`

const Alert = props => {
  const { alert } = props
  const { description, url } = alert
  return (
    <Wrapper role="alert" aria-live="assertive">
      <Link to={url} aria-labelledby="alert" />
      <Box id="alert" dangerouslySetInnerHTML={{ __html: description }} />
    </Wrapper>
  )
}

Alert.propTypes = {
  alert: PropTypes.shape({
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
}

Alert.defaultProps = {
  alert: PropTypes.shape({
    url: '/',
  }),
}

export default Alert
