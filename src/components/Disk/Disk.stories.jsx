import React from 'react'

import Disk from './Disk'

export default {
  component: Disk,
  title: 'Disk',
  parameters: {
    componentSubtitle: 'Disk subtitle'
  }
}

export const all = () => (
  <>
    <Disk>Disk</Disk>
  </>
)

export const asLink = () => (
  <>
    <Disk as="a" href="#">
      Disk
    </Disk>
  </>
)
