import styled, { keyframes } from 'styled-components'

import { Flex, Box } from '../../components/common'
import tick from './tick.png'

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
export const Tick = styled(Box).attrs({
  is: 'img',
  src: tick,
  width: '16.5rem',
  height: '15rem',
  mb: 6,
  display: 'block',
})``

export const DiskDrive = styled(Box).attrs({
  is: 'svg',
  viewBox: '0 0 156 38',
  width: '15.6rem',
  height: '3.8rem',
})``

export const FloppyDisk = styled(Box).attrs({
  is: 'svg',
  viewBox: '0 0 134 120',
  width: '13.4rem',
  height: '12rem',
  position: 'absolute',
  bottom: 0,
  left: '1.2rem',
})`
  animation: ${insertDisk} 1.5s forwards infinite;
`

export const Wrapper = styled(Flex).attrs({
  flexDirection: ['column', null, 'row'],
  alignItems: ['center', null, 'flex-end'],
  justifyContent: ['center', null, 'space-between'],
  minHeight: '100vh',
  bg: 'secondary',
  p: 6,
  color: 'primary',
})`
  overflow: hidden;
`
