import React from 'react';
import { Box, Flex } from 'theme-ui';
import { keyframes } from '@emotion/react';

import amigaTick from './tick.svg';

const insertDisk = keyframes`
  0% {
    transform-origin: 0% 0%;
  }

  20% {
    transform: translate3d(0, 2rem, 0);
    transform-origin: 0% 0%;
  }

  100% {
    transform: rotateX(83deg) translateY(-35rem);
    transform-origin: 0% 0%;
  }
`;

export const AmigaTick = (props) => (
  <Box
    as="img"
    src={amigaTick}
    alt="Amiga Tick"
    __css={{
      width: 165,
      height: 150,
      display: 'block',
      mb: 6,
    }}
    {...props}
  />
);

export const DiskDrive = (props) => (
  <Box as="svg" viewBox="0 0 156 38" width={156} height={38} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#E0A080" d="M0 0h156v38H0z" />
      <path fill="#000" d="M25 28h8v2h-8zM8 6h140v8H8z" />
      <path
        d="M118 22h1v8h-1v-8zm1 0h24v2h-24v-2zm23 2h1v2h-1v-2z"
        fill="#AD7967"
      />
    </g>
  </Box>
);

export const FloppyDisk = ({ animate = false, ...props }) => (
  <Box
    as="svg"
    viewBox="0 0 134 120"
    width={134}
    height={120}
    __css={{
      ...(animate && {
        animation: `${insertDisk} 1.5s forwards infinite`,
      }),
    }}
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M128 6V4h2v2h2v2h2v112H0V4h2V2h2V0h10v40h2v2h86v-1h2V2h2V0h20v2h2v4zm0 2h4-4z"
        fill="#203080"
      />
      <path fill="#948976" d="M102 41v1H36v-1h-2V0h70v41z" />
      <path
        d="M120 52v2h2v66H14V54h2v-2h104zM10 110v4H4v-4h6zM34 0v41h2v1H16v-2h-2V2h4V0h16zm55 8v30H75V8h14zM8 6v2h1v2h1v2H8v4H6v-4H4v-2h1V8h1V6h2z"
        fill="#202060"
      />
      <path fill="#fff" d="M18 58v-4h100v4h2v62H16V58z" />
    </g>
  </Box>
);

export const Wrapper = (props) => (
  <Flex
    __css={{
      flexDirection: ['column', null, 'row'],
      alignItems: ['center', null, 'flex-end'],
      justifyContent: ['center', null, 'space-between'],
      height: '100vh',
      width: '100vw',
      bg: 'purple',
      p: 6,
      color: 'tan',
    }}
    {...props}
  />
);
