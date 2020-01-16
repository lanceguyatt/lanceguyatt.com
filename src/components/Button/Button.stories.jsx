import React from 'react'

import Button from './Button'

export default {
  title: 'Gadgets/Button',
  parameters: {
    componentSubtitle: 'Button subtitle'
  },
  component: Button
}

export const allButtons = () => (
  <>
    <Button>Button</Button>
  </>
)

export const disabled = () => (
  <>
    <Button disabled>Button</Button>
  </>
)
