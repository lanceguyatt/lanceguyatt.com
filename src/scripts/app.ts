import focus from '@alpinejs/focus'
import persist from '@alpinejs/persist'
import ui from '@alpinejs/ui'
import type { Alpine } from 'alpinejs'

export default (Alpine: Alpine) => {
  Alpine.plugin(focus)
  Alpine.plugin(ui)
  Alpine.plugin(persist)
}
