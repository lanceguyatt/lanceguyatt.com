import { defineCollection } from 'astro:content'

import { aboutSchema, pageSchema, tagSchema, workSchema } from '../schema'

const about = defineCollection({ type: 'data', schema: aboutSchema })
const page = defineCollection({ type: 'content', schema: pageSchema })
const tag = defineCollection({ type: 'data', schema: tagSchema })
const work = defineCollection({ type: 'content', schema: workSchema })

export const collections = {
  about,
  page,
  work,
  tag
}
