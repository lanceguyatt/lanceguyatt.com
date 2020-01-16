import React, { Children } from 'react'
import { PropTypes } from 'prop-types'
import { Box, Flex } from '@theme-ui/components'
import ReactModal from 'react-modal'

import Button from '../Button'

function Modal({ isOpen, onClose, children }) {
  const actions = {
    onClose
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      ariaHideApp={false}
      closeTimeoutMS={300}
      style={{
        overlay: {
          backgroundColor: 'rgba(246, 249, 252, .97)',
          // 1 less that max, to allow intercom over the top
          zIndex: 2147483646,
          overflowX: 'hidden',
          overflowY: 'auto'
        },
        content: {
          left: '0',
          top: '0',
          bottom: '0',
          right: '0',
          backgroundColor: 'transparent',
          border: 'none',
          overflow: 'visible',
          padding: '0',
          width: '100%',
          margin: 'auto'
        }
      }}
    >
      <Flex p={5}>
        <Box>{Children.only(children(actions))}</Box>
      </Flex>
      <Button onClick={onClose}>Close</Button>
    </ReactModal>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
}

export default Modal
