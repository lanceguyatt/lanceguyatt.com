/**
 * Alpine data for the Theme gadget. BaseHead sets `.dark` on <html> before paint
 * (stored choice, else system); this flips it and stores the choice in `localStorage.theme`.
 */
export default () => {
  const root = document.documentElement
  let observer: MutationObserver | undefined

  return {
    dark: false,

    init() {
      this.dark = root.classList.contains('dark')
      // Stay in sync when BaseHead's script reacts to a system preference change
      observer = new MutationObserver(() => {
        this.dark = root.classList.contains('dark')
      })
      observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    },

    destroy() {
      observer?.disconnect()
    },

    toggle() {
      this.dark = !this.dark
      root.classList.toggle('dark', this.dark)
      localStorage.setItem('theme', this.dark ? 'dark' : 'light')
    },
  }
}
