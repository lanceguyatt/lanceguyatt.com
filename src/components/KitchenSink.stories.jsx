import React from 'react'
import { Box } from '@theme-ui/components'

import Cycle from './Cycle'
import Depth from './Depth'
import Sizing from './Sizing'
import Zoom from './Zoom'

import Label from './Label'
import Input from './Input'
import Button from './Button'

export default {
  title: 'Kitchen Sink',
  parameters: {
    componentSubtitle: 'Kitchen Sink subtitle'
  },
  decorators: [story => <Box p={4}>{story()}</Box>]
}

export const gadgets = () => (
  <>
    <Cycle />
    <Depth />
    <Sizing />
    <Zoom />
  </>
)

export const form = () => (
  <form>
    <Box mb={4}>
      <Label htmlFor="name">Name</Label>
      <Input name="name" id="name" placeholder="Enter name" />
    </Box>

    <Button type="submit">Button</Button>
  </form>
)
