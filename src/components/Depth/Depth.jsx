import React from 'react';
import { Box } from 'theme-ui';

import sprite from './sprite.svg';

const Depth = ({ ...rest }) => {
  return (
    <Box
      as="button"
      aria-label="Depth"
      __css={{
        width: 23,
        height: 22,
        backgroundImage: `url(${sprite})`,
        '&:active, &:focus': {
          backgroundPosition: '-23px 0',
        },
      }}
      variant="iconButton"
      {...rest}
    />
  );
};

export default Depth;
