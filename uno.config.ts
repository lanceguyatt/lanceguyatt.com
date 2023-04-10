// uno.config.ts
import { defineConfig, presetAttributify, presetTypography, presetUno, presetWind, transformerDirectives } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px: number) => `${round(px / 16)}rem`
const em = (px: number, base: number) => `${round(px / base)}em`

export default defineConfig({
  shortcuts: {
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
  },
  theme: {
    colors: {
      red: '#ed1c24',
      blue: '#6080b0',
      gray: '#a0a0a0',
      purple: 'rgb(68, 16, 68)',
      tan: 'rgb(224, 160, 128)',
    }
  },
  presets: [
    presetWind(),
    presetAttributify({ /* preset options */ }),
    presetTypography(),
    // ...custom presets
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})