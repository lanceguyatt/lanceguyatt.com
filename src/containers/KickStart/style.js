import styled, { keyframes, css } from 'styled-components'

import { Box, Flex } from '../../primitives'

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
`

const insertDiskAnimation = css`
  animation: ${insertDisk} 1.5s forwards infinite;
`

export const Tick = styled(Box).attrs({
  is: 'svg',
  viewBox: '0 0 165 150',
  width: '16.5rem',
  height: '15rem',
  display: 'block',
  mb: 6,
})``

export const DiskDrive = styled(Box).attrs({
  is: 'svg',
  viewBox: '0 0 156 38',
  width: '15.6rem',
  height: '3.8rem',
  display: 'b2lock',
})``

export const FloppyDisk = styled(Box).attrs({
  is: 'svg',
  viewBox: '0 0 134 120',
  width: '13.4rem',
  height: '12rem',
  position: 'absolute',
  bottom: 0,
  left: '1.2rem',
  display: 'block',
})`
  ${insertDiskAnimation};
`

export const Wrapper = styled(Flex).attrs({
  flexDirection: ['column', null, 'row'],
  alignItems: ['center', null, 'flex-end'],
  justifyContent: ['center', null, 'space-between'],
  minHeight: 'min-content',
  bg: 'secondary',
  p: 6,
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  color: 'primary',
})``
