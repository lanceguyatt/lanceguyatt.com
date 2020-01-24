/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react'
import { Box } from '@theme-ui/components'

import Button from './Button'

export default {
  component: Button,
  title: 'Button',
  parameters: {
    componentSubtitle: 'Button subtitle'
  },
  decorators: [story => <Box variant="layout.workbench">{story()}</Box>]
}

export const first = () => (
  <>
    <Button>Default</Button>
    <Button isExternal href="google.com" as="a">
      External
    </Button>
    <Button isDisabled>Disabled</Button>
  </>
)
