import { defineCollection } from 'astro:content'

import {
  aboutSchema,
  navSchema,
  pageSchema,
  tagSchema,
  workSchema
} from '@/schema'

const about = defineCollection({ type: 'data', schema: aboutSchema })
const nav = defineCollection({ type: 'data', schema: navSchema })
const page = defineCollection({ type: 'content', schema: pageSchema })
const tag = defineCollection({ type: 'data', schema: tagSchema })
const work = defineCollection({ type: 'content', schema: workSchema })

export const collections = {
  about,
  nav,
  page,
  work,
  tag
}
