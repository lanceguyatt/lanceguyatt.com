import { slug as slugger } from 'github-slugger'

import { type WorkFrontmatter } from '$schema/index'

export const slugifyStr = (str: string) => slugger(str)

const slugify = (work: WorkFrontmatter) =>
  work.slug ? slugger(work.slug) : slugger(work.name)

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str))

export default slugify
