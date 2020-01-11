import React from 'react'

import Button from './Button'

export default {
  title: 'Gadgets/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Button subtitle',
  },
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
