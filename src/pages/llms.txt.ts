import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

import { SITE } from '@/config'

// Pages that aren't useful to a language model
const EXCLUDED_PAGES = new Set(['404', 'foo'])

const line = (name: string, url: string, description?: string) =>
  `- [${name}](${url})${description ? `: ${description}` : ''}`

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.href ?? SITE.url ?? '').replace(/\/$/, '')

  const pages = (
    await getCollection('pages', ({ id, data }) => !data.draft && !EXCLUDED_PAGES.has(id))
  ).map(({ id, data }) => line(data.title, `${base}/${id}`, data.description))

  const work = (await getCollection('work', ({ data }) => !data.draft)).map(({ id, data }) =>
    line(data.name, `${base}/work/${id}`, data.description),
  )

  const body = [
    `# ${SITE.title}`,
    '',
    `> ${SITE.description}`,
    '',
    'Personal site of Lance Guyatt, a web developer, styled after the Amiga Workbench.',
    '',
    '## Pages',
    '',
    ...pages,
    '',
    '## Work',
    '',
    ...work,
    '',
  ].join('\n')

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
