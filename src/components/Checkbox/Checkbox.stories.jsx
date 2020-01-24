import React from 'react'
import { Box } from '@theme-ui/components'

import Checkbox from './Checkbox'

export default {
  component: Checkbox,
  title: 'Checkbox',
  parameters: {
    componentSubtitle: 'Checkbox subtitle'
  },
  decorators: [story => <Box variant="layout.workbench">{story()}</Box>]
}

export const all = () => <Checkbox name="agreed">I agree to the terms</Checkbox>

export const checked = () => (
  <Checkbox name="foo" checked>
    I agree to the terms
  </Checkbox>
)
