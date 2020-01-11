import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@theme-ui/components'

export default function Alert({ children, status, ...props }) {
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
        maxWidth: 640,
        textDecoration: 'none',
        textAlign: 'center',
      }}
      {...props}
      variant={status}
    >
      {children}
    </Box>
  )
}

Alert.propTypes = {
  children: PropTypes.node.isRequired,
}

Alert.defaultProps = {
  status: 'error',
}
