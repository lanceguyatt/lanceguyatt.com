// @vitest-environment happy-dom
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import theme from './theme'

const root = document.documentElement
const flush = () => new Promise((resolve) => setTimeout(resolve))

describe('theme', () => {
  let component: ReturnType<typeof theme>

  beforeEach(() => {
    localStorage.clear()
    root.classList.remove('dark')
  })

  afterEach(() => component.destroy())

  it('reads the current mode from <html>', () => {
    root.classList.add('dark')
    component = theme()
    component.init()
    expect(component.dark).toBe(true)
  })

  it('toggles the class on <html> and stores the choice', () => {
    component = theme()
    component.init()

    component.toggle()
    expect(root.classList.contains('dark')).toBe(true)
    expect(localStorage.getItem('theme')).toBe('dark')
    expect(component.dark).toBe(true)

    component.toggle()
    expect(root.classList.contains('dark')).toBe(false)
    expect(localStorage.getItem('theme')).toBe('light')
    expect(component.dark).toBe(false)
  })

  it('follows changes made elsewhere, such as the system preference', async () => {
    component = theme()
    component.init()
    root.classList.add('dark')
    await flush()
    expect(component.dark).toBe(true)
  })
})
