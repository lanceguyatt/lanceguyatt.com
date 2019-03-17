import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'

import { Depth } from '../index'
import { Header, Name, Main, Inner, Wrapper } from './style'

const Requester = props => {
  const { name, description, actions, show, children } = props
  return (
    <Modal show={show}>
      <Wrapper {...props}>
        <Header>
          <Name>{name}</Name>
          <Depth />
        </Header>
        {children}
        <Main>
          <Inner dangerouslySetInnerHTML={{ __html: description }} />
          {actions}
        </Main>
      </Wrapper>
    </Modal>
  )
}

Requester.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  actions: PropTypes.node,
  show: PropTypes.bool,
}

Requester.defaultProps = {
  actions: null,
  show: false,
}

export default Requester
