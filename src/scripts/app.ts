import focus from '@alpinejs/focus'

import toasty from './data/toasty'

export default (Alpine: any) => {
  Alpine.plugin(focus)
  Alpine.data('toasty', toasty)
}
