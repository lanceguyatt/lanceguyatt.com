import React from 'react'

import Alert from './Alert'

export default {
  title: 'Alert',
  component: Alert,
  parameters: {
    componentSubtitle: 'Button subtitle',
  },
}

export const allButtons = () => (
  <>
    <Alert status="error">Alert</Alert>
  </>
)
