import {
  aboutSchema,
  navSchema,
  pageSchema,
  tagSchema,
  workSchema,
} from '@/schema'
import { file, glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const about = defineCollection({
  loader: file('./src/content/about.yaml'),
  schema: aboutSchema,
})

const nav = defineCollection({
  loader: file('./src/content/nav.yaml'),
  schema: navSchema,
})

const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/pages' }),
  schema: pageSchema,
})

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: workSchema,
})

const tags = defineCollection({
  loader: file('./src/content/tags.yaml'),
  schema: tagSchema,
})

export const collections = {
  about,
  nav,
  pages,
  tags,
  work,
}
