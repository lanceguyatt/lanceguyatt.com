/** @jsx jsx */
import { jsx } from 'theme-ui'
// import styled, { keyframes, css } from 'styled-components'
import { Flex } from '@theme-ui/components'

import amigaTick from './tick.svg'

// const insertDisk = keyframes`
//   0% {
//     transform-origin: 0% 0%;
//   }

//   20% {
//     transform: translate3d(0, 2rem, 0);
//     transform-origin: 0% 0%;
//   }

//   100% {
//     transform: rotateX(83deg) translateY(-35rem);
//     transform-origin: 0% 0%;
//   }
// `

// const insertDiskAnimation = css`
//   animation: ${insertDisk} 1.5s forwards infinite;
// `

export const AmigaTick = props => (
  <img
    src={amigaTick}
    alt="Amiga Tick"
    sx={{
      width: 165,
      height: 150,
      display: 'block',
      mb: 6
    }}
    {...props}
  />
)

export const DiskDrive = () => (
  <svg viewBox="0 0 156 38" width={156} height={38}>
    <g fill="none" fillRule="evenodd">
      <path fill="#E0A080" d="M0 0h156v38H0z" />
      <path fill="#000" d="M25 28h8v2h-8zM8 6h140v8H8z" />
      <path
        d="M118 22h1v8h-1v-8zm1 0h24v2h-24v-2zm23 2h1v2h-1v-2z"
        fill="#AD7967"
      />
    </g>
  </svg>
)

export const FloppyDisk = () => (
  <svg
    viewBox="0 0 134 120"
    width={134}
    height={120}
    sx={{
      position: 'absolute',
      bottom: 0,
      left: 12
    }}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M18 2V0h16v41h2v1H16v-2h-2V2h4z" fill="#202060" />
      <path
        d="M128 6V4h2v2h2v2h2v112H0V4h2V2h2V0h10v40h2v2h86v-1h2V2h2V0h20v2h2v4zm0 2h4z"
        fill="#203080"
      />
      <path d="M16 54v-2h104v2h2v66H14V54h2zM4 110h6v4H4z" fill="#202060" />
      <path d="M102 41v1H36v-1h-2V0h70v41h-2z" fill="#948976" />
      <path fill="#202060" d="M75 8h14v30H75z" />
      <path d="M18 58v-4h100v4h2v62H16V58h2z" fill="#FFF" />
      <path d="M6 8V6h2v2h1v2h1v2H8v4H6v-4H4v-2h1V8h1z" fill="#202060" />
    </g>
  </svg>
)

export const Wrapper = props => (
  <Flex
    __css={{
      flexDirection: ['column', null, 'row'],
      alignItems: ['center', null, 'flex-end'],
      justifyContent: ['center', null, 'space-between'],
      height: '100vh',
      width: '100vw',
      bg: 'purple',
      p: 6,
      color: 'tan'
    }}
    {...props}
  />
)
