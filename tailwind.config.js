const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;

const base = require('./tailwind.base.config')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
	darkMode: 'class',
	presets: [base],
	theme: {
		extend: {
			fontFamily: {
				sans: 'Topaz, ui-sans-serif, sans-serif',
			},
			keyframes: {
				'insert-disk': {
					'0%': { transformOrigin: '0 0' },
					'20%': { transform: 'translate3d(0, 2rem, 0)', transformOrigin: '0 0' },
					'100%': { transform: 'rotateX(83deg) translateY(-21rem)', transformOrigin: '0 0' },
				},
				foo: {
					'0%': { borderColor: 'inherit' },
					'100%': { borderColor: 'transparent' }
				}
			},
			animation: {
				'insert-disk': 'insert-disk 1.5s ease',
				foo: 'foo 1s ease'
			},
			lineHeight: {
				tighter: '1.125'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				muted: 'hsl(var(--muted))',
				'muted-foreground': 'hsl(var(--muted-foreground))',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				accent: 'hsl(var(--accent))',
				'accent-foreground': 'hsl(var(--accent-foreground))',
				destructive: 'hsl(var(--destructive))',
				'destructive-foreground': 'hsl(var(--destructive-foreground))',
				ring: 'hsl(var(--ring))',
				radius: 'hsl(var(--radius))',
			},
			height: {
				titlebar: rem(22),
				'22px': rem(22),
				169: rem(169),
			},
			spacing: {
				'2px': '0.125rem',
				'22px': rem(22),
				'23px': rem(23),
				titlebar: '1.375rem',
				toasty: rem(200),
			},
			width: {
				39: '9.75rem',
				'22px': '1.375rem',
				'23px': '1.4375rem',
				'26px': '1.625rem',
			},
			maxWidth: {
				20: '5rem',
				24: '6rem',
				160: '40rem'
			},
			// borderWidth: {
			// 	window: '1.375rem 0.25rem 0.25rem 0.25rem',
			// },
			// borderImage: {
			// 	window: 'url(/images/window.svg) 22 4 4 4 stretch',
			// },
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						'--tw-prose-body': theme('colors.foreground'),
						pre: {
							fontFamily: theme('fontFamily.sans')
						}
					}
				}
			}),
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-animate')
	]
}
