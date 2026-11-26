import { type ClassValue, clsx, createTV, createTwMerge } from 'tailwind-variants/config'

// Teach the merger about the custom spacing tokens in src/styles/app.css
// (--spacing-titlebar, --spacing-toasty) so h-titlebar conflicts with h-4, etc.
const twMergeConfig = {
  extend: {
    theme: {
      color: ['primary', 'secondary'],
      spacing: ['titlebar', 'toasty'],
    },
    // The bg-* sprite utilities in app.css are images, so they must not cancel bg-<colour>
    classGroups: {
      'bg-image': [
        {
          bg: [
            'checkbox',
            'close',
            'depth',
            'disk',
            'drawer',
            'drive',
            'file',
            'theme',
            'toasty',
            'zoom',
          ],
        },
      ],
    },
  },
}

export const tv = createTV({ twMergeConfig })

const twMerge = createTwMerge(twMergeConfig)

/** clsx-style join plus Tailwind conflict merging, using the same config as `tv`. */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(...inputs))

export type { VariantProps } from 'tailwind-variants/config'
