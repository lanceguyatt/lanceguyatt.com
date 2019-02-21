import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Close } from '../common'
import { Name, Header, Main, Wrapper } from './style'

export default class Window extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    full: PropTypes.number,
    free: PropTypes.string,
    children: PropTypes.node,
    close: PropTypes.string,
  }

  static defaultProps = {
    full: 85,
    free: '129K',
    children: null,
    close: '/',
  }

  state = {
    active: false,
  }

  componentWillMount() {
    this.setState({
      active: true,
    })
  }

  componentWillUnmount() {
    this.setState({
      active: false,
    })
  }

  render() {
    const { active } = this.state
    const { name, full, free, children, close } = this.props
    return (
      <Wrapper active={active} {...this.props}>
        <Header>
          <Close to={close} />
          <Name>
            {name} {full}% full, {free} free, 708K
          </Name>
        </Header>
        <Main>{children}</Main>
      </Wrapper>
    )
  }
}
