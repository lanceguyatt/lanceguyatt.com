/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config'

// Uses Astro's Vite config so .astro files, astro:* modules and the @/ alias resolve in tests.
export default getViteConfig({
  test: { include: ['src/**/*.test.ts'] },
})
