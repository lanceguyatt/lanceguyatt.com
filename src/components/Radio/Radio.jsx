import React from 'react'
import { Flex, Box } from '@theme-ui/components'
import PropTypes from 'prop-types'

import { getMargin, omitMargin } from '../../utils'
import sprite from './sprite.svg'

const propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

/** `Radio` component */
const Radio = props => {
  const { children, name, ...rest } = props
  return (
    <Box {...getMargin(rest)}>
      <Flex
        as="label"
        htmlFor={name}
        __css={{
          alignItems: 'flex-start',
          userSelect: 'none',
          lineHeight: '18px'
        }}
      >
        <Box
          as="input"
          type="radio"
          id={name}
          name={name}
          __css={{
            appearance: 'none',
            width: 17,
            height: 18,
            background: `url(${sprite})`,
            mr: 4,
            outline: 0,
            '&:checked': {
              backgroundPosition: '-17px 0'
            }
          }}
          {...omitMargin(rest)}
        />
        <Box __css={{ flex: '1 1 auto' }}>{children}</Box>
      </Flex>
    </Box>
  )
}

Radio.propTypes = propTypes

export default Radio
