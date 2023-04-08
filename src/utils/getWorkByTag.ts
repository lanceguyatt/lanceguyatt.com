import { slugifyAll } from './slugify'
import type { CollectionEntry } from 'astro:content'

const getWorkByTag = (posts: CollectionEntry<'work'>[], tag: string) =>
  posts.filter(post => slugifyAll(post.data.tags).includes(tag))

export default getWorkByTag
