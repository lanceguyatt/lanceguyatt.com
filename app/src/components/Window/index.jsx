import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import sprite from './sprite.svg'

import { Box, Close, Depth, Flex, Zoom } from '../common'

const WindowWrapper = styled(
  /* eslint-disable-next-line */
  ({ name, close, active, zoom, full, free, ...props }) => <Flex {...props} />
).attrs({
  borderTop: 2,
  borderRight: 1,
  borderBottom: 2,
  borderLeft: 1,
  flexDirection: 'column',
  position: 'relative',
  height: '100%',
  width: 1,
})`
  border-top-color: #fff;
  border-right-color: #000;
  border-bottom-color: #000;
  border-left-color: #000;
  overflow: hidden;

  ${props =>
    props.active
      ? `background-color: ${props.theme.colors.primary}`
      : `background-color: ${props.theme.colors.secondary}`};

  ${props => props.zoom && `width: 50vw; height: 50vh; flex: none;`};
`

const WindowHeader = styled(Flex).attrs({
  alignItems: 'center',
  borderBottom: 2,
  borderColor: 'dark',
  height: '2rem',
})``

const WindowName = styled(Box).attrs({
  px: 3,
  flex: 1,
})`
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
`

const WindowMain = styled(Box).attrs({
  flex: 1,
  // borderTop: 28,
  // borderRight: 54,
  // borderBottom: 70,
  // borderLeft: 5,
  // position: 'relative',
  bg: 'secondary',
  px: 4,
  py: 5,
  borderColor: 'danger',
})`
  /* border-image: url(${sprite}) 28 54 70 5 stretch; */
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`

// const WindowInner = styled(Flex).attrs({
//   bg: 'gray.2',
//   flex: 1,
//   border: 3,
//   // position: 'absolute',
//   // top: '-28px',
//   // right: '-36px',
//   // bottom: '-50px',
//   // left: '-1px',
// })`
//   overflow: auto;
//   -webkit-overflow-scrolling: touch;

//   &::-webkit-scrollbar {
//     display: none;
//   }
// `

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
    zoom: false,
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

  handleZoom = () => {
    this.setState(prevState => ({
      zoom: !prevState.zoom,
    }))
  }

  render() {
    const { active, zoom } = this.state
    const { name, full, free, children, close } = this.props
    return (
      <WindowWrapper active={active} zoom={zoom} {...this.props}>
        <WindowHeader>
          <Close to={close} />
          <WindowName>
            {name} {full}% full, {free} free, 708K
          </WindowName>
          <Zoom onClick={this.handleZoom} />
          <Depth />
        </WindowHeader>

        <WindowMain>{children}</WindowMain>
        {/* <Sizing position="absolute" bottom={0} right={0} active={active} /> */}
      </WindowWrapper>
    )
  }
}
