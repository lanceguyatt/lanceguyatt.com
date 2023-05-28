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
      background: 'hsl(0, 0%, 62.7%)',
      foreground: 'hsl(0, 0%, 0%)',
      primary: 'hsl(216, 33.6%, 53.3%)',
      'primary-foreground': 'hsl(0, 0%, 0%)',
      secondary: 'hsl(0, 0%, 62.7%)',
      'secondary-foreground': 'hsl(0, 0%, 0%)',
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
    presetUno({
      'dark': 'media'
    }),
    presetWind(),
    presetAttributify(),
    presetTypography(),
    // presetUno<Theme>(),
    presetTheme<Theme>({
      theme: {
        workbench: {
          colors: {
            background: 'hsl(0, 0%, 62.7%)',
            foreground: 'hsl(0, 0%, 0%)',
            primary: 'hsl(216, 33.6%, 53.3%)',
          },
        },
        kickstart: {
          colors: {
            background: 'hsl(300, 61.9%, 16.5%)',
            foreground: 'hsl(20, 60.8%, 69%)',
          }
        },
        guru: {
          colors: {
            background: 'hsl(0, 0%, 10%)',
            foreground: 'hsl(357.7, 85.3%, 52%)',
            primary: 'hsl(357.7, 85.3%, 52%)',
          }
        }
      }
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})