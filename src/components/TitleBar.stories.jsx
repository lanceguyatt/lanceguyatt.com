import React from 'react'

import TitleBar from './TitleBar'
import Depth from './Depth'

export default {
  title: 'Title bar',
  component: TitleBar,
  parameters: {
    componentSubtitle: 'Title bar subtitle'
  }
}

export const all = () => (
  <>
    <TitleBar>Primary</TitleBar>
    <TitleBar appearance="secondary">
      Secondary
      <Depth />
    </TitleBar>
  </>
)
