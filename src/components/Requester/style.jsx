/* eslint react/prop-types: 0, no-shadow: 0 */
import { css } from '@emotion/react';
import React from 'react';
import { Box, Flex } from 'theme-ui';

import window from './window.svg';
import bg from './bg.svg';
import border from './border.svg';

export const Name = (props) => (
  <Box
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

export const TitleBar = (props) => (
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

export const Main = (props) => (
  <Flex
    __css={{
      flexDirection: 'column',
      flex: 1,
      p: 4,
    }}
    {...props}
  />
);

/* eslint-disable-next-line */
export const Wrapper = ({ name, show, special, ...props }) => (
  <Box
    __css={{
      position: 'relative',
    }}
    sx={css`
      border-style: solid;
      border-width: 2.2rem 0.4rem 0.4rem 0.4rem;
      border-image: url(${window}) 22 4 4 4 stretch;
      background-color: ${(props) => props.theme.colors.primary};
      outline: 0;

      ${(props) =>
        props.special
          ? `${Main} {
      background-color: ${props.theme.colors.light};
      background-image: url(${bg});

      p {
        background-color: ${props.theme.colors.secondary};
        border-style: solid;
        border-width: 0.2rem 0.1rem;
        border-image: url(${border}) 2 1 2 1 stretch;
        padding: ${props.theme.space[5]};
        margin-bottom: ${props.theme.space[4]};
      }
    }`
          : `${Main} { background-color: ${props.theme.colors.secondary}; }`};
    `}
    {...props}
  />
);
