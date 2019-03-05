import styled from 'styled-components'
import { CSSTransition } from 'react-css-transition'

import { Flex } from '../../components'
import toastyImage from './toasty.png'

export const Wrapper = styled(Flex).attrs({
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'primary',
  bg: 'secondary',
  minHeight: 'min-content',
  p: 5,
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
})`
  overflow: hidden;
`

export const Toasty = styled(CSSTransition)`
  background-image: url('${toastyImage}');
  background-size: cover;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20rem;
  height: 20rem;
`
