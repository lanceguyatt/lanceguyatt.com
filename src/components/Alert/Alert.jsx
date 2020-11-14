import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';

const propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.string,
};

const defaultProps = {
  status: 'error',
};

/** `Alert` description */
const Alert = (props) => {
  const { children, status, ...rest } = props;
  return (
    <Box
      role="alert"
      aria-live="assertive"
      __themeKey="alerts"
      __css={{
        display: 'block',
        border: 3,
        p: 5,
        textDecoration: 'none',
        textAlign: 'center',
      }}
      variant={status}
      {...rest}
    >
      {children}
    </Box>
  );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
