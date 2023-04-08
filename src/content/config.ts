import { defineCollection } from 'astro:content'

import { aboutSchema, pageSchema, workSchema } from '../schema'

const aboutCollection = defineCollection({ schema: aboutSchema })
const pageCollection = defineCollection({ schema: pageSchema })
const workCollection = defineCollection({ schema: workSchema })

export const collections = {
  about: aboutCollection,
  page: pageCollection,
  work: workCollection,
}
