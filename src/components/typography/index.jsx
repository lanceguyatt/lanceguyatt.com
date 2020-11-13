import React from 'react';
import { Box, Flex } from 'theme-ui';
import { css } from '@emotion/react';

import selected from './selected.svg';

export const Foo = (props) => (
  <Box
    __css={{
      border: 4,
      p: 2,
      borderImage: `url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMSAyNmg2N3YySDF2LTJ6TTY2IDJoMnYyNGgtMlYyem0xLTJoMXYyaC0xVjB6TTIgMmg2M3YySDJWMnptMCAyaDJ2MjBIMlY0em0wIDIwaDF2Mkgydi0yeiIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0wIDBoNjd2MkgwVjB6bTAgMmgydjI0SDBWMnptMCAyNGgxdjJIMHYtMnptMy0yaDYzdjJIM3YtMnpNNjQgNGgydjIwaC0yVjR6bTEtMmgxdjJoLTFWMnoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+Cg==)
    4 stretch`,
      '.gatsby-image-wrapper': {
        display: 'block !important',
      },
    }}
    {...props}
  />
);

export const Bevel = (props) => (
  <Flex
    __css={{
      border: 2,
      p: 2,
      flex: 'none',
      width: 'auto',
      borderImage: `url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA2NCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+YnV0dG9uPC90aXRsZT48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xIDIyaDYzdjJIMXYtMnpNNjIgMmgydjIwaC0yVjJ6bTEtMmgxdjJoLTFWMHoiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMCAwaDYzdjJIMFYwem0wIDJoMnYyMEgwVjJ6bTAgMjBoMXYySDB2LTJ6IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPgo=)
    2 stretch`,
    }}
    {...props}
  />
);

export const Dl = (props) => (
  <Flex
    __css={{
      is: 'dl',
      alignItems: 'center',
      mb: 4,
    }}
    {...props}
  />
);

export const Dt = (props) => (
  <Box
    __css={{
      is: 'dt',
      color: 'light',
      pr: '1rem',
      textAlign: 'right',
      '&::after': {
        content: ':',
      },
    }}
    {...props}
  />
);

export const Dd = (props) => <Foo as="dd" {...props} />;

export const Qux = (props) => (
  <Box
    __css={{
      border: 2,
      p: 2,
      borderImage: `url(${selected}) 2 stretch`,
      '.gatsby-image-wrapper': {
        display: 'block !important',
      },
    }}
    {...props}
  />
);

export const HV = (props) => (
  <span
    __css={css`
      border: 0 !important;
      clip: rect(0 0 0 0) !important;
      height: 1px !important;
      margin: -1px !important;
      overflow: hidden !important;
      padding: 0 !important;
      position: absolute !important;
      width: 1px !important;
      white-space: nowrap !important;
    `}
    {...props}
  />
);
