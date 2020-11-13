import React from 'react';
import { Box } from 'theme-ui';

import sprite from './sprite.svg';

/**
 * `Drawer` description
 */
const Drawer = (props) => {
  return (
    <Box
      __css={{
        width: 65,
        height: 38,
        backgroundImage: `url(${sprite})`,
        backgroundSize: 'cover',
      }}
      {...props}
    />
  );
};

export default Drawer;
