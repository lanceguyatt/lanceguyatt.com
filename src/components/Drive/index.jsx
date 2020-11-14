import React from 'react';
import { Box } from 'theme-ui';
import PropTypes from 'prop-types';

import sprite from './sprite.svg';

const propTypes = {
  children: PropTypes.string.isRequired,
};

const Drive = (props) => {
  const { children } = props;
  return (
    <Box
      {...props}
      __css={{
        display: 'inline-block',
        textDecoration: 'none',
        textAlign: 'center',
      }}
    >
      <Box
        __css={{
          display: 'block',
          width: 85,
          height: 44,
          backgroundImage: `url(${sprite})`,
          backgroundSize: 'cover',
          mb: 3,
        }}
      />
      {children}
    </Box>
  );
};

Drive.propTypes = propTypes;

export default Drive;
