import { reference, z } from 'astro:content'

export const aboutSchema = z.object({
  name: z.string(),
  url: z.string(),
  draft: z.boolean().optional(),
})

export const navSchema = z.object({
  id: z.string(),
  name: z.string(),
  // items: z.array(reference('page')),
  items: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
      icon: z.string(),
    }),
  ),
})

export const pageSchema = ({ image }: { image: any }) =>
  z.object({
    name: z.string(),
    description: z.string().optional(),
    icon: z.string().optional(),
    draft: z.boolean().optional(),
    image: z
      .object({
        src: image({}).optional(),
        alt: z.string().optional(),
      })
      .optional(),
  })

export const workSchema = ({ image }: { image: any }) =>
  z.object({
    name: z.string(),
    description: z.string().optional(),
    url: z.string().optional(),
    image: image({}).optional(),
    tags: z.array(reference('tag')).optional(),
    draft: z.boolean().optional(),
  })

export const tagSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  url: z.string().optional(),
})

// export type WorkFrontmatter = z.infer<typeof workSchema>
