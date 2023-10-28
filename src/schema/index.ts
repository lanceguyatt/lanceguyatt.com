import { z, reference } from 'astro:content'

export const navSchema = z.object({
  name: z.string(),
  items: z.array(reference('page')),
})

export const aboutSchema = z.object({
  name: z.string(),
  url: z.string(),
  draft: z.boolean().optional()
})

export const pageSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  icon: z.string().optional(),
  draft: z.boolean().optional()
})

export const workSchema = ({ image }: { image: any }) =>
  z.object({
    name: z.string(),
    description: z.string().optional(),
    url: z.string().optional(),
    image: image({}).optional(),
    tags: z.array(reference('tag')).optional(),
    draft: z.boolean().optional()
  })

export const tagSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  url: z.string().optional()
})

// export type WorkFrontmatter = z.infer<typeof workSchema>
