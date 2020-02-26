import React from 'react'
import { Box } from '@theme-ui/components'

import Alert from './Alert'

export default {
  component: Alert,
  title: 'Alert',
  parameters: {
    componentSubtitle: 'Alert subtitle'
  },
  decorators: [
    story => (
      <Box variant="layout.workbench" bg="text">
        {story()}
      </Box>
    )
  ]
}

export const alerts = () => (
  <>
    <Alert status="primary" mb={4}>
      Alert
    </Alert>
    <Alert status="error">Alert</Alert>
  </>
)
