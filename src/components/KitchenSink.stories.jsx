import React from 'react'
import { Box } from '@theme-ui/components'

import Cycle from './Cycle'
import Depth from './Depth'
import Disk from './Disk'
import Sizing from './Sizing'
import Zoom from './Zoom'
// import Close from './Close'

export default {
  title: 'Kitchen Sink',
  parameters: {
    componentSubtitle: 'Kitchen Sink subtitle'
  },
  decorators: [story => <Box p={4}>{story()}</Box>]
}

export const all = () => (
  <>
    <Cycle />
    <Depth />
    <Disk />
    <Sizing />
    <Zoom />
  </>
)
