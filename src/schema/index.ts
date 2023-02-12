import { z } from 'astro:content'

export const aboutSchema = z.object({
  name: z.string(),
  url: z.string(),
  draft: z.boolean().optional(),
})

export const pageSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  draft: z.boolean().optional(),
})

export const workSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  url: z.string().optional(),
  image: z.object({
    url: z.string().optional(),
    width: z.number().optional(),
    height: z.number().optional(),
    alt: z.string().optional(),
  }).optional(),
  tags: z.array(z.string()),
  draft: z.boolean().optional(),
})