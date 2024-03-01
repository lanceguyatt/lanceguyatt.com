import type { CollectionEntry } from 'astro:content'

import { slugifyAll } from './slugify'

const getWorkByTag = (posts: CollectionEntry<'work'>[], tag: string) =>
  posts.filter(post => slugifyAll(post.data.tags).includes(tag))

export default getWorkByTag
