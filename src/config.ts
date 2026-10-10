import type { SocialObjects } from './types'

// Absolute site origin from `site` in astro.config.mjs, without a trailing slash
const BASE_URL = import.meta.env.SITE.replace(/\/$/, '')

const name = 'Lance Guyatt, Web Developer.'

export type SiteProps = {
  title?: string
  name?: string
  description?: string
  id?: string
  url?: string
  image?: {
    url?: string
    width?: number
    height?: number
    alt?: string
  }
  logo?: string
  themeColor?: string
  backgroundColor?: string
  locale?: string
  lang?: string
  copyrightYear?: number
  twitter?: string
}

export const SITE: SiteProps = {
  title: name,
  name,
  description: 'Lance Guyatt, Web Developer.',
  id: `${BASE_URL}/#lanceguyatt`,
  url: BASE_URL,
  image: {
    // Site-relative; BaseHead resolves it against the site URL
    url: '/android-chrome-512x512.png',
    width: 512,
    height: 512,
    alt: 'Lance Guyatt, Web Developer',
  },
  logo: `${BASE_URL}/logo.svg`,
  themeColor: '#a0a0a0',
  backgroundColor: '#000000',
  locale: 'en-GB',
  lang: 'en',
  copyrightYear: 2026,
}

export const SOCIALS: SocialObjects = [
  {
    name: 'Github',
    href: 'https://github.com/lanceguyatt',
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/lanceguyatt',
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
]

export const LANCE_GUYATT = {
  givenName: 'Lance',
  familyName: 'Guyatt',
  description: name,
  url: BASE_URL,
  jobTitle: 'Web Developer',
  sameAs: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lanceguyatt' },
    { name: 'Github', url: 'https://github.com/lanceguyatt' },
  ],
}
