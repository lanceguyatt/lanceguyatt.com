import { sequence } from 'astro/middleware'
import { defineMiddleware } from 'astro/middleware'
import { SITE } from 'astro:env/client'

export const siteMiddleware = defineMiddleware(async (context, next) => {
  const lang = context.params.lang || 'global'
  context.locals.lang = lang

  const siteUrl = SITE
  context.locals.siteUrl = siteUrl

  return await next()
})

export const onRequest = sequence(siteMiddleware)
