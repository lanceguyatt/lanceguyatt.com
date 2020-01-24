import React from 'react'

import Radio from './Radio'

export default {
  title: 'forms/Radio',
  parameters: {
    componentSubtitle: 'Radio subtitle'
  },
  component: Radio
}

export const all = () => <Radio name="foo">I agree to the terms</Radio>
