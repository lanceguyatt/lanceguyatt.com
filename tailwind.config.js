/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Topaz', 'ui-sans-serif', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'insert-disk': {
					'0%': { transformOrigin: '0 0' },
					'20%': { transform: 'translate3d(0, 2rem, 0)', transformOrigin: '0 0' },
					'100%': { transform: 'rotateX(83deg) translateY(-22rem)', transformOrigin: '0 0' },
				},
				foo: {
					'0%': { borderColor: 'inherit' },
					'100%': { borderColor: 'transparent' }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				'insert-disk': 'insert-disk 1.25s ease',
				foo: 'foo 1s ease'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				muted: 'hsl(var(--muted))',
				'muted-foreground': 'hsl(var(--muted-foreground))',
				popover: 'hsl(var(--popover))',
				'popover-foreground': 'hsl(var(--popover-foreground))',
				card: 'hsl(var(--card))',
				'card-foreground': 'hsl(var(--card-foreground))',
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
				titlebar: '1.375rem'
			},
			spacing: {
				'2px': '0.125rem',
				titlebar: '1.375rem',
			},
			width: {
				39: '9.75rem',
			},
			maxWidth: {
				20: '5rem',
				24: '6rem',
				160: '40rem'
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						'--tw-prose-body': theme('colors.foreground'),
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
