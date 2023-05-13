// uno.config.ts
import { presetUno, defineConfig, presetAttributify, presetTypography, presetWind, transformerDirectives, transformerVariantGroup } from 'unocss'

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px: number) => `${round(px / 16)}rem`
const em = (px: number, base: number) => `${round(px / base)}em`

export default defineConfig({
  shortcuts: {
    'border-img-foo': 'border-0.25rem',
    // background: 'red',
    // borderWidth: 4,
    // borderImage:
    //   'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMSAyNmg2N3YySDF2LTJ6TTY2IDJoMnYyNGgtMlYyem0xLTJoMXYyaC0xVjB6TTIgMmg2M3YySDJWMnptMCAyaDJ2MjBIMlY0em0wIDIwaDF2Mkgydi0yeiIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0wIDBoNjd2MkgwVjB6bTAgMmgydjI0SDBWMnptMCAyNGgxdjJIMHYtMnptMy0yaDYzdjJIM3YtMnpNNjQgNGgydjIwaC0yVjR6bTEtMmgxdjJoLTFWMnoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+Cg==) 4 stretch',
    // },
    // '.border-window': {
    //   borderImage: 'url(/images/window.svg) 22 4 4 4 stretch',
    //   borderWidth: '22px 4px 4px 4px',
    // },
    'border-img-bar': 'border-2px',
    // borderWidth: 2,
    // borderImage:
    //   'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMCAwaDE0djJIMFYwem0wIDIyaDF2Mkgwdi0yek0wIDJoMnYyMEgwVjJ6IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTEgMjJoMTN2Mkgxdi0yek0xMiAyaDJ2MjBoLTJWMnptMS0yaDF2MmgtMVYweiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4K) 2 / 1 / 0 stretch',
    // },
  },
  theme: {
    fontFamily: {
      sans: ['Topaz', 'ui-sans-serif', 'sans-serif'],
    },
    breakpoints: {
      sm: '320px',
      md: '640px',
      lg: '768px',
      xl: '1024px',
      xxl: '1280px',
    },
    colors: {
      red: '#ed1c24',
      blue: '#6080b0',
      gray: '#a0a0a0',
      purple: 'rgb(68, 16, 68)',
      tan: 'rgb(224, 160, 128)',
    },
    animation: {
      keyframes: {
        disk: `{
          0% { transform-origin: 0 0; }
          20% { transform: translate3d(0, 2rem, 0); transform-origin: 0 0; }
          100% { transform: rotateX(83deg) translateY(-22rem); transform-origin: 0 0; }
        }`,
        pulse: '{ 0% { border-color: inherit; } 100% { border-color: transparent; } }'
      },
      durations: {
        disk: '1.25s',
        pulse: '0.75s'
      },
      timingFns: {
        disk: 'ease',
        pulse: 'ease'
      },
      counts: {
        disk: 'infinite',
        pulse: 'infinite',
      },
      fillModes: {
        disk: 'forwards',
        pulse: 'alternate'
      },
      directions: {
        disk: 'alternate'
      }
    },
    backgroundImage: {
      window: '/images/window.svg',
    },
    backgroundPosition: {
      disk: '-43px 0',
    },
  },
  presets: [
    presetUno(),
    presetWind(),
    presetAttributify(),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})