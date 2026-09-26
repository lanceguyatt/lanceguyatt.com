// import focus from '@alpinejs/focus'
// import persist from '@alpinejs/persist'
// import ui from '@alpinejs/ui'
import type { Alpine as AlpineType } from 'alpinejs'
import AsyncAlpine from 'async-alpine'

// ============================================
// Plugin Setup
// ============================================
const setupPlugins = (Alpine: AlpineType) => {
  // ;[focus, ui, persist].forEach((plugin) => Alpine.plugin(plugin))
  Alpine.plugin(AsyncAlpine)
}

const registerAsyncData = (Alpine: AlpineType) => {
  const asyncMap = {
    guruMeditation: () => import('@/features/guruMeditation/scripts/guruMeditation'),
  }
  Object.entries(asyncMap).forEach(([name, importFn]) => {
    Alpine.asyncData(name, importFn)
  })
}

export default (Alpine: AlpineType) => {
  setupPlugins(Alpine)
  document.addEventListener('alpine:init', () => {
    // registerStores(Alpine)
    // registerMagic(Alpine)
    registerAsyncData(Alpine)
    // registerDataComponents(Alpine)
  })
}
