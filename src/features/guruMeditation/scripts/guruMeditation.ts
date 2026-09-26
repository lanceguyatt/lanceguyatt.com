interface KonamiComponent {
  toasty: boolean
  toastyAudio: HTMLAudioElement | null
  _konamiHandler?: (e: KeyboardEvent) => void
  konami(): void
  init(): void
  destroy(): void
  $refs: { toastyAudio: HTMLAudioElement }
  $el: HTMLElement
}

export default function (): KonamiComponent {
  return {
    toasty: false,
    toastyAudio: null,
    $refs: {} as { toastyAudio: HTMLAudioElement },
    $el: undefined as unknown as HTMLElement,

    konami() {
      const konamiCodeKeys = [
        'ArrowUp', 'ArrowUp',
        'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight',
        'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA',
      ]
      let konamiCodeArray: string[] = []
      this.toastyAudio = this.$refs.toastyAudio

      this._konamiHandler = (e: KeyboardEvent) => {
        konamiCodeArray.push(e.code)
        konamiCodeArray = konamiCodeArray.slice(-konamiCodeKeys.length)

        if (konamiCodeArray.join(',') === konamiCodeKeys.join(',')) {
          this.toastyAudio?.load()
          this.toastyAudio?.play().catch(() => {})
          konamiCodeArray = []
          this.toasty = true
        }
      }

      document.addEventListener('keydown', this._konamiHandler)
    },

    init() {
      this.konami()
      this.$el.addEventListener('alpine:destroy', () => this.destroy())
    },

    destroy() {
      if (this._konamiHandler) {
        document.removeEventListener('keydown', this._konamiHandler)
      }
    },
  }
}
