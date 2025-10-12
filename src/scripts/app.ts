import focus from '@alpinejs/focus'
import ui from '@alpinejs/ui'
import persist from '@alpinejs/persist'
import type { Alpine } from 'alpinejs'

export default (Alpine: Alpine) => {
  Alpine.plugin(focus)
  Alpine.plugin(ui)
  Alpine.plugin(persist)
}
