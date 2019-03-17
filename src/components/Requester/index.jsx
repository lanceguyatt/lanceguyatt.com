import React from 'react'
import PropTypes from 'prop-types'

import { Depth } from '../index'
import { Header, Name, Main, Inner, Wrapper } from './style'

const Requester = props => {
  const { name, description, actions } = props
  return (
    <Wrapper {...props}>
      <Header>
        <Name>{name}</Name>
        <Depth />
      </Header>
      <Main>
        <Inner dangerouslySetInnerHTML={{ __html: description }} />
        {actions}
      </Main>
    </Wrapper>
  )
}

Requester.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string.isRequired,
  actions: PropTypes.node,
}

Requester.defaultProps = {
  name: 'Workbench',
  actions: null,
}

export default Requester
