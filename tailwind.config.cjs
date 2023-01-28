const plugin = require('tailwindcss/plugin')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  // safelist: ['text-grey'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: 'hsl(0deg 0% 0%)',
      white: 'hsl(0deg 0% 100%)',
      red: '#ed1c24',
      blue: '#6080b0',
      gray: '#a0a0a0',
      purple: 'rgb(68, 16, 68)',
      tan: 'rgb(224, 160, 128)',
    },
    fontFamily: {
      sans: ['Topaz', 'ui-sans-serif', 'sans-serif'],
    },
    extend: {
      animation: {
        disk: 'disk 1.5s forwards infinite',
      },
      keyframes: {
        disk: {
          '0%': {
            transformOrigin: '0% 0%',
          },

          '20%': {
            transform: 'translate3d(0, 2rem, 0)',
            transformOrigin: '0% 0%',
          },

          '100%': {
            transform: 'rotateX(83deg) translateY(-35rem)',
            transformOrigin: '0% 0%',
          },
        },
      },
      backgroundImage: {
        window: '/images/window.svg',
      },
      backgroundPosition: {
        disk: '-43px 0',
      },
      // transitionProperty: {
      //   url: 'text-decoration, color',
      // },
      typography: ({ theme }) => ({
        black: {
          css: {
            '--tw-prose-body': theme('colors.black'),
            '--tw-prose-headings': theme('colors.black'),
            '--tw-prose-lead': theme('colors.black'),
            '--tw-prose-links': theme('colors.black'),
            '--tw-prose-bold': theme('colors.black'),
            '--tw-prose-quotes': theme('colors.black'),
            '--tw-prose-quote-borders': theme('colors.black'),
            '--tw-prose-bullets': theme('colors.black'),
            '--tw-prose-counters': theme('colors.black'),
            '--tw-prose-hr': theme('colors.black'),
            '--tw-prose-th-borders': theme('colors.black'),
            '--tw-prose-td-borders': theme('colors.black'),
          },
        },
        red: {
          '--tw-prose-body': theme('colors.red'),
        },
        tan: {
          css: {
            '--tw-prose-body': theme('colors.tan'),
            '--tw-prose-headings': theme('colors.black'),
            '--tw-prose-lead': theme('colors.black'),
            '--tw-prose-links': theme('colors.black'),
            '--tw-prose-bold': theme('colors.black'),
            '--tw-prose-quotes': theme('colors.black'),
            '--tw-prose-quote-borders': theme('colors.black'),
            '--tw-prose-bullets': theme('colors.black'),
            '--tw-prose-counters': theme('colors.black'),
            '--tw-prose-hr': theme('colors.black'),
            '--tw-prose-th-borders': theme('colors.black'),
            '--tw-prose-td-borders': theme('colors.black'),
          },
        },
        DEFAULT: {
          css: {
            lineHeight: round(20 / 16),
            h2: {
              fontWeight: theme('fontWeight.normal'),
            },
            h3: {
              fontWeight: theme('fontWeight.normal'),
            },
            h4: {
              fontWeight: theme('fontWeight.normal'),
            },
            'thead th': {
              fontWeight: theme('fontWeight.normal'),
            },
          },
        },
      }),
    },
  },
  // corePlugins: {
  //   container: false
  // },
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {
      addComponents({
        // '.container': {
        //   width: '100%',
        //   maxWidth: '100%',
        //   marginLeft: 'auto',
        //   marginRight: 'auto',
        //   paddingLeft: '1.25rem',
        //   paddingRight: '1.25rem',
        //   '@screen xl': {
        //     maxWidth: 1240
        //   }
        // },
        '.border-window': {
          borderWidth: '22px 4px 4px 4px',
          borderImage: 'url(/images/window.svg) 22 4 4 4 stretch',
        },
        '.border-img-foo': {
          borderWidth: 4,
          borderImage:
            'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMSAyNmg2N3YySDF2LTJ6TTY2IDJoMnYyNGgtMlYyem0xLTJoMXYyaC0xVjB6TTIgMmg2M3YySDJWMnptMCAyaDJ2MjBIMlY0em0wIDIwaDF2Mkgydi0yeiIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0wIDBoNjd2MkgwVjB6bTAgMmgydjI0SDBWMnptMCAyNGgxdjJIMHYtMnptMy0yaDYzdjJIM3YtMnpNNjQgNGgydjIwaC0yVjR6bTEtMmgxdjJoLTFWMnoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+Cg==) 4 stretch',
        },
        '.border-img-bar': {
          borderWidth: 2,
          borderImage:
            'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMCAwaDE0djJIMFYwem0wIDIyaDF2Mkgwdi0yek0wIDJoMnYyMEgwVjJ6IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTEgMjJoMTN2Mkgxdi0yek0xMiAyaDJ2MjBoLTJWMnptMS0yaDF2MmgtMVYweiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4K) 2 / 1 / 0 stretch',
        },
      })

      addUtilities({
        '.text-optimize': {
          textRendering: 'optimizeLegibility',
        },
      })
    }),
    // require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    // require('tw-elements/dist/plugin')
  ],
}
