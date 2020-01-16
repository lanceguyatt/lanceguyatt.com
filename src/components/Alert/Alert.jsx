import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@theme-ui/components'

const propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.string
}

const defaultProps = {
  status: 'error'
}

const Alert = props => {
  const { children, status, ...other } = props
  return (
    <Box
      role="alert"
      aria-live="assertive"
      __themeKey="alerts"
      __css={{
        display: 'block',
        borderWidth: 3,
        borderStyle: 'solid',
        p: 4,
        textDecoration: 'none',
        textAlign: 'center'
      }}
      variant={status}
      {...other}
    >
      {children}
    </Box>
  )
}

Alert.propTypes = propTypes
Alert.defaultProps = defaultProps

export default Alert
