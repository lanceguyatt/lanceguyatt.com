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
					'100%': { transform: 'rotateX(83deg) translateY(-21rem)', transformOrigin: '0 0' },
				},
				foo: {
					'0%': { borderColor: 'inherit' },
					'100%': { borderColor: 'transparent' }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				'insert-disk': 'insert-disk 1.5s ease',
				foo: 'foo 1s ease'
			},
			backgroundImage: {
				close: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMjAgMGgyMHYyMkgyMHoiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0zOSAwaDF2MjBoLTF6Ii8+PHBhdGggZD0iTTI3IDZoNXYyaC01VjZ6bTAgMmgxdjhoLTFWOHptMSA2aDR2MmgtNHYtMnptMy02aDF2NmgtMVY4eiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZmlsbD0iI0FBQSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjggOGgzdjZoLTN6Ii8+PHBhdGggZD0iTTIwIDBoMTl2MkgyMFYwem0wIDJoMXYyMGgtMVYyeiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTM4IDJoMXYyMGgtMVYyek0yMSAyMGgxN3YySDIxdi0yeiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMzkgMjBoMXYyaC0xeiIvPjxnPjxwYXRoIGQ9Ik0wIDBoMjB2MjJIMHoiLz48cGF0aCBkPSJNMTkgMmgxdjE4aC0xVjJ6TTAgMGgyMHYySDBWMHptMCAyaDF2MjBIMFYyeiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTEgMjBoMTl2Mkgxdi0yek0xOCAyaDF2MThoLTFWMnpNNyA2aDV2Mkg3VjZ6bTAgMmgxdjhIN1Y4em0xIDZoNHYySDh2LTJ6bTMtNmgxdjZoLTFWOHoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTggOGgzdjZIOHoiLz48L2c+PC9nPjwvc3ZnPgo=')",
				checkbox: 'url(/images/checkbox.svg)',
				depth: 'url(/images/depth.svg)',
				disk: 'url(/images/disk.svg)',
				drawer: 'url(/images/drawer.svg)',
				drive: 'url(/images/drive.svg)',
				file: 'url(/images/file.svg)',
				zoom: 'url(/images/zoom.svg)'
			},
			lineHeight: {
				tighter: '1.125'
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
				titlebar: '1.375rem',
				'22px': '1.375rem',
			},
			spacing: {
				'2px': '0.125rem',
				titlebar: '1.375rem',
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
