import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CSSTransition, transit } from 'react-css-transition'

import { Close } from '../common'
import { Name, Header, Main } from './style'

CSSTransition.childContextTypes = {}

const Wrapper = styled(CSSTransition)`
  border-top: 2px solid #fff;
  border-right: 1px solid #000;
  border-bottom: 2px solid #000;
  border-left: 1px solid #000;
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.primary};
  position: relative;

  ${Header} {
    flex: none;
  }
`

const Window = ({ name, full, free, children, close }) => (
  <Wrapper
    defaultStyle={{ opacity: 0 }}
    enterStyle={{ opacity: transit(1, 300, 'ease-in-out') }}
    leaveStyle={{ opacity: transit(1, 300, 'ease-in-out') }}
    activeStyle={{ opacity: 1 }}
    active
    transitionAppear
  >
    <Header>
      <Close to={close} />
      <Name>
        {name} {full}% full, {free} free, 708K
      </Name>
    </Header>
    <Main>
      <div>{children}</div>
    </Main>
  </Wrapper>
)

Window.propTypes = {
  name: PropTypes.string.isRequired,
  full: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  free: PropTypes.string,
  children: PropTypes.node,
  close: PropTypes.string,
}

Window.defaultProps = {
  full: '85',
  free: '129K',
  children: null,
  close: '/',
}

export default Window
