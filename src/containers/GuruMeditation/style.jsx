/* eslint import/prefer-default-export: 0 */
import React from 'react';
import { Box } from 'theme-ui';
import { CSSTransition } from 'react-css-transition';

import toastyImage from './toasty.png';

export const Toasty = (props) => (
  <Box
    as={CSSTransition}
    __css={{
      backgroundImage: `url(${toastyImage})`,
      backgroundSize: 'cover',
      position: 'absolute',
      right: -200,
      bottom: 0,
      size: 200,
    }}
    {...props}
  />
);
