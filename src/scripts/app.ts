import type Alpine from 'alpinejs'
import AsyncAlpine from 'async-alpine'

type AlpineType = typeof Alpine

// ============================================
// Plugin Setup
// ============================================
const setupPlugins = (alpine: AlpineType) => {
  // ;[focus, ui, persist].forEach((plugin) => alpine.plugin(plugin))
  alpine.plugin(AsyncAlpine)
}

// ============================================
// Async Components
// ============================================
const registerAsyncData = (alpine: AlpineType) => {
  const asyncMap = {
    guruMeditation: () => import('@/features/guruMeditation/scripts/guruMeditation'),
  }

  for (const [name, importFn] of Object.entries(asyncMap)) {
    alpine.asyncData(name, importFn)
  }
}

export default (alpine: AlpineType) => {
  setupPlugins(alpine)
  registerAsyncData(alpine)
}
