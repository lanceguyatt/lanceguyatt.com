import Button from './Button.astro'

export default {
  title: 'Components/Button',
  component: Button,
}

export const Default = {}

export const Primary = {
  args: {
    variant: 'primary',
    label: 'Click me',
  },
}

export const Disabled = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
}
