import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { Window } from 'happy-dom'
import { beforeAll, describe, expect, it } from 'vitest'

import GuruMeditation from './GuruMeditation.astro'

describe('GuruMeditation', () => {
  let document: Window['document']

  beforeAll(async () => {
    const container = await AstroContainer.create()
    document = new Window().document
    document.body.innerHTML = await container.renderToString(GuruMeditation)
  })

  it('lazy-loads the guruMeditation Alpine component', () => {
    const article = document.querySelector('article')
    expect(article?.getAttribute('x-load')).toBe('idle')
    expect(article?.getAttribute('x-data')).toBe('guruMeditation')
  })

  it('renders an open alert labelled by its heading', () => {
    const dialog = document.querySelector('dialog')
    expect(dialog?.hasAttribute('open')).toBe(true)
    expect(dialog?.getAttribute('aria-labelledby')).toBe('alertLabel')

    const heading = document.getElementById('alertLabel')
    expect(heading?.getAttribute('role')).toBe('heading')
    expect(heading?.getAttribute('aria-level')).toBe('2')
    expect(heading?.textContent?.trim()).toBe('Software Failure.')
  })

  it('shows the Guru Meditation number', () => {
    expect(document.querySelector('dialog')?.textContent).toContain(
      'Guru Meditation #00004040.00004040',
    )
  })

  it('links back to the home page', () => {
    const link = document.querySelector('dialog a')
    expect(link?.getAttribute('href')).toBe('/')
    expect(link?.textContent?.trim()).toBe('Press left mouse button to continue')
  })

  it('includes the toasty audio', () => {
    const audio = document.querySelector('audio')
    expect(audio?.getAttribute('x-ref')).toBe('toastyAudio')
    expect(audio?.getAttribute('preload')).toBe('none')
    expect(audio?.querySelector('source')?.getAttribute('src')).toBe('/audio/toasty.mp3')
  })

  it('hides the toasty image until triggered', () => {
    const wrapper = document.querySelector('[x-show="toasty"]')
    expect(wrapper?.hasAttribute('x-cloak')).toBe(true)

    const img = wrapper?.querySelector('img')
    expect(img?.getAttribute('alt')).toBe('')
    expect(img?.getAttribute('loading')).toBe('lazy')
  })
})
