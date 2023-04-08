import { slugifyStr } from './slugify'
import type { CollectionEntry } from 'astro:content'

const getUniqueTags = (work: CollectionEntry<'work'>[]) => {
  let tags: string[] = []
  const filteredwork = work.filter(({ data }) => !data.draft)
  filteredwork.forEach(project => {
    tags = [...tags, ...project.data.tags]
      .map(tag => slugifyStr(tag))
      .filter(
        (value: string, index: number, self: string[]) =>
          self.indexOf(value) === index
      )
  })
  return tags
}

export default getUniqueTags
