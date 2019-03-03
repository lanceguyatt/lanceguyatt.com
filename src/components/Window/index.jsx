import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Close, Flex } from '../index'
import { Name, Header, Main } from './style'

/* eslint-disable-next-line */
const Wrapper = styled(({ active, level0, level1, level2, ...props }) => (
  <Flex {...props} />
)).attrs({
  flexDirection: 'column',
  borderTop: 2,
  borderRight: 1,
  borderBottom: 2,
  borderLeft: 1,
})`
  border-top-color: #fff;
  border-right-color: #000;
  border-bottom-color: #000;
  border-left-color: #000;

  position: absolute;
  top: 2.2rem;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.secondary};

  ${props => props.level0 && `z-index: ${props.theme.zIndex[0]};`};

  ${props =>
    props.level1 &&
    `
    z-index: ${props.theme.zIndex[1]};

    @media (min-width: ${props.theme.breakpoints[1]}) {
      left: 50%;
      top: 50%;
      width: 50vw;
      height: 50vh;
      margin-top: -5rem;
      margin-left: -5rem;
      transform: translate(-50%, -50%);
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
}) => (
  <Wrapper active={active} level0={level0} level1={level1} level2={level2}>
    <Header>
      <Close to={close} />
      <Name>
        {name} {full}% full, {free}k free, 708K
      </Name>
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
}

export default Window
