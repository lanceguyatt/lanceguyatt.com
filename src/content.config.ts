import {
  // aboutSchema,
  // navSchema,
  // pageSchema,
  // tagSchema,
  // workSchema,
} from '@/schema'
import { file } from 'astro/loaders'
import { defineCollection } from 'astro:content'

// import { parse as parseToml } from 'toml'

// const about = defineCollection({
//   loader: file('./src/data/about'),
//   schema: aboutSchema,
// })

const nav = defineCollection({
  loader: file('src/data/nav.json', { parser: (text) => JSON.parse(text).nav }),
  // schema: navSchema,
})

// const page = defineCollection({
//   loader: glob({ pattern: '**/*.mdx', base: './src/data/page' }),
//   schema: pageSchema,
// })

// const tags = defineCollection({
//   // loader: glob({ pattern: ['**/*.yml'], base: './src/data/tags' }),
//   loader: file('src/data/tags.toml', {
//     parser: (text) => parseToml(text).tags,
//   }),
//   schema: z.object({
//     id: z.string(),
//     name: z.string(),
//     description: z.string().optional(),
//     url: z.string(),
//   }),
// })

// const work = defineCollection({
//   loader: glob({ pattern: '**/*.mdx', base: './src/data/work' }),
//   schema: workSchema,
// })

export const collections = {
  // about,
  nav,
  // page,
  // work,
  // tags
}
