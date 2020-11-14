/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';

// import { link } from './style';

const Action = ({ name, children, ...props }) => {
  return (
    <Box as="button" {...props}>
      {name || children}
    </Box>
  );
};

Action.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

Action.defaultProps = {
  name: null,
  url: null,
};

export default Action;
