import React from 'react'

import Alert from '.'

export default {
  title: 'Alert',
  component: Alert,
  parameters: {
    componentSubtitle: 'Button subtitle'
  }
}

export const allButtons = () => (
  <>
    <Alert status="error">Alert</Alert>
  </>
)
