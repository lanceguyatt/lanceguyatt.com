import React from 'react';
import { Box } from 'theme-ui';

import sprite from './sprite.svg';

/**
 * `Disk` description
 */
const Disk = (props) => {
  return (
    <Box
      __css={{
        width: 43,
        height: 48,
        backgroundImage: `url(${sprite})`,
        backgroundSize: 'cover',
      }}
      {...props}
    />
  );
};

export default Disk;
