import type { SocialObjects } from './types'

const BASE_URL = import.meta.env.PUBLIC_BASE_URL

const name = 'Lance Guyatt, Web Developer.'

export interface ISITE {
  title?: string
  name?: string
  description?: string
  id?: string
  url?: string
  image: object
  logo: string
  themeColor: string
  backgroundColor: string
  locale: string
  lang: string
  copyrightYear: number
  twitter?: string
}

export const SITE: ISITE = {
  title: name,
  name,
  description: 'Lance Guyatt, description',
  id: `${BASE_URL}#lanceguyatt`,
  url: BASE_URL,
  image: {
    url: `${BASE_URL}images/share.png`,
    width: 1200,
    height: 628,
    alt: 'Lance Guyatt, Web Developer'
  },
  logo: `${BASE_URL}/logo.svg`,
  themeColor: '#a0a0a0',
  backgroundColor: '#000000',
  locale: 'en-GB',
  lang: 'en',
  copyrightYear: 2023,
  twitter: '@lanceguyatt'
}

export const SOCIALS: SocialObjects = [
  {
    name: 'Github',
    href: 'https://github.com/satnaing/astro-paper',
    linkTitle: ` ${SITE.title} on Github`,
    active: true
  },
  {
    name: 'LinkedIn',
    href: 'https://github.com/satnaing/astro-paper',
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true
  }
]

export const LANCE_GUYATT = {
  givenName: 'Lance',
  familyName: 'Guyatt',
  description: name,
  url: BASE_URL,
  jobTitle: 'Web Developer',
  sameAs: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lanceguyatt' },
    { name: 'Github', url: 'https://github.com/lanceguyatt' }
  ]
}

export type Lance = Mapped<typeof LANCE_GUYATT>
export type Site = Mapped<typeof SITE>

type Mapped<T> = {
  [P in keyof T]?: any
}
