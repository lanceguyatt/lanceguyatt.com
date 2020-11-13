import React from 'react';
import { css } from '@emotion/react';
import { Flex } from 'theme-ui';

export const Header = (props) => (
  <Flex
    __css={{
      alignItems: 'center',
      height: '1.8rem',
      position: 'absolute',
      top: '-2rem',
      right: '-0.4rem',
      left: '-0.4rem',
    }}
    {...props}
  />
);

export const Inner = (props) => (
  <Flex
    __css={{
      px: 3,
      flex: 1,
    }}
    sx={css`
      overflow: hidden;
      text-overflow: ellipsis;
      user-select: none;
      white-space: nowrap;
    `}
    {...props}
  />
);

export const Main = (props) => (
  <Flex
    __css={{
      flexDirection: 'column',
      bg: 'secondary',
      flex: 1,
      p: 4,
    }}
    sx={css`
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      min-height: min-content;

      &::-webkit-scrollbar {
        display: none;
      }
    `}
    {...props}
  />
);
