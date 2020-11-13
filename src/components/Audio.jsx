/* eslint jsx-a11y/media-has-caption: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const Audio = (props) => {
  const { children } = props;
  return <audio {...props}>{children}</audio>;
};

Audio.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default Audio;
