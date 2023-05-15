// uno.config.ts
import { presetUno, defineConfig, presetAttributify, presetTypography, presetWind, transformerDirectives, transformerVariantGroup } from 'unocss'
import type { Theme } from 'unocss/preset-uno'
import presetTheme from 'unocss-preset-theme'

// const round = (num: number) =>
//   num
//     .toFixed(7)
//     .replace(/(\.[0-9]+?)0+$/, '$1')
//     .replace(/\.0$/, '')
// const rem = (px: number) => `${round(px / 16)}rem`
// const em = (px: number, base: number) => `${round(px / base)}em`

export default defineConfig({
  shortcuts: {
    'border-img-foo': 'border-0.25rem',
    'border-img-bar': 'border-2px',
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
      primary: '#6080b0',
      background: '#a0a0a0',
      text: 'rgba(0,0,0,0.85)',
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
    height: {
      titlebar: '1.375rem'
    }
  },
  presets: [
    presetUno(),
    presetWind(),
    presetAttributify(),
    presetTypography(),
    presetTheme<Theme>({
      theme: {
        dark: {
          colors: {
            'primary': 'rgba(0,0,0, 0.85)',
            'background': 'rgba(0,0,0, 0.85)',
            'text': 'rgba(255, 255, 255, 0.85)',
          },
        },
      }
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})