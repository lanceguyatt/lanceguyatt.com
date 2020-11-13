import React from 'react';
import { css } from '@emotion/react';
import { Box } from 'theme-ui';

import sprite from './sprite.svg';

export const Image = (props) => (
  <Box
    __css={{
      width: '6.5rem',
      height: '3.8rem',
      backgroundImage: `url(${sprite})`,
      backgroundSize: 'cover',
      mb: 3,
      mx: 'auto',
    }}
    {...props}
  />
);

export const Name = (props) => (
  <Box
    __css={{
      textAlign: 'center',
    }}
    {...props}
  />
);

export const Link = (props) => (
  <Box
    sx={css`
      display: block;
      width: 8rem;

      &:focus,
      &.active {
        ${Image} {
          background-position: -6.5rem 0;
        }
      }
    `}
    {...props}
  />
);
