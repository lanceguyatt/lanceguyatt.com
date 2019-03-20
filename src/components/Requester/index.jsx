import React from 'react'
import PropTypes from 'prop-types'

import { Flex } from '../../primitives'
import { Depth } from '../index'
import { TitleBar, Name, Main, Wrapper } from './style'

const Requester = props => {
  const { show, name, children } = props
  return (
    <>
      {show ? (
        <Flex
          position="fixed"
          border={1}
          top={0}
          right={0}
          bottom={0}
          left={0}
          alignItems="center"
          justifyContent="center"
          zIndex={9}
        >
          <Wrapper
            tabIndex={-1}
            role="dialog"
            aria-modal
            aria-hidden
            {...props}
          >
            <TitleBar>
              <Name>{name}</Name>
              <Depth />
            </TitleBar>
            <Main>{children}</Main>
          </Wrapper>
        </Flex>
      ) : null}
    </>
  )
}

Requester.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  show: PropTypes.bool,
  special: PropTypes.bool,
}

Requester.defaultProps = {
  children: null,
  show: false,
  special: false,
}

export default Requester
