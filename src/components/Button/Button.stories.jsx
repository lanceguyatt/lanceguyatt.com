/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react'
import { linkTo } from '@storybook/addon-links'

import Button from './Button'

export default {
  title: 'Button',
  parameters: {
    componentSubtitle: 'Button subtitle'
  },
  component: Button
}

export const first = () => (
  <Button onClick={linkTo('Button', 'second')}>Go to Second</Button>
)
export const second = () => (
  <Button onClick={linkTo('Button', 'first')}>Go to First</Button>
)
