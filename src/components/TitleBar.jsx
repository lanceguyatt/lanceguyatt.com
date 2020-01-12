import React from 'react'
import { Flex, Box } from '@theme-ui/components'
import PropTypes from 'prop-types'

const APPEARANCES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
}

const propTypes = {
  appearance: PropTypes.oneOf(Object.values(APPEARANCES)),
  children: PropTypes.node.isRequired
}

const defaultProps = {
  appearance: APPEARANCES.PRIMARY
}

function TitleBar({ appearance, children, ...props }) {
  return (
    <Flex
      __themeKey="titlebar"
      __css={{ alignItems: 'center', height: 22, position: 'relative' }}
      {...props}
      variant={appearance}
    >
      <Box
        __css={{
          px: 3,
          flex: '1 1 auto',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          userSelect: 'none',
          whiteSpace: 'nowrap'
        }}
      >
        {children}
      </Box>
    </Flex>
  )
}

TitleBar.propTypes = propTypes
TitleBar.defaultProps = defaultProps

export default TitleBar
