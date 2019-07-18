import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Flex } from '../../primitives'
import Close from '../Close'
import Depth from '../Depth'
import Zoom from '../Zoom'
import { Name, Header, Inner, Main } from './style'
import window from './window.svg'

/* eslint-disable-next-line */
const Wrapper = styled(({ active, level0, level1, level2, ...props }) => (
  <Flex {...props} />
)).attrs({
  flexDirection: 'column',
})`
  position: absolute;
  top: 2.2rem;
  right: 0;
  bottom: 0;
  left: 0;
  border-style: solid;
  border-width: 2.2rem 0.4rem 0.4rem 0.4rem;
  border-image: url(${window}) 22 4 4 4 stretch;

  background-color: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.secondary};

  ${props => props.level0 && `z-index: ${props.theme.zIndex[0]};`};

  ${props =>
    props.level1 &&
    `
    z-index: ${props.theme.zIndex[1]};

    @media (min-width: ${props.theme.breakpoints[1]}) {
      left: 50%;
      bottom: auto;
      right: auto;
      top: 50%;
      transform: translate(-50%, -50%);
      min-width: 64rem;
      min-height: 48rem;
    }
  `};

  ${props =>
    props.level2 &&
    `
    z-index: ${props.theme.zIndex[2]};

    @media (min-width: ${props.theme.breakpoints[1]}) {
      left: 50%;
      top: 50%;
      width: 50vw;
      height: 50vh;
      margin-top: 5rem;
      margin-left: 5rem;
      transform: translate(-50%, -50%);
    }
  `};
`

const Window = ({
  active,
  children,
  close,
  free,
  full,
  level0,
  level1,
  level2,
  name,
  heading,
}) => (
  <Wrapper
    active={active}
    level0={level0}
    level1={level1}
    level2={level2}
    tabIndex={-1}
    is="article"
  >
    <Header is="header">
      <Close to={close} />
      <Inner>
        <Name is={heading} mb={0}>
          {name}
        </Name>
        {full}% full, {free}k free, 708K
      </Inner>
      <Zoom />
      <Depth />
    </Header>
    <Main>{children}</Main>
  </Wrapper>
)

Window.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  close: PropTypes.string,
  free: PropTypes.number,
  full: PropTypes.number,
  level0: PropTypes.bool,
  level1: PropTypes.bool,
  level2: PropTypes.bool,
  name: PropTypes.string.isRequired,
  heading: PropTypes.string,
}

Window.defaultProps = {
  active: false,
  children: null,
  close: '/',
  free: 128,
  full: 85,
  level0: null,
  level1: null,
  level2: null,
  heading: 'div',
}

export default Window
