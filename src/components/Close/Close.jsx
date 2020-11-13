import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';

import sprite from './sprite.svg';

const propTypes = {
  to: PropTypes.string,
};

const defaultProps = {
  to: '/',
};

const Close = (props) => {
  return (
    <Box
      as="button"
      __css={{
        bg: 'lime',
        display: 'inline-block',
        width: 20,
        height: 22,
        backgroundImage: `url(${sprite})`,
        '&:focus, &:active': {
          backgroundPosition: '-20px 0',
        },
      }}
      aria-label="Close this window"
      variant="iconButton"
      {...props}
    />
  );
};

Close.propTypes = propTypes;
Close.defaultProps = defaultProps;

export default Close;
