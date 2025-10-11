import focus from '@alpinejs/focus'
import ui from '@alpinejs/ui'
import type { Alpine } from 'alpinejs'

import toasty from './data/toasty'

export default (Alpine: Alpine) => {
  Alpine.plugin(focus)
  Alpine.plugin(ui)
  Alpine.data('toasty', toasty)
}
