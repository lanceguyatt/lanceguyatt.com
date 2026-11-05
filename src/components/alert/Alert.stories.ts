import Alert from './Alert.astro'

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    intent: {
      control: 'select',
      options: ['destructive'],
    },
    animate: {
      control: 'boolean',
    },
  },
  args: {
    // `<dialog>` is hidden unless `open` is set
    open: true,
    intent: 'destructive',
    animate: false,
    slots: {
      default:
        '<p>Software Failure. Press left mouse button to continue.</p><p>Guru Meditation #00000004.0000AAC0</p>',
    },
  },
}

export const Default = {}

export const Animated = {
  args: {
    animate: true,
  },
}
