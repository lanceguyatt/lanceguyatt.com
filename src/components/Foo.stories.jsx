import React from 'react'
import { LinkTo, linkTo } from '@storybook/addon-links'

export default {
  title: 'Select'
}

export const index = () => (
  <select value="Index" onChange={linkTo('Select', e => e.currentTarget.value)}>
    <option>index</option>
    <option>first</option>
    <option>second</option>
    <option>third</option>
  </select>
)
export const first = () => <LinkTo story="index">Go back</LinkTo>
export const second = () => <LinkTo story="index">Go back</LinkTo>
export const third = () => <LinkTo story="index">Go back</LinkTo>
