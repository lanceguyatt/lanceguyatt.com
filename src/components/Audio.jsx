/* eslint jsx-a11y/media-has-caption: 0 */
import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.shape(),
}

const defaultProps = {
  children: null,
}

const Audio = props => {
  const { children } = props
  return <audio {...props}>{children}</audio>
}

Audio.propTypes = propTypes
Audio.defaultProps = defaultProps

export default Audio
