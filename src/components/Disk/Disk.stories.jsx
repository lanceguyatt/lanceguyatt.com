import React from 'react'

import Disk from './Disk'

export default {
  title: 'Disk',
  parameters: {
    componentSubtitle: 'Disk subtitle'
  },
  component: Disk
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
