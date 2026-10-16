// @vitest-environment happy-dom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import guruMeditation from './guruMeditation'

const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
]

const press = (...codes: string[]) =>
  codes.forEach((code) => document.dispatchEvent(new KeyboardEvent('keydown', { code })))

describe('guruMeditation', () => {
  let component: ReturnType<typeof guruMeditation>
  let audio: { load: ReturnType<typeof vi.fn>; play: ReturnType<typeof vi.fn> }

  beforeEach(() => {
    audio = { load: vi.fn(), play: vi.fn().mockResolvedValue(undefined) }
    component = guruMeditation()
    component.$refs = { toastyAudio: audio as unknown as HTMLAudioElement }
    component.$el = document.createElement('div')
    component.init()
  })

  afterEach(() => component.destroy())

  it('shows toasty and plays the audio on the Konami code', () => {
    press(...KONAMI)
    expect(component.toasty).toBe(true)
    expect(audio.load).toHaveBeenCalledOnce()
    expect(audio.play).toHaveBeenCalledOnce()
  })

  it('ignores an incomplete sequence', () => {
    press(...KONAMI.slice(0, -1))
    expect(component.toasty).toBe(false)
    expect(audio.play).not.toHaveBeenCalled()
  })

  it('ignores a wrong sequence', () => {
    press(...KONAMI.slice(0, -1), 'KeyB')
    expect(component.toasty).toBe(false)
  })

  it('matches after unrelated keys', () => {
    press('KeyX', 'Enter', 'ArrowUp', ...KONAMI)
    expect(component.toasty).toBe(true)
  })

  it('handles the audio failing to play', async () => {
    audio.play.mockRejectedValue(new Error('NotAllowedError'))
    press(...KONAMI)
    await Promise.resolve()
    expect(component.toasty).toBe(true)
  })

  it('stops listening once destroyed', () => {
    component.destroy()
    press(...KONAMI)
    expect(component.toasty).toBe(false)
  })

  it('stops listening on alpine:destroy', () => {
    component.$el.dispatchEvent(new Event('alpine:destroy'))
    press(...KONAMI)
    expect(component.toasty).toBe(false)
  })
})
