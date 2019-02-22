import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Close, Flex } from '../common'
import { Name, Header, Main } from './style'

/* eslint-disable-next-line */
const Wrapper = styled(({ level1, level2, ...props }) => (
  <Flex {...props} />
)).attrs({
  flexDirection: 'column',
  bg: 'primary',
  borderTop: 2,
  borderRight: 1,
  borderBottom: 2,
  borderLeft: 1,
  height: '100%',
  width: 1,
  flex: 1,
})`
  border-top-color: #fff;
  border-right-color: #000;
  border-bottom-color: #000;
  border-left-color: #000;

  ${Header} {
    flex: none;
  }

  ${props =>
    props.level1 &&
    `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;

    @media (min-width: ${props.theme.breakpoints[1]}) {
      left: 50%;
      top: 50%;
      width: 50vw;
      height: 50vh;
      transform: translate(calc(-50% - 5rem), calc(-50% - 5rem));
    }
  `};

  ${props =>
    props.level2 &&
    `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;

    @media (min-width: ${props.theme.breakpoints[1]}) {
      left: 50%;
      top: 50%;
      width: 50vw;
      height: 50vh;
      transform: translate(calc(-50% + 5rem), calc(-50% + 5rem));
    }
  `};
`

const Window = ({ name, full, free, children, close, level1, level2 }) => (
  <Wrapper level1={level1} level2={level2}>
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
  name: PropTypes.string.isRequired,
  full: PropTypes.number,
  free: PropTypes.string,
  children: PropTypes.node,
  close: PropTypes.string,
  level1: PropTypes.bool,
  level2: PropTypes.bool,
}

Window.defaultProps = {
  full: 85,
  free: 128,
  children: null,
  close: '/',
  level1: null,
  level2: null,
}

export default Window
