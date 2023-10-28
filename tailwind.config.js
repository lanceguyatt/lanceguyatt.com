const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
	darkMode: 'class',
	theme: {
		extend: {
			animation: {
				'insert-disk': 'insert-disk 1.5s ease',
				foo: 'foo 1s ease'
			},
			backgroundImage: {
				close: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMjAgMGgyMHYyMkgyMHoiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0zOSAwaDF2MjBoLTF6Ii8+PHBhdGggZD0iTTI3IDZoNXYyaC01VjZ6bTAgMmgxdjhoLTFWOHptMSA2aDR2MmgtNHYtMnptMy02aDF2NmgtMVY4eiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZmlsbD0iI0FBQSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjggOGgzdjZoLTN6Ii8+PHBhdGggZD0iTTIwIDBoMTl2MkgyMFYwem0wIDJoMXYyMGgtMVYyeiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTM4IDJoMXYyMGgtMVYyek0yMSAyMGgxN3YySDIxdi0yeiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMzkgMjBoMXYyaC0xeiIvPjxnPjxwYXRoIGQ9Ik0wIDBoMjB2MjJIMHoiLz48cGF0aCBkPSJNMTkgMmgxdjE4aC0xVjJ6TTAgMGgyMHYySDBWMHptMCAyaDF2MjBIMFYyeiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTEgMjBoMTl2Mkgxdi0yek0xOCAyaDF2MThoLTFWMnpNNyA2aDV2Mkg3VjZ6bTAgMmgxdjhIN1Y4em0xIDZoNHYySDh2LTJ6bTMtNmgxdjZoLTFWOHoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTggOGgzdjZIOHoiLz48L2c+PC9nPjwvc3ZnPgo=')",
				checkbox: 'url(/images/checkbox.svg)',
				depth: 'url(/images/depth.svg)',
				disk: "url(\"data:image/svg+xml,%3Csvg width='86' height='46' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23AAA' d='M0 0h43v46H0z' /%3E%3Cpath d='M5 8V6h32v2h2v32H4V8h1z' fill='%23000' /%3E%3Cpath d='M29 16v2H13v-2h-1V6h18v10h-1z' fill='%23FFF' /%3E%3Cpath fill='%23000' d='M24 7h3v8h-3z' /%3E%3Cpath d='M9 24v-2h25v2h1v16H8V24h1z' fill='%23FFF' /%3E%3Cpath fill='%23AAA' d='M5 37h2v2H5z' /%3E%3Cpath d='M28 28v-2h2v2h-1v2h-1v2h-1v2h-1v2h-1v2h-2v-2h1v-2h1v-2h1v-2h1v-2h1zm-3 0v-2h2v2h-1v2h-1v2h-1v2h-1v2h-1v2h-2v-2h-1v-2h-1v-2h2v2h2v-2h1v-2h1v-2h1zm-8 8h-1v-2h-1v-2h2v2h1v2h1v2h-2v-2z' fill='%23000' /%3E%3Cpath d='M42 46H1v-2h41V2h1v44h-1z' fill='%23000' /%3E%3Cpath d='M1 2v44H0V0h43v2H1z' fill='%23FFF' /%3E%3Cg%3E%3Cpath fill='%23AAA' d='M43 0h43v46H43z' /%3E%3Cpath d='M48 8V6h32v2h2v32H47V8h1z' fill='%23FFF' /%3E%3Cpath fill='%2368B' d='M80 6h2v2h-2z' /%3E%3Cpath d='M72 16v2H56v-2h-1V6h18v10h-1z' fill='%23000' /%3E%3Cpath fill='%23FFF' d='M67 7h3v8h-3z' /%3E%3Cpath d='M52 24v-2h25v2h1v16H51V24h1z' fill='%23000' /%3E%3Cpath fill='%2368B' d='M48 37h2v2h-2zM47 6h1v2h-1z' /%3E%3Cpath d='M71 28v-2h2v2h-1v2h-1v2h-1v2h-1v2h-1v2h-2v-2h1v-2h1v-2h1v-2h1v-2h1zm-3 0v-2h2v2h-1v2h-1v2h-1v2h-1v2h-1v2h-2v-2h-1v-2h-1v-2h2v2h2v-2h1v-2h1v-2h1zm-8 8h-1v-2h-1v-2h2v2h1v2h1v2h-2v-2z' fill='%23FFF' /%3E%3Cpath d='M85 46H44v-2h41V2h1v44h-1z' fill='%23FFF' /%3E%3Cpath d='M44 2v44h-1V0h43v2H44z' fill='%23000' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
				drawer: 'url(/images/drawer.svg)',
				drive: 'url(/images/drive.svg)',
				file: 'url(/images/file.svg)',
				zoom: 'url(/images/zoom.svg)'
			},
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
