import React from 'react';
import { Box } from 'theme-ui';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Label = ({ children, ...rest }) => (
  <Box
    as="label"
    __css={{
      display: 'block',
    }}
    {...rest}
  >
    {children}
  </Box>
);

Label.propTypes = propTypes;

export default Label;
